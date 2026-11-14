import React, { useState, useEffect } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';


const FAQSection = ({ variant, image, buyLink }) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Each variant has its own FAQs + Image (Hero section main images)
  const faqData = {
    Swarnim_Agarbatti: {
      image: "/swarnim-agarbatti-main.jpg",
      faqs: [
        {
          q: "What gives Swarnim Premium Incense its Divine Temple Fragrance and Pure Fragrance Divine Feel",
          a: "Swarnim Premium Incense and authentic Natural Gugal Agarbatti are handcrafted with 100 percent natural botanical ingredients, golden temple herbs, and pure tree resins. It delivers an authentic Divine Temple Fragrance and Pure Fragrance Divine Feel that calms the mind and creates an auspicious temple ambiance without toxic charcoal or chemical dipping.",
        },
        {
          q: "How does the Slow Temple Burn of Swarnim Agarbatti work",
          a: "Each artisanal stick is formulated for a clean slow temple burn lasting 45 to 60 minutes. It releases smooth white smoke with zero charcoal, ensuring long lasting fragrance that permeates your home for hours after your morning and evening aarti.",
        },
        {
          q: "Is Swarnim Agarbatti chemical free and safe for daily pooja",
          a: "Yes. Swarnim Premium Incense and Natural Gugal Agarbatti are 100 percent natural, chemical free, and charcoal free. It is specially crafted for daily pooja, prayer, meditation, and spiritual gatherings without irritating throat or eyes.",
        },
        {
          q: "How should I store Swarnim Premium Incense",
          a: "Store in a dry cool place inside its protective pouch or airtight incense box to preserve the natural botanical essential oils and keep the divine aroma fresh.",
        },
      ],
    },

    Ponds_Agarbatti: {
      image: "/ponds-agarbatti-main.jpg",
      faqs: [
        {
          q: "What makes Ponds Premium Incense Temple Garden special",
          a: "Ponds Premium Incense is inspired by a sacred Temple Garden filled with fresh blooming water lilies and morning flora. Blended with the grounding purity of Natural Gugal Agarbatti, it delivers a pure fragrance divine feel that creates a peaceful atmosphere and calms the mind in any room.",
        },
        {
          q: "Can Ponds Premium Incense be used beyond daily pooja",
          a: "Yes. While wonderful for daily pooja, its fresh calming floral notes make it ideal for living rooms, study spaces, yoga rooms, and offices to maintain an inviting stress free environment with long lasting fragrance.",
        },
        {
          q: "Does Ponds Agarbatti contain charcoal or toxic binders",
          a: "No, Ponds Premium Incense is 100 percent charcoal free and crafted with pure botanical gums and flower distillates, offering smooth gentle smoke that breathes easily.",
        },
        {
          q: "What is the pack size of Ponds Premium Incense",
          a: "It comes in a value pack containing 200g of premium long burning natural floral incense sticks.",
        },
      ],
    },

    Kewda_Agarbatti: {
      image: "/kewda-agarbatti-main.jpg",
      faqs: [
        {
          q: "Why is Kewda Agarbatti called A Sacred Aroma for Every Ritual",
          a: "Kewda Pandanus blossoms hold deep sacred significance in Vedic worship, particularly for Lord Shiva, Diwali, Navratri, and Abhishekams. Together with our Natural Gugal Agarbatti, experience the divine fragrance of Kewda with its sweet exotic floral scent that creates a peaceful atmosphere and elevates devotional joy.",
        },
        {
          q: "How long does the sweet Kewda floral fragrance linger",
          a: "Due to high concentrations of authentic Ketaki flower extracts and natural essential resins, the sweet floral aroma lingers in your home for 6 to 8 hours after burning.",
        },
        {
          q: "Is Premium Kewda Incense made with 100 percent natural ingredients",
          a: "Yes, our Premium Kewda Incense is made with 100 percent natural ingredients, pure wood powders, and natural resins, with zero synthetic dipping irritants.",
        },
        {
          q: "How do I light and burn Kewda incense properly",
          a: "Hold the tip to a flame for 5 to 10 seconds until glowing, gently fan out the flame, and place the stick in an upright holder in a well ventilated room.",
        },
      ],
    },

    Sapt_Rushi_Agarbatti: {
      image: "/sapt-rushi-agarbatti-main.jpg",
      faqs: [
        {
          q: "What makes Sapta Rishi Incense A Divine Fragrance for a Peaceful Life",
          a: "Sapta Rishi Incense is an authentic formulation honoring the Seven Sages Sapta Rishis of Vedic antiquity. Blended with seven sacred Ayurvedic herbs, forest resins, and authentic Natural Gugal Agarbatti notes, it brings a divine fragrance for a peaceful life, clears negative energies, and calms mental turbulence.",
        },
        {
          q: "Why is Sapta Rishi Incense recommended for deep dhyana and meditation",
          a: "Its sacred herbal and woody aromatic frequencies encourage deep rhythmic breathing, ground wandering thoughts, and establish a protected meditative atmosphere for yogic sadhana and mantra chanting.",
        },
        {
          q: "How long is the burn time of Sapta Rishi Incense",
          a: "Crafted with extra dense herbal powders for a slow temple burn, each stick burns steadily for up to 60 minutes with an enduring sacred temple sillage that lasts all day.",
        },
        {
          q: "Is Sapta Rishi Incense charcoal free and natural",
          a: "Yes, it is 100 percent natural, charcoal free, and crafted without synthetic chemicals or chemical burning agents.",
        },
      ],
    },

    Kasturi_Agarbatti: {
      image: "/kasturi-agarbatti-main.jpg",
      faqs: [
        {
          q: "What makes Kasturi Whir Musk Temple Incense Pure Fragrance for a Divine Experience",
          a: "Kasturi Whir Musk Temple Incense combines rich deep warm musk with golden amber, sacred botanicals, and traditional Natural Gugal Agarbatti elements. It delivers a pure fragrance for a divine experience that fosters spiritual calm, grounds the emotions, and transforms your home into a holy temple sanctum.",
        },
        {
          q: "How long does each Kasturi incense stick burn",
          a: "Each stick burns smoothly for 45 to 60 minutes, releasing a steady long lasting fragrance that continues to gently perfume the room for several hours.",
        },
        {
          q: "Is Kasturi Agarbatti beneficial for meditation and stress relief",
          a: "Yes, its deep warm musk and amber notes are renowned for reducing anxiety, calming mental fatigue, and enhancing sacred focus during pooja and yogic meditation.",
        },
        {
          q: "Does Kasturi Whir Musk contain charcoal",
          a: "No, our Kasturi Temple Incense is 100 percent charcoal free and made with natural aromatic plant resins, essential oils, and herbal powders.",
        },
      ],
    },

    Gugal_Agarbatti: {
      image: "/gugal-agarbatti-main.jpg",
      faqs: [
        {
          q: "How does Natural Gugal Agarbatti bring Divine Fragrance for a Peaceful Home",
          a: "Natural Gugal Agarbatti provides a divine fragrance for a peaceful home by combining authentic Guggal resin, sacred Gir cow dung, pure Vedic cow ghee, and natural Bhimseni camphor. It purifies indoor air, eliminates stagnant energies, and fills your surroundings with the sanctified aura of a Vedic temple.",
        },
        {
          q: "What is the significance of Sacred Havan Purification in Natural Gugal Agarbatti",
          a: "In Vedic scriptures, burning authentic Natural Gugal Agarbatti crafted with Gir cow dung and pure Vedic ghee replicates the purifying and antimicrobial benefits of a sacred Havan and Yajna fire ritual, clearing Vastu doshas and attracting positive divine vibrations.",
        },
        {
          q: "Is Natural Gugal Agarbatti chemical free and long lasting",
          a: "Yes. Natural Gugal Agarbatti is 100 percent chemical free, charcoal free, and formulated for a slow steady burn with long lasting fragrance that remains in your home for hours.",
        },
        {
          q: "Can I use Natural Gugal Agarbatti for daily morning and evening pooja",
          a: "Yes, Natural Gugal Agarbatti is specially formulated for daily morning pooja, evening Sandhya aarti, Vastu cleansing, and spiritual peace.",
        },
      ],
    },
  };

  // Case-insensitive and safe variant handling
  const normalizedVariant =
    variant && typeof variant === "string"
      ? variant.trim().toLowerCase()
      : "swarnim_agarbatti";

  const matchedKey = Object.keys(faqData).find(
    (key) => key.toLowerCase() === normalizedVariant
  );

  const selectedVariant = faqData[matchedKey] || faqData.Swarnim_Agarbatti || Object.values(faqData)[0];
  const displayImage = image || selectedVariant.image;

  const toggleIndex = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };


  // Reset FAQ accordion when variant changes
  useEffect(() => {
    setOpenIndex(null);
  }, [variant]);

  return (
    <section
      id="FAQ-section"
      className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#edd9be] rounded-full blur-3xl opacity-25 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#fae8e8] rounded-full blur-3xl opacity-30 -z-10"></div>

      {/* ======= Centered Header Section ======= */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="font-1 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-[#382013]">
          FAQ About Sacred Agarbatti
        </h2>

        <p className="font-7 text-[#5c4738] text-base lg:text-lg leading-relaxed">
          Discover everything you need to know about our authentic Natural Gugal Agarbatti and {variant ? variant.replace('_', ' ') : 'Sacred Agarbatti'} from pure natural ingredients and Gir cow dung to clean burning and divine pooja atmosphere.
        </p>
      </div>

      {/* ======= Main Grid ======= */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        {/* Left Side - Image */}
        <div className="lg:col-span-2 space-y-8 lg:sticky lg:top-8">
          <div className="relative block max-w-sm mx-auto lg:max-w-none">
            <div className="relative bg-white rounded-3xl shadow-xl border-2 border-[#e6cfab] overflow-hidden">
              {buyLink ? (
                <a
                  href={buyLink}
                  target={buyLink.startsWith("http") ? "_blank" : "_self"}
                  rel={buyLink.startsWith("http") ? "noopener noreferrer" : ""}
                  className="block w-full group cursor-pointer"
                  title={`View ${variant ? variant.replace('_', ' ') : 'Sacred Agarbatti'}`}
                >
                  <img
                    key={displayImage || variant}
                    src={displayImage}
                    alt={`${variant ? variant.replace('_', ' ') : 'Sacred Agarbatti'}`}
                    className="w-full h-auto aspect-square object-cover transition-all duration-500 rounded-3xl group-hover:scale-105 block"
                  />
                </a>
              ) : (
                <img
                  key={displayImage || variant}
                  src={displayImage}
                  alt={`${variant ? variant.replace('_', ' ') : 'Sacred Agarbatti'}`}
                  className="w-full h-auto aspect-square object-cover transition-all duration-500 rounded-3xl hover:scale-105 block"
                />
              )}
            </div>
          </div>
        </div>

        {/* Right Side - FAQ Accordion */}
        <div className="lg:col-span-3">
          <div className="space-y-4">
            {selectedVariant.faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className={`relative group transition-all duration-300 ${isOpen ? "mb-4" : ""
                    }`}
                >
                  {/* FAQ Card */}
                  <div
                    className={`border-2 rounded-2xl transition-all duration-300 ${isOpen
                      ? "border-[#b82329] bg-[#fffaf5] shadow-xl shadow-[#b82329]/10"
                      : "border-[#e6cfab] bg-white/90 hover:border-[#b82329]/50 hover:shadow-lg"
                      }`}
                  >
                    {/* Question Button */}
                    <button
                      onClick={() => toggleIndex(i)}
                      className="w-full flex justify-between items-center gap-4 text-left px-5 sm:px-6 py-5 focus:outline-none cursor-pointer"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        {/* Circle Icon */}
                        <div
                          className={`mt-0.5 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                            ? "bg-[#b82329] text-white scale-110"
                            : "bg-[#fbf7f0] text-[#382013] group-hover:bg-[#fae8e8] group-hover:text-[#b82329]"
                            }`}
                        >
                          <HelpCircle className="w-4 h-4" />
                        </div>

                        <span
                          className={`font-2 text-base sm:text-lg font-semibold transition-colors ${isOpen ? "text-[#b82329]" : "text-[#382013]"
                            }`}
                        >
                          {faq.q}
                        </span>
                      </div>

                      {/* Chevron Icon */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                          ? "bg-[#fae8e8] text-[#b82329] rotate-180"
                          : "bg-[#fbf7f0] text-[#9c6a1e] group-hover:bg-[#fae8e8] group-hover:text-[#b82329]"
                          }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>

                    {/* Answer */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                      <div className="px-5 sm:px-6 pb-5 pt-1">
                        <div className="pl-6 border-l-2 border-[#b82329] ml-4">
                          <p className="font-2 text-[#4a3b32] text-sm sm:text-base leading-relaxed">
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
