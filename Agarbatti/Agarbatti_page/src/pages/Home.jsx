

import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { Heart, Leaf, Star, Check, Shield, Sun, Lightbulb, TrendingUp, Clock, Layers, Droplet, FlaskConical, Package, ShoppingBag, ArrowRight, ShieldCheck, Truck, Sparkles, Flame } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Form from "./Form";
import FAQSection from './FAQSection';
import AboutUs from './AboutUs';
import Blogs from './Blog';

const BhagvatPrasadam = () => {
  const location = useLocation();

  // ✅ Auto scroll to section if state passed from navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const target = location.state.scrollTo;
      setTimeout(() => {
        scroller.scrollTo(target, {
          smooth: true,
          duration: 800,
          offset: -80,
        });
      }, 300);

      // Clear state so it doesn’t re-trigger
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const perfumeVarients = [
    {
      name: "Swarnim_Agarbatti",
      heading: "Swarnim Premium Incense",
      subheading: "Divine Temple Fragrance Pure Fragrance Divine Feel",
      description: `Awaken your sacred space with Swarnim Premium Incense and authentic Natural Gugal Agarbatti. Handcrafted with 100 percent natural botanical ingredients and zero charcoal for a slow temple burn. Infused with pure spiritual aroma that calms mind, creates a peaceful atmosphere, and fills your prayer room with long lasting fragrance. Perfect for daily pooja, morning aarti, and meditation.`,
      image: "/swarnim-agarbatti-pack.png",
      mainImage: "/swarnim-agarbatti-main.jpg",
      baner1: "/Banner-1 Swarnim Premium Incense_ Divine Temple Fragrance.webp",
      price: "₹94",
      originalPrice: "₹123",
      discount: "24% OFF",
      volume: "100g Premium Incense",
      buyLink: "https://store.nilkanthdham.in/products/swarnim-agarbatti",
    },
    {
      name: "Kasturi_Agarbatti",
      heading: "Kasturi Whir Musk Incense",
      subheading: "Pure Fragrance for a Divine Experience Deep Warm Musk",
      description: `Experience the sacred warmth of Kasturi Whir Musk Temple Incense alongside our pure Natural Gugal Agarbatti. Featuring rich deep warm musk and amber notes, it delivers a pure fragrance for a divine experience. 100 percent charcoal free, it fosters spiritual calm and focus with an enduring long lasting fragrance ideal for daily pooja, prayer rituals, and serene meditation.`,
      image: "/kasturi-agarbatti-pack.png",
      mainImage: "/kasturi-agarbatti-main.jpg",
      baner1: "/Banner-1 Kasturi Whir Musk Temple Incense Banner.webp",
      price: "₹118",
      originalPrice: "₹154",
      discount: "23% OFF",
      volume: "170g / 200g Premium Incense",
      buyLink: "https://store.nilkanthdham.in/products/kasturi-agarbatti",
    },
    {
      name: "Ponds_Agarbatti",
      heading: "Ponds Premium Incense",
      subheading: "Temple Garden Fresh Calming Floral Water Lily",
      description: `Step into a tranquil temple garden with Ponds Premium Incense and pure Natural Gugal Agarbatti. Infused with water lily and morning flora, it delivers a pure fragrance divine feel that creates a peaceful atmosphere, calms the mind, and rejuvenates home and sacred spaces with long lasting botanical sweetness.`,
      image: "/ponds-agarbatti-pack.png",
      mainImage: "/ponds-agarbatti-main.jpg",
      baner1: "/Banner-1 Ponds Premium Incense Temple Garden Banner.webp",
      price: "₹94",
      originalPrice: "₹123",
      discount: "24% OFF",
      volume: "200g Natural Incense",
      buyLink: "https://store.nilkanthdham.in/products/ponds-agarbatti-80",
    },
    {
      name: "Gugal_Agarbatti",
      heading: "Natural Gugal Agarbatti",
      subheading: "Divine Fragrance for a Peaceful Home Traditional Indian Incense",
      description: `Recreate sacred havan purification with pure Natural Gugal Agarbatti. Handcrafted with authentic Guggal resin, sacred Gir cow dung, pure Vedic cow ghee, and Bhimseni camphor. 100 percent chemical free and long lasting, it clears negative vibrations and brings a divine fragrance for a peaceful home.`,
      image: "/gugal-agarbatti-pack.png",
      mainImage: "/gugal-agarbatti-main.jpg",
      baner1: "/Banner-1 Premium Natural Gugal Agarbatti Banner.webp",
      price: "₹118",
      originalPrice: "₹154",
      discount: "23% OFF",
      volume: "170g / 200g Cow Dung & Ghee",
      buyLink: "https://store.nilkanthdham.in/products/gugal-agarbatti",
    },
    {
      name: "Kewda_Agarbatti",
      heading: "Premium Kewda Incense",
      subheading: "Experience the Divine Fragrance of Kewda Sacred Aroma for Every Ritual",
      description: `Delight in the sweet exotic pandanus blossoms of Original Kewda Agarbatti and authentic Natural Gugal Agarbatti. Specially crafted to create a peaceful atmosphere, this 100 percent natural incense provides a sacred aroma for every ritual, lifting your devotional mood with its long lasting uplifting floral bouquet.`,
      image: "/kewda-agarbatti-pack.png",
      mainImage: "/kewda-agarbatti-main.jpg",
      baner1: "/Banner-1 Premium Kewda Incense Banner.webp",
      price: "₹94",
      originalPrice: "₹123",
      discount: "24% OFF",
      volume: "200g Floral Incense",
      buyLink: "https://store.nilkanthdham.in/products/kevda-agarbatti",
    },
    {
      name: "Sapt_Rushi_Agarbatti",
      heading: "Sapta Rishi Incense",
      subheading: "A Divine Fragrance for a Peaceful Life Seven Sacred Herbs",
      description: `Formulated with seven sacred Vedic herbs honoring the ancient Sapta Rishis, this slow temple burn incense complements our Natural Gugal Agarbatti to bring a divine fragrance for a peaceful life. Charcoal free and rich with enduring temple sillage, it is specially crafted for deep dhyana, daily pooja, and serene meditation.`,
      image: "/sapt-rushi-agarbatti-pack.png",
      mainImage: "/sapt-rushi-agarbatti-main.jpg",
      baner1: "/Banner-1 Sapta Rishi Incense_ Divine Fragrance.webp",
      price: "₹154",
      originalPrice: "₹200",
      discount: "23% OFF",
      volume: "230g Sacred Blend",
      buyLink: "https://store.nilkanthdham.in/products/sapt-rushi-agarbatti",
    },
  ];

  const bannerProducts = [
    {
      name: "Swarnim Agarbatti",
      link: "https://store.nilkanthdham.in/products/swarnim-agarbatti",
      left: "5.5%",
      width: "16.5%",
      top: "35%",
      height: "58%",
      coords: "106,378,422,1004",
    },
    {
      name: "Kasturi Agarbatti",
      link: "https://store.nilkanthdham.in/products/kasturi-agarbatti",
      left: "22.0%",
      width: "15.0%",
      top: "35%",
      height: "58%",
      coords: "422,378,710,1004",
    },
    {
      name: "Ponds Agarbatti",
      link: "https://store.nilkanthdham.in/products/ponds-agarbatti-80",
      left: "37.0%",
      width: "14.5%",
      top: "35%",
      height: "58%",
      coords: "710,378,989,1004",
    },
    {
      name: "Gugal Agarbatti",
      link: "https://store.nilkanthdham.in/products/gugal-agarbatti",
      left: "51.5%",
      width: "14.5%",
      top: "35%",
      height: "58%",
      coords: "989,378,1267,1004",
    },
    {
      name: "Kewda Agarbatti",
      link: "https://store.nilkanthdham.in/products/kevda-agarbatti",
      left: "66.0%",
      width: "14.5%",
      top: "35%",
      height: "58%",
      coords: "1267,378,1546,1004",
    },
    {
      name: "Sapt Rushi Agarbatti",
      link: "https://store.nilkanthdham.in/products/sapt-rushi-agarbatti",
      left: "80.5%",
      width: "16.5%",
      top: "35%",
      height: "58%",
      coords: "1546,378,1862,1004",
    },
  ];

  const [selectedPerfume, setSelectedPerfume] = useState(perfumeVarients[0]);
  const bannerImgRef = useRef(null);
  const [scaledCoords, setScaledCoords] = useState({});

  const updateBannerCoords = () => {
    if (!bannerImgRef.current) return;
    const { clientWidth, clientHeight } = bannerImgRef.current;
    if (!clientWidth || !clientHeight) return;
    const newCoords = {};
    bannerProducts.forEach((p, idx) => {
      const l = (parseFloat(p.left) / 100) * clientWidth;
      const t = (parseFloat(p.top) / 100) * clientHeight;
      const w = (parseFloat(p.width) / 100) * clientWidth;
      const h = (parseFloat(p.height) / 100) * clientHeight;
      newCoords[idx] = `${Math.round(l)},${Math.round(t)},${Math.round(l + w)},${Math.round(t + h)}`;
    });
    setScaledCoords(newCoords);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    updateBannerCoords();
    window.addEventListener("resize", updateBannerCoords);
    return () => window.removeEventListener("resize", updateBannerCoords);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-3 sm:py-4 md:py-5 lg:py-0 px-4 sm:px-6 lg:px-8 bg-[#fefcfa] lg:min-h-[calc(100vh-66px)] lg:flex lg:items-center">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center w-full">
            <div className="space-y-3 sm:space-y-3.5 lg:space-y-4 animate-fade-in flex flex-col justify-center">

              <h2 className="font-1 text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-[#70470d] leading-tight">
                {selectedPerfume.heading}
                <span className="font-2 block text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-[#c79e64] mt-1">
                  {selectedPerfume.subheading}
                </span>
              </h2>

              <p className="font-7 text-xs sm:text-sm lg:text-sm xl:text-base text-[#3B3B3B] leading-relaxed line-clamp-3 sm:line-clamp-2 md:line-clamp-3">
                {selectedPerfume.description}
              </p>

              {/* Variants Selector */}
              <div className="space-y-1.5 pt-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#8c6226]">
                    Select Sacred Agarbatti:
                  </span>
                  <span className="text-[11px] sm:text-xs font-bold text-[#70470d] bg-[#f5e9d5] px-2 py-0.5 rounded-full">
                    {selectedPerfume.heading}
                  </span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2 pt-1">
                  {perfumeVarients.map((item, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedPerfume(item)}
                      className={`group flex flex-col items-center text-center bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer p-1.5 sm:p-2 focus:outline-none ${selectedPerfume.name === item.name
                        ? "ring-2 ring-[#8c6226] shadow-md shadow-[#8c6226]/20 bg-[#fdf8f0]"
                        : "border border-amber-100 hover:border-[#8c6226]/50"
                        }`}
                    >
                      <div className="relative w-11 h-11 sm:w-12 sm:h-12 lg:w-13 lg:h-13 bg-amber-50/50 rounded-lg flex items-center justify-center overflow-hidden p-0.5">
                        <img
                          src={item.image}
                          alt={item.heading}
                          className="w-full h-full object-contain transition-all duration-300 rounded-md"
                        />
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-[#70470d] mt-1 max-w-[65px] sm:max-w-[75px] truncate">
                        {item.heading.replace(" Incense", "").replace(" Agarbatti", "")}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={selectedPerfume.buyLink || "#contactForm"}
                  target={selectedPerfume.buyLink && selectedPerfume.buyLink.startsWith("http") ? "_blank" : "_self"}
                  rel={selectedPerfume.buyLink && selectedPerfume.buyLink.startsWith("http") ? "noopener noreferrer" : ""}
                  id="hero-buy-now-btn"
                  className="group inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#8c6226] via-[#a3722e] to-[#70470d] hover:from-[#70470d] hover:to-[#543306] text-white font-semibold text-sm sm:text-base px-6 py-2.5 sm:py-3 rounded-xl shadow-lg hover:shadow-xl hover:shadow-[#8c6226]/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                  <span>Buy {selectedPerfume.heading} Now</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative flex justify-center items-center w-full">
              <a
                href={selectedPerfume.buyLink || "#contactForm"}
                target={selectedPerfume.buyLink && selectedPerfume.buyLink.startsWith("http") ? "_blank" : "_self"}
                rel={selectedPerfume.buyLink && selectedPerfume.buyLink.startsWith("http") ? "noopener noreferrer" : ""}
                className="group relative w-auto max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[460px] block cursor-pointer"
                title={`Buy ${selectedPerfume.heading} Now`}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#c79e64]/25 via-[#8c6226]/15 to-transparent rounded-3xl filter blur-xl transform scale-95 -z-10 group-hover:scale-105 transition-transform duration-500"></div>
                <img
                  src={selectedPerfume.mainImage}
                  alt={`${selectedPerfume.heading} NilkanthDham Incense`}
                  className="z-10 w-auto max-w-full max-h-[280px] sm:max-h-[360px] md:max-h-[400px] lg:max-h-[calc(100vh-160px)] xl:max-h-[480px] object-contain transition-all duration-500 ease-in-out rounded-2xl shadow-xl border border-amber-100/60 group-hover:shadow-2xl group-hover:scale-[1.02] mx-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Agarbatti Banner */}
      <section className="w-full relative bg-amber-950">
        <a
          href={selectedPerfume.buyLink || "#contactForm"}
          target={selectedPerfume.buyLink && selectedPerfume.buyLink.startsWith("http") ? "_blank" : "_self"}
          rel={selectedPerfume.buyLink && selectedPerfume.buyLink.startsWith("http") ? "noopener noreferrer" : ""}
          className="block w-full cursor-pointer group"
          title={`Buy ${selectedPerfume.heading} Now`}
        >
          <img
            src={selectedPerfume.baner1}
            alt={`${selectedPerfume.heading} Sacred Temple Agarbatti Banner`}
            className="w-full h-auto max-h-[600px] object-cover transition-opacity duration-300 group-hover:opacity-95"
          />
        </a>
      </section>

      {/* Sections */}
      <FAQSection
        variant={selectedPerfume.name}
        image={selectedPerfume.mainImage}
        buyLink={selectedPerfume.buyLink}
      />

      <section id="about">
        <AboutUs variant={selectedPerfume.name} />
      </section>

      {/* Product Showcase Section - Full Width Responsive Banner */}
      <section id="product-section" className="w-full relative bg-[#140e08] overflow-hidden">
        <div className="relative w-full overflow-hidden">
          {/* Main Image with Image Map */}
          <img
            ref={bannerImgRef}
            src="/Divine Fragrance Incense Collection (2).png"
            alt="Shri Nilkanth Store Divine Fragrance Premium Agarbatti"
            useMap="#collection-map"
            className="w-full h-auto block select-none"
            onLoad={updateBannerCoords}
          />

          {/* HTML5 Standard Image Map */}
          <map name="collection-map">
            {bannerProducts.map((product, idx) => (
              <area
                key={idx}
                shape="rect"
                coords={scaledCoords[idx] || product.coords}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                alt={`Buy ${product.name}`}
                title={`Buy ${product.name}`}
              />
            ))}
          </map>

          {/* Fully Responsive Clickable Hotspots Overlay */}
          <div className="absolute inset-0 z-10">
            {bannerProducts.map((product, idx) => (
              <a
                key={idx}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  left: product.left,
                  top: product.top,
                  width: product.width,
                  height: product.height,
                }}
                className="group absolute cursor-pointer rounded-xl transition-all duration-300 flex flex-col items-center justify-end pb-2 sm:pb-6 hover:bg-amber-400/10 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
                title={`Buy ${product.name} Now`}
                aria-label={`Buy ${product.name}`}
              >
                {/* Floating Tooltip / Buy Badge on Hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-r from-[#b82329] via-[#c92f35] to-[#991b1f] text-white text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full shadow-xl shadow-[#b82329]/30 flex items-center gap-1.5 whitespace-nowrap pointer-events-none border border-[#f3caca]/30">
                  <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Buy {product.name}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Blogs />
      <Form />
    </div>
  );
};

export default BhagvatPrasadam;
