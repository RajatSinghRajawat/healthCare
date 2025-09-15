import React, { useState } from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaArrowLeft,
} from "react-icons/fa";

const faqs = [
  {
    question: "What is the purpose of a liver function test?",
    answer:
      "Liver function tests help evaluate the overall health of your liver by measuring proteins, enzymes, and waste products in your blood.",
  },
  {
    question: "Do I need to fast before a liver function test?",
    answer:
      "In most cases, fasting is not required, but your doctor may ask you to avoid food or certain medicines for accurate results.",
  },
  {
    question: "Are liver function tests painful?",
    answer:
      "No, it’s a simple blood test. You may feel a small prick when the needle is inserted, but it is not usually painful.",
  },
  {
    question: "How long does it take to get liver function test results?",
    answer:
      "Results are usually available within 24 to 48 hours, depending on the lab.",
  },
  {
    question: "Can liver function tests detect all liver problems?",
    answer:
      "They provide useful information but may not detect all liver conditions. Doctors often combine LFTs with imaging and other tests.",
  },
];

const BlogDetails = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="min-h-screen  font-['Roboto']">
      <div className="relative bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-10 rounded-2xl shadow-lg max-w-6xl mx-auto mt-8">
        <h1 className="text-4xl md:text-5xl font-['Merriweather'] font-bold text-center  leading-snug">
          The Importance of Preventive HealthCare
        </h1>
      </div>

      <div className="max-w-6xl mx-auto mt-6">
        <button className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2 rounded-xl shadow-md hover:bg-purple-700 transition">
          <FaArrowLeft /> Back to Blogs
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-10 rounded-2xl shadow-lg p-8 border border-purple-200">
        <div className="flex flex-col md:flex-row gap-8">
          <img
            src="https://www.manipalhospitals.com/uploads/blog/Understanding-Liver-Function-Tests--Purpose,-Types--Interpretation.webp"
            alt="Doctor"
            className="rounded-2xl shadow-lg w-full md:w-1/3 object-cover h-72 md:h-auto"
          />
          <div>
            <h2 className="text-3xl font-['Merriweather'] text-purple-700 font-bold mb-2">
              The Importance of Preventive Healthcare
            </h2>
            <p className=" mb-4 text-sm">Published: Aug 20, 2025</p>
            <p className="leading-relaxed text-lg ">
              Preventive healthcare is key to maintaining long-term wellness.
              Regular check-ups, balanced diets, and exercise help reduce health
              risks. Early detection of diabetes, hypertension, and heart
              disease ensures patients receive tailored care plans for optimal
              health. Empower yourself with preventive care today.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10  rounded-2xl shadow-lg p-8 border border-purple-200">
        <h1 className="text-2xl font-['Merriweather'] font-bold text-purple-700">
          📌 Synopsis
        </h1>
        <div className="mt-4 text-lg  space-y-3 list-disc pl-6">
          <p>What is a liver function test?</p>
          <p>Why is a liver function test done?</p>
          <p>Types of Liver Function Tests</p>
          <p>Interpretation of liver function tests</p>
          <p>Are liver function blood tests accurate?</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10  rounded-2xl shadow-lg p-8 border border-purple-200">
        <h1 className="text-2xl font-['Merriweather'] font-bold text-purple-700 mb-4">
          What is a liver function test?
        </h1>
        <p className="text-lg leading-relaxed ">
          Liver function tests (LFTs) are blood tests that measure enzymes,
          proteins, and byproducts produced by the liver. These tests help in
          determining how well the liver is functioning. Abnormal results may
          indicate liver diseases such as hepatitis, fatty liver, or cirrhosis.
          <br />
          <br />
          The procedure involves drawing a blood sample from your arm, which is
          then analyzed in a laboratory to detect any irregularities in liver
          enzyme and protein levels.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10  rounded-2xl shadow-lg p-8 border border-purple-200">
        <h1 className="text-2xl font-['Merriweather'] font-bold text-purple-700 mb-4">
          Why is a liver function test done?
        </h1>
        <img
          src="https://www.manipalhospitals.com/uploads/image_gallery/why-is-liver-function-test-done.png"
          alt="Doctor"
          className="rounded-2xl shadow-lg w-full h-80 object- mb-6"
        />
        <ul className="list-disc space-y-3 text-lg  pl-6">
          <li>
            To detect hepatitis, liver infections, or other liver diseases.
          </li>
          <li>To monitor ongoing liver disease or response to treatment.</li>
          <li>To assess liver damage from medications or alcohol.</li>
          <li>
            To evaluate unexplained symptoms like jaundice, fatigue, or
            swelling.
          </li>
          <li>To check overall liver health before surgeries or treatments.</li>
        </ul>
      </div>

      <div className="max-w-6xl mx-auto mt-10  rounded-2xl shadow-lg p-8 border border-purple-200">
        <h1 className="text-2xl font-['Merriweather'] font-bold text-purple-700 mb-4">
          Types of Liver Function Tests
        </h1>
        <ul className="list-disc space-y-3 text-lg  pl-6">
          <li>
            <b>Alanine transaminase (ALT):</b> High levels may indicate liver
            damage.
          </li>
          <li>
            <b>Aspartate transaminase (AST):</b> Helps in detecting liver
            injuries.
          </li>
          <li>
            <b>Alkaline phosphatase (ALP):</b> High values can mean bile duct
            problems.
          </li>
          <li>
            <b>Bilirubin:</b> Elevated bilirubin causes jaundice and indicates
            poor liver function.
          </li>
          <li>
            <b>Albumin & Total Protein:</b> Low levels show reduced liver
            protein-making ability.
          </li>
        </ul>
      </div>

      <div className="max-w-6xl mx-auto mt-10  rounded-2xl shadow-lg p-8 border border-purple-200">
        <h1 className="text-2xl font-['Merriweather'] font-bold text-purple-700 mb-4">
          Interpretation of Liver Function Tests
        </h1>
        <p className="text-lg leading-relaxed ">
          LFT results are interpreted by comparing enzyme and protein levels
          with standard reference ranges. Higher or lower values can signal
          different conditions:
        </p>
        <ul className="list-disc space-y-3 text-lg  pl-6 mt-3">
          <li>
            High ALT & AST → may suggest hepatitis, liver inflammation, or
            damage.
          </li>
          <li>
            High ALP → often linked to bile duct blockage or bone disorders.
          </li>
          <li>
            High Bilirubin → leads to jaundice, may suggest poor liver
            clearance.
          </li>
          <li>
            Low Albumin → shows reduced protein synthesis, common in chronic
            liver disease.
          </li>
        </ul>
      </div>

      <div className="max-w-6xl mx-auto mt-10  rounded-2xl shadow-lg p-8 border border-purple-200">
        <h1 className="text-2xl font-['Merriweather'] font-bold text-purple-700 mb-4">
          Are Liver Function Blood Tests Accurate?
        </h1>
        <p className="text-lg leading-relaxed text-">
          Liver function tests are generally reliable but must be interpreted
          alongside symptoms and medical history. Certain factors such as
          alcohol intake, medications, pregnancy, or muscle injury may alter
          results. Hence, doctors use LFTs in combination with imaging tests and
          patient history for accurate diagnosis.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-10  rounded-2xl shadow-lg p-8 border border-purple-200">
        <h2 className="text-3xl font-['Merriweather'] font-bold text-purple-700 mb-6">
          ❓ Frequently Asked Questions (FAQ’s)
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-3 text-left text-lg font-semibold text-gray-800 hover:bg-purple-50 rounded-xl"
              >
                {faq.question}
                <span className="text-purple-600">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-10 mb-10 bg-white rounded-2xl shadow-lg p-8 border border-purple-200">
        <h3 className="text-2xl font-['Merriweather'] font-bold mb-6 text-gray-800 flex items-center gap-2">
          🌐 Share on Social Media
        </h3>
        <div className="flex flex-wrap gap-6">
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 rounded-xl shadow-md bg-blue-100 text-blue-600 font-semibold hover:bg-blue-200 transition"
          >
            <FaTwitter size={24} /> Twitter
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 rounded-xl shadow-md bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
          >
            <FaLinkedin size={24} /> LinkedIn
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-6 py-3 rounded-xl shadow-md bg-pink-100 text-pink-600 font-semibold hover:bg-pink-200 transition"
          >
            <FaInstagram size={24} /> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
