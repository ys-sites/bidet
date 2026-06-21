import { createRoot } from "react-dom/client";
import "./kamu.css";
import { BidetShop } from "./components/BidetShop";
import { Sparkles, Droplet, Flame, Compass, ArrowRight, ShieldCheck, Zap } from "lucide-react";

// 1. Core Setup for Universal LURA Ecommerce
const globalRootId = "lura-ecommerce-global-root";
let globalRoot = document.getElementById(globalRootId);

if (!globalRoot) {
  globalRoot = document.createElement("div");
  globalRoot.id = globalRootId;
  document.body.appendChild(globalRoot);
}

// Render the checkout and floating shopping cart globally on all pages!
createRoot(globalRoot).render(<BidetShop />);

// 2. Interactive Product Customizer Row for the Technology page
const techProducts = [
  {
    id: "lura-classic",
    name: "LURA Classic Attachment",
    price: 79,
    originalPrice: 99,
    image: "without logo.webp",
    badge: "Most Popular",
    headline: "Unpowered Hydro-Fusion",
    description: "Elegant mechanical attachment featuring our slim 0.2\" body, tactile steel valves, and self-cleaning natural water pressure nozzles.",
    icon: <Droplet className="w-6 h-6 text-[#199464]" />,
    specs: ["Retractable dual nozzles", "Tactile brass core dial", "99.9% universal toilet fit", "Dual nozzle posterior/feminine"]
  },
  {
    id: "lura-aero",
    name: "LURA Aero Smart Seat",
    price: 349,
    originalPrice: 429,
    image: "Fix Mistake.webp",
    badge: "Smart Premium Selection",
    headline: "Full Electronic Luxury",
    description: "Uncompromised bliss. Instant heated water, 5-speed adjustable dryer, warm ergonomic heated seat, and soft nightglow wash guides.",
    icon: <Flame className="w-6 h-6 text-amber-500" />,
    specs: ["Ergonomic heated seating", "Endless instant warm water", "Adjustable drying temp", "Ultra-safe electronic fuses"]
  },
  {
    id: "lura-wand",
    name: "LURA Handheld Sprayer",
    price: 49,
    image: "Form_section.webp",
    badge: "Minimalist Utility",
    headline: "Surgical Weight Balance",
    description: "Solid brass heavy-grade handheld sprayer offering continuous thumb pressure moderation and instant magnetic holster docking.",
    icon: <Compass className="w-6 h-6 text-sky-500" />,
    specs: ["Machined solid copper brass", "Squeeze trigger moderation", "Double lock high fatigue hose", "Premium wall dock mount"]
  }
];

const bidetOnPageRoot = document.getElementById("kamu-root");
if (bidetOnPageRoot) {
  // Clear any placeholder plain HTML inside (just to be safe)
  bidetOnPageRoot.innerHTML = "";
  
  createRoot(bidetOnPageRoot).render(
    <div className="w-full space-y-12 py-6 font-sans">
      <div className="text-center space-y-3">
        <span className="text-[11px] font-black tracking-widest text-[#199464] uppercase bg-[#199464]/10 px-4 py-1.5 rounded-full">
          EXPERIENCE LURA LUXURY
        </span>
        <h3 className="text-3xl md:text-4xl font-extrabold text-[#154048] tracking-tight">
          Select Your Premium Wash Chassis
        </h3>
        <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          Upgrade your hygiene regime by custom-configuring one of our signature LURA systems. All units are fully HSA/FSA reimbursable.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {techProducts.map((p) => (
          <div 
            key={p.id}
            className="group relative bg-[#FAF9F5]/40 border border-black/5 hover:border-[#154048]/30 rounded-[2rem] p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:bg-white overflow-hidden transform hover:-translate-y-1"
          >
            {/* Top row */}
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-white border border-black/5 rounded-2xl group-hover:bg-[#154048] group-hover:text-white transition duration-300">
                  {p.icon}
                </div>
                <span className="text-[9px] font-black tracking-wider text-[#199464] uppercase bg-[#199464]/5 px-2.5 py-1 rounded-md border border-[#199464]/10">
                  {p.badge}
                </span>
              </div>

              <div className="space-y-1.5">
                <span className="text-[11px] font-black tracking-widest text-gray-400 uppercase">{p.headline}</span>
                <h4 className="text-xl font-extrabold text-[#154048] tracking-tight group-hover:text-[#199464] transition">
                  {p.name}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed min-h-[50px]">
                  {p.description}
                </p>
              </div>

              {/* Specs checklist */}
              <div className="pt-3 border-t border-black/5 space-y-2">
                <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase">Highlights & Components</p>
                <div className="space-y-1.5 text-xs text-[#154048]/85">
                  {p.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#199464] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom pricing row */}
            <div className="pt-6 mt-6 border-t border-black/5 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-gray-400 block uppercase">Instant Offer</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-[#154048]">${p.price}</span>
                  {p.originalPrice && (
                    <span className="text-xs text-gray-400 line-through font-semibold">${p.originalPrice}</span>
                  )}
                </div>
              </div>

              <button 
                onClick={() => {
                  // Dispatch custom event to trigger customizer in global BidetShop
                  const productObj = {
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    originalPrice: p.originalPrice,
                    description: p.description,
                    features: p.specs,
                    image: p.image,
                    category: p.id.includes("seat") ? "seat" : p.id.includes("wand") ? "handheld" : "attachment"
                  };
                  window.dispatchEvent(new CustomEvent("lura:open-customize", { detail: productObj }));
                }}
                className="px-4.5 py-3 bg-[#154048] hover:bg-[#199464] text-white text-[11px] font-black uppercase tracking-wider rounded-xl transition flex items-center gap-1 group/btn cursor-pointer shadow-sm select-none"
              >
                Configure <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Health FSA strip inside card row */}
      <div className="p-5 bg-[#FAF9F5] rounded-[1.5rem] border border-black/5 flex flex-col md:flex-row items-center gap-4 justify-between font-sans">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-[#199464]/10 rounded-xl text-[#199464]">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div className="space-y-0.5">
            <h5 className="text-xs font-bold text-[#154048] uppercase tracking-wider">HSA / FSA Direct Coverage</h5>
            <p className="text-[11px] text-gray-500">LURA washing apparatus catalog meets exact requirements of Section 213(d) Health Care expenses.</p>
          </div>
        </div>
        <a 
          href="#pricing"
          onClick={(e) => {
            e.preventDefault();
            // Open default Classic
            const p = techProducts[0];
            window.dispatchEvent(new CustomEvent("lura:open-customize", { detail: p }));
          }}
          className="text-[11px] font-black tracking-widest uppercase text-[#199464] hover:text-[#154048] flex items-center gap-1.5 transition"
        >
          Check Eligibility <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
