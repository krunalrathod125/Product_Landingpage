import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';
import { useFaraliProduct } from '../context/FaraliProductContext';

export default function Footer() {
  const { products, keys } = useFaraliProduct();

  const scrollTo = (e, id) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer className="w-full bg-[#FFF8E9] text-[#3B2418] border-t border-[#E8DCC8] pt-12 sm:pt-16 pb-0 relative overflow-hidden">
        {/* Ambient Warm Underglow */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#E5A323]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-8">
            
            {/* Column 1: Brand Info (Span 4) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <div>
                <a
                  href="#hero"
                  onClick={(e) => scrollTo(e, 'hero')}
                  className="inline-flex items-center group cursor-pointer focus:outline-none"
                  title="Bhagvat Prasadam Farali Chivda Collection"
                >
                  <img
                    src="/Logo.png"
                    alt="Bhagvat Prasadam Official Logo"
                    className="h-14 sm:h-16 w-auto object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[#7A5F4F] leading-relaxed max-w-sm">
                Bhagvat Prasadam brings the sacred culinary heritage of authentic Gujarati Farali Chivda (Kela Farali Chivda Tikha &amp; Meetha) and Nilkanthdham Poicha farsan-making into devotional homes across India.
              </p>

              <p className="text-sm font-bold text-[#A8681E] font-display tracking-wide">
                100% Upvas Friendly • Sendha Namak • Zero Palm Oil
              </p>
            </div>

            {/* Column 2: 2 Farali Products (Span 3) */}
            <div className="lg:col-span-3 space-y-3 text-left">
              <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                Our Farali Collection
              </h4>
              <ul className="space-y-2 text-xs text-[#5A3B2B] font-medium">
                {keys.map((k) => (
                  <li key={k}>
                    <a
                      href={products[k].buyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#F28C28] transition-colors flex items-center justify-between group"
                    >
                      <span className="font-bold">{products[k].title} ({products[k].titleGujarati})</span>
                      <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <span className="text-[11px] text-[#8B4513] font-semibold bg-[#FFF3DF] px-2 py-1 rounded-md border border-[#E8DCC8]">
                  Available in 1kg, 800g, 400g &amp; 200g
                </span>
              </div>
            </div>

            {/* Column 3: Quick Links (Span 2) */}
            <div className="lg:col-span-2 space-y-3 text-left">
              <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-[#5A3B2B] font-medium">
                <li>
                  <a href="#hero" onClick={(e) => scrollTo(e, 'hero')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#story" onClick={(e) => scrollTo(e, 'story')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#why-us" onClick={(e) => scrollTo(e, 'why-us')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Why Farali
                  </a>
                </li>
                <li>
                  <a href="#product-showcase" onClick={(e) => scrollTo(e, 'product-showcase')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Showcase
                  </a>
                </li>
                <li>
                  <a href="#details" onClick={(e) => scrollTo(e, 'details')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Details &amp; Facts
                  </a>
                </li>
                <li>
                  <a href="#how-to-enjoy" onClick={(e) => scrollTo(e, 'how-to-enjoy')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    How to Enjoy
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => scrollTo(e, 'faq')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => scrollTo(e, 'contact')} className="hover:text-[#F28C28] transition-colors cursor-pointer block">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Info (Span 3) */}
            <div className="lg:col-span-3 space-y-3 text-left">
              <h4 className="font-display font-bold text-sm tracking-wide text-[#9C6219]">
                Poicha Helpdesk
              </h4>
              <div className="space-y-2.5 text-xs text-[#5A3B2B]">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#A8681E] shrink-0" />
                  <a href="tel:+919726778118" className="hover:text-[#F28C28] transition-colors">
                    +91 97267 78118
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#A8681E] shrink-0" />
                  <a href="mailto:bprasadam@sgrs.org" className="hover:text-[#F28C28] transition-colors">
                    bprasadam@sgrs.org
                  </a>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#A8681E] shrink-0 mt-0.5" />
                  <span>
                    At Nilkanthdham, Poicha, Rajpipla Road, Dist. Narmada, Gujarat 393145, India
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Full-Screen Line-Art Heritage Banner at Bottom of Footer */}
        <div className="w-full bg-[#FFF8E9] overflow-hidden">
          <img
            src="/images/sev/footer-lineart-banner.png"
            alt="Bhagvat Prasadam Authentic Farali Chivda Collection - Traditional Line Art Banner"
            className="w-full h-auto block select-none"
            loading="lazy"
          />
        </div>

        {/* Bottom Copyright */}
        <div className="w-full relative z-10 text-center py-4 text-xs text-[#7A5F4F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
            <p>
              © {new Date().getFullYear()} <strong className="text-[#3B2418]">bhagvatprasadam</strong>. All Rights Reserved.
              <span className="text-[#9B7B6C] text-xs font-normal"> Powered by <a href="https://megascale.in" target="_blank" rel="noopener noreferrer">Megascale</a></span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Contact Widget */}
      <a
        href="https://wa.me/919726778118?text=Hello%20Bhagvat%20Prasadam,%20I%20would%20like%20to%20inquire%20about%20Kela%20Farali%20Chivda"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 w-13 h-13 rounded-full bg-[#7A3E1D] hover:bg-[#25D366] text-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 cursor-pointer ring-4 ring-white/60"
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 fill-current" />
      </a>
    </>
  );
}
