import React, { useState, useEffect } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const FAQSection = ({ variant }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = {
    Kesar_Chandan: {
      image: "/Ingrident - Kesar Chandan.webp",
      faqs: [
        {
          q: "What makes Kesar Chandan unique?",
          a: "It blends the purity of sandalwood with the richness of saffron, offering a warm and divine fragrance of peace and elegance.",
        },
        {
          q: "Is it suitable for daily wear?",
          a: "Yes, its calming and smooth woody scent makes it perfect for everyday use as well as meditation or spiritual rituals.",
        },
        {
          q: "Can both men and women wear it?",
          a: "Absolutely — its balanced woody-sweet aroma suits all genders beautifully.",
        },
        {
          q: "How long does the fragrance last?",
          a: "It lasts around 6–8 hours, depending on the weather and skin type.",
        },
      ],
    },
    Mogra: {
      image: "/Ingrident - Mogra.webp",
      faqs: [
        {
          q: "What makes Mogra perfume special?",
          a: "Its enchanting jasmine floral notes capture the freshness of night-blooming flowers and evoke pure elegance.",
        },
        {
          q: "When is the best time to wear Mogra?",
          a: "It’s perfect for both day and evening wear — ideal for festive occasions or peaceful moments.",
        },
        {
          q: "Is it a unisex fragrance?",
          a: "Yes, though its floral heart leans slightly feminine, it can be worn by anyone who enjoys soft, fresh scents.",
        },
        {
          q: "How long does Mogra last?",
          a: "It offers a long-lasting aroma that stays fresh for 6–8 hours.",
        },
      ],
    },
    Oudh: {
      image: "/Ingrident - Oudh.webp",
      faqs: [
        {
          q: "What makes Woody Oudh stand out?",
          a: "Its deep, rich aroma of agarwood blends with warm amber and spices to create a bold, royal fragrance.",
        },
        {
          q: "When should I wear Oudh?",
          a: "Perfect for evening wear, events, and special occasions when you want to leave a luxurious impression.",
        },
        {
          q: "Is Oudh suitable for men and women?",
          a: "Yes — it’s a powerful unisex fragrance that suits both genders.",
        },
        {
          q: "How long does the scent last?",
          a: "It lasts up to 10–12 hours, thanks to its intense woody base.",
        },
      ],
    },
    Rose: {
      image: "/Ingrident - Rose.webp",
      faqs: [
        {
          q: "What makes Red Rose perfume special?",
          a: "It’s crafted from the essence of freshly bloomed roses, symbolizing love, passion, and timeless beauty.",
        },
        {
          q: "When can I wear Red Rose?",
          a: "Perfect for romantic evenings, celebrations, or anytime you want to feel graceful and confident.",
        },
        {
          q: "Is Red Rose alcohol-free?",
          a: "Yes, it’s made with gentle, skin-safe ingredients and natural floral oils.",
        },
        {
          q: "Is it suitable for both men and women?",
          a: "Yes — while it has a floral heart, its soft undertones make it wearable by everyone.",
        },
      ],
    },
    Sukhad_Chandan: {
      image: "/Ingrident - Sukhad Chandan.webp",
      faqs: [
        {
          q: "What makes Sukhad Chandan unique?",
          a: "Its pure sandalwood base provides a calm, grounding, and peaceful aura with a subtle woody sweetness.",
        },
        {
          q: "How long does it last?",
          a: "Sukhad Chandan lasts for 6–8 hours, maintaining a soft, comforting scent throughout the day.",
        },
        {
          q: "When should I wear Sukhad Chandan?",
          a: "Ideal for meditation, spiritual practices, or any moment you want to bring serenity and balance to your day.",
        },
        {
          q: "Is it suitable for everyone?",
          a: "Yes, its natural, unisex aroma is perfect for anyone who appreciates subtle and soulful fragrances.",
        },
      ],
    },
    Royal_London: {
      image: "/Product - Royal London.webp",
      faqs: [
        {
          q: "What makes Royal London Attar distinctive?",
          a: "It combines noble cedarwood and crisp bergamot with warm oriental spices, evoking the prestige, power, and elegance of British aristocracy.",
        },
        {
          q: "When is the best time to wear Royal London?",
          a: "It is ideal for evening gatherings, executive meetings, black-tie events, and whenever you want to project commanding elegance.",
        },
        {
          q: "Is Royal London 100% alcohol-free?",
          a: "Yes, like all Sugandham fragrances, it is a pure concentrated perfume oil free of alcohol, parabens, and harsh synthetic chemicals.",
        },
        {
          q: "How long does the scent stay on the skin?",
          a: "Due to its pure concentrated oil formulation, it stays active on pulse points for 10 to 12 hours.",
        },
      ],
    },
  };

  const lookupKey = variant && typeof variant === "string" ? variant.trim().toLowerCase() : "kesar_chandan";
  const matchedKey = Object.keys(faqData).find(
    (k) => k.toLowerCase() === lookupKey
  );
  const currentFaq = faqData[matchedKey] || faqData.Kesar_Chandan;

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    setOpenIndex(null);
  }, [variant]);

  return (
    <section
      id="FAQ-section"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 overflow-hidden"
    >
      {/* Background blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#f1e0c5] rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#f1e0c5] rounded-full blur-3xl opacity-25 -z-10"></div>

      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 bg-[#f1e0c5] px-4 py-2 rounded-full mb-4">
          <HelpCircle className="w-4 h-4 text-[#70470d]" />
          <span className="text-sm font-semibold text-[#70470d]">FAQ</span>
        </div>
        <h2 className="font-1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[#70470d]">
          Frequently Asked Questions
        </h2>
        <p className="font-7 text-gray-600 text-base lg:text-lg leading-relaxed">
          Discover everything you need to know about our {variant?.replace("_", " ")} perfume — from ingredients to usage and care.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* Left Column: Video */}
        <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-8">
          <div className="relative hidden lg:block">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#f1e0c5] to-transparent rounded-3xl opacity-50"></div>
            <div className="relative bg-white rounded-3xl p-6 shadow-xl border-2 border-[#f1e0c5]">
              <video
                key={variant}
                src="/videoframe_6600.mp4"
                className="w-full h-80 object-contain transition-all duration-500 rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-[#8c6226] via-[#70470d] to-[#3e2505] text-white px-4 py-2 rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-bold">Premium</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Accordion */}
        <div className="lg:col-span-3">
          <div className="space-y-5">
            {currentFaq.faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`relative group transition-all duration-300 ${
                    isOpen ? "mb-4" : ""
                  }`}
                >
                  <div
                    className={`border-2 rounded-2xl transition-all duration-300 ${
                      isOpen
                        ? "border-[#8c6226] bg-[#fffceb] shadow-xl"
                        : "border-[#f1e0c5] bg-[#f1e0c5] hover:border-[#9b7540] hover:shadow-lg"
                    }`}
                  >
                    <button
                      onClick={() => toggleIndex(i)}
                      className="w-full flex justify-between items-center gap-4 text-left px-5 sm:px-6 py-5 focus:outline-none cursor-pointer"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div
                          className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isOpen
                              ? "bg-[#8c6226] text-white scale-110"
                              : "bg-white text-[#70470d] group-hover:bg-[#70470d] group-hover:text-white"
                          }`}
                        >
                          <HelpCircle className="w-4 h-4" />
                        </div>
                        <span
                          className={`font-2 text-base sm:text-lg font-semibold transition-colors ${
                            isOpen ? "text-[#8c6226]" : "text-gray-900"
                          }`}
                        >
                          {faq.q}
                        </span>
                      </div>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#f1e0c5] text-[#8c6226] rotate-180"
                            : "bg-white text-gray-400 group-hover:bg-[#f1e0c5] group-hover:text-[#8c6226]"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-2">
                        <div className="pl-11 border-l-2 border-[#70470d] ml-4">
                          <p className="font-2 text-gray-700 text-sm sm:text-base leading-relaxed pl-4">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
