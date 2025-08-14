// App.jsx
import React from "react";
import {
  BsHeartPulseFill,
  BsGearFill,
  BsPeopleFill,
  BsClockFill,
  BsFillShieldLockFill,
  BsGlobe2,
  BsFillChatDotsFill,
  BsFillAwardFill
} from "react-icons/bs";

function App() {
  const features = [
    {
      title: "Expert Doctors",
      text: "Highly qualified professionals with years of experience in various medical fields.",
      icon: <BsHeartPulseFill />,
    },
    {
      title: "Advanced Equipment",
      text: "We use the latest technology and equipment for accurate diagnosis and treatment.",
      icon: <BsGearFill />,
    },
    {
      title: "Personalized Care",
      text: "Every patient is unique. We provide customized treatment plans for optimal recovery.",
      icon: <BsPeopleFill />,
    },
    {
      title: "24/7 Availability",
      text: "We are always available — day or night, weekdays or weekends.",
      icon: <BsClockFill />,
    },
    {
      title: "Secure Records",
      text: "Your medical data is safe with our advanced encryption systems.",
      icon: <BsFillShieldLockFill />,
    },
    {
      title: "Global Standards",
      text: "We follow international healthcare guidelines for treatment and care.",
      icon: <BsGlobe2 />,
    },
    {
      title: "Instant Support",
      text: "Get real-time assistance from our medical support team anytime.",
      icon: <BsFillChatDotsFill />,
    },
    {
      title: "Award Winning",
      text: "Recognized for excellence and innovation in healthcare services.",
      icon: <BsFillAwardFill />,
    },
  ];

  const doctors = [
    {
      name: "Dr. Ayesha Khan",
      specialization: "Cardiologist",
      experience: "12 Years",
      image: "https://www.fccollege.edu.pk/wp-content/uploads/2024/02/Dr.-Ayesha-Khan.jpg",
    },
    {
      name: "Dr. Rohit Sharma",
      specialization: "Orthopedic Surgeon",
      experience: "10 Years",
      image: "https://sgtuniversity.ac.in/assets/images/faculty/medicine-health-science/about/professors/Dr-Rohit-Sharma-Pathology.webp",
    },
    {
      name: "Dr. Sana Malik",
      specialization: "Pediatrician",
      experience: "8 Years",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiAmFkE7HdYJy8EoTkK63quiQ72zLgRdzksA&s",
    },
    {
      name: "Dr. Ahmed Ali",
      specialization: "Dermatologist",
      experience: "9 Years",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh__xCGqzSGSKUv869ekZdFyl35t5CFr0oWQ&s",
    },
    {
      name: "Dr. Neha Verma",
      specialization: "Neurologist",
      experience: "11 Years",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzmf1Kt7Sm58CVJgX1eAlFMG9BXsIrw1LedQ&s",
    },
    {
      name: "Dr. Sameer Khan",
      specialization: "Oncologist",
      experience: "15 Years",
      image: "https://images.apollo247.in/doctors/1cfc4171-af77-4ff0-bfde-af0884763f10-1715248855487.jpg",
    },
    {
      name: "Dr. Ritu Sharma",
      specialization: "Gynecologist",
      experience: "14 Years",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqDi4gCWTJqXJyT2v7CJijgV5FG1xkm1a5AQ&s",
    },
    {
      name: "Dr. Arjun Mehta",
      specialization: "Psychiatrist",
      experience: "7 Years",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpMCBa25nR1rxuMeJNz79aEjrAstxCUXUKMg&s",
    },
  ];

  return (
    <>
      {/* Home Section */}
      <div className="w-full py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left Side Text */}
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="text-[#6924b9] font-bold mb-3 text-4xl lg:text-5xl leading-tight">
                Your Health is Our Priority
              </h1>
              <p className="text-black text-lg max-w-md mx-auto lg:mx-0 mb-4">
                We provide expert medical consultations, diagnostics, and treatments with compassion and care. Book your appointment today with our experienced doctors.
              </p>
             
            </div>

            {/* Right Side Image */}
            <div className="lg:w-1/2 text-center">
              <div className="bg-white rounded-lg p-2 inline-block shadow-lg transition-transform duration-300">
                <img
                  src="https://img.freepik.com/free-photo/portrait-doctor_144627-39389.jpg?w=740"
                  alt="Doctor"
                  className="max-w-sm w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-10 text-[#6924b9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="max-w-xl mx-auto text-black text-sm">
              Discover the reasons why patients trust us for their healthcare needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                className="border-2 border-[#6924b9] rounded-xl text-center p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                key={index}
              >
                <div className="text-4xl mb-4 text-[#6924b9]">{feature.icon}</div>
                <h5 className="font-bold mb-3">{feature.title}</h5>
                <p className="text-black text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Top Doctors */}
      <div className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#6924b9]">Meet Our Top Doctors</h2>
            <p className="max-w-xl mx-auto text-black">
              Highly skilled professionals dedicated to providing exceptional healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctors.map((doc, index) => (
              <div
                className="rounded-xl overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-xl border"
                key={index}
              >
                <div className="w-full h-[230px] sm:h-[200px] overflow-hidden">
                  <img src={doc.image} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 text-center">
                  <h5 className="text-lg font-semibold text-[#6924b9]">{doc.name}</h5>
                  <p className="font-medium">{doc.specialization}</p>
                  <p className="text-sm mb-4">Experience: {doc.experience}</p>
                  <button className="bg-[#6924b9] text-white rounded-full px-4 py-2 text-sm font-semibold transition duration-300 hover:bg-white hover:text-[#000] hover:border hover:border-[#6924b9]">
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
