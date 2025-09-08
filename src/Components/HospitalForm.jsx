import React, { useState, useEffect, useContext } from "react";
import {
    FaHospital,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaFileAlt,
    FaCalendarAlt,
    FaStethoscope,
} from "react-icons/fa";
import ThemeContext from "../ThemeContext.jsx";

const HospitalFormModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        hospitalName: "",
        email: "",
        contactNumber: "",
        address: "",
        licenseNumber: "",
        establishedYear: "",
        servicesOffered: "",
        agreePolicy: false,
    });
    const { isDarkMode } = useContext(ThemeContext);
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    // Clear success message after 3 seconds
    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => setSuccessMessage(""), 3000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.hospitalName.trim()) newErrors.hospitalName = "Hospital name is required";
        if (!formData.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
            newErrors.email = "Valid email is required";
        if (!formData.contactNumber.match(/^\+?\d{10,12}$/))
            newErrors.contactNumber = "Valid contact number is required";
        if (!formData.address.trim()) newErrors.address = "Address is required";
        if (!formData.licenseNumber.trim()) newErrors.licenseNumber = "License number is required";
        if (
            !formData.establishedYear ||
            formData.establishedYear < 1800 ||
            formData.establishedYear > new Date().getFullYear()
        )
            newErrors.establishedYear = `Year must be between 1800 and ${new Date().getFullYear()}`;
        if (!formData.servicesOffered.trim()) newErrors.servicesOffered = "Services offered are required";
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
        console.log("Hospital Registration Form Submitted:", formData);
        setSuccessMessage("Form submitted successfully ✅");
        setFormData({
            hospitalName: "",
            email: "",
            contactNumber: "",
            address: "",
            licenseNumber: "",
            establishedYear: "",
            servicesOffered: "",
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
                        Hospital Registration
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
                            Hospital Registration
                        </h1>
                        {successMessage && (
                            <div className="text-green-600 text-base font-bold text-center mb-4">
                                {successMessage}
                            </div>
                        )}

                        {/* Hospital Name */}
                        <div className="relative">
                            <label className="block mb-2 text-sm font-medium">
                                Hospital Name
                            </label>
                            <div className="flex items-center">
                                <FaHospital className="absolute ml-3 text-purple-500" size={20} />
                                <input
                                    type="text"
                                    name="hospitalName"
                                    value={formData.hospitalName}
                                    onChange={handleChange}
                                    placeholder="Enter hospital name"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 outline-none"
                                />
                            </div>
                            {errors.hospitalName && <p className="text-red-500 text-sm">{errors.hospitalName}</p>}
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
                                    placeholder="Enter email address"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 outline-none"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                                    placeholder="Enter contact number"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 outline-none"
                                />
                            </div>
                            {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
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
                                    placeholder="Enter hospital address"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 outline-none"
                                ></textarea>
                            </div>
                            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                        </div>

                        {/* License Number */}
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
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 outline-none"
                                />
                            </div>
                            {errors.licenseNumber && <p className="text-red-500 text-sm">{errors.licenseNumber}</p>}
                        </div>

                        {/* Established Year */}
                        <div className="relative">
                            <label className="block mb-2 text-sm font-medium">Established Year</label>
                            <div className="flex items-center">
                                <FaCalendarAlt className="absolute ml-3 text-purple-500" size={20} />
                                <input
                                    type="number"
                                    name="establishedYear"
                                    value={formData.establishedYear}
                                    onChange={handleChange}
                                    placeholder="Enter established year"
                                    min="1800"
                                    max={new Date().getFullYear()}
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 outline-none"
                                />
                            </div>
                            {errors.establishedYear && (
                                <p className="text-red-500 text-sm">{errors.establishedYear}</p>
                            )}
                        </div>

                        {/* Services Offered */}
                        <div className="relative">
                            <label className="block mb-2 text-sm font-medium">Services Offered</label>
                            <div className="flex items-start">
                                <FaStethoscope className="absolute ml-3 mt-3 text-purple-500" size={20} />
                                <textarea
                                    rows="4"
                                    name="servicesOffered"
                                    value={formData.servicesOffered}
                                    onChange={handleChange}
                                    placeholder="Enter services offered"
                                    className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-purple-500 outline-none"
                                ></textarea>
                            </div>
                            {errors.servicesOffered && (
                                <p className="text-red-500 text-sm">{errors.servicesOffered}</p>
                            )}
                        </div>

                        {/* Agree to Policy */}
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="agreePolicy"
                                checked={formData.agreePolicy}
                                onChange={handleChange}
                                className="w-4 h-4 accent-purple-500"
                            />
                            <p className="text-sm">
                                I agree to the{" "}
                                <a href="#" className="underline text-purple-500 hover:text-black">
                                    Privacy Policy
                                </a>
                            </p>
                        </div>
                        {errors.agreePolicy && <p className="text-red-500 text-sm">{errors.agreePolicy}</p>}

                        <button
                            type="submit"
                            className="w-full py-2 text-sm font-medium border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all"
                        >
                            Submit Registration
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HospitalFormModal;
