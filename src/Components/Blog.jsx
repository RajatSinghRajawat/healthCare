import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Blog = () => {
  const [page, setPage] = useState(1);

  // Blog posts array
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
  ];

  // Pagination settings
  const itemsPerPage = 3;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => page < totalPages && setPage(page + 1);
  const handlePrev = () => page > 1 && setPage(page - 1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Our Latest Blogs</h1>

      {/* Blog Cards */}
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

      {/* Pagination */}
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
