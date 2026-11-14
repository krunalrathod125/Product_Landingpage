import { useState } from 'react';
import { ChevronDown, ExternalLink, Sparkles } from 'lucide-react';
import { useFaraliProduct } from '../context/FaraliProductContext';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const { activeProduct } = useFaraliProduct();

  const toggle = (i) => {
    setOpenIndex((curr) => (curr === i ? null : i));
  };

  const faqs = [
    {
      q: 'What is Kela Farali Chivda and what is the difference between Tikha and Meetha?',
      a: 'Kela Farali Chivda is an authentic Gujarati fasting (upvas) namkeen handcrafted from crisp raw banana batons, crunchy roasted peanuts, and golden raisins. The Tikha variety is boldly seasoned with Sendha Namak (rock salt), red chili, black pepper, and roasted cumin for a fiery, savory crunch. The Meetha variety is delicately seasoned with pure crystalline cane sugar and Sendha Namak for a timeless Gujarati sweet-and-savory crunch with sweet plump raisins.'
    },
    {
      q: 'Is Bhagvat Prasadam Kela Farali Chivda suitable for Ekadashi and Navratri fasting (Upvas)?',
      a: 'Yes, 100%! It is crafted strictly adhering to sacred Satvik fasting guidelines. We use 100% pure Sendha Namak (Sindhav rock salt) instead of regular table salt, and absolutely no grain flours (zero besan, zero wheat, zero cornflour), zero onion, and zero garlic. It is 100% pure vegetarian, Satvik, and ideal for Ekadashi, Navratri, Shravan, Mahashivratri, and Janmashtami vrat.'
    },
    {
      q: 'What pack sizes and prices are available for both products?',
      a: 'Both Tikha and Meetha varieties are available in 4 convenient packaging sizes: 1kg Festive Mega Pack at ₹425 (MRP ₹550, 23% savings), 800gm Family Value Pack at ₹340 (MRP ₹440), 400gm Most Popular Pouch at ₹170 (MRP ₹221), and 200gm Trial Pack at ₹85 (MRP ₹110). The 1kg pack provides the best value for families and celebrations.'
    },
    {
      q: 'What is the shelf life and how should it be stored?',
      a: 'Our Kela Farali Chivda has a verified 45-day shelf life from the date of packing. Each pouch is made of heavy food-grade multi-layer barrier foil with a resealable zipper. Store in a cool, dry place away from direct sunlight, and simply press the zipper firmly shut after opening to maintain peak crispness.'
    },
    {
      q: 'What cooking oil is used to fry the banana sticks?',
      a: 'We slow-fry our raw banana sticks in pure refined sunflower oil. We never use palm oil, cottonseed oil, or vanaspati dalda. This ensures the chivda remains light on the stomach, non-greasy, and pleasantly aromatic.'
    },
    {
      q: 'How fast is nationwide delivery across India?',
      a: 'Orders are freshly packed and dispatched within 24 hours from Gujarat. Express courier partners deliver across major Indian cities and towns within 2 to 4 business days in protective, tamper-evident packaging.'
    },
    {
      q: 'Can I order in bulk for festivals, temples, or corporate gifting?',
      a: 'Yes! We regularly fulfill bulk orders for temple prasad, corporate festive hampers, Diwali gifts, and community fasts. You can select higher quantities directly on our official store or contact our dedicated Gujarat support desk for customized orders.'
    }
  ];

  return (
    <section id="faq" className="py-10 sm:py-14 md:py-16 bg-white border-b border-[#E8DCC8] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3DF] border border-[#E8DCC8] text-xs font-bold text-[#8B4513] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A323]" />
            Frequently Asked Questions
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
            Kela Farali Chivda FAQs
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Everything you need to know about our fasting purity, recipes, pack sizes, shelf life, and doorstep delivery across India.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggle(i);
                    }
                  }}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#E5A323] cursor-pointer"
                >
                  <span className="font-display font-bold text-sm sm:text-base text-[#3B2418]">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white border border-[#E8DCC8] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#E5A323] text-white border-transparent' : 'text-[#7A5F4F]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-1 text-xs sm:text-sm text-[#7A5F4F] leading-relaxed border-t border-[#E8DCC8]/60 bg-white/70 animate-in fade-in-50 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support Callout */}
        <div className="mt-8 p-4 rounded-2xl bg-[#FFF8E9] border border-[#E8DCC8] flex items-center justify-between flex-wrap gap-3">
          <div className="text-left">
            <span className="text-xs font-bold text-[#3B2418] block">Have more questions about our Farali Chivda?</span>
            <span className="text-[11px] text-[#7A5F4F]">Our team in Nilkanthdham Poicha is happy to assist you anytime.</span>
          </div>
          <a
            href={activeProduct.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#E5A323] text-[#3B2418] hover:bg-[#F28C28] hover:text-white text-xs font-bold transition-colors cursor-pointer"
          >
            <span>Visit Official Store</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
