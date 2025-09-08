import React, { useState, useEffect, useContext } from "react";
import { FaUserMd, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFileAlt, FaCalendarAlt, FaStethoscope } from "react-icons/fa";
import ThemeContext from "../ThemeContext.jsx";

const DoctorRegisterModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        doctorName: "",
        email: "",
        contactNumber: "",
        address: "",
        licenseNumber: "",
        specialization: "",
        experience: "",
        agreePolicy: false,
    });
    const { isDarkMode } = useContext(ThemeContext);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => setSuccessMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.doctorName.trim()) newErrors.doctorName = "Doctor name is required";
        if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
            newErrors.email = "Valid email is required";
        if (!formData.contactNumber.match(/^\+?\d{10,12}$/))
            newErrors.contactNumber = "Valid contact number is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.licenseNumber.trim()) newErrors.licenseNumber = "License number is required";
        if (!formData.specialization.trim()) newErrors.specialization = "Specialization is required";
        if (!formData.experience || isNaN(formData.experience) || formData.experience < 0)
            newErrors.experience = "Valid experience is required";
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
        console.log("Doctor Registration Form Submitted:", formData);
        setSuccessMessage("Form submitted successfully ✅");
        setFormData({
            doctorName: "",
            email: "",
            contactNumber: "",
            address: "",
            licenseNumber: "",
            specialization: "",
            experience: "",
            agreePolicy: false,
        });
    };

    if (!isOpen) return null;
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
                        Doctor Registration
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
                        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                            Doctor Registration
                        </h1>

                        {successMessage && (
                            <div className="text-purple-500 text-base font-bold text-center mb-4">
                                {successMessage}
                            </div>
                        )}

                        <div className="relative">
                            <label className="block mb-2 text-sm font-medium">Doctor Name</label>
                            <div className="flex items-center">
                                <FaUserMd className="absolute ml-3 text-purple-500" size={20} />
                                <input
                                    type="text"
                                    name="doctorName"
                                    value={formData.doctorName}
                                    onChange={handleChange}
                                    placeholder="Enter doctor name"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none placeholder-gray-500"
                                />
                            </div>
                            {errors.doctorName && <p className="text-red-500 text-sm mt-1">{errors.doctorName}</p>}
                        </div>

                        <div className="relative">
                            <label className="block mb-2 text-sm font-medium">Email Address</label>
                            <div className="flex items-center">
                                <FaEnvelope className="absolute ml-3 text-purple-500" size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter email address"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none placeholder-gray-500"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className="relative">
                            <label className="block mb-2 text-sm font-medium">Contact Number</label>
                            <div className="flex items-center">
                                <FaPhone className="absolute ml-3 text-purple-500" size={20} />
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    placeholder="Enter contact number"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none placeholder-gray-500"
                                />
                            </div>
                            {errors.contactNumber && <p className="text-red-500 text-sm mt-1">{errors.contactNumber}</p>}
                        </div>

                        <div className="relative">
                            <label className="block mb-2 text-sm font-medium">Address</label>
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="absolute ml-3 mt-3 text-purple-500" size={20} />
                                <textarea
                                    rows="3"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter address"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none placeholder-gray-500"
                                ></textarea>
                            </div>
                            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                        </div>

                        <div className="relative">
                            <label className="block mb-2 text-sm font-medium">License Number</label>
                            <div className="flex items-center">
                                <FaFileAlt className="absolute ml-3 text-purple-500" size={20} />
                                <input
                                    type="text"
                                    name="licenseNumber"
                                    value={formData.licenseNumber}
                                    onChange={handleChange}
                                    placeholder="Enter license number"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none placeholder-gray-500"
                                />
                            </div>
                            {errors.licenseNumber && <p className="text-red-500 text-sm mt-1">{errors.licenseNumber}</p>}
                        </div>

                        <div className="relative">
                            <label className="block mb-2 text-sm font-medium">Specialization</label>
                            <div className="flex items-center">
                                <FaStethoscope className="absolute ml-3 text-purple-500" size={20} />
                                <input
                                    type="text"
                                    name="specialization"
                                    value={formData.specialization}
                                    onChange={handleChange}
                                    placeholder="Enter specialization"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none placeholder-gray-500"
                                />
                            </div>
                            {errors.specialization && <p className="text-red-500 text-sm mt-1">{errors.specialization}</p>}
                        </div>

                        <div className="relative">
                            <label className="block mb-2 text-sm font-medium">Experience (Years)</label>
                            <div className="flex items-center">
                                <FaCalendarAlt className="absolute ml-3 text-purple-500" size={20} />
                                <input
                                    type="number"
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    placeholder="Enter experience in years"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none placeholder-gray-500"
                                />
                            </div>
                            {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                        </div>

                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="agreePolicy"
                                checked={formData.agreePolicy}
                                onChange={handleChange}
                                className="w-4 h-4 accent-purple-500"
                            />
                            <p className="text-sm">
                                I agree to the {" "}
                                <a href="#" className="underline text-purple-500 hover:text-black">
                                    Privacy Policy
                                </a>
                            </p>
                            {errors.agreePolicy && <p className="text-red-500 text-sm mt-1">{errors.agreePolicy}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 text-sm font-medium border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white hover:scale-105 hover:shadow-[0_0_25px_rgba(105,36,185,0.4)] transition-all duration-300"
                        >
                            Submit Registration
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default DoctorRegisterModal;
