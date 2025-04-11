"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { FiMoon, FiSun, FiMenu, FiX, FiYoutube } from "react-icons/fi";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  // Menu links
  const menuLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Portfolio", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Handle scroll event to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    setMounted(true);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "py-2 md:py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-md" : "py-3 md:py-5"
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            className="flex items-center"
          >
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">
              RDH JUNIOR
            </div>
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {menuLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm lg:text-base px-1 py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Theme toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:scale-95"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? <FiSun size={18} className="md:text-xl" /> : <FiMoon size={18} className="md:text-xl" />}
              </button>
            )}

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@RDHJUNIOR926"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-all duration-300 font-medium text-sm md:text-base active:scale-95"
            >
              <FiYoutube className="mr-1.5 md:mr-2" size={16} />
              <span className="hidden md:inline">YouTube</span>
              <span className="md:hidden">YT</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors active:scale-95"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
        >
          <nav className="flex flex-col p-4 space-y-1">
            {menuLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 active:bg-gray-200 dark:active:bg-gray-700 flex items-center"
              >
                <span className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-2 opacity-0 group-hover:opacity-100"></span>
                {link.name}
              </a>
            ))}
            
            {/* YouTube in mobile menu */}
            <a
              href="https://www.youtube.com/@RDHJUNIOR926"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white px-4 py-3 rounded-lg transition-all duration-300 font-medium mt-3 active:scale-[0.98]"
            >
              <FiYoutube className="mr-2" size={18} />
              Subscribe on YouTube
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar; 