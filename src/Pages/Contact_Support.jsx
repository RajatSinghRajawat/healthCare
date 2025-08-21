import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-15">
      <div className="hidden lg:block">
        <h1 className="font-bold text-[2rem] uppercase tracking-wide text-center">
        Contact & Support
      </h1>
      <p className="font-semibold text-[0.9rem] uppercase tracking-wide text-center">
        Let’s Get In Touch
      </p>
      </div>
      <div className="min-h-screen px-6 flex items-center justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg uppercase tracking-wide italic">
              Contact & Support
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Let’s Get In <span>Touch</span>
            </h2>
            <p className="mt-6 text-lg italic">
              Fill out the form and our team will get back to you within 24
              hours. You can also reach us directly at{" "}
              <a href="mailto:hello@slothui.com" className="underline">
                hello@slothui.com
              </a>
            </p>
            <p className="italic">
              We’re here to support you 24/7 with all your healthcare needs.
              Whether you have questions about our doctors, booking
              appointments, online consultations, or medical services, our
              dedicated team is just a message away. Reach out through our
              contact form, email, or social media, and we’ll ensure you get the
              help you need—fast, reliable, and caring, just like our medical
              services.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8 text-2xl">
              <a href="#" className="hover:text-purple-500 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-purple-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-purple-500 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-purple-500 transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="border border-gray-700 rounded-2xl p-8 shadow-xl">
            <form className="flex flex-col gap-6">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-full border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-full border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Enter your message here..."
                  className="w-full px-4 py-3 rounded-2xl border border-gray-600 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
                ></textarea>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" className="accent-purple-500 w-4 h-4" />
                <p className="text-sm">
                  I agree to the{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </p>
              </div>

              <button
                type="submit"
                className="p-3 rounded-lg font-bold text-white bg-purple-500 transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-purple-500 hover:scale-105 hover:text-purple-500"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
