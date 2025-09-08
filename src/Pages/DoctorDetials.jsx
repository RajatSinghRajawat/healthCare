import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaGraduationCap, FaTwitter, FaLinkedin, FaInstagram, FaNotesMedical, FaUser, FaCertificate, FaQuoteLeft, FaCalendarAlt, FaPhone, FaLink } from "react-icons/fa";

const DoctorDetials = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const doctor = location.state?.doctor || {
        name: "Dr. Vivek Gupta",
        img: "https://rainbowhospitalsproduction.s3.ap-south-1.amazonaws.com/user/doctor/large_images/qxjDsXUxuxnUIVvqqb9eXdSb7A20fwHefFbhzLNV.jpg",
        degree: "MD, MBBS",
        text: "Leading preventive healthcare expert with 15+ years of experience dedicated to patient wellness and holistic care.",
        lastUpdated: "Aug 20, 2025",
        biography: {
            description: "Dr. Vivek Gupta is a distinguished preventive medicine specialist renowned for his innovative approach to health and wellness. With over 15 years of experience, he has transformed lives through early detection, personalized care plans, and a commitment to patient empowerment. Dr. Gupta is a trusted name in healthcare, known for his compassionate and evidence-based practice.",
            img: "https://rainbowhospitalsproduction.s3.ap-south-1.amazonaws.com/user/doctor/large_images/qxjDsXUxuxnUIVvqqb9eXdSb7A20fwHefFbhzLNV.jpg",
            startDate: "Jan 1, 2005",
        },
        expertise: [
            {
                title: "Preventive Medicine",
                description: "Expert in proactive strategies to prevent chronic diseases and promote long-term health.",
                img: "https://img.freepik.com/free-photo/doctor-holding-stethoscope_23-2149622082.jpg?w=740",
                date: "Since 2010",
            },
            {
                title: "General Health Check-ups",
                description: "Comprehensive screenings to detect health issues early and ensure optimal wellness.",
                img: "https://img.freepik.com/free-photo/doctor-checking-patient_23-2149621988.jpg?w=740",
                date: "Since 2012",
            },
            {
                title: "Chronic Disease Management",
                description: "Tailored care plans for conditions like diabetes, hypertension, and heart disease.",
                img: "https://img.freepik.com/free-photo/doctor-consulting-patient_23-2149622012.jpg?w=740",
                date: "Since 2015",
            },
        ],
        appointment: {
            description: "Book a consultation with Dr. Gupta for personalized healthcare. Flexible in-person and online appointments are available to fit your busy schedule.",
            img: "https://img.freepik.com/free-photo/doctor-appointment_23-2149621976.jpg?w=740",
        },
        location: {
            clinic: "HealthCare Wellness Clinic",
            address: "123 Health St, Wellness City, India",
            contact: "+91 98765 43210",
            img: "https://img.freepik.com/free-photo/modern-hospital-building_23-2149621923.jpg?w=740",
            mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627927975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9f0b0b1e0b!2s123%20Health%20St%2C%20Wellness%20City!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin",
        },
        opdTime: {
            schedule: "Mon-Fri: 9:00 AM - 5:00 PM, Sat: 10:00 AM - 2:00 PM",
            img: "https://img.freepik.com/free-photo/clock-hospital_23-2149621901.jpg?w=740",
        },
        education: [
            {
                degree: "MBBS - All India Institute of Medical Sciences, 2005",
                img: "https://theredpen.in/wp-content/uploads/2021/11/Hero-Image-1.jpg",
            },
            {
                degree: "MD - Preventive Medicine, 2010",
                img: "https://thecareercounsellor.com/wp-content/uploads/2023/03/MD-MS-Admission-2023-TheCareerCounsellor.jpg",
            },
            {
                degree: "Joined HealthCare Clinic, 2012",
                img: "https://www.shutterstock.com/shutterstock/photos/1532068016/display_1500/stock-photo-unity-and-diversity-partnership-as-heart-hands-in-a-group-of-diverse-people-connected-together-1532068016.jpg",
            },
        ],
        certifications: [
            {
                title: "Certified Preventive Medicine Specialist, 2011",
                description: "Awarded by the Indian Board of Preventive Medicine for excellence in preventive care.",
                img: "https://img.freepik.com/free-photo/certificate_23-2149621865.jpg?w=740",
            },
            {
                title: "Advanced Cardiology Training, 2015",
                description: "Completed specialized training in cardiovascular health and risk management.",
                img: "https://img.freepik.com/free-photo/medical-certificate_23-2149621880.jpg?w=740",
            },
        ],
        testimonials: [
            {
                quote: "Dr. Gupta's preventive care plan completely changed my life. His expertise and compassion are unmatched!",
                author: "Priya Sharma, Patient",
                img: "https://randomuser.me/api/portraits/women/45.jpg",
            },
            {
                quote: "Every visit with Dr. Gupta is reassuring. His knowledge and care make him the best doctor I've met.",
                author: "Rahul Verma, Patient",
                img: "https://randomuser.me/api/portraits/men/46.jpg",
            },
            {
                quote: "Thanks to Dr. Gupta, my family’s health is in great hands. Highly recommend his services!",
                author: "Anita Desai, Patient",
                img: "https://randomuser.me/api/portraits/women/47.jpg",
            },
        ],
        socialMedia: [
            {
                platform: "Twitter",
                url: "https://twitter.com/drVivekGupta",
                icon: <FaTwitter size={32} />,
                img: "https://img.freepik.com/free-icon/twitter_318-184609.jpg?w=360",
            },
            {
                platform: "LinkedIn",
                url: "https://linkedin.com/in/drVivekGupta",
                icon: <FaLinkedin size={32} />,
                img: "https://img.freepik.com/free-icon/linkedin_318-184611.jpg?w=360",
            },
            {
                platform: "Instagram",
                url: "https://instagram.com/drVivekGupta",
                icon: <FaInstagram size={32} />,
                img: "https://img.freepik.com/free-icon/instagram_318-184613.jpg?w=360",
            },
        ],
    };

    return (
        <div className="py-12 md:py-16 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 inline-flex items-center px-6 py-3 text-base font-medium text-white bg-purple-500 border-2 border-purple-500 rounded-lg hover:bg-white hover:text-purple-500 transition-all duration-300 animate-fade-in"
                >
                    <FaArrowLeft className="mr-2" /> Back to Doctors
                </button>

                {/* Biography */}
                <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                    <h2 className="text-2xl font-bold mb-4 flex items-center">
                        <FaUser className="mr-2 text-purple-500" /> Biography
                    </h2>
                    <div className="flex flex-col sm:flex-row items-start gap-6">
                        <div>
                            <img
                                src={doctor.biography.img}
                                alt={doctor.name}
                                className="rounded-lg object-cover border-4 border-purple-500 shadow-md"
                            />
                            <button
                                className="w-full my-3 py-3 text-base font-semibold text-white bg-purple-500 border-2 border-purple-500 rounded-lg hover:bg-white hover:text-purple-500 transition-all duration-300"
                            >
                                Book Now
                            </button>
                        </div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-bold mb-3">{doctor.name}</h1>
                            <p className="text-xl mb-3">{doctor.degree}</p>
                            <p className="text-lg mb-4">{doctor.text}</p>
                            <p className="text-base mb-4">Profile Last Updated: {doctor.lastUpdated}</p>
                            <p className="text-lg mb-4">{doctor.biography.description}</p>
                            <p className="text-base">Practicing Since: {doctor.biography.startDate}</p>
                        </div>
                    </div>
                </div>

                {/* Profile Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Areas of Expertise */}
                    <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <FaNotesMedical className="mr-2 text-purple-500" /> Areas of Expertise
                        </h2>
                        {doctor.expertise.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 mb-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-base">{item.description}</p>
                                    <p className="text-sm text-gray-600">{item.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Book an Appointment */}
                    <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in max-h-[100%] h-[auto]">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <FaCalendarAlt className="mr-2 text-purple-500" /> Book an Appointment
                        </h2>
                        <div className="flex items-start gap-4 mb-6">
                            <img
                                src={doctor.appointment.img}
                                alt="Appointment"
                                className="w-16 h-16 rounded-lg object-cover"
                            />
                            <p className="text-lg">{doctor.appointment.description}</p>
                        </div>
                        <button
                            className="w-full py-3 text-base font-semibold text-white bg-purple-500 border-2 border-purple-500 rounded-lg hover:bg-white hover:text-purple-500 transition-all duration-300"
                        >
                            Book Now
                        </button>
                    </div>

                    {/* Location */}
                    <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-purple-500" /> Location
                        </h2>
                        <div className="flex items-start gap-4 mb-4">
                            <img
                                src={doctor.location.img}
                                alt="Location"
                                className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                                <p className="text-lg font-semibold">{doctor.location.clinic}</p>
                                <p className="text-base">{doctor.location.address}</p>
                                <p className="text-base flex items-center">
                                    <FaPhone className="mr-2 text-purple-500" /> {doctor.location.contact}
                                </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <iframe
                                src={doctor.location.mapUrl}
                                width="100%"
                                height="200"
                                style={{ borderRadius: "8px" }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Clinic Location"
                                className='border-2 border-purple-500'
                            ></iframe>
                        </div>
                    </div>

                    {/* OPD Time */}
                    <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <FaClock className="mr-2 text-purple-500" /> OPD Time
                        </h2>
                        <div className="flex items-start gap-4">
                            <img
                                src={doctor.opdTime.img}
                                alt="OPD Time"
                                className="w-16 h-16 rounded-lg object-cover"
                            />
                            <p className="text-lg">{doctor.opdTime.schedule}</p>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <FaGraduationCap className="mr-2 text-purple-500" /> Education
                        </h2>
                        {doctor.education.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 mb-4">
                                <img
                                    src={item.img}
                                    alt={item.degree}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <p className="text-lg">{item.degree}</p>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
                            <FaCertificate className="mr-2 text-purple-500" /> Certifications
                        </h2>
                        {doctor.certifications.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 mb-4">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-16 h-16 rounded-lg object-cover"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-base">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Patient Testimonials */}
                    <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <FaQuoteLeft className="mr-2 text-purple-500" /> Patient Testimonials
                        </h2>
                        {doctor.testimonials.map((item, index) => (
                            <div key={index} className="flex items-start gap-4 mb-4">
                                <img
                                    src={item.img}
                                    alt={item.author}
                                    className="w-16 h-16 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-lg italic mb-2">{"${item.quote}"}</p>
                                    <p className="text-base font-medium">{item.author}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social Media */}
                    <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
                        <h2 className="text-2xl font-bold mb-4 flex items-center">
                            <FaLink className="mr-2" /> Social Media
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                            {doctor.socialMedia.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 p-3 border border-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                                >
                                    <div>
                                        {social.icon}
                                    </div>
                                    <span className="text-lg font-medium">{social.platform}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetials


// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaArrowLeft, FaMapMarkerAlt, FaClock, FaGraduationCap, FaTwitter, FaLinkedin, FaInstagram, FaNotesMedical, FaUser, FaCertificate, FaQuoteLeft, FaCalendarAlt, FaPhone, FaLink, FaLanguage } from "react-icons/fa";

// const DoctorDetials = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const doctor = location.state?.doctor || {
//     name: "Dr. Shailendra Lalwani",
//     img: "https://img.freepik.com/premium-vector/illustration-live-chat-support_108061-2039.jpg?semt=ais_hybrid&w=740&q=80",
//     degree: "MBBS, MS (General Surgery), DNB (Surgical Gastroenterology)",
//     text: "Leading liver transplant and hepato-pancreatic biliary surgery expert with over 19 years of experience.",
//     lastUpdated: "Aug 22, 2025",
//     biography: {
//       description: "Dr. Shailendra Lalwani is a renowned gastroenterologist and Head of the Department for Liver Transplant and Hepato-Pancreatic Biliary Surgery at Manipal Hospital, Jaipur, and Dwarka, New Delhi. With over 19 years of experience, he has performed over 2000 successful liver transplant surgeries, specializing in both deceased and living donor transplants, adult and pediatric cases, and complex procedures like swap and combined liver-kidney transplants.",
//       img: "https://img.freepik.com/free-photo/doctor-holding-stethoscope_23-2149622082.jpg?w=740",
//       startDate: "2006",
//     },
//     expertise: [
//       {
//         title: "Liver Transplantation",
//         description: "Expert in deceased and living donor, adult and pediatric, swap, combined liver-kidney, and domino liver transplantation.",
//         img: "https://img.freepik.com/free-photo/surgeon-performing-operation_23-2149622010.jpg?w=740",
//         date: "Since 2006",
//       },
//       {
//         title: "Hepato-Pancreatic Biliary Surgery",
//         description: "Specialized in complex surgeries for liver, gallbladder, bile ducts, and pancreas.",
//         img: "https://img.freepik.com/free-photo/doctor-performing-surgery_23-2149622008.jpg?w=740",
//         date: "Since 2006",
//       },
//       {
//         title: "Gastrointestinal Oncosurgery",
//         description: "Expert in surgical management of gastrointestinal cancers.",
//         img: "https://img.freepik.com/free-photo/doctor-consulting-patient_23-2149622012.jpg?w=740",
//         date: "Since 2010",
//       },
//       {
//         title: "Portal Hypertension Surgery",
//         description: "Skilled in shunt procedures to manage portal hypertension.",
//         img: "https://img.freepik.com/free-photo/medical-procedure_23-2149621990.jpg?w=740",
//         date: "Since 2012",
//       },
//       {
//         title: "Advanced Laparoscopic and Robotic GI Surgeries",
//         description: "Proficient in minimally invasive techniques for faster recovery.",
//         img: "https://img.freepik.com/free-photo/robotic-surgery_23-2149622006.jpg?w=740",
//         date: "Since 2015",
//       },
//     ],
//     appointment: {
//       description: "Book a consultation with Dr. Lalwani for expert liver care. Flexible in-person and online appointments available. Call +91 91166 56540 to schedule.",
//       img: "https://img.freepik.com/free-photo/doctor-appointment_23-2149621976.jpg?w=740",
//     },
//     location: {
//       clinic: "Manipal Hospital, Jaipur",
//       address: "Main Sikar Road, Vidhyadhar Nagar, Jaipur, Rajasthan 302039, India",
//       contact: "+91 91166 56540",
//       img: "https://img.freepik.com/free-photo/modern-hospital-building_23-2149621923.jpg?w=740",
//       mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.672138465246!2d75.7701253150794!3d26.960111983109346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5f5a1e2f2b7%3A0x7e8f1b8f8c8f8c8!2sManipal%20Hospital%20Jaipur!5e0!3m2!1sen!2sin!4v1698765432109!5m2!1sen!2sin",
//     },
//     opdTime: {
//       schedule: "Mon-Fri: 9:00 AM - 5:00 PM, Sat: 10:00 AM - 2:00 PM",
//       img: "https://img.freepik.com/free-photo/clock-hospital_23-2149621901.jpg?w=740",
//     },
//     education: [
//       {
//         degree: "MBBS, University of Rajasthan, Jaipur, 2001",
//         img: "https://theredpen.in/wp-content/uploads/2021/11/Hero-Image-1.jpg",
//       },
//       {
//         degree: "MS (General Surgery), Jawaharlal Nehru Medical College, Ajmer, 2006",
//         img: "https://thecareercounsellor.com/wp-content/uploads/2023/03/MD-MS-Admission-2023-TheCareerCounsellor.jpg",
//       },
//       {
//         degree: "DNB (Surgical Gastroenterology), Sir Ganga Ram Hospital, New Delhi, 2011",
//         img: "https://www.shutterstock.com/shutterstock/photos/1532068016/display_1500/stock-photo-unity-and-diversity-partnership-as-heart-hands-in-a-group-of-diverse-people-connected-together-1532068016.jpg",
//       },
//     ],
//     certifications: [
//       {
//         title: "Fellowship in Minimal Access Surgery (FMAS), 2015",
//         description: "Awarded by World Laparoscopy Hospital for excellence in minimally invasive surgery.",
//         img: "https://img.freepik.com/free-photo/certificate_23-2149621865.jpg?w=740",
//       },
//       {
//         title: "Fellowship in Advanced Laparoscopic Surgery (FALS), 2015",
//         description: "Recognized for advanced laparoscopic techniques in HPB surgery.",
//         img: "https://img.freepik.com/free-photo/medical-certificate_23-2149621880.jpg?w=740",
//       },
//       {
//         title: "Fellowship in Robotic Surgery (FICRS), 2015",
//         description: "Completed training in robotic gastrointestinal surgeries.",
//         img: "https://img.freepik.com/free-photo/certificate_23-2149621865.jpg?w=740",
//       },
//       {
//         title: "Fellowship in Laparoscopic HPB Surgery, King’s College Hospital, London",
//         description: "Specialized training in laparoscopic hepato-pancreatic biliary surgery.",
//         img: "https://img.freepik.com/free-photo/medical-certificate_23-2149621880.jpg?w=740",
//       },
//     ],
//     fellowshipMembership: [
//       {
//         title: "Member, National Academy of Medical Sciences (MNAMS)",
//         description: "Recognized member of a prestigious medical sciences academy.",
//         img: "https://img.freepik.com/free-photo/certificate_23-2149621865.jpg?w=740",
//       },
//       {
//         title: "Member, Indian Association of Gastrointestinal Endo Surgeons",
//         description: "Active member contributing to advancements in GI surgery.",
//         img: "https://img.freepik.com/free-photo/medical-certificate_23-2149621880.jpg?w=740",
//       },
//     ],
//     languagesSpoken: [
//       {
//         language: "English",
//         img: "https://img.freepik.com/free-icon/united-kingdom_318-213345.jpg?w=360",
//       },
//       {
//         language: "Hindi",
//         img: "https://img.freepik.com/free-icon/india_318-213347.jpg?w=360",
//       },
//       {
//         language: "Sindhi",
//         img: "https://img.freepik.com/free-icon/india_318-213347.jpg?w=360",
//       },
//     ],
//     awardsAchievements: [
//       {
//         title: "Recognized Postgraduate DNB (G.I. Surgery) Teacher",
//         description: "Acknowledged for guiding and teaching DNB students in surgical gastroenterology.",
//         img: "https://img.freepik.com/free-photo/trophy_23-2149621850.jpg?w=740",
//       },
//       {
//         title: "Editorial Board Member of Medical Journals",
//         description: "Serves on the editorial board of Surgery, Archives of Organ Transplantation, and other journals.",
//         img: "https://img.freepik.com/free-photo/book_23-2149621845.jpg?w=740",
//       },
//       {
//         title: "Successful Pediatric Liver Transplant",
//         description: "Performed a liver transplant on a 9-month-old infant from Iraq.",
//         img: "https://img.freepik.com/free-photo/doctor-with-baby_23-2149621998.jpg?w=740",
//       },
//     ],
//     talksPublications: [
//       {
//         title: "Guest Lecture: Liver Transplantation, MESOCON 2018",
//         description: "Delivered a lecture on ‘Liver Transplantation- The Ultimate Panacea for End Stage Liver Disease’ in Imphal, March 2018.",
//         img: "https://img.freepik.com/free-photo/lecture_23-2149621870.jpg?w=740",
//       },
//       {
//         title: "Talk: Surgical Management of Colorectal Metastasis, 2018",
//         description: "Invited talk at Minimal Access Surgical Clinics, Gurugram, August 2018.",
//         img: "https://img.freepik.com/free-photo/lecture_23-2149621870.jpg?w=740",
//       },
//       {
//         title: "Publication: Management of Hepatoblastoma, 2013",
//         description: "Published in The Ganga Ram Journal, co-authored with Bhoy T, et al.",
//         img: "https://img.freepik.com/free-photo/book_23-2149621845.jpg?w=740",
//       },
//       {
//         title: "Publication: Pediatric Liver Transplant Review, 2014",
//         description: "Published in Current Medical Research and Practice.",
//         img: "https://img.freepik.com/free-photo/book_23-2149621845.jpg?w=740",
//       },
//     ],
//     testimonials: [
//       {
//         quote: "Dr. Lalwani’s expertise in liver transplantation saved my life. His compassion is truly remarkable!",
//         author: "Abuelgasim Mohamed Zefa Hamdan, Patient",
//         img: "https://randomuser.me/api/portraits/men/45.jpg",
//       },
//       {
//         quote: "The care and precision Dr. Lalwani showed during my surgery were exceptional. Highly recommended!",
//         author: "Jahongir Musolman, Patient",
//         img: "https://randomuser.me/api/portraits/men/46.jpg",
//       },
//       {
//         quote: "Dr. Lalwani’s team made my transplant journey smooth and reassuring. A true expert!",
//         author: "Anonymous, Patient",
//         img: "https://randomuser.me/api/portraits/women/47.jpg",
//       },
//     ],
//     socialMedia: [
//       {
//         platform: "Twitter",
//         url: "https://twitter.com/drShailendraL",
//         icon: <FaTwitter size={32 text-purple-500}/>,
//         img: "https://img.freepik.com/free-icon/twitter_318-184609.jpg?w=360",
//       },
//       {
//         platform: "LinkedIn",
//         url: "https://linkedin.com/in/shailendra-lalwani",
//         icon: <FaLinkedin size={32 text-purple-500}  />,
//         img: "https://img.freepik.com/free-icon/linkedin_318-184611.jpg?w=360",
//       },
//       {
//         platform: "Instagram",
//         url: "https://instagram.com/drShailendraLalwani",
//         icon: <FaInstagram size={32 text-purple-500}  />,
//         img: "https://img.freepik.com/free-icon/instagram_318-184613.jpg?w=360",
//       },
//     ],
//   };

//   return (
//     <div className="py-12 md:py-16 min-h-screen bg-white">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="mb-8 inline-flex items-center px-6 py-3 text-base font-medium text-white bg-purple-500 border-2 border-purple-500 rounded-lg hover:bg-white hover:text-purple-500 transition-all duration-300 animate-fade-in"
//         >
//           <FaArrowLeft className="mr-2" style={{ color: "inherit" }} /> Back to Doctors
//         </button>

//         {/* Biography */}
//         <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 mb-6 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//           <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//             <FaUser className="mr-2 text-purple-500"  /> Biography
//           </h2>
//           <div className="flex flex-col sm:flex-row items-start gap-6">
//             <img
//               src={doctor.biography.img}
//               alt={doctor.name}
//               className="w-64 h-64 rounded-lg object-cover border-4 border-purple-500 shadow-md"
//             />
//             <div>
//               <h1 className="text-4xl sm:text-5xl font-bold mb-3 text-black">{doctor.name}</h1>
//               <p className="text-xl mb-3 text-black">{doctor.degree}</p>
//               <p className="text-lg mb-4 text-black">{doctor.text}</p>
//               <p className="text-base mb-4 text-black">Profile Last Updated: {doctor.lastUpdated}</p>
//               <p className="text-lg mb-4 text-black">{doctor.biography.description}</p>
//               <p className="text-base text-black">Practicing Since: {doctor.biography.startDate}</p>
//             </div>
//           </div>
//         </div>

//         {/* Profile Sections */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Areas of Expertise */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaNotesMedical className="mr-2 text-purple-500"  /> Areas of Expertise
//             </h2>
//             {doctor.expertise.map((item, index) => (
//               <div key={index} className="flex items-start gap-4 mb-4">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-16 h-16 rounded-lg object-cover"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-black">{item.title}</h3>
//                   <p className="text-base text-black">{item.description}</p>
//                   <p className="text-sm text-gray-600">{item.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Book an Appointment */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaCalendarAlt className="mr-2 text-purple-500"  /> Book an Appointment
//             </h2>
//             <div className="flex items-start gap-4 mb-6">
//               <img
//                 src={doctor.appointment.img}
//                 alt="Appointment"
//                 className="w-16 h-16 rounded-lg object-cover"
//               />
//               <p className="text-lg text-black">{doctor.appointment.description}</p>
//             </div>
//             <button
//               onClick={() => navigate("/appointment", { state: { doctor } })}
//               className="w-full py-3 text-base font-semibold text-white bg-purple-500 border-2 border-purple-500 rounded-lg hover:bg-white hover:text-purple-500 transition-all duration-300 animate-fade-in"
//             >
//               Book Now
//             </button>
//           </div>

//           {/* Location */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaMapMarkerAlt className="mr-2 text-purple-500"  /> Location
//             </h2>
//             <div className="flex items-start gap-4 mb-4">
//               <img
//                 src={doctor.location.img}
//                 alt="Location"
//                 className="w-16 h-16 rounded-lg object-cover"
//               />
//               <div>
//                 <p className="text-lg font-semibold text-black">{doctor.location.clinic}</p>
//                 <p className="text-base text-black">{doctor.location.address}</p>
//                 <p className="text-base flex items-center text-black">
//                   <FaPhone className="mr-2 text-purple-500"  /> {doctor.location.contact}
//                 </p>
//               </div>
//             </div>
//             <div className="mt-4">
//               <iframe
//                 src={doctor.location.mapUrl}
//                 width="100%"
//                 height="200"
//                 style={{ border: "2px solid #6924b9", borderRadius: "8px" }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 title="Clinic Location"
//               ></iframe>
//             </div>
//           </div>

//           {/* OPD Time */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaClock className="mr-2 text-purple-500"  /> OPD Time
//             </h2>
//             <div className="flex items-start gap-4">
//               <img
//                 src={doctor.opdTime.img}
//                 alt="OPD Time"
//                 className="w-16 h-16 rounded-lg object-cover"
//               />
//               <p className="text-lg text-black">{doctor.opdTime.schedule}</p>
//             </div>
//           </div>

//           {/* Education */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaGraduationCap className="mr-2 text-purple-500"  /> Education
//             </h2>
//             {doctor.education.map((item, index) => (
//               <div key={index} className="flex items-start gap-4 mb-4">
//                 <img
//                   src={item.img}
//                   alt={item.degree}
//                   className="w-16 h-16 rounded-lg object-cover"
//                 />
//                 <p className="text-lg text-black">{item.degree}</p>
//               </div>
//             ))}
//           </div>

//           {/* Certifications */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaCertificate className="mr-2 text-purple-500"  /> Certifications
//             </h2>
//             {doctor.certifications.map((item, index) => (
//               <div key={index} className="flex items-start gap-4 mb-4">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-16 h-16 rounded-lg object-cover"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-black">{item.title}</h3>
//                   <p className="text-base text-black">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Fellowship Membership */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaCertificate className="mr-2 text-purple-500"  /> Fellowship Membership
//             </h2>
//             {doctor.fellowshipMembership.map((item, index) => (
//               <div key={index} className="flex items-start gap-4 mb-4">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-16 h-16 rounded-lg object-cover"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-black">{item.title}</h3>
//                   <p className="text-base text-black">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Languages Spoken */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaLanguage className="mr-2 text-purple-500"  /> Languages Spoken
//             </h2>
//             {doctor.languagesSpoken.map((item, index) => (
//               <div key={index} className="flex items-start gap-4 mb-4">
//                 <img
//                   src={item.img}
//                   alt={item.language}
//                   className="w-16 h-16 rounded-lg object-cover"
//                 />
//                 <p className="text-lg text-black">{item.language}</p>
//               </div>
//             ))}
//           </div>

//           {/* Awards & Achievements */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaCertificate className="mr-2 text-purple-500"  /> Awards & Achievements
//             </h2>
//             {doctor.awardsAchievements.map((item, index) => (
//               <div key={index} className="flex items-start gap-4 mb-4">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-16 h-16 rounded-lg object-cover"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-black">{item.title}</h3>
//                   <p className="text-base text-black">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Talks & Publications */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaQuoteLeft className="mr-2 text-purple-500"  /> Talks & Publications
//             </h2>
//             {doctor.talksPublications.map((item, index) => (
//               <div key={index} className="flex items-start gap-4 mb-4">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-16 h-16 rounded-lg object-cover"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-black">{item.title}</h3>
//                   <p className="text-base text-black">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Patient Testimonials */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaQuoteLeft className="mr-2 text-purple-500"  /> Patient Testimonials
//             </h2>
//             {doctor.testimonials.map((item, index) => (
//               <div key={index} className="flex items-start gap-4 mb-4">
//                 <img
//                   src={item.img}
//                   alt={item.author}
//                   className="w-16 h-16 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="text-lg italic mb-2 text-black">{"${item.quote}"}</p>
//                   <p className="text-base font-medium text-black">{item.author}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Social Media */}
//           <div className="border-2 border-purple-500 rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all duration-500 animate-fade-in">
//             <h2 className="text-2xl font-bold mb-4 flex items-center text-black">
//               <FaLink className="mr-2 text-purple-500"  /> Social Media
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {doctor.socialMedia.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-3 p-3 bg-[#f1e7ff] rounded-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
//                 >
//                   <div>{social.icon}</div>
//                   <span className="text-lg font-medium">{social.platform}</span>
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DoctorDetials;
