import { ExternalLink, ShoppingBag, Sparkles } from 'lucide-react';
import { useFaraliProduct } from '../context/FaraliProductContext';

export default function FaraliBanner() {
  const { activeProduct } = useFaraliProduct();

  const currentBanner = activeProduct.bannerImage || '/images/farali/farali-banner.webp';

  return (
    <section id="promo-banner" className="py-6 sm:py-8 md:py-10 bg-[#FFF8E9] border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clickable Banner with Direct Product Buy Link */}
        <a
          href={activeProduct.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          title={`Click to Buy ${activeProduct.title} on Bhagvat Prasadam Official Store`}
          className="group relative block overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E8DCC8] hover:border-[#E5A323] shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white"
        >
          {/* High-Resolution Promotional Banner Image */}
          <div className="relative w-full aspect-[2048/768] overflow-hidden bg-[#FFF8E9]">
            <img
              src={currentBanner}
              alt={`${activeProduct.title} - Bhagvat Prasadam Authentic Gujarati Farali Chivda`}
              className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />

            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 pointer-events-none" />

            {/* Inset Content Tag */}
            <div className="absolute top-3 left-3 sm:top-6 sm:left-6 text-white max-w-sm hidden sm:block pointer-events-none">
              <span className="bg-[#B83220] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider inline-flex items-center gap-1.5 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#E5A323]" />
                100% Upvas &amp; Vrat Special
              </span>
              <h3 className="font-display font-black text-lg sm:text-2xl mt-2 text-white drop-shadow-md">
                {activeProduct.title}
              </h3>
              <p className="text-xs text-white/90 drop-shadow line-clamp-2 mt-0.5">
                {activeProduct.tagline}
              </p>
            </div>

            {/* Floating "Order Online" Callout Badge (Bottom-Right) */}
            <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl sm:rounded-2xl border border-[#E8DCC8] flex items-center gap-2 text-xs sm:text-sm font-black text-[#3B2418] shadow-lg group-hover:bg-[#E5A323] group-hover:text-[#3B2418] transition-all transform group-hover:scale-105">
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B83220] group-hover:text-[#3B2418]" />
              <span>Buy {activeProduct.title} (₹{activeProduct.variants[0].price})</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </div>
          </div>
        </a>

      </div>
    </section>
  );
}
