import React, { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Prevent background scrolling on small screens when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on screen resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Function to handle navigation and scroll
  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      // Already on home → scroll directly
      scroller.scrollTo(section, {
        smooth: true,
        duration: 800,
        offset: -80, // adjusted for sticky header
      });
    } else {
      // Redirect to home and pass scroll target
      navigate("/", { state: { scrollTo: section } });
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-[#fcf9f4]/95 backdrop-blur-md shadow-sm border-b border-[#e6cfab]/60 transition-all duration-300">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* LEFT SIDE — LOGO */}
          <div className="flex items-center">
            <RouterLink to="/" title="Natural Gugal Agarbatti Divine Fragrance">
              <img
                src="/Elegant Agarbatti Lotus Emblem.png"
                alt="Natural Gugal Agarbatti Divine Fragrance"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </RouterLink>
          </div>

          {/* RIGHT SIDE — NAV LINKS (Desktop) */}
          <nav className="hidden sm:flex items-center gap-6">
            <button
              onClick={() => handleNavigation("product-section")}
              className="text-[#382013] hover:text-[#b82329] font-medium transition-colors cursor-pointer"
            >
              Agarbatti Collection
            </button>

            <button
              onClick={() => handleNavigation("FAQ-section")}
              className="text-[#382013] hover:text-[#b82329] font-medium transition-colors cursor-pointer"
            >
              Agarbatti FAQ
            </button>

            <button
              onClick={() => handleNavigation("about")}
              className="text-[#382013] hover:text-[#b82329] font-medium transition-colors cursor-pointer"
            >
              About Our Agarbatti
            </button>

            <button
              onClick={() => handleNavigation("Blog-section")}
              className="text-[#382013] hover:text-[#b82329] font-medium transition-colors cursor-pointer"
            >
              Sacred Blog
            </button>

            <button
              onClick={() => handleNavigation("contactForm")}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-[#b82329] to-[#991b1f] hover:from-[#991b1f] hover:to-[#7a1317] text-white font-medium shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* MOBILE MENU ICON */}
          <button
            className="sm:hidden p-2 rounded-lg text-[#382013] hover:bg-[#fae8e8] transition-colors focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X className="w-7 h-7 text-[#b82329]" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Backdrop + Dropdown Panel) */}
      {menuOpen && (
        <>
          {/* Backdrop overlay locking background touch & clicks */}
          <div
            className="sm:hidden fixed inset-0 top-[62px] bg-black/40 backdrop-blur-sm -z-10"
            onClick={() => setMenuOpen(false)}
            onTouchMove={(e) => e.preventDefault()}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div className="sm:hidden w-full bg-[#fcf9f4] border-t border-[#e6cfab] shadow-2xl max-h-[calc(100dvh-62px)] overflow-y-auto overscroll-contain">
            <nav className="flex flex-col items-center gap-2 py-5 px-6">
              {[
                { id: "product-section", label: "Agarbatti Collection" },
                { id: "FAQ-section", label: "Agarbatti FAQ" },
                { id: "about", label: "About Our Agarbatti" },
                { id: "Blog-section", label: "Sacred Blog" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="w-full text-center py-2.5 text-[#382013] hover:text-[#b82329] hover:bg-[#fae8e8] rounded-xl font-medium text-base transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}

              {/* Contact Us button for mobile */}
              <button
                onClick={() => handleNavigation("contactForm")}
                className="w-full mt-2 py-3 rounded-full bg-gradient-to-r from-[#b82329] via-[#c92f35] to-[#991b1f] text-white font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
              >
                Contact Us / Special Offer
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
