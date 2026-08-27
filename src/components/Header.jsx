import React, { useEffect, useState } from "react";
import logo from "../../public/assets/logo.png";
import MobileNav from "./MobileNav";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }

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

  const navLinkClass = (path) => {
    const isActive = currentPath === path;
    const baseClass =
      "hover:text-secondary text-center py-1.5 px-4 rounded-3xl transition-all duration-200 inline-block";

    if (isActive) {
      return `${baseClass} ${
        isScrolled
          ? "bg-black/20 text-secondary"
          : "bg-white/20 text-white shadow-sm"
      }`;
    }

    return `${baseClass} opacity-80 hover:opacity-100`;
  };

  return (
    <>
      <header
        className={`flex justify-between items-center px-4 sm:px-8 lg:px-12 fixed z-40 left-0 right-0 top-0 transition-all duration-300 ${
          isScrolled
            ? "bg-tertiary py-2.5 text-gray-200 shadow-md"
            : "bg-transparent py-4 text-whitee"
        }`}
      >
        <div className="flex items-center gap-2">
          <img src={logo} alt="NovaPay Logo" className="w-12 sm:w-16" />
          <p className="text-secondary font-bold text-base sm:text-lg">NovaPay</p>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex gap-6 lg:gap-8 text-sm font-bold items-center">
            <li>
              <a href="/" className={navLinkClass("/")}>
                HOME
              </a>
            </li>
            <li>
              <a href="/about" className={navLinkClass("/about")}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="/blog" className={navLinkClass("/blog")}>
                BLOG
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a href="/contact">
            <button className="px-3.5 py-1.5 sm:px-6 sm:py-2.5 [clip-path:polygon(6px_0%,100%_0%,calc(100%-6px)_100%,0%_100%)] hover:bg-gray-100 hover:border-transparent border-2 border-secondary font-bold hover:text-secondary text-[10px] sm:text-xs uppercase transition-all duration-200 cursor-pointer">
              GET IN TOUCH
            </button>
          </a>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-1.5 focus:outline-none flex flex-col justify-center gap-1 cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              <span
                className={`block w-5 h-0.5 transition-colors ${
                  isScrolled ? "bg-gray-200" : "bg-white"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 transition-colors ${
                  isScrolled ? "bg-gray-200" : "bg-white"
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 transition-colors ${
                  isScrolled ? "bg-gray-200" : "bg-white"
                }`}
              ></span>
            </button>
          </div>
        </div>
      </header>

      {isOpen && <MobileNav closeMenu={closeMenu} isScrolled={isScrolled} />}
    </>
  );
};

export default Header;