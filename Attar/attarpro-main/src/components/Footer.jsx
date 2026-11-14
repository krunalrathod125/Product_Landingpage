import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", id: "about", path: "/" },
    { name: "FAQ", id: "FAQ-section", path: "/" },
    { name: "Contact", id: "contactForm", path: "/" },
    { name: "Blog", id: "Blog-section", path: "/" },
  ];

  const policyLinks = [
    { name: "Terms & Conditions", path: "/terms-condition" },
    { name: "Shipping Policy", path: "/shiping-policy" },
    { name: "Return Policy", path: "/return-policy" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ];

  const handleQuickLinkClick = (link) => {
    if (link.path === "/blog") {
      navigate("/blog");
      return;
    }

    if (link.name === "Home") {
      if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate("/");
      }
      return;
    }

    if (location.pathname === "/") {
      handleScrollTo(link.id);
    } else {
      navigate(`/#${link.id}`);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      setTimeout(() => handleScrollTo(sectionId), 400);
    }
  }, [location]);

  return (
    <footer className="bg-yellow-50 text-gray-800 border-t border-amber-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Intro */}
        <div>
          <a
            href="/"
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
              src="/logo1.png"
              alt="Logo"
              className="w-auto h-[100px] rounded-[10px] mb-4 object-contain"
            />
          </a>
          <p className="text-[#c79d63]">
            Sugandham brings the ancient art of attar-making into your modern lifestyle.
            <br />
            <span className="text-[#5c3a29] font-medium">Pure. Natural. Divine.</span>
          </p>
        </div>

        {/* Quick Links + Policies */}
        <div className="grid grid-cols-2 gap-6 md:col-span-2">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#70470d] mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleQuickLinkClick(link)}
                    className="text-[#c79d63] hover:text-amber-900 transition text-left w-full cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold text-[#70470d] mb-3">
              Policies
            </h3>
            <ul className="space-y-2">
              {policyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#c79d63] hover:text-amber-900 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-[#70470d] mb-3">
            Contact Info
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#70470d]" />
              <span className="text-[#c79d63]">+91-8850011652</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#70470d]" />
              <span className="text-[#c79d63]">attar@storeview.in</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-[#70470d]" />
              <span className="text-[#c79d63]">
                412, New Escon Plaza,
                <br />
                Amroli, Surat - 394107
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Decorative Image */}
      <div>
        <img
          src="/dc7ec069262d986b1eec625a4d2dd42a.png"
          alt="Sugandham Footer Banner"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Copyright */}
      <div className="border-t border-amber-200 mb-4"></div>
      <div className="text-center text-[#c79d63] text-sm mt-2 pb-6">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-[#70470d]">Sungandham</span> — All Rights Reserved. |{" "}
        <a
          href="https://www.megascale.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          Powered by Megascale
        </a>
      </div>
    </footer>
  );
}
