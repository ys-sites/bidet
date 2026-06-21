import { useState, useEffect, useMemo } from "react";
import { 
  ShoppingBag, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  Info, 
  CreditCard, 
  Settings, 
  ChevronRight, 
  Truck, 
  Tag, 
  CheckCircle,
  HelpCircle,
  Award
} from "lucide-react";
import { type Product, type CartItem, type DiscountCode } from "../types";

// Premium LURA bidet products
const BIDET_PRODUCTS: Product[] = [
  {
    id: "lura-classic",
    name: "LURA Classic Bidet Attachment",
    price: 79,
    originalPrice: 99,
    description: "The slim, luxury ambient water bidet featuring our dynamic pressure-control dial and self-cleaning retracting dual nozzles.",
    features: [
      "Thin 0.2-inch profile fits 99% of toilets",
      "Tactile solid brass pressure valve",
      "Self-cleaning retracting splash guards",
      "Dual nozzle wash (Posterior & Feminine)"
    ],
    image: "/src/assets/images/lura_bidet_attachment_1782007146038.jpg",
    tag: "Most Popular",
    category: "attachment"
  },
  {
    id: "lura-aero",
    name: "LURA Aero Smart Heated Seat",
    price: 349,
    originalPrice: 429,
    description: "Our crowning achievement. Fully electronic smart seat with heated ceramic core, warm air dryer, stainless metal nozzle, and night light.",
    features: [
      "Ergonomically contoured heated seat",
      "Instant water heater for endless flow",
      "Precision warm air dryer with 5 speeds",
      "Adjustable position stainless steel nozzle",
      "Soft-glow ambient blue LED night light"
    ],
    image: "/src/assets/images/lura_bidet_attachment_1782007146038.jpg",
    tag: "Premium Smart Choice",
    category: "seat"
  },
  {
    id: "lura-wand",
    name: "LURA Wand Handheld Sprayer",
    price: 49,
    description: "Solid brass handheld wash wand designed for surgical accuracy, high-end weight balance, and variable thumb pressure trigger controls.",
    features: [
      "Engineered solid brass spray wand",
      "Precision touch thumb-trigger valve",
      "Flexible reinforced steel spiral hose",
      "Premium magnetic dock system included"
    ],
    image: "/src/assets/images/lura_bidet_attachment_1782007146038.jpg",
    tag: "Tactile Precision",
    category: "handheld"
  },
  {
    id: "lura-filter",
    name: "Purity 3-Stage Carbon Filter",
    price: 19,
    description: "High-density micro-filtration cartridge that removes chlorine, heavy metals, and hard water minerals for pristine skin wash quality.",
    features: [
      "Protects internal bidet solenoids",
      "Coconut shell active carbon filtration",
      "Easy 3-minute twist replacement",
      "6-month average filter lifespan"
    ],
    image: "/src/assets/images/lura_bidet_attachment_1782007146038.jpg",
    category: "accessory"
  }
];

