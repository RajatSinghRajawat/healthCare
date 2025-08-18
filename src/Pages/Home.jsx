import React from "react";
import {
  FaCalendarCheck,
  FaUserMd,
  FaHospital,
  FaStethoscope,
  FaHeartbeat,
  FaAmbulance,
  FaPills,
  FaMicroscope,
  FaRegSmile,
  FaBrain,
  FaXRay,
  FaBaby,
  FaLungs,
  FaTeeth,
  FaEye,
  FaBone,
  FaQuoteLeft,
  FaArrowRight,
  FaPhoneAlt,
  FaCalendarAlt,
  FaClock
} from "react-icons/fa";

const Home = () => {

  const features = [
    { icon: <FaUserMd />, title: "Expert Doctors", desc: "Highly qualified and experienced medical professionals." },
    { icon: <FaHospital />, title: "Modern Facilities", desc: "State-of-the-art infrastructure and equipment." },
    { icon: <FaStethoscope />, title: "Comprehensive Care", desc: "Full range of healthcare services under one roof." },
    { icon: <FaHeartbeat />, title: "Patient-Centered", desc: "Focused on your comfort and well-being." },
    { icon: <FaAmbulance />, title: "24/7 Emergency", desc: "Quick response and emergency care anytime." },
    { icon: <FaPills />, title: "Pharmacy Support", desc: "In-house pharmacy for your convenience." },
    { icon: <FaMicroscope />, title: "Advanced Diagnostics", desc: "Accurate and fast lab & imaging services." },
    { icon: <FaRegSmile />, title: "Friendly Staff", desc: "Caring and approachable healthcare team." }
  ];

  const doctors = [
    { name: "Dr. Vivek Gupta", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNBIL0_hJu7hxnyfJpFl8yzjxp6Q7zHUJMw&s", degree: "MD, MBBS", text: "Preventive healthcare expert." },
    { name: "Dr. Anjali Sharma", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDz4ooWq1gmfTSE4-4jHzHaSPM_8_f4h_qQQ&s", degree: "MD, Nutrition", text: "Specialist in nutrition and lifestyle." },
    { name: "Dr. Rajesh Kumar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn=9GcRbS9oQS-5J8RcHMkBW5EktnFh9FX_pkAtrFQ&s", degree: "PhD, Psychology", text: "Mental health and stress management." },
    { name: "Dr. Priya Singh", img: "https://www.indiraivf.com/sites/default/files/styles/wide/public/2025-05/Dr-Priya-Singh-%28Bareilly%29.jpg.webp?VersionId=bxPkVVZdNZ60mQHWWboy0F3JB4ZMbR2B", degree: "MBBS, PT", text: "Physical fitness and holistic care." },
    { name: "Dr. Neha Verma", img: "https://rajeye.com/wp-content/uploads/2024/01/19__2_-removebg-preview.png", degree: "MD Pediatrics", text: "Pediatric healthcare expert." },
    { name: "Dr. Mohan Das", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn=9GcTmpQTr0veD8booyvh23izIqevPNxQni0UBVw&s", degree: "MD Cardiology", text: "Heart specialist." },
  ];

  const specialties = [
    { icon: <FaHeartbeat />, title: "Cardiology", desc: "Advanced care for heart and vascular health." },
    { icon: <FaBrain />, title: "Neurology", desc: "Diagnosis and treatment for brain & nervous system disorders." },
    { icon: <FaXRay />, title: "Radiology", desc: "Modern imaging for accurate medical evaluations." },
    { icon: <FaBaby />, title: "Pediatrics", desc: "Compassionate care for children and adolescents." },
    { icon: <FaLungs />, title: "Pulmonology", desc: "Specialized treatment for lung and respiratory conditions." },
    { icon: <FaTeeth />, title: "Dentistry", desc: "Complete dental care for a healthy smile." },
    { icon: <FaEye />, title: "Ophthalmology", desc: "Eye health services and vision care." },
    { icon: <FaBone />, title: "Orthopedics", desc: "Bone, joint, and muscle treatment for all ages." }
  ];

  const reviews = [
    {
      name: "Emily Carter",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      review: "The doctors were incredibly kind and attentive. I felt truly cared for and confident in my treatment.",
    },
    {
      name: "James Walker",
      img: "https://randomuser.me/api/portraits/men/46.jpg",
      review: "State-of-the-art facilities and an amazing staff. I was impressed by how smoothly everything went.",
    },
    {
      name: "Sophia Johnson",
      img: "https://randomuser.me/api/portraits/women/50.jpg",
      review: "From booking my appointment to post-treatment care, the entire process was seamless and professional.",
    },
    {
      name: "Daniel Lee",
      img: "https://randomuser.me/api/portraits/men/52.jpg",
      review: "They truly put patients first. I recommend them to everyone who values quality healthcare.",
    },
  ];

  const articles = [
    {
      title: "5 Ways to Boost Your Immune System Naturally",
      img: "https://img.freepik.com/free-photo/healthy-eating-concept_23-2147863893.jpg",
      desc: "Simple lifestyle and diet changes can strengthen your immune defenses.",
    },
    {
      title: "The Importance of Regular Health Checkups",
      img: "https://img.freepik.com/free-photo/doctor-patient-meeting_23-2147762165.jpg",
      desc: "Routine screenings can detect issues early and save lives.",
    },
    {
      title: "Tips to Reduce Stress and Improve Mental Health",
      img: "https://img.freepik.com/free-photo/woman-practicing-yoga-home_23-2148910004.jpg",
      desc: "Learn ways to manage daily stress for a healthier mind.",
    },
    {
      title: "Benefits of Regular Exercise",
      img: "https://img.freepik.com/free-photo/active-young-woman-running-morning_1150-15438.jpg",
      desc: "Exercise improves mood, energy levels, and overall wellness.",
    },
  ];

  const cards = [
    {
      title: "Partner With Us",
      img: "https://img.freepik.com/free-photo/doctor-wearing-stethoscope_23-2148819622.jpg?w=740",
      description: "Collaborate with our healthcare network to provide top-notch services and expand your reach.",
      buttonText: "Partner With Us",
    },
    {
      title: "Register Now",
      img: "https://img.freepik.com/free-photo/hospital-building-modern-architecture_23-2149329179.jpg?w=740",
      description: "Join our network today and be a part of our mission to deliver quality healthcare.",
      buttonText: "Register Now",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left */}
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                Your Health is Our Priority
              </h1>
              <p className="text-lg sm:text-xl mb-6">
                We provide expert medical consultations, diagnostics, and treatments with compassion and care.
              </p>
              <button
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-purple-500 border-2 border-purple-500 rounded-lg shadow-sm hover:bg-transparent hover:scale-105 hover:text-purple-500 transition-all duration-300">
                <FaCalendarCheck className="mr-2" />
                Book Appointment
              </button>
            </div>
            {/* Right */}
            <div className="lg:w-1/2 text-center">
              <img
                src="https://img.freepik.com/free-photo/portrait-doctor_144627-39389.jpg?w=740"
                alt="Doctor"
                className="w-full max-w-[300px] mx-auto rounded-lg shadow-lg border-[10px] border-purple-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Why Choose Us
          </h2>
          <p className="text-center text-lg mb-8">
            Delivering excellence in healthcare with compassion, technology, and trust.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-6 text-center border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4 text-purple-500">{item.icon}</div>
                <h5 className="font-bold text-lg mb-2">{item.title}</h5>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Top Doctors */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Meet Our Top Doctors
          </h2>
          <p className="text-center text-lg mb-8">
            Dedicated professionals bringing expertise, compassion, and care to every patient.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, index) => {
              return (
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
                    <button
                      className="w-full mb-2 py-2 text-sm font-medium border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                    >
                      <FaUserMd className="inline mr-2" /> View Profile
                    </button>
                    <button
                      className="w-full py-2 text-sm font-medium text-white bg-purple-500 border border-purple-500 rounded-lg hover:bg-white hover:text-purple-500 transition-all duration-300"
                    >
                      <FaCalendarAlt className="inline mr-2" /> Book Appointment
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Specialties We Cover */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Specialties We Cover
          </h2>
          <p className="text-center text-lg mb-8">
            From prevention to advanced treatments, our specialties ensure complete care for you and your family.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((item, index) => (
              <div
                key={index}
                className="p-6 text-center border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="text-4xl mb-4 text-purple-500">{item.icon}</div>
                <h5 className="font-bold text-lg">{item.title}</h5>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Patients Say */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            What Patients Say
          </h2>
          <p className="text-center text-lg mb-8">
            Real stories from real patients — sharing their experiences of care and healing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((item, index) => (
              <div
                key={index}
                className="p-6 text-center border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <FaQuoteLeft className="text-4xl mb-4 text-purple-500" />
                <p className="text-sm italic min-h-[80px] mb-4">"{item.review}"</p>
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full mx-auto mb-3 object-cover border-2 border-purple-500"
                />
                <h6 className="font-bold text-base">{item.name}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Health Tips & Articles */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Health Tips & Articles
          </h2>
          <p className="text-center text-lg mb-8 max-w-xl mx-auto">
            Stay informed with expert advice, wellness tips, and the latest healthcare updates.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((item, index) => (
              <div
                key={index}
                className="rounded-lg shadow-sm border-2 border-purple-500 flex flex-col overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h5 className="font-bold text-lg mb-2 min-h-[50px]">{item.title}</h5>
                    <p className="text-sm min-h-[60px]">{item.desc}</p>
                  </div>
                  <button
                    className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-500 border-2 border-purple-500 rounded-lg hover:bg-transparent hover:scale-105 hover:text-purple-500 transition-all duration-300"
                  >
                    Read More
                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Need Help? Emergency Contact */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Need Help? Emergency Contact
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto">
            We're here for you 24/7. Call us anytime — because your health and safety can't wait.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg shadow-sm border-2 border-purple-500">
              <FaPhoneAlt className="text-4xl mb-4 text-purple-500" />
              <h5 className="font-bold text-lg mb-2">Emergency Hotline</h5>
              <p className="mb-4">Immediate assistance, anytime.</p>
              <a href="tel:+11234567890" className="text-xl font-semibold no-underline">
                +1 123 456 7890
              </a>
            </div>
            <div className="p-6 rounded-lg shadow-sm border-2 border-purple-500">
              <FaAmbulance className="text-4xl mb-4 text-purple-500" />
              <h5 className="font-bold text-lg mb-2">Ambulance Service</h5>
              <p className="mb-4">Fast, reliable, and ready to roll.</p>
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-500 border-2 border-purple-500 rounded-lg hover:bg-transparent hover:scale-105 hover:text-purple-500 transition-all duration-300"
              >
                Request Ambulance
              </button>
            </div>
            <div className="p-6 rounded-lg shadow-sm border-2 border-purple-500">
              <FaClock className="text-4xl mb-4 text-purple-500" />
              <h5 className="font-bold text-lg mb-2">24/7 Support</h5>
              <p className="mb-4">Anytime, any day — we’re just a call away.</p>
              <a href="mailto:help@hospital.com" className="text-base font-medium no-underline">
                help@hospital.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Join Our Network */}
      <div className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Join Our Network
          </h2>
          <p className="text-lg mb-10">
            Connect with us to expand your healthcare reach and make a real difference.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {cards.map((card, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-sm border-2 border-purple-500 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h5 className="font-bold text-lg mb-2">{card.title}</h5>
                <p className="text-sm mb-4">{card.description}</p>
                <button
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple-500 border-2 border-purple-500 rounded-lg hover:bg-transparent hover:scale-105 hover:text-purple-500 transition-all duration-300"
                >
                  {card.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
