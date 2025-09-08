import React, { useState, useRef } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import "../App.css"

const Details = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: <FaEnvelope size={30} />, title: "Email", detail: "contact@healthcare.com" },
    { icon: <FaPhoneAlt size={30} />, title: "Phone", detail: "+1 234 567 890" },
    { icon: <FaMapMarkerAlt size={30} />, title: "Address", detail: "123 Health St, Wellness City" },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

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
    {
      title: "Oncology",
      desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWh46eZ0Y0cNkd1doTfXdsyhkrxyaTe9_SQ&s",
    },
    {
      title: "Nephrology",
      desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
      img: "https://www.omegahospitals.com/_next/image?url=https%3A%2F%2Fomegafilesstore.s3.ap-south-1.amazonaws.com%2Fwebsite%2Fspecializations%2Fnephrology.png&w=3840&q=75",
    },
    {
      title: "Rheumatology",
      desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
      img: "https://www.sgvpholistichospital.org/wp-content/uploads/elementor/thumbs/rheumatology-qyap1u19jtfl1ot3mnybuisy4qrw5td6shy5kppcms.jpg",
    },
    {
      title: "Hematology",
      desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ6qjs_pxz3E18i8KSKB7jzG6AbOt9vNeZjA&s",
    },
    {
      title: "Neonatology",
      desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
      img: "https://media.licdn.com/dms/image/v2/D4D12AQHp89dPFu85Zg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1655878789030?e=2147483647&v=beta&t=2f1P8WmNTF0sSSJygfaEbbC9Av40Q3Haeg7V9uzDuwM",
    },
    {
      title: "Gastroenterology",
      desc: "Specializing in the diagnosis and treatment of heart-related conditions.",
      img: "https://suvidhahospital.com/wp-content/uploads/2023/12/Gastroenterology-Big-Image.jpg",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What Vaccinations Are Required For My Child?",
      answer:
        "Speech development varies of children, but if your child isn’t speaking by 18 months, or if you notice other developmental delays, it’s a good idea to schedule a developmental screening. Early intervention helps."
    },
    {
      question: "How Often Should My Child Visit The Pediatrician?",
      answer:
        "Your child should visit the pediatrician regularly for well-child checkups, usually every few months in the first two years and then yearly."
    },
    {
      question: "Should I Be Concerned If My Child Isn’t Talking Yet?",
      answer:
        "Children develop speech at different rates. If you're concerned, consult your pediatrician for a developmental screening."
    },
    {
      question: "How Can I Help My Child With Sleep Problems?",
      answer:
        "Establish a bedtime routine, limit screen time before bed, and create a calm environment to help your child sleep better."
    }
  ];

  return (
    <div>
      <section>
        {/* Hero Section */}
        <div className="bg-gradient-to-bl from-violet-500 to-fuchsia-500 text-white text-center p-12">
          <h1 className="text-3xl md:text-5xl font-semibold">DERMATOLOGY</h1>
        </div>

        {/* First Row */}
        <div className="flex flex-col lg:flex-row justify-evenly items-center gap-8 px-6 lg:px-20 py-9">
          <div className="w-full lg:w-3/5 lg:order-1 md:order-2">
            <h1 className="text-2xl md:text-4xl font-semibold">
              Dermatologic Patient Care
            </h1>
            <p className="text-base md:text-lg pt-4 pr-2">
              At Health Care, we understand that children require specialized,
              compassionate care thrive. Our Dermatologic team is dedicated to
              providing comprehensive medical services for infants, children,
              adolescents in a warm, family-friendly environment.
            </p>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-3 py-4 text-base md:text-lg font-medium">
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Patient-Centered Care
              </p>
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Family-Centric Care
              </p>
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Expert Pediatricians
              </p>
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Commitment Wellness
              </p>
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Health Coordination
              </p>
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Gentle And Friendly
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/5 lg:order-2 md:order-1">
            <img
              src="https://html.vikinglab.agency/medicax/assets/img/all-images/service/service-img32.png"
              alt="Image"
              className="rounded-xl w-full"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex flex-col lg:flex-row justify-evenly gap-8 px-6 lg:px-20 py-9">
          <div className="w-full lg:w-2/5">
            <img
              src="https://html.vikinglab.agency/medicax/assets/img/all-images/service/service-img33.png"
              alt="image"
              className="rounded-lg border-2 border-purple-500 w-full lg:w-[75%]"
            />
          </div>
          <div className="w-full lg:w-3/5 pt-2">
            <h1 className="text-2xl md:text-3xl font-semibold">
              How Our Pediatric Services Work
            </h1>
            <p className="text-base md:text-lg pt-4">
              Our team of pediatric experts is here to provide a wide range of
              services, including newborn care, vaccinations, growth tracking,
              and management of acute or chronic conditions.
            </p>
            <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-4 py-5 text-lg font-medium">
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Patient-Centered Care
              </p>
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Family-Centric Care
              </p>
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Expert Pediatricians
              </p>
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Commitment Wellness
              </p>
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Health Coordination
              </p>
              <p className="flex items-center gap-3">
                <FaCircleCheck className="text-purple-600" /> Gentle And Friendly
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full lg:w-[70%] xl:w-[55%] m-auto py-8 text-center px-4">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Your Guide To Pediatric Care Questions
          </h1>
          <p className="text-base md:text-lg pt-4 text-start">
            Our goal is to provide clarity and reassurance every step of the
            way. In this FAQ section, we’ve compiled answers to the most commonly
            asked questions.
          </p>

          <div className="py-5">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex justify-between items-center p-4 bg-gray-100 rounded-lg cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-base md:text-lg text-purple-800 font-medium">
                    {`${index + 1}. ${faq.question}`}
                  </span>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>

                {/* Accordion Content */}
                <div
                  className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index
                    ? "max-h-40 p-4 bg-purple-500 text-white rounded-b-lg"
                    : "max-h-0"
                    }`}
                >
                  <p className="text-start text-sm md:text-base">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-purple-50 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-500">
            View More Services
          </h2>

          <div className="relative w-full">
            <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100">◁</button>

            <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth">
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

            <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100">▷</button>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
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
      </section>

    </div>
  );
};

export default Details;
