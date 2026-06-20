import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, Tag, Check, Sparkles, CreditCard, Lock } from 'lucide-react';
import { CartItem, Product } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface BidetCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, color: string, delta: number) => void;
  onRemoveItem: (productId: string, color: string) => void;
  onClearCart: () => void;
}

export default function BidetCartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: BidetCartDrawerProps) {
  const [couponCode, setCouponCode] = useState('');
  const [activeDiscount, setActiveDiscount] = useState<{ code: string; rate: number; comment: string } | null>(null);
  const [couponError, setCouponError] = useState('');

  // Checkout states
  const [checkoutMode, setCheckoutMode] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [fullName, setFullName] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [mockCard, setMockCard] = useState('');
  const [isPaying, setIsPaying] = useState(false);

  const applyCoupon = () => {
    setCouponError('');
    const code = couponCode.trim().toUpperCase();

    if (code === 'FRESHBUTT') {
      setActiveDiscount({
        code: 'FRESHBUTT',
        rate: 0.15,
        comment: 'Wondrous selection. Your buns are doing a gentle victory dance.'
      });
    } else if (code === 'TREEHUGGER') {
      setActiveDiscount({
        code: 'TREEHUGGER',
        rate: 0.10,
        comment: 'Forests across the continent applaud your ecological wisdom.'
      });
    } else if (code === 'SPLAT') {
      setActiveDiscount({
        code: 'SPLAT',
        rate: 0.05,
        comment: 'A little messy, but we appreciate the splash. 5% discount loaded.'
      });
    } else {
      setCouponError('Invalid voucher. Try "FRESHBUTT" or "TREEHUGGER" for official savings!');
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  };

  const subtotal = calculateSubtotal();
  const discountAmount = activeDiscount ? subtotal * activeDiscount.rate : 0;
  const shippingCost = subtotal > 90 || subtotal === 0 ? 0 : 9.99;
  const finalTotal = subtotal - discountAmount + shippingCost;

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !shippingAddress) return;
    setIsPaying(true);

    setTimeout(() => {
      setIsPaying(false);
      setCheckoutSuccess(true);
    }, 1800);
  };

  const handleResetCheckout = () => {
    setCheckoutMode(false);
    setCheckoutSuccess(false);
    onClearCart();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Dark Glass Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-ink/75 backdrop-blur-xs"
          />

          {/* Drawer Panel */}
          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-screen max-w-md bg-cream text-ink shadow-2xl flex flex-col h-full border-l border-sand"
            >
              
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-sand flex items-center justify-between bg-sand/20">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-bidet-teal" />
                  <h3 className="font-display font-bold text-lg text-ink">My Wash Basket</h3>
                  <span className="text-xs bg-bidet-blue text-cream px-2.5 py-0.5 rounded-full font-bold">
                    {cartItems.reduce((count, item) => count + item.quantity, 0)} items
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 hover:bg-sand/40 rounded-full transition text-ink-light cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Dynamic Content Grid */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                
                {checkoutSuccess ? (
                  /* Checkout Success state card */
                  <div className="text-center py-12 flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/[0.08] text-emerald-600 flex items-center justify-center mb-6 border border-emerald-500/20">
                      <Check className="w-8 h-8 stroke-[3]" />
                    </div>
                    <span className="text-xs font-bold text-bidet-teal uppercase tracking-widest leading-none mb-1">
                      ORDER SECURED
                    </span>
                    <h4 className="font-display font-bold text-2xl text-ink leading-tight mb-3">
                      Your buns are saved!
                    </h4>
                    <p className="font-sans text-sm text-ink-light leading-relaxed max-w-[310px] mb-8">
                      Thank you, <strong className="text-ink">{fullName}</strong>. We received your order mock and are packaging your premium LURA upgrade. Expected arrival: 2-3 business days.
                    </p>

                    <div className="p-5 bg-[#FAF2E8] border border-[#ECD9C5] rounded-2xl w-full text-left font-sans text-xs text-[#5C4533] leading-relaxed mb-8">
                      🚽 <strong>"No more paper towel friction."</strong> Wash happily. A verified confirmation and setup checklist have been dispatched to your imaginary email box.
                    </div>

                    <button
                      onClick={handleResetCheckout}
                      className="w-full py-4 bg-bidet-teal hover:bg-bidet-teal/95 text-cream rounded-full font-bold text-xs uppercase tracking-wider cursor-pointer shadow transition"
                    >
                      Return to Storefront
                    </button>
                  </div>

                ) : checkoutMode ? (
                  /* Checkout Shipping and Card form */
                  <form onSubmit={handlePaymentSubmit} className="space-y-6 text-left">
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold text-bidet-blue uppercase tracking-widest leading-none block">
                        SECURE ROUTE CHECKOUT
                      </span>
                      <h4 className="font-display font-semibold text-lg text-ink">
                        Delivery Logistics
                      </h4>
                    </div>

                    <div className="space-y-4">
                      {/* Full Name input */}
                      <div className="flex flex-col text-left">
                        <label className="text-xs font-semibold text-ink-light mb-1.5 uppercase tracking-wider">Full Name</label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Eleanor Vance"
                          className="py-3 px-4 bg-cream border border-sand rounded-xl text-sm font-sans focus:outline-none focus:border-bidet-teal transition"
                        />
                      </div>

                      {/* Shipping address input */}
                      <div className="flex flex-col text-left">
                        <label className="text-xs font-semibold text-ink-light mb-1.5 uppercase tracking-wider">Shipping Address</label>
                        <input
                          type="text"
                          required
                          value={shippingAddress}
                          onChange={(e) => setShippingAddress(e.target.value)}
                          placeholder="128 Spa Garden Way, Unit 3B, Montreal QC"
                          className="py-3 px-4 bg-cream border border-sand rounded-xl text-sm font-sans focus:outline-none focus:border-bidet-teal transition"
                        />
                      </div>

                      {/* Card block input mock */}
                      <div className="flex flex-col text-left relative">
                        <label className="text-xs font-semibold text-ink-light mb-1.5 uppercase tracking-wider">Credit Card Number</label>
                        <div className="relative">
                          <input
                            type="text"
                            required
                            maxLength={19}
                            value={mockCard}
                            onChange={(e) => setMockCard(e.target.value.replace(/[^\d]/g, '').replace(/(.{4})/g, '$1 ').trim())}
                            placeholder="4111 8800 2233 4400"
                            className="py-3 pl-11 pr-4 bg-cream border border-sand rounded-xl text-sm font-sans w-full focus:outline-none focus:border-bidet-teal transition"
                          />
                          <CreditCard className="w-4 h-4 text-ink-light absolute left-4 top-3.5" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-sand/35 p-4 rounded-xl border border-sand/65 space-y-2">
                      <div className="flex justify-between text-xs text-ink-light">
                        <span>Checkout Subtotal</span>
                        <span className="font-bold">${subtotal}</span>
                      </div>
                      {discountAmount > 0 && (
                        <div className="flex justify-between text-xs text-bidet-teal font-semibold">
                          <span>Voucher Saved</span>
                          <span>-${discountAmount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-xs text-ink-light">
                        <span>Shipping logistics</span>
                        <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost}`}</span>
                      </div>
                      <div className="flex justify-between text-sm text-ink font-bold border-t border-sand/40 pt-2">
                        <span>Total Due</span>
                        <span>${finalTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <button
                        type="submit"
                        disabled={isPaying}
                        className="w-full flex items-center justify-center gap-2.5 py-4 bg-bidet-teal hover:bg-bidet-teal/95 disabled:bg-sand text-cream rounded-full font-bold text-xs uppercase tracking-wider cursor-pointer shadow transition"
                      >
                        <Lock className="w-4 h-4" />
                        {isPaying ? 'Processing wash...' : `Authorize Mock Payment • $${finalTotal.toFixed(2)}`}
                      </button>
                      
                      <button
                        type="button"
                        onClick={() => setCheckoutMode(false)}
                        className="w-full py-3.5 border border-sand text-ink-light rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-sand/20 cursor-pointer transition"
                      >
                        Back to Basket
                      </button>
                    </div>
                  </form>

                ) : cartItems.length === 0 ? (
                  /* Empty state cart */
                  <div className="text-center py-16 flex flex-col items-center justify-center min-h-[300px]">
                    <div className="p-4 bg-sand/30 rounded-full text-sand mb-4">
                      <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-ink">Your basket is dry.</h4>
                    <p className="font-sans text-xs sm:text-sm text-ink-light mt-1.5 max-w-[240px] leading-relaxed">
                      Your toilet seat is missing its premium wellness upgrade. Choose a model below!
                    </p>
                    <button
                      onClick={onClose}
                      className="mt-6 px-6 py-3 bg-bidet-teal hover:bg-bidet-teal/95 text-cream text-xs font-bold uppercase tracking-wider rounded-xl transition"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  /* Standard items list and discount coupon block */
                  <div className="space-y-6">
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div 
                          key={`${item.product.id}-${item.selectedColor}`}
                          className="flex items-start gap-4 p-4 border border-sand/45 rounded-2xl bg-cream hover:border-sand hover:bg-sand/15 transition-all"
                        >
                          <img 
                            src={item.product.image} 
                            alt={item.product.name}
                            className="w-16 h-16 rounded-xl object-cover shrink-0 bg-sand/30"
                            referrerPolicy="no-referrer"
                          />
                          
                          <div className="flex-1 text-left">
                            <h4 className="font-display font-bold text-sm text-ink">
                              {item.product.name}
                            </h4>
                            <p className="text-[10px] text-bidet-blue uppercase tracking-widest font-semibold mt-0.5">
                              {item.selectedColor || 'Default Color'}
                            </p>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2 mt-3">
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.selectedColor || '', -1)}
                                className="w-6 h-6 rounded bg-sand hover:bg-clay/40 transition flex items-center justify-center text-ink-light text-xs font-bold cursor-pointer"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-bold font-sans text-ink w-5 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.product.id, item.selectedColor || '', 1)}
                                className="w-6 h-6 rounded bg-sand hover:bg-clay/40 transition flex items-center justify-center text-ink-light text-xs font-bold cursor-pointer"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="text-right flex flex-col justify-between items-end h-16 shrink-0">
                            <span className="font-display font-bold text-sm text-bidet-teal">
                              ${item.product.price * item.quantity}
                            </span>
                            
                            <button
                              onClick={() => onRemoveItem(item.product.id, item.selectedColor || '')}
                              className="p-1 hover:text-rose-500 text-ink-light transition"
                              title="Delete item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Promo Coupon Card */}
                    <div className="border-t border-b border-sand/65 py-5 space-y-3 text-left">
                      <div className="flex items-center gap-2 font-display text-xs font-bold text-ink uppercase tracking-wider">
                        <Tag className="w-4 h-4 text-bidet-teal" />
                        Apply Promo Voucher
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="e.g. FRESHBUTT"
                          className="flex-1 py-2.5 px-3 bg-cream border border-sand rounded-xl text-xs font-sans text-ink uppercase focus:outline-none focus:border-bidet-teal transition"
                        />
                        <button
                          onClick={applyCoupon}
                          className="py-2.5 px-4 bg-sand text-ink hover:bg-bidet-teal hover:text-cream text-xs font-bold uppercase tracking-wider rounded-xl transition cursor-pointer"
                        >
                          Apply
                        </button>
                      </div>

                      {activeDiscount && (
                        <div className="rounded-xl bg-bidet-teal/[0.04] p-3 border border-bidet-teal/20 text-xs">
                          <p className="font-sans text-bidet-teal font-bold flex items-center gap-1.5 uppercase tracking-wide">
                            <Check className="w-3.5 h-3.5" />
                            Voucher Applied: {activeDiscount.code} (-{activeDiscount.rate * 100}%)
                          </p>
                          <p className="text-ink-light leading-relaxed mt-1 italic">
                            "{activeDiscount.comment}"
                          </p>
                        </div>
                      )}

                      {couponError && (
                        <p className="text-xs text-rose-600 font-medium pl-1 font-sans">
                          {couponError}
                        </p>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Drawer Bottom Totals Column */}
              {!checkoutSuccess && cartItems.length > 0 && (
                <div className="border-t border-sand p-6 bg-sand/15">
                  <div className="space-y-3 text-left font-sans mb-6">
                    <div className="flex justify-between text-xs sm:text-sm text-ink-light">
                      <span>Item Subtotal</span>
                      <span className="font-bold text-ink">${subtotal}</span>
                    </div>

                    {activeDiscount && (
                      <div className="flex justify-between text-xs sm:text-sm text-bidet-teal font-semibold">
                        <span>Voucher Discount (-{activeDiscount.rate * 100}%)</span>
                        <span>-${discountAmount.toFixed(2)}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-xs sm:text-sm text-ink-light">
                      <span>Shipping (FREE over $90)</span>
                      <span>{shippingCost === 0 ? 'FREE' : `$${shippingCost}`}</span>
                    </div>

                    <div className="flex justify-between text-base text-ink font-bold border-t border-sand/40 pt-3">
                      <span>Total Due</span>
                      <span className="text-bidet-teal text-lg sm:text-xl font-display font-extrabold">${finalTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  {!checkoutMode ? (
                    <button
                      onClick={() => setCheckoutMode(true)}
                      className="w-full flex items-center justify-center gap-2.5 py-4 bg-bidet-teal hover:bg-bidet-teal/95 text-cream rounded-full font-bold text-xs uppercase tracking-wider cursor-pointer shadow transition"
                    >
                      <Lock className="w-4 h-4" />
                      Proceed to Secure Checkout
                    </button>
                  ) : null}

                  <p className="text-center text-[10px] text-ink-light mt-3 leading-none flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-bidet-teal" />
                    Secure transactions. Fully HSA/FSA reimbursable.
                  </p>
                </div>
              )}

            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
