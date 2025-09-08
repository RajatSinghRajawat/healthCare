import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeContext from "../ThemeContext.jsx";
import { FaUserMd, FaHospital, FaRegSmile } from "react-icons/fa";
import UserRegisterModal from "./UserRegisterModal";
import HospitalRegisterModal from "./HospitalForm.jsx"; // Assuming this is your HospitalRegisterModal
import DoctorRegisterModal from "./DoctorRegisterModal"; // Placeholder for DoctorRegisterModal

const RegisterModal = ({ isOpen, onClose }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isUserRegisterOpen, setIsUserRegisterOpen] = useState(false);
  const [isDoctorRegisterOpen, setIsDoctorRegisterOpen] = useState(false);
  const [isHospitalRegisterOpen, setIsHospitalRegisterOpen] = useState(false);

  // Close all modals if RegisterModal is closed and no other modals are open
  if (!isOpen && !isUserRegisterOpen && !isDoctorRegisterOpen && !isHospitalRegisterOpen) {
    return null;
  }

  // Handlers for opening each registration modal
  const handleUserRegisterClick = () => {
    setIsUserRegisterOpen(true);
    onClose(); // Close RegisterModal
  };

  const handleDoctorRegisterClick = () => {
    setIsDoctorRegisterOpen(true);
    onClose();
  };

  const handleHospitalRegisterClick = () => {
    setIsHospitalRegisterOpen(true);
    onClose();
  };

  // Handlers for closing each registration modal
  const handleUserRegisterClose = () => {
    setIsUserRegisterOpen(false);
  };

  const handleDoctorRegisterClose = () => {
    setIsDoctorRegisterOpen(false);
  };

  const handleHospitalRegisterClose = () => {
    setIsHospitalRegisterOpen(false);
  };

  return (
    <>
      {/* RegisterModal */}
      {isOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center ${isDarkMode ? "bg-black/50" : "bg-black/40"
            } z-50 transition-opacity duration-300 h-[100vh]`}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Register As Modal"
        >
          <div
            className={`${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
              } rounded-lg shadow-xl w-full max-w-4xl mx-4 sm:mx-6 md:mx-8 relative animate-fade-in`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className={`flex justify-between items-center px-6 py-4 border-b ${isDarkMode ? "border-white/20" : "border-black/20"
                }`}
            >
              <h2 className="text-xl font-semibold text-center w-full">
                Register As
              </h2>
              <button
                onClick={onClose}
                className="absolute right-4 top-3 text-lg bg-purple-500 text-white hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-500 rounded p-2 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Close Register Modal"
              >
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="flex flex-wrap justify-center gap-6 p-6 sm:p-8">
              {/* User Card */}
              <div
                className={`w-64 ${isDarkMode ? "bg-gray-900 border-white/20" : "bg-white border-black/20"
                  } border rounded-lg shadow-sm p-6 text-center hover:shadow-lg transition-all duration-300`}
              >
                <div className="mb-3">
                  <div className="text-4xl flex justify-center mb-4 text-purple-500">
                    <FaRegSmile />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-4">User</h4>
                <button
                  onClick={handleUserRegisterClick}
                  className="px-5 py-2 bg-purple-500 text-white font-medium rounded-md hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-500 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Register as User"
                >
                  Register Now
                </button>
              </div>

              {/* Doctor Card */}
              <div
                className={`w-64 ${isDarkMode ? "bg-gray-900 border-white/20" : "bg-white border-black/20"
                  } border rounded-lg shadow-sm p-6 text-center hover:shadow-lg transition-all duration-300`}
              >
                <div className="mb-3">
                  <div className="text-4xl flex justify-center mb-4 text-purple-500">
                    <FaUserMd />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-4">Doctor</h4>
                <button
                  onClick={handleDoctorRegisterClick}
                  className="px-5 py-2 bg-purple-500 text-white font-medium rounded-md hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-500 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Register as Doctor"
                >
                  Register Now
                </button>
              </div>

              {/* Hospital Card */}
              <div
                className={`w-64 ${isDarkMode ? "bg-gray-900 border-white/20" : "bg-white border-black/20"
                  } border rounded-lg shadow-sm p-6 text-center hover:shadow-lg transition-all duration-300`}
              >
                <div className="mb-3">
                  <div className="text-4xl flex justify-center mb-4 text-purple-500">
                    <FaHospital />
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-4">Hospital</h4>
                <button
                  onClick={handleHospitalRegisterClick}
                  className="px-5 py-2 bg-purple-500 text-white font-medium rounded-md hover:bg-transparent hover:border hover:border-purple-500 hover:text-purple-500 transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  aria-label="Register as Hospital"
                >
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* UserRegisterModal */}
      <UserRegisterModal
        isOpen={isUserRegisterOpen}
        onClose={handleUserRegisterClose}
      />

      {/* DoctorRegisterModal */}
      <DoctorRegisterModal
        isOpen={isDoctorRegisterOpen}
        onClose={handleDoctorRegisterClose}
      />

      {/* HospitalRegisterModal */}
      <HospitalRegisterModal
        isOpen={isHospitalRegisterOpen}
        onClose={handleHospitalRegisterClose}
      />
    </>
  );
};

export default RegisterModal;