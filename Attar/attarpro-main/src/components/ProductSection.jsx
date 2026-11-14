import React, { useState } from "react";
import {
  ShoppingBag,
  ExternalLink,
  Star,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Truck,
  RotateCcw,
  Eye,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { productsData } from "../data/products";

export default function ProductSection({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Spiritual & Calm",
    "Luxury & Formal",
    "Pure Floral",
    "Royal & Bold",
  ];

  const filteredProducts =
    activeCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === activeCategory);

  return (
    <section id="product-section" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#fefcfa] via-[#fff9f0] to-[#fefcfa]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f1e0c5] px-4 py-1.5 rounded-full mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#70470d]" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#70470d]">
              100% Pure & Alcohol-Free
            </span>
          </div>
          <h2 className="font-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#70470d] mb-4 leading-tight">
            Our Luxury Attar Collection
          </h2>
          <p className="font-7 text-base sm:text-lg text-gray-700 leading-relaxed">
            Concentrated natural perfume oils handcrafted from pure Mysore sandalwood,
            Kashmiri saffron, night-blooming mogra, and royal agarwood.
            Click on any bottle image or <span className="font-semibold text-[#8c6226]">"Buy Now"</span> to order directly.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#70470d] text-white shadow-md scale-105"
                    : "bg-white text-gray-700 border border-amber-200 hover:border-[#8c6226] hover:bg-amber-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const waText = encodeURIComponent(
              `Hello Sugandham! I would like to buy the ${product.heading} Attar (12ml Roll-On) at ${product.price}. Please share payment and order details.`
            );

            return (
              <div
                key={product.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-amber-100 flex flex-col justify-between hover:-translate-y-1.5"
              >
                {/* Top Half: Image with Hover Overlay & Product Link */}
                <div className="relative overflow-hidden bg-gradient-to-b from-amber-50/60 to-transparent p-6 flex flex-col items-center">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span
                      className={`text-[11px] font-bold text-white px-3 py-1 rounded-full shadow-sm uppercase tracking-wider ${
                        product.badgeColor || "bg-[#70470d]"
                      }`}
                    >
                      {product.badge}
                    </span>
                  </div>

                  {/* Volume Tag */}
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm border border-amber-200 text-[#70470d] text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                    {product.volume}
                  </div>

                  {/* Clickable Image Container */}
                  <a
                    href={product.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block w-full max-w-[240px] aspect-square my-2 group/img cursor-pointer"
                    title={`Click to view and buy ${product.heading}`}
                  >
                    <img
                      src={product.image}
                      alt={product.heading}
                      className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover/img:scale-110 drop-shadow-md"
                    />

                    {/* Floating Hover Badge on Image */}
                    <div className="absolute inset-0 bg-black/15 backdrop-blur-[2px] rounded-2xl flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/95 text-[#70470d] font-bold text-xs sm:text-sm px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                        <ExternalLink className="w-4 h-4 text-[#8c6226]" />
                        Redirect to Product Link
                      </span>
                    </div>
                  </a>

                  {/* Quick Preview in Hero button */}
                  {onSelectProduct && (
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-xs text-[#8c6226] hover:text-[#5a3810] font-medium flex items-center gap-1 mt-1 transition-colors cursor-pointer"
                      title="Inspect this perfume in the interactive Hero view"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Details in Hero
                    </button>
                  )}
                </div>

                {/* Bottom Half: Details & CTAs */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-white border-t border-amber-50">
                  <div>
                    {/* Rating & Reviews */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                        <span className="text-xs font-bold text-gray-800 ml-1">
                          {product.rating}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Title & Subheading */}
                    <h3 className="font-1 text-xl sm:text-2xl font-bold text-[#70470d] mb-1">
                      <a
                        href={product.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-amber-600 transition-colors"
                      >
                        {product.heading}
                      </a>
                    </h3>

                    <p className="font-2 text-sm text-[#8c6226] font-medium mb-3">
                      {product.tagline || product.subheading}
                    </p>

                    <p className="font-7 text-xs sm:text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Pricing and Action Buttons */}
                  <div className="pt-4 border-t border-amber-100/70">
                    <div className="flex items-baseline justify-between mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-[#70470d]">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      {product.discount && (
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {product.discount}
                        </span>
                      )}
                    </div>

                    {/* Primary "Buy Now" CTA Button */}
                    <div className="space-y-2.5">
                      <a
                        href={product.productUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#8c6226] via-[#70470d] to-[#4e2c05] hover:from-[#70470d] hover:to-[#381e02] text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform active:scale-[0.98] text-sm sm:text-base group/btn"
                        title={`Buy ${product.heading} directly`}
                      >
                        <ShoppingBag className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                        <span>Buy Now</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>

                      {/* WhatsApp Quick Order Button */}
                      <a
                        href={`https://wa.me/918850011652?text=${waText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-semibold py-2.5 px-4 rounded-xl transition-all duration-300 text-xs sm:text-sm"
                        title={`Order ${product.heading} via WhatsApp`}
                      >
                        <FaWhatsapp className="w-4 h-4 text-emerald-600" />
                        <span>Quick Order on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Guarantees Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-amber-200/60">
          <div className="flex items-center gap-3 p-4 bg-white/80 rounded-2xl border border-amber-100">
            <ShieldCheck className="w-8 h-8 text-[#8c6226] flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#70470d]">100% Alcohol-Free</p>
              <p className="text-[11px] text-gray-500">Pure concentrated oil</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white/80 rounded-2xl border border-amber-100">
            <Truck className="w-8 h-8 text-[#8c6226] flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#70470d]">Free Express Shipping</p>
              <p className="text-[11px] text-gray-500">All India delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white/80 rounded-2xl border border-amber-100">
            <RotateCcw className="w-8 h-8 text-[#8c6226] flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#70470d]">7-Day Easy Returns</p>
              <p className="text-[11px] text-gray-500">Hassle-free guarantee</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white/80 rounded-2xl border border-amber-100">
            <Sparkles className="w-8 h-8 text-[#8c6226] flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#70470d]">12-Hour Sillage</p>
              <p className="text-[11px] text-gray-500">Long-lasting fragrance</p>
            </div>
          </div>
        </div>

        {/* Existing Promotional Banner Image */}
        <div className="mt-14 rounded-3xl overflow-hidden shadow-xl border border-amber-200">
          <img
            src="/11.webp"
            alt="Sugandham Attar Collection Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
