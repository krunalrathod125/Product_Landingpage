import { useState } from 'react';
import { ExternalLink, CheckCircle2, ShoppingBag, Sparkles } from 'lucide-react';
import { useFaraliProduct } from '../context/FaraliProductContext';

export default function ProductShowcase() {
  const { activeProduct, activeFaraliKey } = useFaraliProduct();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [prevFaraliKey, setPrevFaraliKey] = useState(activeFaraliKey);

  // Synchronously reset active image when product changes (React 19 pattern)
  if (prevFaraliKey !== activeFaraliKey) {
    setPrevFaraliKey(activeFaraliKey);
    setActiveImageIndex(0);
  }

  const selectedVariant = activeProduct.variants[0];
  const activeImage = activeProduct.images[activeImageIndex] || activeProduct.images[0];
  const isPackshot = activeImageIndex === 0;

  return (
    <section id="product-showcase" className="py-10 sm:py-14 md:py-16 bg-white relative border-b border-[#E8DCC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3DF] border border-[#E8DCC8] text-xs font-bold text-[#8B4513] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A323]" />
            Official Product Presentation &amp; Gallery
          </div>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#3B2418] tracking-tight">
            Authentic <span className="text-[#F28C28]">{activeProduct.title}</span> Showcase  
          </h2>
          <p className="text-xs sm:text-sm text-[#7A5F4F] mt-1.5">
            Handcrafted with crisp raw banana batons, crunchy roasted peanuts, and sweet raisins, sealed in stay-fresh zipper barrier packaging.
          </p>
        </div>

        {/* 2-Column Split: Gallery Left, Details Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT: Product Gallery */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start space-y-3 w-full">
            {/* Main Preview with Direct Buy Link */}
            <a
              href={selectedVariant.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`Click to Buy ${activeProduct.title} on Bhagvat Prasadam`}
              className="relative aspect-square w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#FFF8E9] border border-[#E8DCC8]/70 shadow-sm group cursor-pointer block mx-auto lg:mx-0"
            >
              <img
                src={activeImage.url}
                alt={activeImage.alt}
                className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                  isPackshot ? 'object-contain p-4' : 'object-cover'
                }`}
              />
            </a>

            {/* Thumbnail Strip (7 angles) */}
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2 w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[400px] mx-auto lg:mx-0">
              {activeProduct.images.map((img, idx) => {
                const isActive = activeImageIndex === idx;
                const isThumbPack = idx === 0;
                return (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    title={img.caption}
                    className={`aspect-square rounded-xl overflow-hidden bg-[#FFF8E9] border transition-all cursor-pointer relative group ${
                      isActive
                        ? 'border-[#8B4513] shadow-xs scale-105 bg-white ring-2 ring-[#8B4513]/25 p-0.5'
                        : 'border-[#E8DCC8]/70 opacity-75 hover:opacity-100 hover:border-[#3B2418]/30 p-0.5'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className={`w-full h-full rounded-lg transition-transform group-hover:scale-105 ${
                        isThumbPack ? 'object-contain' : 'object-cover'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Product Information & Direct Buy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-4">

            {/* Brand & Gujarati / Hindi Title */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-black text-[#F28C28] uppercase tracking-wider">
                  {activeProduct.brand}
                </span>
                <span className="text-xs font-bold text-[#A8681E]">
                  ({activeProduct.titleGujarati} / {activeProduct.titleHindi})
                </span>
              </div>

              {/* Title */}
              <h1 className="font-display font-black text-3xl sm:text-4xl text-[#3B2418] tracking-tight leading-tight">
                {activeProduct.title}
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-[#A8681E] font-medium mt-1">
                {activeProduct.subtitle}
              </p>
            </div>

            {/* Description Excerpt */}
            <p className="text-xs sm:text-sm text-[#5A3B2B] leading-relaxed">
              {activeProduct.description}
            </p>

            {/* Direct Buy CTA */}
            <div className="pt-2 space-y-2">
              <a
                href={selectedVariant.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-2xl bg-[#E5A323] hover:bg-[#F28C28] text-[#3B2418] hover:text-white font-black text-sm uppercase tracking-wider transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Buy {activeProduct.title}</span>
                <ExternalLink className="w-4 h-4 opacity-75" />
              </a>
              <p className="text-center text-[11px] text-[#7A5F4F]">
                Direct checkout on Bhagvat Prasadam official store • Secure payment &amp; pan-India courier
              </p>
            </div>

            {/* Fasting Purity Guarantee Checklist */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E8DCC8]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#3B2418]">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>100% Upvas / Fasting Friendly</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#3B2418]">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Sendha Namak (Rock Salt)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#3B2418]">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>Nilkanthdham Poicha Satvik</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#3B2418]">
                <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                <span>45 Days Freshness Zipper Lock</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
