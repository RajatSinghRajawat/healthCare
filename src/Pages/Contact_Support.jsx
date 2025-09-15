import React from "react";
import { FaInstagram, FaLinkedinIn, FaTwitter, FaGlobe } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = () => {
    // Placeholder for submit action (e.g., API call or console log)
    console.log("Form submitted");
  };

  return (
    <div className="py-12 md:py-16 min-h-screen ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Banner */}
        <div className="relative border-2 border-purple-500 rounded-xl shadow-xl mb-8 overflow-hidden animate-fade-in">
          <img
            src="https://img.freepik.com/premium-vector/illustration-live-chat-support_108061-2039.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Medical Banner"
            className="w-full h-48 sm:h-64 object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl font-bold  text-center uppercase tracking-wide">
              Contact & Support
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg uppercase tracking-wide italic ">
              Contact & Support
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold  mt-4">
              Let’s Get In Touch
            </h2>
            <p className="mt-6 text-lg italic ">
              Reach out to us and our team at HealthCare Wellness Clinic will respond within 24 hours. Contact us directly at{" "}
              <a href="mailto:hello@slothui.com" className="underline text-purple-500">
                hello@slothui.com
              </a>
            </p>
            <p className="text-lg italic ">
              We’re here to support you 24/7 with all your healthcare needs. Whether you have questions about our doctors, booking appointments, online consultations, or medical services, our dedicated team, led by Dr. Vivek Gupta, is just a message away. Reach out via email or social media for fast, reliable, and caring support.
            </p>

            {/* Social Icons */}
            <div className="flex flex-col gap-4 mt-8">
              <h2 className="text-2xl font-bold  flex items-center">
                <FaGlobe className="mr-2 text-purple-500"/> Connect with Us
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  {
                    platform: "Twitter",
                    url: "https://twitter.com/drVivekGupta",
                    icon: <FaTwitter size={40} />,
                  },
                  {
                    platform: "LinkedIn",
                    url: "https://linkedin.com/in/drVivekGupta",
                    icon: <FaLinkedinIn size={40} />,
                  },
                  {
                    platform: "Instagram",
                    url: "https://instagram.com/drVivekGupta",
                    icon: <FaInstagram size={40} />,
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3  rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300 hover:shadow-2xl"
                  >
                    <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                      {social.icon}
                    </div>
                    <span className="text-lg font-medium">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="border-2 border-purple-500 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-fade-in">
            <div className="flex flex-col gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium ">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium ">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none "
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium ">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Enter your message here..."
                  className="w-full px-4 py-3 rounded-2xl border-2 border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" className="accent-purple-500 w-4 h-4" />
                <p className="text-sm ">
                  I agree to the{" "}
                  <a href="#" className="underline hover:text-black">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <button
                onClick={handleSubmit}
                className="p-3 rounded-lg font-bold text-white bg-purple-500 border-2 border-purple-500 transition-all duration-300 hover:bg-transparent hover:text-purple-500 hover:scale-105 hover:shadow-2xl animate-fade-in"
              >
                Submit Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
