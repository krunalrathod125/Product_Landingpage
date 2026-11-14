import React, { useState } from "react";
import { scroller } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 800,
        offset: -70,
      });
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
    setMenuOpen(false);
  };

  const navItems = [
    { id: "product-section", label: "Our Product" },
    { id: "FAQ-section", label: "FAQ" },
    { id: "about", label: "About Us" },
    { id: "Blog-section", label: "Blogs" },
  ];

  return (
    <header className="top-0 w-full z-50 bg-[#fefcfa] backdrop-blur-md shadow-lg sticky">
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          {/* LEFT SIDE — LOGO */}
          <div className="flex items-center">
            <RouterLink to="/">
              <img
                src="/logo1.png"
                alt="Logo"
                className="w-[135px] rounded-[10px]"
              />
            </RouterLink>
          </div>

          {/* RIGHT SIDE — NAV LINKS (Desktop) */}
          <nav className="hidden sm:flex items-center gap-6">
            <button
              onClick={() => handleNavigation("product-section")}
              className="text-[#8c6226] hover:text-amber-600 font-medium transition-colors cursor-pointer"
            >
              Our Product
            </button>

            <button
              onClick={() => handleNavigation("FAQ-section")}
              className="text-[#8c6226] hover:text-amber-600 font-medium transition-colors cursor-pointer"
            >
              FAQ
            </button>

            <button
              onClick={() => handleNavigation("about")}
              className="text-[#8c6226] hover:text-amber-600 font-medium transition-colors cursor-pointer"
            >
              About Us
            </button>

            <button
              onClick={() => handleNavigation("Blog-section")}
              className="text-[#8c6226] hover:text-amber-600 font-medium transition-colors cursor-pointer"
            >
              Blogs
            </button>

            <RouterLink
              to="/bulkorder"
              className="text-[#8c6226] hover:text-amber-600 font-medium transition-colors cursor-pointer"
            >
              Bulk Orders
            </RouterLink>

            <button
              onClick={() => handleNavigation("contactForm")}
              className="text-[#8c6226] hover:text-amber-600 font-medium transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </nav>

          {/* MOBILE MENU ICON */}
          <button
            className="sm:hidden text-[#8c6226] text-3xl font-bold focus:outline-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Dropdown) */}
      {menuOpen && (
        <div className="sm:hidden bg-[#fefcfa] shadow-md border-t border-amber-100">
          <nav className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="text-[#8c6226] hover:text-amber-600 font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ))}

            <RouterLink
              to="/bulkorder"
              onClick={() => setMenuOpen(false)}
              className="text-[#8c6226] hover:text-amber-600 font-medium transition-colors cursor-pointer"
            >
              Bulk Orders
            </RouterLink>

            <button
              onClick={() => handleNavigation("contactForm")}
              className="text-[#8c6226] hover:text-amber-600 font-medium transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