export function BidetShop() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Customizer options state
  const [shape, setShape] = useState<'Round' | 'Elongated'>('Elongated');
  const [finish, setFinish] = useState<'Chrome' | 'Brushed Steel' | 'Matte Black' | 'Alpine White'>('Brushed Steel');
  const [waterType, setWaterType] = useState<'Ambient Only' | 'Dual Temp (Warm & Cold)'>('Ambient Only');
  
  // Coupon state
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<DiscountCode | null>(null);
  const [promoError, setPromoError] = useState("");

  // HSA checklist state
  const [showHSATooltip, setShowHSATooltip] = useState(false);

  // Checkout process simulation state
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment' | 'completed'>('cart');
  const [shippingForm, setShippingForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    useHSACard: false,
  });
  const [orderId, setOrderId] = useState("");

  // Storage recovery on Mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("lura_bidet_cart_v1");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.warn("Storage recovery skipped", e);
    }

    // Capture general clicks to shop-grid, pricing, and buy anchors
    const handleGlobalClicks = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorNode = target.closest("a");
      
      if (anchorNode) {
        const href = anchorNode.getAttribute("href");
        const text = anchorNode.innerText?.toLowerCase() || "";
        
        // Match specific triggers
        if (
          href?.includes("pricing") || 
          href?.includes("#pricing") || 
          href?.includes("#shop-grid") ||
          text.includes("shop now") || 
          text.includes("buy now") ||
          text.includes("add to cart") ||
          text.includes("get in touch") && window.location.pathname.includes("pricing")
        ) {
          e.preventDefault();
          
          // If text mentions smart or seat, default customize Aero
          if (text.includes("smart") || text.includes("aero")) {
            setSelectedProduct(BIDET_PRODUCTS[1]);
          } else if (text.includes("classic") || text.includes("attachment")) {
            setSelectedProduct(BIDET_PRODUCTS[0]);
          } else if (text.includes("wand") || text.includes("handheld")) {
            setSelectedProduct(BIDET_PRODUCTS[2]);
          } else {
            // General shop opens the Drawer or customizer
            setSelectedProduct(BIDET_PRODUCTS[0]);
          }
          setIsOpen(true);
        }
      }
    };

    const handleCustomOption = (e: any) => {
      if (e.detail) {
        setSelectedProduct(e.detail);
        // Reset option defaults
        setShape('Elongated');
        setFinish('Brushed Steel');
        setWaterType(e.detail.id === 'lura-classic' ? 'Dual Temp (Warm & Cold)' : 'Ambient Only');
        setIsOpen(true);
      }
    };

    window.addEventListener("lura:open-customize" as any, handleCustomOption);
    document.addEventListener("click", handleGlobalClicks);
    return () => {
      window.removeEventListener("lura:open-customize" as any, handleCustomOption);
      document.removeEventListener("click", handleGlobalClicks);
    };
  }, []);

  // Sync state to storage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    try {
      localStorage.setItem("lura_bidet_cart_v1", JSON.stringify(newCart));
    } catch (e) {
      console.warn("Storage save skipped", e);
    }
  };

  const handleOpenCustomize = (product: Product) => {
    setSelectedProduct(product);
    // Reset options
    setShape('Elongated');
    setFinish('Brushed Steel');
    setWaterType(product.id === 'lura-classic' ? 'Dual Temp (Warm & Cold)' : 'Ambient Only');
  };

  const handleAddToCartDirect = (product: Product, quantity = 1) => {
    const itemOptions = {
      shape: product.category === 'seat' ? shape : undefined,
      finish: product.category === 'attachment' || product.category === 'handheld' ? finish : undefined,
      waterType: product.id === 'lura-classic' ? waterType : undefined
    };

    // Find equivalent in cart
    const sameIndex = cart.findIndex(c => 
      c.product.id === product.id && 
      c.selectedOptions.shape === itemOptions.shape &&
      c.selectedOptions.finish === itemOptions.finish &&
      c.selectedOptions.waterType === itemOptions.waterType
    );

    let nextCart: CartItem[] = [...cart];
    if (sameIndex > -1) {
      nextCart[sameIndex].quantity += quantity;
    } else {
      nextCart.push({
        product,
        quantity,
        selectedOptions: itemOptions
      });
    }

    saveCart(nextCart);
    setSelectedProduct(null); // Close modal if open
    setIsOpen(true); // Open sidebar to preview
  };

  const handleUpdateQty = (index: number, delta: number) => {
    const nextCart = [...cart];
    nextCart[index].quantity += delta;
    if (nextCart[index].quantity <= 0) {
      nextCart.splice(index, 1);
    }
    saveCart(nextCart);
  };

  const handleRemoveItem = (index: number) => {
    const nextCart = [...cart];
    nextCart.splice(index, 1);
    saveCart(nextCart);
  };

  // Promo Code Engine
  const handleApplyPromo = () => {
    const cleaned = promoCode.trim().toUpperCase();
    if (cleaned === "WASH20" || cleaned === "ECOCLEAN20") {
      setAppliedPromo({ code: cleaned, discountType: 'percentage', value: 20 });
      setPromoError("");
    } else if (cleaned === "FREESHIP") {
      setAppliedPromo({ code: cleaned, discountType: 'fixed', value: 12 });
      setPromoError("");
    } else if (cleaned === "CLEAN50") {
      setAppliedPromo({ code: cleaned, discountType: 'fixed', value: 50 });
      setPromoError("");
    } else {
      setPromoError("Invalid code. Try ECOCLEAN20");
    }
  };

  const cartMetrics = useMemo(() => {
    const itemSubtotal = cart.reduce((acc, c) => acc + (c.product.price * c.quantity), 0);
    
    // Water and Carbon savings
    const toiletPaperRollsSaved = Math.round(itemSubtotal * 0.45);
    const gallonsWaterSaved = Math.round(itemSubtotal * 1.8);

    // Apply promo
    let discountAmount = 0;
    if (appliedPromo) {
      if (appliedPromo.discountType === 'percentage') {
        discountAmount = Math.round((itemSubtotal * appliedPromo.value) / 100);
      } else {
        discountAmount = appliedPromo.code === 'FREESHIP' ? 0 : appliedPromo.value;
      }
    }

    const subtotalAfterDiscount = Math.max(0, itemSubtotal - discountAmount);
    
    // Free shipping threshold
    const shippingCost = (subtotalAfterDiscount > 150 || appliedPromo?.code === 'FREESHIP' || itemSubtotal === 0) ? 0 : 12;
    const estTax = Math.round(subtotalAfterDiscount * 0.075);
    const total = subtotalAfterDiscount + shippingCost + estTax;
    
    return {
      subtotal: itemSubtotal,
      discount: discountAmount,
      shipping: shippingCost,
      tax: estTax,
      total,
      toiletPaperRollsSaved,
      gallonsWaterSaved
    };
  }, [cart, appliedPromo]);

  // Simulate complete checkout
  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingForm.fullName || !shippingForm.email || !shippingForm.address) {
      alert("Please fill in the required fields");
      return;
    }

    setStep('completed');
    setOrderId("LURA-" + Math.floor(100000 + Math.random() * 900000));
    saveCart([]); // clear cart
  };

  return (
    <>
      {/* Floating Tactical Cart Indicator */}
      <button 
        id="lura-cart-pill-trigger"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-[#154048] hover:bg-[#1a4d56] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 select-none font-sans group border border-white/10"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" />
          {cart.length > 0 && (
            <span className="absolute -top-2.5 -right-2.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#199464] text-[10px] font-black border border-white text-white">
              {cart.reduce((sum, c) => sum + c.quantity, 0)}
            </span>
          )}
        </div>
        <span className="text-xs font-bold tracking-widest uppercase">
          {cart.length === 0 ? "LURA CART" : `$${cartMetrics.total.toLocaleString()}`}
        </span>
      </button>

      {/* Cart Drawer Backing / Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end font-sans transition-all duration-300">
          {/* Black Backdrop overlay */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
          />

          {/* Sidebar Drawer container */}
          <div className="relative w-full max-w-md bg-white h-screen shadow-2xl flex flex-col z-10 overflow-hidden loader-slide-in">
            {/* Drawer Header */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#FAF9F5]">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#154048]" />
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-[#154048]">
                  Your Eco-Wash Cart
                </h3>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-gray-200 transition text-[#154048]"
                title="Close Drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Simulated Checkout Steps tabs if cart is not empty */}
            {cart.length > 0 && step !== 'completed' && (
              <div className="grid grid-cols-3 text-center border-b border-gray-100 bg-sand/10 text-[9px] font-bold tracking-widest uppercase py-2 bg-[#FAF9F5]/40">
                <span className={`py-1 ${step === 'cart' ? 'text-[#199464] border-b border-[#199464]' : 'text-gray-400'}`}>1. Clean Cart</span>
                <span className={`py-1 ${step === 'shipping' ? 'text-[#199464] border-b border-[#199464]' : 'text-gray-400'}`}>2. Delivery</span>
                <span className={`py-1 ${step === 'payment' ? 'text-[#199464] border-b border-[#199464]' : 'text-gray-400'}`}>3. Checkout</span>
              </div>
            )}

            {/* Drawer Content Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              
              {/* COMPLETED SUCCESS STATE */}
              {step === 'completed' && (
                <div className="py-8 text-center space-y-6">
                  <div className="w-16 h-16 bg-[#199464]/10 rounded-full flex items-center justify-center mx-auto text-[#199464]">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-display font-black text-lg text-[#154048] tracking-tight">Wash Revolution Started!</h4>
                    <p className="text-xs text-gray-500">Your LURA premium bidet ecosystem order is confirmed.</p>
                  </div>

                  <div className="p-4 bg-[#FAF9F5] border border-gray-100 rounded-2xl text-left space-y-2 font-mono text-xs text-[#154048]/85">
                    <p className="flex justify-between"><span>Order Number:</span> <span className="font-bold">{orderId}</span></p>
                    <p className="flex justify-between"><span>Recipient:</span> <span>{shippingForm.fullName}</span></p>
                    <p className="flex justify-between"><span>Destination:</span> <span className="truncate max-w-[200px]">{shippingForm.address}, {shippingForm.city}</span></p>
                    <p className="flex justify-between"><span>FSA/HSA Approved:</span> <span>{shippingForm.useHSACard ? "YES (Medical Category Code)" : "No"}</span></p>
                    <p className="flex justify-between border-t border-dashed border-gray-300 pt-2 font-bold text-sm"><span>Grand Total:</span> <span>${cartMetrics.total}</span></p>
                  </div>

                  <div className="p-4 bg-[#199464]/5 border border-[#199464]/20 rounded-xl flex items-start gap-3 text-left">
                    <Sparkles className="w-5 h-5 text-[#199464] shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-[#154048]">Instant Environmental Impact</h5>
                      <p className="text-[11px] text-[#154048]/75 leading-relaxed mt-1">
                        By swapping toilet paper for LURA clean-wash, you will prevent the destruction of approximately <b>{cartMetrics.toiletPaperRollsSaved} TP rolls</b> and conserve over <b>{cartMetrics.gallonsWaterSaved} gallons</b> of pure natural water annually!
                      </p>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      setStep('cart');
                      setIsOpen(false);
                    }}
                    className="w-full py-4 bg-[#154048] hover:bg-[#1a4d56] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer"
                  >
                    Continue Browsing
                  </button>
                </div>
              )}

              {/* EMPTY STATE */}
              {cart.length === 0 && step !== 'completed' && (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mx-auto text-gray-400">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <p className="font-display font-extrabold text-sm text-[#154048] uppercase tracking-wider">Empty hygiene suite</p>
                    <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">Customize and add a LURA bidet appliance to transition your bathroom into an organic, health-grade spa.</p>
                  </div>

                  {/* Quick-add selections directly inside drawer */}
                  <div className="space-y-3 pt-6 border-t border-gray-100 text-left">
                    <span className="text-[10px] font-black tracking-widest text-[#9C9F9B] uppercase block">PREMIUM APPLIANCES</span>
                    {BIDET_PRODUCTS.map((prod) => (
                      <div 
                        key={prod.id} 
                        className="flex items-center justify-between p-3.5 bg-gray-50 border border-gray-100 hover:border-[#154048]/20 hover:bg-white rounded-xl transition group"
                      >
                        <div className="space-y-0.5">
                          <h5 className="text-xs font-bold text-[#154048] group-hover:text-[#199464] transition">{prod.name}</h5>
                          <p className="text-[11px] text-gray-500">${prod.price}</p>
                        </div>
                        <button
                          onClick={() => handleOpenCustomize(prod)}
                          className="px-3.5 py-1.5 bg-[#154048] hover:bg-[#199464] text-white text-[10px] font-extrabold uppercase rounded-lg tracking-wider transition"
                        >
                          Select
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VIEW 1: SHOPPING CART LIST */}
              {cart.length > 0 && step === 'cart' && (
                <div className="space-y-5">
                  <div className="space-y-3">
                    {cart.map((item, idx) => (
                      <div 
                        key={`${item.product.id}-${idx}`}
                        className="p-3.5 bg-white border border-gray-100 rounded-2xl flex gap-3 hover:shadow-xs transition duration-200 group"
                      >
                        <div className="w-14 h-14 bg-[#FAF9F5] border border-gray-100 rounded-xl flex items-center justify-center overflow-hidden shrink-0">
                          <span className="text-xs font-bold text-[#154048]/60 uppercase">LURA</span>
                        </div>
                        <div className="flex-1 space-y-1 text-xs">
                          <div className="flex justify-between items-start">
                            <h5 className="font-bold text-[#154048] text-[13px] leading-tight group-hover:text-[#199464] transition">
                              {item.product.name}
                            </h5>
                            <button 
                              onClick={() => handleRemoveItem(idx)}
                              className="text-gray-400 hover:text-red-500 transition-colors shrink-0"
                              title="Delete Item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          
                          {/* Options details */}
                          <div className="text-[10px] text-gray-400 space-y-0.5">
                            {item.selectedOptions.shape && <p>Type: {item.selectedOptions.shape}</p>}
                            {item.selectedOptions.finish && <p>Dial Finish: {item.selectedOptions.finish}</p>}
                            {item.selectedOptions.waterType && <p>Water Flow: {item.selectedOptions.waterType}</p>}
                          </div>

                          <div className="flex justify-between items-center pt-1.5">
                            <span className="font-black text-[#154048]/90">${item.product.price * item.quantity}</span>
                            <div className="flex items-center gap-2 border border-gray-100 rounded-lg p-0.5 bg-gray-50/50">
                              <button 
                                onClick={() => handleUpdateQty(idx, -1)}
                                className="w-5 h-5 rounded-md flex items-center justify-center bg-white hover:bg-gray-100 shadow-3xs cursor-pointer text-[#154048]"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="w-4 text-center font-bold text-xs text-[#154048]">{item.quantity}</span>
                              <button 
                                onClick={() => handleUpdateQty(idx, 1)}
                                className="w-5 h-5 rounded-md flex items-center justify-center bg-white hover:bg-gray-100 shadow-3xs cursor-pointer text-[#154048]"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Eco metrics calculator ribbon */}
                  <div className="p-3.5 bg-[#199464]/5 border border-[#199464]/10 rounded-2xl flex items-center justify-between text-xs text-[#154048]/95 select-none animate-pulse">
                    <span className="flex items-center gap-1.5 font-bold"><Award className="w-4 h-4 text-[#199464]" /> Pure Impact Stat:</span>
                    <span className="font-mono font-extrabold text-[#199464]">-{cartMetrics.toiletPaperRollsSaved} TP Rolls</span>
                  </div>

                  {/* Applied coupon panel */}
                  {appliedPromo ? (
                    <div className="p-3.5 bg-[#199464]/10 rounded-xl flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2 text-[#199464]">
                        <Tag className="w-4 h-4 fill-current" />
                        <span className="font-extrabold tracking-wide">Applied Code "{appliedPromo.code}"</span>
                      </div>
                      <button 
                        onClick={() => setAppliedPromo(null)}
                        className="text-gray-400 hover:text-red-500 font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    /* Promo Input Box */
                    <div className="space-y-1.5 pt-2">
                      <label className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Apply Promo Suite</label>
                      <div className="flex gap-2">
                        <input 
                          type="text" 
                          placeholder="Try WASH20"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-xs tracking-wider font-semibold focus:outline-none focus:border-[#154048] uppercase"
                        />
                        <button 
                          onClick={handleApplyPromo}
                          className="px-4 bg-[#154048] hover:bg-[#199464] text-white text-xs font-bold uppercase rounded-lg tracking-wider transition"
                        >
                          Apply
                        </button>
                      </div>
                      {promoError && <p className="text-[10px] text-red-500 mt-0.5">{promoError}</p>}
                    </div>
                  )}

                  {/* HSA / FSA Health-Credit Block */}
                  <div className="p-3.5 bg-[#154048]/5 rounded-xl border border-[#154048]/10 space-y-2 relative">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 text-xs font-extrabold text-[#154048]/90">
                        <ShieldCheck className="w-4 h-4 text-[#199464]" /> HSA / FSA Eligible Category
                      </span>
                      <button 
                        onClick={() => setShowHSATooltip(!showHSATooltip)}
                        className="text-gray-400 hover:text-[#154048] transition"
                        title="HSA/FSA details info"
                      >
                        <Info className="w-4 h-4" />
                      </button>
                    </div>
                    {showHSATooltip && (
                      <p className="text-[10.5px] leading-relaxed text-gray-500 bg-white p-3 border border-gray-100 rounded-lg absolute z-10 shadow-lg top-10 left-3 right-3">
                        LURA Bidets qualify as therapeutic medical devices under IRS Section 213(d) when purchased for eco-wash personal hygiene care. Check out using your official HSA/FSA debit card in the payment step.
                      </p>
                    )}
                    <p className="text-[11px] text-gray-500">
                      Standard medical-grade wash systems are fully reimbursable under Category: <b>Personal Wash Hygiene Care</b>.
                    </p>
                  </div>
                </div>
              )}

              {/* VIEW 2: SHIPPING DETAILS */}
              {cart.length > 0 && step === 'shipping' && (
                <form onSubmit={(e) => { e.preventDefault(); setStep('payment'); }} className="space-y-4">
                  <span className="text-[10px] font-black tracking-widest text-[#9C9F9B] uppercase block">SHIPPING SUITE</span>
                  <div className="space-y-3.5">
                    <div>
                      <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">Full Legal Name *</label>
                      <input 
                        type="text" 
                        required
                        value={shippingForm.fullName}
                        onChange={(e) => setShippingForm({...shippingForm, fullName: e.target.value})}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:border-[#154048]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={shippingForm.email}
                        onChange={(e) => setShippingForm({...shippingForm, email: e.target.value})}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:border-[#154048]"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">Street Address *</label>
                      <input 
                        type="text" 
                        required
                        value={shippingForm.address}
                        onChange={(e) => setShippingForm({...shippingForm, address: e.target.value})}
                        placeholder="123 Wash Avenue"
                        className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:border-[#154048]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">City *</label>
                        <input 
                          type="text" 
                          required
                          value={shippingForm.city}
                          onChange={(e) => setShippingForm({...shippingForm, city: e.target.value})}
                          placeholder="Seattle"
                          className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:border-[#154048]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">Zip Code *</label>
                        <input 
                          type="text" 
                          required
                          value={shippingForm.zipCode}
                          onChange={(e) => setShippingForm({...shippingForm, zipCode: e.target.value})}
                          placeholder="98101"
                          className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-xs font-sans focus:outline-none focus:border-[#154048]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#154048] hover:bg-[#199464] text-white text-xs font-extrabold uppercase tracking-widest rounded-xl transition cursor-pointer"
                    >
                      Proceed to Payment Method
                    </button>
                    <button 
                      type="button"
                      onClick={() => setStep('cart')}
                      className="w-full py-2.5 text-xs text-gray-400 hover:text-[#154048] font-bold text-center mt-1"
                    >
                      Back to Cart Items
                    </button>
                  </div>
                </form>
              )}

              {/* VIEW 3: SIMULATED CREDIT CARD CHECKOUT */}
              {cart.length > 0 && step === 'payment' && (
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <span className="text-[10px] font-black tracking-widest text-[#9C9F9B] uppercase block">SECURE GATEWAY</span>
                  
                  <div className="p-4 bg-[#FAF9F5] border border-gray-150 rounded-2xl flex items-start gap-3">
                    <CreditCard className="w-5 h-5 text-[#154048] mt-0.5 shrink-0" />
                    <div className="space-y-1">
                      <h5 className="text-xs font-bold text-[#154048]">Instant Sandboxed Transaction</h5>
                      <p className="text-[11px] text-gray-500 leading-relaxed">
                        Specify card options below. You can simulate direct credit, or claim an instant FSA/HSA reimbursement.
                      </p>
                    </div>
                  </div>

                  {/* Payment Method selectors */}
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      type="button"
                      onClick={() => setShippingForm({...shippingForm, useHSACard: false})}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold flex flex-col justify-between h-20 transition ${!shippingForm.useHSACard ? 'border-[#199464] bg-[#199464]/5 text-[#154048]' : 'border-gray-200 text-gray-400'}`}
                    >
                      <CreditCard className="w-5 h-5 text-[#154048]/80" />
                      <span>Credit Card</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setShippingForm({...shippingForm, useHSACard: true})}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold flex flex-col justify-between h-20 transition ${shippingForm.useHSACard ? 'border-[#199464] bg-[#199464]/5 text-[#154048]' : 'border-gray-200 text-gray-400'}`}
                    >
                      <ShieldCheck className="w-5 h-5 text-[#199464]" />
                      <span>FSA / HSA Card</span>
                    </button>
                  </div>

                  {/* Card entries */}
                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">
                        {shippingForm.useHSACard ? "HSA Card Number" : "Card Number"}
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="•••• •••• •••• ••••"
                        className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-xs font-mono tracking-widest focus:outline-none focus:border-[#154048]"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3.5">
                      <div>
                        <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">Expiry</label>
                        <input 
                          type="text" 
                          required
                          placeholder="MM/YY"
                          className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-xs font-mono focus:outline-none focus:border-[#154048]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider block mb-1">CVC Code</label>
                        <input 
                          type="password" 
                          required
                          placeholder="•••"
                          maxLength={4}
                          className="w-full px-3.5 py-3 border border-gray-200 rounded-xl text-xs font-mono focus:outline-none focus:border-[#154048]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full py-4 bg-[#199464] hover:bg-[#154048] text-white text-xs font-extrabold uppercase tracking-widest rounded-xl transition cursor-pointer flex items-center justify-center gap-2"
                    >
                      <ShieldCheck className="w-4 h-4" /> Place Simulated Order | ${cartMetrics.total}
                    </button>
                    <button 
                      type="button"
                      onClick={() => setStep('shipping')}
                      className="w-full py-2.5 text-xs text-gray-400 hover:text-[#154048] font-bold text-center mt-1"
                    >
                      Back to Shipping Step
                    </button>
                  </div>
                </form>
              )}

            </div>

            {/* Sticky Drawer Footer for totals */}
            {cart.length > 0 && step !== 'completed' && (
              <div className="p-5 border-t border-gray-100 bg-[#FAF9F5] space-y-4">
                <div className="space-y-1.5 text-xs text-[#154048]/85 font-sans">
                  <div className="flex justify-between">
                    <span>Acoustic Subtotal</span>
                    <span className="font-bold">${cartMetrics.subtotal}</span>
                  </div>
                  {cartMetrics.discount > 0 && (
                    <div className="flex justify-between text-[#199464] font-semibold">
                      <span>Promo Savings</span>
                      <span>-${cartMetrics.discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Secure Packaging & Shipping</span>
                    <span className="font-bold">
                      {cartMetrics.shipping === 0 ? (
                        <span className="text-[#199464] uppercase font-black tracking-wider">Free Shipping</span>
                      ) : (
                        `$${cartMetrics.shipping}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-[11px] text-gray-400">
                    <span>Est. Healthcare Sales Tax (7.5%)</span>
                    <span>${cartMetrics.tax}</span>
                  </div>
                  <div className="flex justify-between text-base font-black border-t border-gray-200 text-[#154048] pt-2.5">
                    <span>Total Bill</span>
                    <span>${cartMetrics.total}</span>
                  </div>
                </div>

                {step === 'cart' && (
                  <button 
                    onClick={() => setStep('shipping')}
                    className="w-full py-4 bg-[#154048] hover:bg-[#199464] text-white text-xs font-extrabold uppercase tracking-widest rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    Proceed to Delivery <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}

          </div>
        </div>
      )}

      {/* Product Customizer & Configuration modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setSelectedProduct(null)} />
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[90vh]">
            
            {/* Header */}
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#FAF9F5]">
              <div>
                <span className="text-[9px] font-black tracking-widest text-[#199464] uppercase">Configurator Suite</span>
                <h4 className="font-display font-black text-[#154048] text-sm uppercase tracking-wider">{selectedProduct.name}</h4>
              </div>
              <button 
                onClick={() => setSelectedProduct(null)}
                className="p-1.5 rounded-full hover:bg-gray-200 transition text-[#154048]"
                title="Dismiss Configurator"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable specs */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Product Core details banner */}
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-[#FAF9F5] border border-gray-100 rounded-2xl flex items-center justify-center overflow-hidden shrink-0">
                  <span className="text-sm font-black text-[#154048]/40">LURA</span>
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] bg-[#199464]/10 text-[#199464] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    {selectedProduct.category === 'seat' ? "HYGIENE SEAT" : "BIDET DEVICE"}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed">{selectedProduct.description}</p>
                  <p className="text-lg font-black text-[#154048] pt-1">
                    ${selectedProduct.price}
                    {selectedProduct.originalPrice && (
                      <span className="text-xs text-gray-400 font-normal line-through ml-2">
                        ${selectedProduct.originalPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* Checkbox / features checklist */}
              <div className="space-y-2">
                <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase">What's in the box</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#154048]/90">
                  {selectedProduct.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2">
                      <div className="p-0.5 bg-[#199464]/10 rounded-full text-[#199464]">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* SEAT SIZING CONTROL */}
              {selectedProduct.category === 'seat' && (
                <div className="space-y-2.5">
                  <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase flex items-center gap-1">
                    <Settings className="w-3.5 h-3.5" /> Select Toilet Sizing
                  </span>
                  <p className="text-xs text-gray-400 leading-relaxed">Most modern toilets require an Elongated shape. Verify your bowl's dimensions beforehand.</p>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      type="button"
                      onClick={() => setShape('Elongated')}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold transition flex flex-col justify-between ${shape === 'Elongated' ? 'border-[#199464] bg-[#199464]/5 text-[#154048]' : 'border-gray-200 text-gray-400'}`}
                    >
                      <span className="font-extrabold">Elongated</span>
                      <span className="text-[10px] font-normal leading-normal text-gray-500 mt-1">18.5" length (industry standard)</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setShape('Round')}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold transition flex flex-col justify-between ${shape === 'Round' ? 'border-[#199464] bg-[#199464]/5 text-[#154048]' : 'border-gray-200 text-gray-400'}`}
                    >
                      <span className="font-extrabold">Round Bowl</span>
                      <span className="text-[10px] font-normal leading-normal text-gray-500 mt-1">16.5" length (compact spaces)</span>
                    </button>
                  </div>
                </div>
              )}

              {/* DIAL FINISH BUTTONS */}
              {(selectedProduct.category === 'attachment' || selectedProduct.category === 'handheld') && (
                <div className="space-y-2.5">
                  <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase flex items-center gap-1">
                    <Settings className="w-3.5 h-3.5" /> Select Dial & Hardware Accents
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {(['Brushed Steel', 'Chrome', 'Matte Black', 'Alpine White'] as const).map((accent) => (
                      <button 
                        key={accent}
                        type="button"
                        onClick={() => setFinish(accent)}
                        className={`p-3.5 rounded-xl border text-xs font-bold text-center transition flex flex-col items-center gap-1.5 ${finish === accent ? 'border-[#199464] bg-[#199464]/5 text-[#154048]' : 'border-gray-200 text-gray-400'}`}
                      >
                        <span className="font-bold">{accent}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* NOZZLE WATER TYPE CONTROL */}
              {selectedProduct.id === 'lura-classic' && (
                <div className="space-y-2.5">
                  <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase flex items-center gap-1">
                    <Settings className="w-3.5 h-3.5" /> Core Water Connections
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      type="button"
                      onClick={() => setWaterType('Ambient Only')}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold transition flex flex-col justify-between ${waterType === 'Ambient Only' ? 'border-[#199464] bg-[#199464]/5 text-[#154048]' : 'border-gray-200 text-gray-400'}`}
                    >
                      <span className="font-extrabold">Cold Ambient Only</span>
                      <span className="text-[10px] font-normal leading-normal text-gray-500 mt-1">Standard faucet tee hookup (refreshing wash)</span>
                    </button>
                    <button 
                      type="button"
                      onClick={() => setWaterType('Dual Temp (Warm & Cold)')}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold transition flex flex-col justify-between ${waterType === 'Dual Temp (Warm & Cold)' ? 'border-[#199464] bg-[#199464]/5 text-[#154048]' : 'border-gray-200 text-gray-400'}`}
                    >
                      <span className="font-extrabold">Dual Temp Connector</span>
                      <span className="text-[10px] font-normal leading-normal text-gray-500 mt-1">Hook into sink warm water line (fully customizable temperature)</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Sticky dialog footer with Add to Cart button */}
            <div className="p-5 border-t border-gray-100 bg-[#FAF9F5] flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] font-extrabold text-gray-400 tracking-wider block uppercase">Total Cost</span>
                <span className="text-xl font-black text-[#154048]">${selectedProduct.price}</span>
              </div>
              <button 
                onClick={() => handleAddToCartDirect(selectedProduct)}
                className="px-6 py-4 bg-[#154048] hover:bg-[#199464] text-white text-xs font-extrabold uppercase tracking-widest rounded-xl transition cursor-pointer"
              >
                Add Customized To Cart
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
