import React from "react";
import {
  Flame,
  Sprout,
  Infinity,
  Flower2,
  Heart,
  Sparkles,
  TreePine,
  Crown,
  Star,
  Flower,
  HeartHandshake,
  Leaf,
  Sun,
  Feather,
  Award,
  Send,
} from "lucide-react";

// Icon mapping
const iconMap = {
  Flame,
  Sprout,
  Infinity,
  Flower2,
  Heart,
  Sparkles,
  TreePine,
  Crown,
  Star,
  Flower,
  HeartHandshake,
  Leaf,
  Sun,
  Feather,
};

const aboutData = {
  Kesar_Chandan: {
    heading: "About",
    subheading: "The Essence of Calm and Purity.",
    description:
      "Kesar Chandan blends the warmth of saffron with the sacred richness of sandalwood. It’s a soothing fragrance that embodies peace, purity, and spiritual grace — a scent that connects body and soul in perfect harmony.",
    steps: [
      {
        icon: "Flame",
        title: "Crafted with Tradition",
        text: "Infused with pure sandalwood and natural saffron for an authentic, calming aroma.",
      },
      {
        icon: "Sprout",
        title: "Warm & Grounding",
        text: "The fragrance radiates inner peace through creamy, woody undertones.",
      },
      {
        icon: "Infinity",
        title: "For Mindful Moments",
        text: "Perfect for meditation, reflection, or whenever you seek stillness and serenity.",
      },
    ],
    image: "/Product - Kesar Chandan.webp",
  },
  Mogra: {
    heading: "About",
    subheading: "Grace. Freshness. Floral Elegance.",
    description:
      "Mogra captures the delicate aroma of blooming jasmine — pure, fresh, and beautifully romantic. It’s a scent that celebrates nature’s soft beauty and the serenity of every breath.",
    steps: [
      {
        icon: "Flower2",
        title: "Inspired by Jasmine",
        text: "Crafted from the essence of fresh Mogra flowers, known for their sweet and calming scent.",
      },
      {
        icon: "Heart",
        title: "Timelessly Feminine",
        text: "A fragrance that wraps you in softness, evoking purity and grace with every note.",
      },
      {
        icon: "Sparkles",
        title: "Everyday Luxury",
        text: "Perfect for daily wear, celebrations, or any moment that calls for a touch of floral charm.",
      },
    ],
    image: "/Product - Mogra.webp",
  },
  Oudh: {
    heading: "About",
    subheading: "Power. Prestige. Timeless Depth.",
    description:
      "Woody Oudh embodies luxury and strength — a royal fragrance with deep agarwood notes and a smoky, warm base. It speaks of confidence, sophistication, and regal presence.",
    steps: [
      {
        icon: "TreePine",
        title: "Rare Agarwood Essence",
        text: "Made with authentic Oudh oil that delivers a bold, long-lasting woody aroma.",
      },
      {
        icon: "Crown",
        title: "Majestic Aroma",
        text: "Blends spice, amber, and resinous depth to create a fragrance of pure opulence.",
      },
      {
        icon: "Star",
        title: "For the Confident Soul",
        text: "Ideal for evenings, occasions, or whenever you want to make a lasting impression.",
      },
    ],
    image: "/Product - Oudh.webp",
  },
  Royal_London: {
    heading: "About",
    subheading: "Power. Prestige. Timeless Depth.",
    description:
      "Woody Oudh embodies luxury and strength — a royal fragrance with deep agarwood notes and a smoky, warm base. It speaks of confidence, sophistication, and regal presence.",
    steps: [
      {
        icon: "TreePine",
        title: "Rare Agarwood Essence",
        text: "Made with authentic Oudh oil that delivers a bold, long-lasting woody aroma.",
      },
      {
        icon: "Crown",
        title: "Majestic Aroma",
        text: "Blends spice, amber, and resinous depth to create a fragrance of pure opulence.",
      },
      {
        icon: "Star",
        title: "For the Confident Soul",
        text: "Ideal for evenings, occasions, or whenever you want to make a lasting impression.",
      },
    ],
    image: "/Product - Oudh.webp",
  },
  Rose: {
    heading: "About",
    subheading: "Romantic. Pure. Timeless Beauty.",
    description:
      "Red Rose is a fragrance of love and grace — capturing the essence of freshly bloomed roses. It’s elegant, emotional, and deeply comforting, symbolizing affection and eternal romance.",
    steps: [
      {
        icon: "Flower",
        title: "Crafted from Nature’s Finest Roses",
        text: "Extracted from handpicked red roses to preserve their natural, rich aroma.",
      },
      {
        icon: "HeartHandshake",
        title: "Soft Yet Captivating",
        text: "A gentle floral perfume that brings warmth, tenderness, and joy to your senses.",
      },
      {
        icon: "Sparkles",
        title: "For Every Heartfelt Moment",
        text: "Perfect for dates, celebrations, or any day you wish to express love and beauty.",
      },
    ],
    image: "/Product - Rose.webp",
  },
  Sukhad_Chandan: {
    heading: "About",
    subheading: "The Calm of Timeless Purity",
    description:
      "Sukhad Chandan is a serene sandalwood fragrance that captures the essence of peace and grounding energy. Its smooth, woody warmth connects you to nature and inner stillness, offering a soothing scent that lingers with spiritual calm and understated elegance.",
    steps: [
      {
        icon: "Leaf",
        title: "Pure Sandalwood Extract",
        text: "Steam-distilled to preserve its rich, smooth, and grounding woody character.",
      },
      {
        icon: "Sun",
        title: "Soothing & Meditative",
        text: "Brings relaxation to your mind and aura with its soft, calming aroma.",
      },
      {
        icon: "Feather",
        title: "Subtle Everyday Wear",
        text: "A gentle scent for those who appreciate spirituality, simplicity, and lasting harmony.",
      },
    ],
    image: "/Product - Sukhad Chandan.webp",
  },
  Royal_London: {
    heading: "About",
    subheading: "Aristocracy. Prestige. Timeless Luxury.",
    description:
      "Royal London is an ode to timeless British sophistication. Blending noble cedarwood, invigorating bergamot, and warm oriental spices, it represents quiet power, executive confidence, and regal refinement.",
    steps: [
      {
        icon: "Crown",
        title: "British Heritage Inspired",
        text: "Infused with refined cedarwood, bergamot, and warm spices for an aristocratic aroma.",
      },
      {
        icon: "Sparkles",
        title: "Long-Lasting Distinction",
        text: "A commanding yet suave fragrance that leaves an unforgettable signature trail.",
      },
      {
        icon: "Award",
        title: "Executive & Black-Tie Ready",
        text: "Crafted for formal evenings, executive meetings, and gala celebrations.",
      },
    ],
    image: "/Product - Royal London.webp",
  },
};

