import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logoRAB from "../assets/Logo/NobgLogo.png";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Efek untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/Tentang" },
    { name: "Produk", path: "/produk" },
    { name: "Portofolio", path: "/portofolio" },
    // { name: "Hubungi Kami", path: "/kontak" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? " backdrop-blur-2xl shadow-sm py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="xl:container mx-auto px-2 md:px-5 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex gap-2 items-center">
          <img
            src={logoRAB}
            alt="logo"
            className={`transition-all duration-300 ${
              isScrolled ? "w-10" : "w-12 md:w-14"
            } object-contain`}
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-rab-navy font-extrabold text-[0.8rem] md:text-[1rem] leading-tight">
              PT. Renol Anugrah Bersama
            </h1>
            <p className="text-[0.7rem] md:text-[0.85rem] font-bold text-rab-green">
              General Contractor & Supplier
            </p>
          </div>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {menu.map((item, index) => (
            <div key={index} className="group flex flex-col relative">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `pb-1 transition-all duration-300 ${
                    isActive
                      ? "font-bold text-rab-navy"
                      : "text-slate-600 hover:text-rab-navy"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.name}
                    <div
                      className={`h-0.5 bg-rab-green transition-all duration-300 absolute bottom-0 left-0
                      ${
                        isActive
                          ? "w-full opacity-100"
                          : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </div>
          ))}

          <a
            href="#"
            className="bg-rab-navy flex gap-2 items-center text-white hoverbrightness-125 py-2 px-6 rounded-xl ml-4"
          >
            <FaWhatsapp className="text-xl" />

            <span>Kontak Kami</span>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-rab-navy p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16m-7 6h7"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {menu.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-lg font-semibold ${
                  isActive ? "text-rab-green" : "text-slate-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
