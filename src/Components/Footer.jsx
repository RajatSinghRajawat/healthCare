import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../ThemeContext.jsx";

const Footer = () => {
  const { isDarkMode, colors } = useContext(ThemeContext);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription email:", email); // Placeholder for submission logic
    setEmail("");
  };

  // Quick Links matching Navbar routes
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Doctors", path: "/doctors" },
    { name: "Stories", path: "/stories" },
    { name: "Blog", path: "/blog" },
    { name: "Services", path: "/services/24x7-emergency-services" },
    { name: "Contact Us", path: "/contact-support" },
  ];

  // Patient Resources links
  const patientResources = [
    { name: "Book Appointment", path: "/book-appointment" },
    { name: "Health Packages", path: "/health-packages" },
    { name: "Insurance Partners", path: "/insurance-partners" },
    { name: "Patient Stories", path: "/stories" },
    { name: "FAQs", path: "/about#faq" },
  ];

  // Social media links (placeholders)
  const socialLinks = [
    { icon: "fab fa-facebook-f", url: "#" },
    { icon: "fab fa-twitter", url: "#" },
    { icon: "fab fa-instagram", url: "#" },
    { icon: "fab fa-linkedin-in", url: "#" },
  ];

  return (
    <footer
      className={`w-full ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      } transition-colors duration-300 border-t ${
        isDarkMode ? "border-white/20" : "border-black/20"
      } animate-fade-in`}
    >
      <div className="container mx-auto px-6 py-12 flex flex-wrap justify-between gap-10 max-w-7xl">
        {/* About & Social */}
        <div className="flex-1 min-w-[220px] text-center md:text-left animate-slide-up">
          <h4 className="text-xl font-bold mb-6 bg-purple-500 text-white px-3 py-2 rounded-md shadow-md">
            HealthCare
          </h4>
          <p className="text-base leading-relaxed mb-4">
            Your health, our priority. Quality care for everyone, always.
          </p>
          <p className="text-sm leading-relaxed mb-4">
            Accredited by NABH | 24/7 Emergency | 500+ Beds
          </p>
          <div className="flex gap-4 mt-6 justify-center md:justify-start">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-xl transition-transform duration-300 hover:scale-110 hover:bg-purple-500 hover:text-white rounded-full p-2"
                aria-label={`Social link ${social.icon}`}
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 min-w-[220px] text-center md:text-left animate-slide-up">
          <h4 className="text-xl font-bold mb-6 bg-purple-500 text-white px-3 py-2 rounded-md shadow-md">
            Quick Links
          </h4>
          <ul className="list-none space-y-3">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Patient Resources */}
        <div className="flex-1 min-w-[220px] text-center md:text-left animate-slide-up">
          <h4 className="text-xl font-bold mb-6 bg-purple-500 text-white px-3 py-2 rounded-md shadow-md">
            Patient Resources
          </h4>
          <ul className="list-none space-y-3">
            {patientResources.map((resource, index) => (
              <li key={index}>
                <NavLink to={resource.path}>{resource.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[220px] text-center md:text-left animate-slide-up">
          <h4 className="text-xl font-bold mb-6 bg-purple-500 text-white px-3 py-2 rounded-md shadow-md">
            Stay Connected
          </h4>
          <p className="text-base leading-relaxed mb-4">
            Subscribe to our newsletter for health tips and updates.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 mt-6 items-center md:items-start"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`p-3 rounded-lg border-2 border-purple-500 outline-none text-base w-full max-w-[320px] transition-all duration-300 ${
                isDarkMode
                  ? "bg-black text-white placeholder-white/60"
                  : "bg-white text-black placeholder-black/60"
              } focus:ring-2 focus:ring-purple-500`}
            />
            <button
              type="submit"
              className="w-full max-w-[320px] p-3 rounded-lg font-bold text-white bg-purple-500 transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-purple-500 hover:scale-105 hover:text-purple-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div
        className={`text-center text-sm font-medium opacity-80 py-6 border-t ${
          isDarkMode ? "border-white/20" : "border-black/20"
        } animate-fade-in`}
      >
        &copy; 2025 HealthCare. All Rights Reserved. | Designed By A Human
      </div>
    </footer>
  );
};

export default Footer;
