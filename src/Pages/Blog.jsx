import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Blog = () => {


  const posts = [
    {
      id: 1,
      title:
        "Low Blood Sugar (Hypoglycemia): Causes, Symptoms, Management, and Prevention",
      description:
        "Low blood sugar, or hypoglycemia, is when blood glucose is below normal and causes symptoms that interfere with daily life and general health. Though it is well-known as a complication of diabetes treatment, hypoglycemia can happen in people who do not have diabetes as well, especially from prolonged fasting.",
      image:
        "https://jaipurhospital.in/wp-content/uploads/2025/02/Low-Blood-Sugar-Hypoglycemia-Causes-Symptoms-Management-and-Prevention.jpg",
    },
    {
      id: 2,
      title:
        "Bloating During Ovulation: Symptoms, Causes, and Treatment Options",
      description:
        "What is Ovulation Bloating? Causes of Bloating During Ovulation. How Ovulation and Back Pain Are Interrelated? When to See a Doctor? Lifestyle and Diet Changes to Reduce Bloating.",
      image:
        "https://jaipurhospital.in/wp-content/uploads/2025/03/Bloating-During-Ovulation-min.jpg",
    },
    {
      id: 3,
      title:
        "What is Dementia: Causes, Symptoms, Treatment, and Risk factors?",
      description:
        "Dementia affects memory, thinking, and social abilities. Learn about causes, symptoms, treatment options, and which lifestyle changes can help lower risk.",
      image:
        "https://jaipurhospital.in/wp-content/uploads/2025/02/What-is-Dementia-Causes-Symptoms-Treatments-and-Risk-factors.jpg",
    },
    {
      id: 4,
      title: "Understanding the Causes and Symptoms of Anemia",
      description:
        "Anemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues. This can make you feel tired and weak.",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.GoKMIbOHbMMTyuY4fRfjSgHaEK?pid=Api&P=0&h=180",
    },
    {
      id: 5,
      title: "Managing Stress: Tips for a Healthier Mind and Body",
      description:
        "Stress management is essential for maintaining mental and physical health. Discover effective strategies to cope with stress and improve your well-being.",
      image:
        "https://selfgood.com/blog/wp-content/uploads/2024/12/Stress-Management.jpg",
    },
    {
      id: 6,
      title: "The Importance of Regular Exercise for Overall Health",
      description:
        "Regular exercise is crucial for maintaining overall health. Learn about its benefits, recommended activities, and how to incorporate it into your daily routine.",
      image:
        "https://www.tricitymed.org/wp-content/uploads/2018/02/1712_ig_tri-city-medical_heart-healthy-exercise-1.jpg",
    },
    {
      id: 7,
      title: "Healthy Eating Habits for a Balanced Diet",
      description:
        "Adopting healthy eating habits is key to achieving a balanced diet. Explore tips and guidelines for making nutritious food choices.",
      image:
        "https://images.onlymyhealth.com/imported/images/2020/February/28_Feb_2020/big_balancedietandliving.jpg",
    },
    {
      id: 8,
      title: "Understanding Hypertension: Causes, Symptoms, and Treatment",
      description:
        "Hypertension, or high blood pressure, is a common condition that can lead to serious health issues. Learn about its causes, symptoms, and treatment options.",
      image:
        "https://askthenurseexpert.com/wp-content/uploads/2023/09/understanding-hypertension-causes-symptoms-and-treatment.jpg",
    },
    {
      id: 9,
      title: "The Benefits of Mindfulness Meditation for Mental Health",
      description:
        "Mindfulness meditation offers numerous benefits for mental health. Discover how it can help reduce stress, anxiety, and improve overall well-being.",
      image:
        "https://mantracare.org/wp-content/uploads/2021/10/Benefits-of-Mindfulness-1024x563.png",
    },
    {
      id: 10,
      title: "Sleep Hygiene: Tips for Better Sleep Quality",
      description:
        "Good sleep hygiene is essential for quality rest. Learn practical tips to improve your sleep habits and enhance your overall health.",
      image:
        "https://www.healingpharma.in/wp-content/uploads/2024/04/Sleep-hygiene-Tips-for-better-sleep-scaled.jpg",
    },
    {
      id: 11,
      title: "Understanding Diabetes: Types, Symptoms, and Management",
      description:
        "Diabetes is a chronic condition that affects how your body processes blood sugar. Learn about its types, symptoms, and effective management strategies.",
      image:
        "https://img.freepik.com/free-photo/health-care-doctor-help-concept_53876-123679.jpg?t=st=1719148486~exp=1719152086~hmac=7304e500a858f8d3d71d3a03b4e3809b9987990d1a2bf2fcf41645b18d63ed24&w=1380",
    },
    {
      id: 12,
      title: "The Role of Nutrition in Preventing Chronic Diseases",
      description:
        "Proper nutrition plays a vital role in preventing chronic diseases. Explore how dietary choices can impact your long-term health.",
      image:
        "https://caseysmollock.com/wp-content/uploads/caseysmollock-com/sites/87/2023/12/Exploring-the-Role-of-Nutrition-in-Preventing-Chronic-Diseases.png",
    },
    {
      id: 13,
      title: "Mental Health Awareness: Breaking the Stigma",
      description:
        "Mental health awareness is crucial for breaking the stigma surrounding mental illnesses. Learn how to support yourself and others in mental health journeys.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.5TA398RaCBYBu-1SFWMqOQHaE8?pid=Api&P=0&h=180",
    },
    {
      id: 14,
      title: "The Importance of Hydration for Overall Health",
      description:
        "Staying hydrated is essential for overall health. Discover the benefits of proper hydration and tips to ensure you drink enough water daily.",
      image:
        "https://johofitness.org/wp-content/uploads/2020/06/Benefits-of-great-hydration.png",
    },
    {
      id: 15,
      title: "Understanding Allergies: Symptoms, Causes, and Treatments",
      description:
        "Allergies can cause a range of symptoms and discomfort. Learn about common allergies, their causes, and effective treatment options.",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.rgGVw4lFeCqW2ELGGaY54gHaDy?pid=Api&P=0&h=180",
    },  
    {
      id: 16,
      title: "The Benefits of Regular Health Check-ups",
      description:
        "Regular health check-ups are essential for early detection and prevention of health issues. Learn about the importance of routine medical examinations.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.34fzqcOFmvI-UbgRZofyzgHaEh?pid=Api&P=0&h=180",
    },
    {
      id: 17,
      title: "Managing Chronic Pain: Strategies and Treatments",
      description:
        "Chronic pain can significantly impact quality of life. Explore various strategies and treatments to manage chronic pain effectively.",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.fGQHjQlPrtkA_yLpUcckDgHaEK?pid=Api&P=0&h=180",
    },
    {
      id: 18,
      title: "Understanding Heart Disease: Risk Factors and Prevention",
      description:
        "Heart disease is a leading cause of death worldwide. Learn about its risk factors, symptoms, and preventive measures to maintain heart health.",
      image:
        "https://tse3.mm.bing.net/th/id/OIP.qqpRzXghv_IMFcu6-4c7RwHaEp?pid=Api&P=0&h=180",
    },
     
  ];

  const [page, setPage] = useState(1);
  // Pagination logic
  // Assuming each page shows 3 posts
  const itemsPerPage = 3;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => page < totalPages && setPage(page + 1);
  const handlePrev = () => page > 1 && setPage(page - 1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Latest Blogs</h1>

 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3">
                {post.description}
              </p>

              <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg border-2 border-purple-500 hover:bg-transparent hover:text-purple-500 transition duration-300">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

    
      <nav className="my-8 flex justify-center">
        <ul className="flex gap-3 items-center">
          <li>
            <button
              className={`p-2 rounded-lg ${
                page === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-purple-500 hover:text-white"
              }`}
              onClick={handlePrev}
              disabled={page === 1}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <li key={num}>
              <button
                className={`px-4 py-2 rounded-lg ${
                  page === num
                    ? "bg-purple-500 text-white"
                    : "hover:bg-purple-500 hover:text-white"
                }`}
                onClick={() => setPage(num)}
              >
                {num}
              </button>
            </li>
          ))}
          <li>
            <button
              className={`p-2 rounded-lg ${
                page === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-purple-500 hover:text-white"
              }`}
              onClick={handleNext}
              disabled={page === totalPages}
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Blog;
