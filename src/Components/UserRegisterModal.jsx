import React, { useState, useEffect, useContext } from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaVenusMars,
} from "react-icons/fa";
import ThemeContext from "../ThemeContext.jsx";

const UserRegisterModal = ({ isOpen, onClose }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    email: "",
    address: "",
    contactNumber: "",
    gender: "",
    agreePolicy: false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.age || formData.age < 18 || formData.age > 150)
      newErrors.age = "Age must be between 18 and 150";
    if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErrors.email = "Valid email is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.contactNumber.match(/^\+?\d{10,12}$/))
      newErrors.contactNumber = "Valid contact number is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.agreePolicy) newErrors.agreePolicy = "You must agree to the Privacy Policy";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log("Registration Form Submitted:", formData);
    setSuccessMessage("Form submitted successfully ✅");
    setFormData({
      fullName: "",
      age: "",
      email: "",
      address: "",
      contactNumber: "",
      gender: "",
      agreePolicy: false,
    });
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${isDarkMode ? "bg-black/40" : "bg-black/40"
        } z-50 transition-opacity duration-300 h-[100vh]`}
      onClick={onClose}
    >
      <div
        className={`${isDarkMode ? "bg-black text-white" : "bg-white text-black"
          } rounded-lg shadow-lg w-full max-w-2xl mx-4 relative animate-fade-in`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`flex justify-between items-center px-6 py-4 border-b ${isDarkMode ? "border-white/20" : "border-black/20"
            }`}
        >
          <h2 className="text-xl font-semibold text-center w-full">
            User Registration
          </h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-3 text-lg bg-purple-500 text-white hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-500 rounded p-2 transition-transform duration-300"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-center mb-4">
              User Registration
            </h1>
            {successMessage && (
              <div className="text-green-600 text-base font-bold text-center">
                {successMessage}
              </div>
            )}

            {/* Full Name */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium">Full Name</label>
              <div className="flex items-center">
                <FaUser className="absolute ml-3 text-purple-500" size={20} />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                    }`}
                  aria-label="Full Name"
                />
              </div>
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            {/* Age */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium">Age</label>
              <div className="flex items-center">
                <FaCalendarAlt className="absolute ml-3 text-purple-500" size={20} />
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                    }`}
                  aria-label="Age"
                />
              </div>
              {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
            </div>

            {/* Email */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium">Email Address</label>
              <div className="flex items-center">
                <FaEnvelope className="absolute ml-3 text-purple-500" size={20} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                    }`}
                  aria-label="Email Address"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Address */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium">Address</label>
              <div className="flex items-start">
                <FaMapMarkerAlt className="absolute ml-3 mt-3 text-purple-500" size={20} />
                <textarea
                  rows="3"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                    }`}
                  aria-label="Address"
                ></textarea>
              </div>
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>

            {/* Contact Number */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium">Contact Number</label>
              <div className="flex items-center">
                <FaPhone className="absolute ml-3 text-purple-500" size={20} />
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                    }`}
                  aria-label="Contact Number"
                />
              </div>
              {errors.contactNumber && (
                <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>
              )}
            </div>

            {/* Gender */}
            <div className="relative">
              <label className="block mb-2 text-sm font-medium">Gender</label>
              <div className="flex items-center">
                <FaVenusMars className="absolute ml-3 text-purple-500" size={20} />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                    }`}
                  aria-label="Gender"
                >
                  <option value="" disabled>
                    Select your gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
            </div>

            {/* Policy */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                name="agreePolicy"
                checked={formData.agreePolicy}
                onChange={handleChange}
                className="w-4 h-4 accent-purple-500"
                aria-label="Agree to Privacy Policy"
              />
              <p className="text-sm">
                I agree to the{" "}
                <a
                  href="#"
                  className={`underline ${isDarkMode ? "text-purple-500 hover:text-white" : "text-purple-500 hover:text-black"
                    }`}
                >
                  Privacy Policy
                </a>
              </p>
            </div>
            {errors.agreePolicy && (
              <p className="text-red-500 text-sm mt-1">{errors.agreePolicy}</p>
            )}

            <button
              type="submit"
              className={`w-full py-2 text-sm font-medium border border-purple-500 rounded-lg ${isDarkMode
                ? "hover:bg-purple-500 hover:text-white"
                : "hover:bg-purple-500 hover:text-white"
                } hover:scale-105 transition-transform duration-300`}
            >
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegisterModal;