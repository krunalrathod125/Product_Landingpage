import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { ShoppingBag, ArrowRight, ExternalLink, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Form from "./Form";
import FAQSection from "./FAQSection";
import AboutUs from "./AboutUs";
import TwoPostImages from "./Twopostimage";
import Blogs from "./Blog";
import ProductSection from "../components/ProductSection";
import { productsData } from "../data/products";

const BhagvatPrasadam = () => {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto scroll to section if state passed from navigation
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

  const [selectedPerfume, setSelectedPerfume] = useState(productsData[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectProduct = (product) => {
    setSelectedPerfume(product);
  };

  const heroWaMessage = encodeURIComponent(
    `Hello Sugandham! I would like to purchase the ${selectedPerfume.heading} Attar (12ml Roll-On) at ${selectedPerfume.price}. Please provide ordering details.`
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-yellow-50 to-orange-50">
      {/* 1. Hero / Perfume Selector Section */}
      <section className="pt-10 pb-12 px-4 bg-[#fefcfa] border-b border-amber-100/60">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Heading, Subheading, Description, Pricing, Buy Now & Thumbnails */}
            <div className="space-y-6 animate-fade-in">
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 bg-[#f1e0c5] px-3.5 py-1 rounded-full text-xs font-bold text-[#70470d] tracking-wider uppercase">
                {selectedPerfume.badge || "Pure Attar"} • {selectedPerfume.volume || "12ml Roll-On"}
              </div>

              <h2 className="font-1 text-5xl md:text-6xl font-bold text-[#70470d] leading-tight">
                {selectedPerfume.heading}
                <span className="font-2 block text-3xl md:text-4xl text-[#c79e64] mt-2">
                  {selectedPerfume.subheading}
                </span>
              </h2>

              <p className="font-7 text-lg text-[#3B3B3B] leading-relaxed">
                {selectedPerfume.description}
              </p>

              {/* Price & Rating Box */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-baseline gap-2.5">
                  <span className="text-3xl sm:text-4xl font-bold text-[#70470d]">
                    {selectedPerfume.price}
                  </span>
                  {selectedPerfume.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      {selectedPerfume.originalPrice}
                    </span>
                  )}
                  {selectedPerfume.discount && (
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                      {selectedPerfume.discount}
                    </span>
                  )}
                </div>

                <div className="h-6 w-px bg-amber-200 hidden sm:block"></div>

                <div className="flex items-center gap-1.5 text-amber-500">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-800">
                    {selectedPerfume.rating || "4.9"}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({selectedPerfume.reviews || "1,200+"} reviews)
                  </span>
                </div>
              </div>

              {/* CTA Buttons: Buy Now & WhatsApp */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={selectedPerfume.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#8c6226] via-[#70470d] to-[#4e2c05] hover:from-[#70470d] hover:to-[#381e02] text-white font-bold text-base sm:text-lg px-8 py-3.5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 group/heroBuy cursor-pointer"
                  title={`Buy ${selectedPerfume.heading} on store`}
                >
                  <ShoppingBag className="w-5 h-5 transition-transform group-hover/heroBuy:scale-110" />
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4 group-hover/heroBuy:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`https://wa.me/918850011652?text=${heroWaMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 bg-emerald-50 hover:bg-emerald-600 hover:text-white text-emerald-800 font-semibold text-sm sm:text-base px-5 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group/wa cursor-pointer"
                  title={`Order ${selectedPerfume.heading} via WhatsApp`}
                >
                  <FaWhatsapp className="w-5 h-5 text-emerald-600 group-hover/wa:text-white transition-colors" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

              {/* Value propositions */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 pt-1">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  100% Alcohol-Free Pure Oil
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  12-Hour Long Lasting
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Free Express Delivery
                </span>
              </div>

              {/* Fragrance Selector Thumbnails */}
              <div className="pt-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Select Fragrance:
                </p>
                <div className="flex flex-wrap gap-4 justify-start">
                  {productsData.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleSelectProduct(item)}
                      className={`group flex flex-col items-center text-center bg-white rounded-xl shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer p-1 ${
                        selectedPerfume.name === item.name
                          ? "ring-2 ring-[#C47B48] shadow-lg scale-105"
                          : "opacity-80 hover:opacity-100"
                      }`}
                      title={item.heading}
                    >
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                        <img
                          src={item.image}
                          alt={item.heading}
                          className="w-full h-full object-cover transition-all duration-300 rounded-lg"
                        />
                      </div>
                      <span className="text-[10px] font-bold text-[#70470d] mt-1 max-w-[70px] truncate">
                        {item.heading}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Main Perfume Bottle (Clickable to redirect to product link) */}
            <div className="relative flex justify-center">
              <a
                href={selectedPerfume.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/mainImg relative block max-w-md w-full cursor-pointer"
                title={`Click on image to view and buy ${selectedPerfume.heading}`}
              >
                <img
                  src={selectedPerfume.mainImage}
                  alt={selectedPerfume.name}
                  className="z-10 transition-all duration-500 ease-in-out rounded-2xl w-full h-auto object-contain drop-shadow-2xl group-hover/mainImg:scale-[1.03]"
                />

                {/* Floating Overlay Badge on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-black/15 backdrop-blur-[1px] opacity-0 group-hover/mainImg:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/95 text-[#70470d] font-bold text-sm px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover/mainImg:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="w-4 h-4 text-[#8c6226]" />
                    Redirect to Product Link
                  </span>
                </div>

                {/* Volume badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-amber-200 text-[#70470d] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  {selectedPerfume.volume || "12ml Roll-On"}
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Banner Section */}
      <section className="w-full relative">
        <img
          src={selectedPerfume.baner1}
          alt={selectedPerfume.name}
          className="w-full h-auto object-contain"
        />
      </section>

      {/* 3. FAQ Section */}
      <FAQSection variant={selectedPerfume.name} />

      {/* 4. Two Post Images (Benefits & Aura) */}
      <TwoPostImages variant={selectedPerfume.name} />

      {/* 5. About Section */}
      <section id="about">
        <AboutUs variant={selectedPerfume.name} />
      </section>

      {/* 6. Product Section Showcase with Buy Now Buttons & Clickable Images */}
      <ProductSection
        onSelectProduct={(item) => {
          setSelectedPerfume(item);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />

      {/* 7. Recent Blogs Section */}
      <Blogs />

      {/* 8. Interactive Contact Form */}
      <Form />
    </div>
  );
};

export default BhagvatPrasadam;
