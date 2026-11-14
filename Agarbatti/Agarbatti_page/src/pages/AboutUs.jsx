import React from "react";
import {
  Flame,
  Sprout,
  Infinity as InfinityIcon,
  Flower2,
  Heart,
  TreePine,
  Crown,
  Star,
  Flower,
  HeartHandshake,
  Leaf,
  Sun,
  Feather,
  Award,
  Handshake,
  Shield
} from "lucide-react";

// Icon mapping
const iconMap = {
  Flame,
  Sprout,
  Infinity: InfinityIcon,
  Flower2,
  Heart,
  TreePine,
  Crown,
  Star,
  Flower,
  HeartHandshake,
  Leaf,
  Sun,
  Feather,
  Award,
  Shield,
};

// Data object
const aboutData = {
  Swarnim_Agarbatti: {
    heading: "About Swarnim Premium Incense",
    subheading: "Divine Temple Fragrance Pure Fragrance Divine Feel",
    description:
      "Swarnim Premium Incense and authentic Natural Gugal Agarbatti bring sacred Vedic aromas into your home. Handcrafted with 100 percent natural botanical ingredients and zero charcoal for a slow temple burn, it calms the mind, provides enduring long lasting fragrance, and creates an auspicious temple ambiance for daily pooja.",
    steps: [
      {
        icon: "Crown",
        title: "Pure Fragrance Divine Feel",
        text: "Infused with exquisite sacred temple florals and golden herbal essences that elevate your spiritual aura and invite divine blessings.",
      },
      {
        icon: "Sprout",
        title: "100 Percent Natural Botanical Ingredients",
        text: "Crafted exclusively with pure botanical powders and sacred tree resins with zero charcoal, toxic chemicals, or dipping synthetics.",
      },
      {
        icon: "Infinity",
        title: "Slow Temple Burn and Long Lasting",
        text: "Clean consistent slow smouldering that releases smooth white aromatic smoke and fills your entire home with lasting peace.",
      },
      {
        icon: "Leaf",
        title: "Calms Mind and Perfect for Daily Pooja",
        text: "Enriched with sacred botanicals that reduce mental stress, awaken devotional calm, and harmonize your daily prayer rituals.",
      },
    ],
    image: "/swarnim-agarbatti-main.jpg",
  },

  Ponds_Agarbatti: {
    heading: "About Ponds Premium Incense",
    subheading: "Temple Garden Fresh Calming Floral Water Lily and Morning Flora",
    description:
      "Ponds Premium Incense Temple Garden and pure Natural Gugal Agarbatti bring the refreshing floral tranquility of water lilies and morning flora into your living room and prayer altar. Created to cultivate a peaceful atmosphere, it delivers a pure fragrance divine feel with long lasting botanical sweetness.",
    steps: [
      {
        icon: "Flower2",
        title: "Temple Garden Floral Scent",
        text: "Captures fresh invigorating water lily blossoms and morning floral notes that naturally revitalize the mind and home air.",
      },
      {
        icon: "Sun",
        title: "Creates a Peaceful Atmosphere",
        text: "Ideal for relieving daily tension, deep meditation, quiet reading, or welcoming guests with a fresh soothing ambiance.",
      },
      {
        icon: "Infinity",
        title: "Pure Fragrance Divine Feel",
        text: "Delicate yet pervasive long lasting fragrance that lingers pleasantly for hours without overwhelming the senses.",
      },
      {
        icon: "Leaf",
        title: "100 Percent Natural and Charcoal Free",
        text: "Formulated with pure plant gum binders and distilled flower extracts that burn smoothly with gentle non irritating smoke.",
      },
    ],
    image: "/ponds-agarbatti-main.jpg",
  },

  Kewda_Agarbatti: {
    heading: "About Premium Kewda Incense",
    subheading: "Experience the Divine Fragrance of Kewda A Sacred Aroma for Every Ritual",
    description:
      "Experience the Divine Fragrance of Kewda and pure Natural Gugal Agarbatti in their purest expression. Known as a sacred aroma for every ritual, this 100 percent natural Pandanus floral incense creates a peaceful atmosphere, enchants the senses, and uplifts every festive celebration and daily pooja.",
    steps: [
      {
        icon: "Flower",
        title: "Experience Divine Fragrance of Kewda",
        text: "Inspired by sacred Indian Pandanus flowers known for their rich sweet and unforgettable floral nectar aroma.",
      },
      {
        icon: "Heart",
        title: "A Sacred Aroma for Every Ritual",
        text: "Revered in Lord Shiva worship, Abhishekams, Diwali, Navratri, weddings, and creating a joyous spiritual sanctuary.",
      },
      {
        icon: "Infinity",
        title: "Creates a Peaceful Atmosphere",
        text: "Dispel melancholy and daily stress with an uplifting celebratory floral aura that brings devotional happiness to family spaces.",
      },
      {
        icon: "Leaf",
        title: "100 Percent Natural Ingredients and Long Lasting",
        text: "Crafted with authentic Ketaki floral distillate, aromatic wood powders, and natural tree gums free from synthetic irritants.",
      },
    ],
    image: "/kewda-agarbatti-main.jpg",
  },

  Sapt_Rushi_Agarbatti: {
    heading: "About Sapta Rishi Incense",
    subheading: "A Divine Fragrance for a Peaceful Life Seven Sacred Herbs",
    description:
      "Sapta Rishi Incense and Natural Gugal Agarbatti deliver a divine fragrance for a peaceful life. Formulated with seven sacred Vedic herbs honoring the ancient Sapta Rishis, this 100 percent natural charcoal free slow temple burn incense is revered for deep dhyana, yoga, and meditation.",
    steps: [
      {
        icon: "Crown",
        title: "A Divine Fragrance for a Peaceful Life",
        text: "A sacred formulation uniting seven potent Vedic herbs, woods, and forest resins to awaken spiritual clarity and lifelong peace.",
      },
      {
        icon: "Shield",
        title: "Deep Dhyana and Meditation",
        text: "Specifically formulated for yogic dhyana, pranayama breathwork, Vedic mantra chanting, and personal energy protection.",
      },
      {
        icon: "Infinity",
        title: "Slow Temple Burn and Charcoal Free",
        text: "Dense artisanal incense sticks offering a steady slow smoulder that leaves an enduring sacred temple aroma for hours.",
      },
      {
        icon: "Leaf",
        title: "Ancient Vedic Sages Formulation",
        text: "Crafted with pure herbal powders, sacred tree resins, and traditional Vedic botanicals free from synthetic dipping chemicals.",
      },
    ],
    image: "/sapt-rushi-agarbatti-main.jpg",
  },

  Kasturi_Agarbatti: {
    heading: "About Kasturi Whir Musk Temple Incense",
    subheading: "Pure Fragrance for a Divine Experience Deep Warm Musk and Amber",
    description:
      "Kasturi Whir Musk Temple Incense and Natural Gugal Agarbatti deliver a pure fragrance for a divine experience. Crafted with rich warm musk and amber notes, it brings spiritual calm and focus with zero charcoal and an enduring long lasting fragrance for sacred pooja.",
    steps: [
      {
        icon: "Flame",
        title: "Pure Fragrance for a Divine Experience",
        text: "Infused with rich traditional Kasturi musk notes that soothe nervous tension and elevate conscious spiritual awareness.",
      },
      {
        icon: "Sprout",
        title: "Deep Warm Musk and Amber",
        text: "A comforting grounding earthy aroma with warm amber undertones that transforms your home into a serene temple sanctum.",
      },
      {
        icon: "Infinity",
        title: "Spiritual Calm and Meditation",
        text: "Specially formulated for morning pooja, evening Sandhya aarti, deep yoga practices, and mindful stillness.",
      },
      {
        icon: "Leaf",
        title: "100 Percent Natural and Zero Charcoal",
        text: "Enriched with natural aromatic tree gums, sacred herbal powders, and essential oils for a clean non toxic long lasting burn.",
      },
    ],
    image: "/kasturi-agarbatti-main.jpg",
  },

  Gugal_Agarbatti: {
    heading: "About Natural Gugal Agarbatti",
    subheading: "Divine Fragrance for a Peaceful Home Traditional Indian Incense",
    description:
      "Premium Natural Gugal Agarbatti provides an authentic divine fragrance for a peaceful home. Handcrafted with authentic Guggal resin, sacred Gir cow dung, pure Vedic cow ghee, and Bhimseni camphor, this chemical free long lasting traditional Indian incense offers sacred havan purification in every stick.",
    steps: [
      {
        icon: "Flame",
        title: "Divine Fragrance for a Peaceful Home",
        text: "Purifies indoor room energy, clears airborne pollutants, and surrounds your family with positive divine vibrations.",
      },
      {
        icon: "Shield",
        title: "Sacred Havan Purification",
        text: "Formulated to replicate the sanctifying power of ancient Vedic fire rituals Yajna for powerful home and Vastu cleansing.",
      },
      {
        icon: "Infinity",
        title: "Gir Cow Dung and Pure Ghee Base",
        text: "Traditional sacred havan base made with Gir cow dung and pure Vedic cow ghee that burns cleanly without toxic chemical binders.",
      },
      {
        icon: "Leaf",
        title: "Chemical Free and Long Lasting",
        text: "Fortified with authentic Guggal resin and natural Bhimseni camphor for a slow steady burn with lingering temple aroma.",
      },
    ],
    image: "/gugal-agarbatti-main.jpg",
  },
};

