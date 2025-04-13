"use client";

import { FiYoutube, FiInstagram, FiFacebook, FiTwitter, FiArrowUp } from "react-icons/fi";
import { useEffect } from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "YouTube",
      url: "https://www.youtube.com/@RDHJUNIOR926",
      icon: <FiYoutube />,
      color: "hover:text-red-500",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/rdhjunior109/",
      icon: <FiInstagram />,
      color: "hover:text-pink-500",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61556356408961",
      icon: <FiFacebook />,
      color: "hover:text-blue-600",
    },
    {
      name: "Twitter",
      url: "https://x.com/rdhjunior100",
      icon: <FiTwitter />,
      color: "hover:text-sky-500",
    },
  ];

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Esports Casting", href: "#" },
        { name: "Tournament Commentary", href: "#" },
        { name: "Game Analysis", href: "#" },
        { name: "Event Hosting", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex flex-col space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">
                RDH JUNIOR
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Professional esports caster delivering electrifying commentary, expert game analysis, and thrilling moments across competitive gaming tournaments worldwide.
              </p>

              <div className="flex space-x-4 mt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${social.name}`}
                    className={`w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 ${social.color} hover:border-gray-300 dark:hover:border-gray-600 transition-colors`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links sections */}
          {footerLinks.map((section, sectionIndex) => (
            <div key={sectionIndex} className="col-span-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
              <p>Dania College & University</p>
              <p>Uttora, Sonir Akhra, Dhaka, Bangladesh</p>
              <p>Email: ratulahmedreadhoan123@gmail.com</p>
              <p>Phone: +8801623032821</p>
            </div>
          </div>
        </div>

        {/* Scroll to top button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <FiArrowUp size={20} />
          </button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400">
          <div className="flex flex-col space-y-2">
            <p>© {new Date().getFullYear()} Redwan Ahmed Ratul (RDH JUNIOR). All rights reserved.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
