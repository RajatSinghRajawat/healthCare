import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ThemeContext from "../ThemeContext.jsx";
import RegisterModal from "./RegisterModal";
import img from "../assets/Image/output-onlinepngtools.png";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Check if the current route is a service route#
  const isServiceActive = location.pathname.startsWith("/services");

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };
  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);
  // Auto-generate paths from names
  const navLinks = [
    "Home",
    "About",
    "Doctors",
    "Stories",
    "Blog",
    "Contact & Support",
  ].map((name) => ({
    name,
    path:
      name === "Home"
        ? "/"
        : `/${name.replace(/ & /g, "-").replace(/\s+/g, "-").toLowerCase()}`,
  }));

  const services = [
    "24x7 Emergency Services",
    "24x7 Ambulance Services",
    "24x7 Medical Store",
    "Intensive Care Unit",
    "Modular Operation Theatre",
    "Neonatal Intensive Care Unit",
    "Sonography and Ultrasound",
    "General & Super Deluxe Ward",
    "Dialysis",
    "Digital X-Ray",
    "Laboratory",
    "Canteen",
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md shadow-lg ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between flex-wrap py-4">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/">
              <img
                src={img}
                alt="Logo"
                className="w-40 h-12 rounded-full object-cover mr-2"
              />
            </NavLink>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="text-2xl cursor-pointer md:hidden focus:outline-none"
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>

          {/* Nav Links */}
          <nav
            className={`w-full md:w-auto md:flex md:items-center md:gap-4 flex-col md:flex-row transition-all duration-300 ${
              isMenuOpen ? "flex" : "hidden"
            }`}
          >
            {navLinks.slice(0, 5).map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `py-2 px-4 rounded-lg transition-colors duration-300 md:w-auto w-full ${
                    isActive
                      ? "bg-purple-500 text-white"
                      : "hover:bg-purple-500 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Dropdown */}
            <div ref={dropdownRef} className="relative w-full md:w-auto">
              <button
                onClick={toggleDropdown}
                className={`py-2 px-4 rounded-lg transition-colors duration-300 md:w-auto w-full flex justify-between items-center ${
                  isServiceActive
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-500 hover:text-white"
                }`}
              >
                Services <span className="ml-2">&#9662;</span>
              </button>
              {isDropdownOpen && (
                <div
                  className={`md:absolute md:top-full md:left-0 flex flex-col ${
                    isDarkMode ? "bg-black" : "bg-white"
                  } shadow-lg rounded-lg mt-1 md:min-w-[200px] overflow-hidden`}
                >
                  {services.map((service, index) => (
                    <NavLink
                      key={index}
                      to={`/services/${service
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                      className={({ isActive }) =>
                        `py-2 px-4 transition-colors duration-300 whitespace-nowrap ${
                          isActive
                            ? "bg-purple-500 text-white"
                            : "hover:bg-purple-500 hover:text-white"
                        }`
                      }
                    >
                      {service}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <NavLink
              to={navLinks[5].path}
              className={({ isActive }) =>
                `py-2 px-4 rounded-lg transition-colors duration-300 md:w-auto w-full ${
                  isActive
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-500 hover:text-white"
                }`
              }
            >
              {navLinks[5].name}
            </NavLink>

            {/* Auth Buttons & Theme Toggle */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 w-full md:w-auto">
              <button
                onClick={openRegisterModal}
                className="w-full md:w-auto py-2 px-4 rounded-lg transition-colors duration-300 text-center bg-purple-500 text-white hover:bg-purple-500 hover:scale-105"
              >
                Sign Up
              </button>
              <button
                onClick={openRegisterModal}
                className="w-full md:w-auto py-2 px-4 rounded-lg transition-colors duration-300 text-center bg-purple-500 text-white hover:bg-purple-500 hover:scale-105"
              >
                Log In
              </button>
              <div className="flex items-center relative xxl:w-full md:w-auto border rounded-full cursor-pointer">
                <input
                  type="checkbox"
                  id="theme"
                  className="hidden"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                />
                <label
                  htmlFor="theme"
                  className={`flex items-center justify-between w-11 h-5 ${
                    isDarkMode ? "bg-black" : "bg-white"
                  } rounded-full p-1 cursor-pointer transition-colors duration-300`}
                >
                  <span className="absolute left-1 text-sm text-white transition-opacity duration-300">
                    <i className="fas fa-sun"></i>
                  </span>
                  <span
                    className={`absolute w-4 h-4 rounded-full top-1/2 transform -translate-y-1/2 transition-transform duration-300 ${
                      isDarkMode
                        ? "translate-x-5 bg-white"
                        : "translate-x-0 bg-black"
                    }`}
                  ></span>
                  <span
                    className={`absolute right-1 text-sm text-white transition-opacity duration-300 ${
                      isDarkMode ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <i className="fas fa-moon"></i>
                  </span>
                </label>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={closeRegisterModal}
      />
    </header>
  );
};

export default Navbar;
