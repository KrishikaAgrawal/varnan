import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/navbar/logo.png";
import menuOpen from "../assets/navbar/menu-open.png";
import menuClose from "../assets/navbar/menu-close.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const links = [
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/40 z-50">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={logo}
            alt="Logo"
            className="h-6 md:h-8 object-contain cursor-pointer"
          />
        </Link>
        {/* Navlinks Dropdown */}
        <div
          className={`transition-[max-height] duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul
            className={`flex ${
              isMobile
                ? "flex-col px-6 py-5 space-y-4 text-left"
                : "flex-row justify-center items-center gap-10"
            } text-gray-800 text-lg font-instrument`}
          >
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-yellow-500 transition"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="z-50 focus:outline-none"
        >
          <img
            src={isOpen ? menuOpen : menuClose}
            alt="Menu Toggle"
            className="h-8 w-8 md:h-10 md:w-10 object-contain transition-transform duration-200"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
