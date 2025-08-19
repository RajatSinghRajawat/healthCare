import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../ThemeContext.jsx";

const RegisterModal = ({ isOpen, onClose }) => {
  const { isDarkMode } = useContext(ThemeContext);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isDarkMode ? "bg-black/40" : "bg-black/40"
      } z-50 transition-opacity duration-300 h-[100vh]`}
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className={`${
          isDarkMode ? "bg-black text-white" : "bg-white text-black"
        } rounded-lg shadow-lg w-full max-w-4xl mx-4 relative animate-fade-in`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={`flex justify-between items-center px-6 py-4 border-b ${
            isDarkMode ? "border-white/20" : "border-black/20"
          }`}
        >
          <h2 className="text-xl font-semibold text-center w-full">
            Register As
          </h2>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-lg hover:bg-purple-500 hover:text-white rounded-full p-2 transition-transform duration-300 hover:scale-110"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-wrap justify-center gap-6 py-8">
          {/* User Card */}
          <div
            className={`w-64 ${
              isDarkMode
                ? "bg-black border-white/20"
                : "bg-white border-black/20"
            } border rounded-lg shadow-sm p-6 text-center hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="mb-3">
              <i className="fa-solid fa-user fa-3x text-purple-500"></i>
            </div>
            <h4 className="text-lg font-semibold mb-4">User</h4>
            <NavLink
              to="/register/user"
              className="px-5 py-2 bg-purple-500 text-white font-medium rounded-md hover:bg-transparent hover:border hover:border-purple-500 transition-transform duration-300 hover:scale-105"
              onClick={onClose}
            >
              Register Now
            </NavLink>
          </div>

          {/* Doctor Card */}
          <div
            className={`w-64 ${
              isDarkMode
                ? "bg-black border-white/20"
                : "bg-white border-black/20"
            } border rounded-lg shadow-sm p-6 text-center hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="mb-3">
              <i className="fa-solid fa-user-doctor fa-3x text-purple-500"></i>
            </div>
            <h4 className="text-lg font-semibold mb-4">Doctor</h4>
            <NavLink
              to="/register/doctor"
              className="px-5 py-2 bg-purple-500 text-white font-medium rounded-md hover:bg-transparent hover:border hover:border-purple-500 transition-transform duration-300 hover:scale-105"
              onClick={onClose}
            >
              Register Now
            </NavLink>
          </div>

          {/* Hospital Card */}
          <div
            className={`w-64 ${
              isDarkMode
                ? "bg-black border-white/20"
                : "bg-white border-black/20"
            } border rounded-lg shadow-sm p-6 text-center hover:shadow-lg transition-shadow duration-300`}
          >
            <div className="mb-3">
              <i className="fa-solid fa-house-medical-circle-check fa-3x text-purple-500"></i>
            </div>
            <h4 className="text-lg font-semibold mb-4">Hospital</h4>
            <NavLink
              to="/register/hospital"
              className="px-5 py-2 bg-purple-500 text-white font-medium rounded-md hover:bg-transparent hover:border hover:border-purple-500 transition-transform duration-300 hover:scale-105"
              onClick={onClose}
            >
              Register Now
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
