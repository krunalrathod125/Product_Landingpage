import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";

function Footer() {
  const [openSections, setOpenSections] = useState({
    quickLinks: false,
    policies: false,
    contact: false,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Smooth scroll helper
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Quick Links
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Our Agarbatti", id: "about", path: "/" },
    { name: "Agarbatti FAQ", id: "FAQ-section", path: "/" },
    { name: "Contact Us", id: "contactForm", path: "/" },
    { name: "Sacred Blog", id: "Blog-section", path: "/" },
  ];

  const policiesLinks = [
    { name: "Terms & Conditions", path: "/terms-condition" },
    { name: "Shipping Policy", path: "/shiping-policy" },
    { name: "Return Policy", path: "/return-policy" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  // ✅ Handle Quick Links Click
  const handleQuickLinkClick = (link) => {
    // If clicking Blog → go directly
    if (link.path === "/blog") {
      navigate("/blog");
      return;
    }

    // If clicking Home
    if (link.name === "Home") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    // If on homepage → scroll directly
    if (location.pathname === "/") {
      handleScrollTo(link.id);
    } else {
      // If on other page → redirect to home and scroll after mount
      navigate(`/#${link.id}`);
    }
  };

  // ✅ Detect hash (#section) after redirect and scroll automatically
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => handleScrollTo(sectionId), 400);
    }
  }, [location]);

  return (
    <footer className="bg-[#fbf7f0] text-[#382013] border-t border-[#e6cfab]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {/* Brand Intro */}
        <div>
          <a
            href="/"
            title="Nilkanth Dham Natural Gugal Agarbatti and Sacred Pooja Essentials"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
              }
            }}
          >
            <img
              src="/Elegant Agarbatti Lotus Emblem.png"
              alt="Natural Gugal Agarbatti Divine Fragrance"
              className="h-16 sm:h-20 w-auto mb-4 object-contain"
            />
          </a>
          <p className="text-[#5c4738] text-sm leading-relaxed">
            Experience <strong>Natural Gugal Agarbatti</strong> and <strong>Divine Fragrance</strong> with authentic Vedic Agarbatti crafted with Gir cow dung, pure cow ghee, natural Kapoor, and exquisite Kasturi musk for daily pooja, deep meditation, and home harmony.
            <br />
            <span className="text-[#b82329] font-semibold block mt-1.5">
              Natural Gugal Agarbatti Pure Fragrance Divine Feel A Sacred Aroma for Every Ritual Long Lasting Fragrance
            </span>
          </p>
        </div>

        {/* Quick Links */}
        <div className="border-b border-[#e6cfab]/70 pb-4 md:border-none md:pb-0">
          <button
            type="button"
            onClick={() => toggleSection("quickLinks")}
            aria-expanded={openSections.quickLinks}
            className="w-full flex items-center justify-between text-left md:pointer-events-none md:cursor-default py-1 md:py-0 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-[#382013] md:mb-3">
              Agarbatti Quick Links
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-[#b82329] transition-transform duration-300 md:hidden ${
                openSections.quickLinks ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`space-y-2 pt-3 md:pt-0 ${
              openSections.quickLinks ? "block" : "hidden md:block"
            }`}
          >
            {quickLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleQuickLinkClick(link)}
                  className="text-[#5c4738] hover:text-[#b82329] transition text-left w-full py-1 md:py-0 cursor-pointer"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div className="border-b border-[#e6cfab]/70 pb-4 md:border-none md:pb-0">
          <button
            type="button"
            onClick={() => toggleSection("policies")}
            aria-expanded={openSections.policies}
            className="w-full flex items-center justify-between text-left md:pointer-events-none md:cursor-default py-1 md:py-0 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-[#382013] md:mb-3">
              Policies
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-[#b82329] transition-transform duration-300 md:hidden ${
                openSections.policies ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`space-y-2 pt-3 md:pt-0 ${
              openSections.policies ? "block" : "hidden md:block"
            }`}
          >
            {policiesLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-[#5c4738] hover:text-[#b82329] transition block py-1 md:py-0"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="border-b border-[#e6cfab]/70 pb-4 md:border-none md:pb-0">
          <button
            type="button"
            onClick={() => toggleSection("contact")}
            aria-expanded={openSections.contact}
            className="w-full flex items-center justify-between text-left md:pointer-events-none md:cursor-default py-1 md:py-0 cursor-pointer"
          >
            <h3 className="text-lg font-semibold text-[#382013] md:mb-3">
              Contact Info
            </h3>
            <ChevronDown
              className={`w-5 h-5 text-[#b82329] transition-transform duration-300 md:hidden ${
                openSections.contact ? "rotate-180" : ""
              }`}
            />
          </button>
          <ul
            className={`space-y-3 pt-3 md:pt-0 text-gray-700 ${
              openSections.contact ? "block" : "hidden md:block"
            }`}
          >
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#b82329] flex-shrink-0" />
              <span className="text-[#5c4738]">+91 88500 11652</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#b82329] flex-shrink-0" />
              <span className="text-[#5c4738]">support@nilkanthdham.in</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-[#b82329] flex-shrink-0 mt-0.5" />
              <span className="text-[#5c4738]">
                412, New Escon Plaza,<br />Amroli, Surat 394107
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Decorative Agarbatti Banner Full Screen Edge to Edge */}
      <div className="w-full relative overflow-hidden">
        <img
          src="/Incense Smoke and Golden Lotus Bouquet.png"
          alt="Incense Smoke and Golden Lotus Bouquet Sacred Agarbatti Banner"
          className="w-full h-auto block select-none"
        />
      </div>

      {/* Copyright */}
      <div className="border-t border-[#e6cfab] mb-4"></div>
      <div className="text-center text-[#6b584a] text-sm mt-2 pb-6">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-[#b82329]">Nilkanth Dham Natural Gugal Agarbatti and Sacred Vedic Incense</span> All Rights Reserved <a href="https://www.megascale.in/" target="_blank" className="hover:underline text-[#8c6226]">Powered by Megascale</a>
      </div>
    </footer>
  );
}

export default Footer;
