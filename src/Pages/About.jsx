import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
  FaRegLightbulb,
  FaUsers,
  FaAward,
  FaClock,
  FaMedal,
  FaUserFriends,
  FaCalendarCheck,
  FaUserMd,
  FaSmile,
  FaStethoscope,
  FaSyringe,
  FaHospital,
  FaFirstAid,
} from "react-icons/fa";

const About = () => {
  const services = [
    {
      icon: <FaStethoscope size={40} />,
      title: "General Check-ups",
      description:
        "Routine health examinations and preventive care to keep you and your family in peak health.",
    },
    {
      icon: <FaSyringe size={40} />,
      title: "Vaccinations",
      description:
        "Comprehensive immunization services for children, adults, and travelers, ensuring safe and effective protection.",
    },
    {
      icon: <FaHospital size={40} />,
      title: "Specialized Treatments",
      description:
        "Advanced care in cardiology, orthopedics, neurology, and more, delivered by expert specialists.",
    },
    {
      icon: <FaFirstAid size={40} />,
      title: "Emergency Services",
      description:
        "24/7 urgent care and emergency treatment for accidents, injuries, and sudden illnesses.",
    },
  ];

  const teamMembers = [
    {
      name: "Dr. Ramesh Bhat",
      img: "https://encrypted-tbn0.gstatic.com/images?q=9GcTzVIU9zdvipE7-6J-jnF6SQcWVW3SsJcbNVw&s",
      degree: "MD Endocrinology",
      text: "Hormone & metabolism expert.",
    },
    {
      name: "Dr. Seema Patel",
      img: "https://doximity-res.cloudinary.com/images/f_auto,q_auto,t_profile_photo_320x320/zccxprhw125oaabvh35d/seema-patel-md-kenneth-city-fl.jpg",
      degree: "MD Pediatrics",
      text: "Child healthcare specialist.",
    },
    {
      name: "Dr. Vikram Mehta",
      img: "https://www.ceoinsightsindia.com/uploaded_images/company_logos/00hm1.VIKRAM.jpg",
      degree: "MD Pulmonology",
      text: "Respiratory system expert.",
    },
    {
      name: "Dr. Nandini Rao",
      img: "https://encrypted-tbn0.gstatic.com/images?q=9GcS9f0PFKjOUV5_1ccCiQOwMp3OTZZdR7uTLCg&s",
      degree: "MS Orthopedic",
      text: "Bone & joint care specialist.",
    },
    {
      name: "Dr. Rajiv Chopra",
      img: "https://encrypted-tbn0.gstatic.com/images?q=9GcSL7sZLjwh8vu8JzRX4YIHBOo0wvjKenngHTw&s",
      degree: "MD Dermatology",
      text: "Skin & cosmetic care.",
    },
    {
      name: "Dr. Anushka Malhotra",
      img: "https://encrypted-tbn0.gstatic.com/images?q=9GcS4mXwU5T-UiCXoYo6QpOIHdZHbT5xMuVrGXA&s",
      degree: "MD Gynecology",
      text: "Women’s health specialist.",
    },
    {
      name: "Dr. Deepak Sharma",
      img: "https://encrypted-tbn0.gstatic.com/images?q=9GcRfIylQmFKctlVaSivpKnDvG9X3audBdJlj5w&s",
      degree: "MBBS, MD",
      text: "General medicine expert.",
    },
    {
      name: "Dr. Poonam Yadav",
      img: "https://encrypted-tbn0.gstatic.com/images?q=9GcQHHjkToVTwu4BwToCjyhv_5xiJtOkzFKp3ww&s",
      degree: "PhD Nutrition",
      text: "Diet & wellness guidance.",
    },
  ];

  const steps = [
    {
      title: "Choose Service",
      description:
        "Select the health service or specialist you need for your appointment.",
      icon: <FaStethoscope size={40} color="#fff" />,
      bgColor: "purple-500",
    },
    {
      title: "Pick Date & Time",
      description: "Choose a convenient date and time that works best for you.",
      icon: <FaCalendarCheck size={40} color="#fff" />,
      bgColor: "purple-500",
    },
    {
      title: "Consult with Doctor",
      description:
        "Meet your doctor either online or at our facility for professional care.",
      icon: <FaUserMd size={40} color="#fff" />,
      bgColor: "purple-500",
    },
    {
      title: "Get Well Soon",
      description:
        "Follow prescribed treatments and feel better quickly with our guidance.",
      icon: <FaSmile size={40} color="#fff" />,
      bgColor: "purple-500",
    },
  ];

  const reasons = [
    {
      title: "Expert Doctors",
      description:
        "Highly qualified specialists with years of experience providing the best care.",
      icon: <FaUserFriends size={35} color="#fff" />,
      bgColor: "purple-500",
    },
    {
      title: "24/7 Availability",
      description:
        "Round-the-clock services to ensure you get care whenever you need it.",
      icon: <FaClock size={35} color="#fff" />,
      bgColor: "purple-500",
    },
    {
      title: "Advanced Technology",
      description:
        "Using modern medical equipment for accurate diagnostics and treatments.",
      icon: <FaStethoscope size={35} color="#fff" />,
      bgColor: "purple-500",
    },
    {
      title: "Trusted Quality",
      description:
        "Our commitment to excellence has made us a trusted healthcare provider.",
      icon: <FaMedal size={35} color="#fff" />,
      bgColor: "purple-500",
    },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Foundation",
      description:
        "Our healthcare journey began with a vision to serve the community.",
      icon: <FaRegLightbulb size={25} color="#fff" />,
    },
    {
      year: "2017",
      title: "First Clinic",
      description:
        "Opened our first state-of-the-art clinic providing comprehensive care.",
      icon: <FaHospital size={25} color="#fff" />,
    },
    {
      year: "2019",
      title: "Expanding Team",
      description: "Welcomed top specialists to expand our services and reach.",
      icon: <FaUsers size={25} color="#fff" />,
    },
    {
      year: "2022",
      title: "Excellence Award",
      description:
        "Recognized for outstanding healthcare services and patient satisfaction.",
      icon: <FaAward size={25} color="#fff" />,
    },
  ];

  const faqs = [
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment through our website, mobile app, or by calling our clinic directly.",
    },
    {
      question: "What are the clinic's working hours?",
      answer:
        "Our clinics are open Monday to Saturday, from 8:00 AM to 8:00 PM.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept most major health insurance providers. Please check with our staff for details.",
    },
    {
      question: "Can I consult online?",
      answer:
        "Yes! We provide telemedicine services for select doctors and follow-ups.",
    },
    {
      question: "What documents are required for the first visit?",
      answer:
        "Please bring a valid ID, insurance card (if applicable), and any previous medical records.",
    },
    {
      question: "Are vaccinations available for children and adults?",
      answer:
        "Yes, we provide comprehensive immunization services for all age groups.",
    },
    {
      question: "How can I get my lab results?",
      answer:
        "Lab results are available through our online patient portal or you can collect them at the clinic.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Appointments can be canceled or rescheduled up to 24 hours in advance without any charges.",
    },
    {
      question: "Do you provide emergency services?",
      answer:
        "Yes, our clinics are equipped to handle emergencies. Please contact the nearest clinic immediately.",
    },
    {
      question: "Are follow-up consultations free?",
      answer:
        "Follow-ups may be free or discounted depending on your treatment plan. Please confirm at the reception.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    {
      icon: <FaEnvelope size={30} />,
      title: "Email",
      detail: "contact@healthcare.com",
    },
    {
      icon: <FaPhoneAlt size={30} />,
      title: "Phone",
      detail: "+1 234 567 890",
    },
    {
      icon: <FaMapMarkerAlt size={30} />,
      title: "Address",
      detail: "123 Health St, Wellness City",
    },
  ];

  return (
    <>
      {/* Who We Are Section */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Left: Text */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Who We Are
              </h2>
              <h5 className="text-xl mb-4">Introduction & Mission</h5>
              <p className="text-lg leading-relaxed mb-4">
                Welcome to <strong>HealthCare</strong> – a place where
                compassionate care meets cutting-edge technology. We are a team
                of dedicated professionals, committed to bringing you the best
                in healthcare services.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Our mission is simple: to treat every patient with dignity,
                empathy, and the highest medical standards. Whether it’s a
                routine check-up or a complex surgery, we stand by our promise
                to deliver trustworthy and affordable care.
              </p>
              <button className="inline-flex items-center px-4 py-2 text-base font-medium text-white bg-purple-500 border-2 border-purple-500 rounded-lg hover:bg-transparent hover:scale-105 hover:text-purple-500 transition-all duration-300">
                Read More →
              </button>
            </div>
            {/* Right: Image */}
            <div className="lg:w-1/2 text-center">
              <img
                src="https://savechildlife.org/uploads/who-we-are-1.png"
                alt="Doctor"
                className="w-full max-w-[90%] h-[400px] sm:h-[500px] object-cover rounded-lg shadow-lg border-4 border-purple-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision & Mission */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Vision & Mission
          </h2>
          <p className="text-lg mb-8">
            Purpose & Goals That Drive Us Every Day
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Vision Card */}
            <div className="p-6 rounded-lg shadow-lg border-2 border-purple-500">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-purple-500 text-white text-3xl">
                ✓
              </div>
              <h4 className="text-xl font-bold mb-3">Our Vision</h4>
              <p className="text-base leading-relaxed">
                To be a world-class healthcare provider, offering affordable and
                accessible medical services while upholding the highest
                standards of ethics and compassion.
              </p>
            </div>
            {/* Mission Card */}
            <div className="p-6 rounded-lg shadow-lg border-2 border-purple-500">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-purple-500 text-white text-3xl">
                👤
              </div>
              <h4 className="text-xl font-bold mb-3">Our Mission</h4>
              <p className="text-base leading-relaxed">
                To deliver exceptional and personalized care through a team of
                expert doctors, cutting-edge technology, and a patient-first
                approach that promotes healing and wellness.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">What We Offer</h2>
          <p className="text-lg mb-8">
            Key Features & Services Designed to Keep You Healthy
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg border-2 border-purple-500 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-purple-500 text-white">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Team */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg mb-8">
            Dedicated Doctors & Key Members Who Make Healthcare Exceptional
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((doc, index) => (
              <div
                key={index}
                className="flex flex-col border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-center mt-4">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-28 h-28 rounded-full object-cover border-[3px] border-purple-500"
                  />
                </div>
                <div className="text-center p-4 flex-grow">
                  <h5 className="text-lg font-bold mb-1">{doc.name}</h5>
                  <p className="text-sm mb-3">{doc.degree}</p>
                  <p className="text-sm">{doc.text}</p>
                </div>
                <div className="p-4">
                  <button className="w-full mb-2 py-2 text-sm font-medium border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300">
                    <FaUserMd className="inline mr-2" /> View Profile
                  </button>
                  <button className="w-full py-2 text-sm font-medium text-white bg-purple-500 border border-purple-500 rounded-lg hover:bg-transparent transition-all duration-300">
                    <FaCalendarAlt className="inline mr-2" /> Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg mb-8">
            A simple and easy process to book your healthcare appointments
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg border-2 border-purple-500 hover:scale-105 transition-transform duration-300 flex flex-col items-center"
              >
                <div
                  className={`flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-${step.bgColor}`}
                >
                  {step.icon}
                </div>
                <h5 className="text-lg font-bold mb-2">{step.title}</h5>
                <p className="text-base leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg mb-8">
            Discover the unique qualities that make our healthcare services
            stand out.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-lg border-2 border-purple-500 hover:scale-105 transition-transform duration-300 flex flex-col items-center"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-${reason.bgColor}`}
                >
                  {reason.icon}
                </div>
                <h5 className="text-lg font-bold mb-2">{reason.title}</h5>
                <p className="text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Journey (Timeline) */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-lg mb-8">
            Milestones that showcase our growth and commitment to healthcare
            excellence.
          </p>
          <div className="flex flex-col lg:flex-row justify-between items-start relative">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex flex-col items-center mb-8 lg:mb-0 flex-1 relative"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-4 z-10 bg-purple-500">
                  {milestone.icon}
                </div>
                <h5 className="text-lg font-bold">{milestone.year}</h5>
                <h6 className="text-base font-medium">{milestone.title}</h6>
                <p className="text-sm max-w-[200px] leading-relaxed">
                  {milestone.description}
                </p>
                {index !== milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-[-50%] w-[100%] h-1 bg-purple-500 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-lg mb-8">
            Answers to the most common questions about our services and
            processes.
          </p>
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <div
                  className="flex justify-between items-center p-4 border-2 border-purple-500 rounded-lg cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-base font-medium">{`${index + 1}. ${
                    faq.question
                  }`}</span>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openIndex === index && (
                  <div className="p-4 border-l-2 border-r-2 border-b-2 border-purple-500 rounded-b-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get in Touch */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-center text-lg mb-8">
            We'd love to hear from you! Fill out the form or use the contact
            info below.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
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
            {/* Contact Form */}
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
    </>
  );
};

export default About;
