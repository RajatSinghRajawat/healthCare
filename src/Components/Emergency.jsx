import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../App.css"

const Invite = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${ formData.name }! Your message has been sent.`);
        setFormData({ name: "", email: "", message: "" });
    };

    const contactInfo = [
        { icon: <FaEnvelope size={30} />, title: "Email", detail: "contact@healthcare.com" },
        { icon: <FaPhoneAlt size={30} />, title: "Phone", detail: "+1 234 567 890" },
        { icon: <FaMapMarkerAlt size={30} />, title: "Address", detail: "123 Health St, Wellness City" },
    ];

    const services = [
        {
            title: "Gynaecology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://html.vikinglab.agency/medicax/assets/img/all-images/service/service-img19.png",
        },
        {
            title: "Dermatology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://charlestondermatology.com/wp-content/uploads/2023/03/skin-care.png",
        },
        {
            title: "Orthopedics",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://wp05.cdn.ihealthspot.com/wp-content/uploads/sites/30/2023/06/istockphoto-804154084-612x612-1.jpeg.webp",
        },
        {
            title: "Cardiology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://welcarehospital.net/wp-content/uploads/2025/07/Cardiology-1.jpg",
        },
        {
            title: "Pediatrics",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://divahospitals.com/images/service/pediatrics-img.jpg",
        },
        {
            title: "Neurology",
            desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
            img: "https://regionalneurological.com/wp-content/uploads/2019/12/AdobeStock_172813720.jpeg",
        },
    ];

    return (
        <div>
            <section className="bg-purple-50 py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-12">
                        View More Services
                    </h2>

                    <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md min-w-[250px] max-w-[280px] flex-shrink-0 hover:shadow-xl transition"
                            >
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold text-purple-500">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-2">{service.desc}</p>
                                    <a
                                        href="#"
                                        className="text-blue-600 text-sm font-medium mt-3 inline-block hover:underline"
                                    >
                                        Learn More →
                                    </a>
                                </div>
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-66 object-cover rounded-b-2xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="py-8 md:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl text-purple-600 sm:text-4xl font-bold text-center mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-center text-lg mb-8">
                        We'd love to hear from you! Fill out the form or use the contact info below.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="flex items-center p-4 rounded-lg shadow-lg border-2 border-purple-500 mb-4 hover:scale-105 transition-transform duration-300"
                                >
                                    <div className="mr-4 text-purple-500">{info.icon}</div>
                                    <div>
                                        <h5 className="text-lg font-bold mb-1">{info.title}</h5>
                                        <p className="text-base">{info.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="p-6 rounded-lg shadow-lg border-2 border-purple-500">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    required
                                />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    rows="5"
                                    required
                                />
                                <button
                                    onClick={handleSubmit}
                                    className="w-full p-3 text-base font-semibold text-white bg-purple-500 border-2 border-purple-500 rounded-lg hover:bg-transparent hover:scale-105 hover:text-purple-500 transition-all duration-300"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-r from-purple-500 to-purple-500 text-white py-5 px-6 relative overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Start Your Journey to <br /> Better Health Now
                        </h1>
                        <p className="text-lg text-purple-100">
                            Contact us today to schedule your appointment and embark on your
                            journey to better health.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <button className="bg-white text-purple-500 px-6 py-3 rounded-full flex items-center gap-2 shadow-md transition">
                                Schedule an Appointment
                                <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center items-end relative">
                        <img
                            src="https://html.vikinglab.agency/medicax/assets/img/all-images/cta/cta-img4.png" // replace with your image path
                            alt="Doctor"
                            className="w-80 md:w-96 relative z-10"
                        />

                        <div className="absolute bottom-0 w-96 h-96 rounded-full bg-purple-400/30 blur-3xl z-0"></div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Invite;