// Main Component
const AboutUs = ({ variant = "Swarnim_Agarbatti" }) => {
  const data = aboutData[variant] || aboutData["Swarnim_Agarbatti"];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-white via-[#f1e0c5]/10 to-white py-8 sm:py-10 lg:py-14 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#edd9be] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#fae8e8] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#b82329]/5 to-[#d49b35]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#382013] mb-4 leading-tight">
            {data.heading}
          </h1>
          <h2 className="font-2 text-2xl sm:text-3xl md:text-4xl text-[#b82329] font-semibold mb-6 leading-tight">
            {data.subheading}
          </h2>
          <p className="text-[#4a3b32] leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
            {data.description}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <div className="lg:col-span-5 order-1">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[#e6cfab] bg-gradient-to-br from-[#edd9be]/25 to-transparent p-4">
                <img
                  src={data.image}
                  alt={`${variant.replace("_", " ")} Sacred Agarbatti Pack Nilkanth Dham`}
                  className="w-full h-[400px] sm:h-[500px] object-contain rounded-2xl transform transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.target.src =
                      "/swarnim-agarbatti-pack.png";
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Steps */}
          <div className="lg:col-span-7 order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {data.steps.map((step, index) => {
                const Icon = iconMap[step.icon];
                return (
                  <div
                    key={index}
                    className="group relative bg-white border-2 border-[#e6cfab] p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#b82329] transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute -top-3 -left-3 bg-gradient-to-br from-[#b82329] via-[#c92f35] to-[#991b1f] text-white font-bold rounded-xl w-10 h-10 flex items-center justify-center shadow-lg text-sm">
                      {index + 1}
                    </div>

                    <div className="bg-[#fbf7f0] border border-[#e6cfab]/60 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#b82329]" />
                    </div>

                    <h4 className="text-lg font-bold text-[#382013] mb-2 group-hover:text-[#b82329] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[#5c4738] text-sm leading-relaxed">
                      {step.text}
                    </p>

                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#b82329] via-[#d49b35] to-[#b82329] group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  const formSection = document.getElementById("contactForm");
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#b82329] via-[#c92f35] to-[#991b1f] hover:from-[#991b1f] hover:to-[#7a1317] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#b82329]/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Handshake className="w-5 h-5" />
                Connect With Us
              </button>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#fbf8f2] via-white to-[#fbf8f2] p-8 rounded-3xl border-2 border-[#e6cfab] shadow-sm">
            <p className="text-center text-[#4a3b32] text-lg italic leading-relaxed relative z-10 font-medium">
              Every stick of sacred Nilkanth Dham Agarbatti carries an ancestral prayer of purity peace and devotion. Crafted with pure Gir cow dung, Vedic ghee, authentic Guggal, and handpicked botanical resins, our Natural Gugal Agarbatti and charcoal free incense turn every home into a sacred divine temple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