const AboutUs = ({ variant = "Kesar_Chandan" }) => {
  const current = aboutData[variant] || aboutData.Kesar_Chandan;

  const scrollToContact = () => {
    const el = document.getElementById("contactForm");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-white via-[#f1e0c5]/10 to-white py-8 sm:py-10 lg:py-14 overflow-hidden"
    >
      {/* Background blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f1e0c5] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c79e64] rounded-full blur-3xl opacity-15"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#8c6226]/5 to-[#c79e64]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f1e0c5] px-5 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#70470d]" />
            <span className="text-sm font-semibold text-[#70470d]">
              Our Story
            </span>
          </div>

          <h1 className="font-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#70470d] mb-4 leading-tight">
            {current.heading}
          </h1>

          <h2 className="font-2 text-2xl sm:text-3xl md:text-4xl text-[#c79e64] mb-6 leading-tight">
            {current.subheading}
          </h2>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
            {current.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image with floating badges */}
          <div className="lg:col-span-5 order-1">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[#f1e0c5] bg-gradient-to-br from-[#f1e0c5]/20 to-transparent p-4">
                <img
                  src={current.image}
                  alt={`${variant} Perfume Bottle`}
                  className="w-full h-[400px] sm:h-[500px] object-contain rounded-2xl transform transition-transform duration-700 hover:scale-105"
                />
              </div>              
              {/* Decorative accent rings */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-4 border-[#c79e64] rounded-full opacity-30 pointer-events-none"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-[#8c6226] rounded-full opacity-20 pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column: 3 Steps + Connect Button */}
          <div className="lg:col-span-7 order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {current.steps.map((step, idx) => {
                const IconComponent = iconMap[step.icon] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="group relative bg-white border-2 border-[#f1e0c5] p-6 shadow-sm hover:shadow-xl hover:border-[#8c6226] transition-all duration-300 hover:-translate-y-1"
                  >
                    {/* Step number badge */}
                    <div className="absolute -top-3 -left-3 bg-gradient-to-br from-[#8c6226] via-[#70470d] to-[#3e2505] text-white font-bold rounded-xl w-10 h-10 flex items-center justify-center shadow-lg text-sm">
                      {idx + 1}
                    </div>

                    {/* Step icon */}
                    <div className="bg-gradient-to-br from-[#f1e0c5] to-[#f1e0c5]/50 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7 text-[#70470d]" />
                    </div>

                    <h4 className="text-lg font-bold text-[#70470d] mb-2 group-hover:text-[#9b7540] transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.text}
                    </p>

                    {/* Animated hover line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-br from-[#8c6226] via-[#70470d] to-[#3e2505] group-hover:w-full transition-all duration-500"></div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#8c6226] to-[#70470d] hover:from-[#6B4A39] hover:to-[#4d3830] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Send className="w-5 h-5" />
                Connect With Us
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Story Quote Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-[#f1e0c5] via-white to-[#f1e0c5] p-8 rounded-3xl border-2 border-[#f1e0c5]">
            <div className="absolute -top-4 left-8 text-6xl text-[#c79e64] opacity-30 select-none">
              "
            </div>
            <p className="text-center text-gray-700 text-lg italic leading-relaxed relative z-10">
              Every fragrance tells a story. We craft ours with passion, precision, and a commitment to excellence that you can smell in every drop.
            </p>
            <div className="absolute -bottom-4 right-8 text-6xl text-[#c79e64] opacity-30 rotate-180 select-none">
              "
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
