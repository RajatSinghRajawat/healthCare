import React, { useState, useMemo } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const posts = [
  {
    id: 1,
    title: "The Healing Touch",
    description:
      "A journey of recovery and resilience in the world of healthcare.",
    date: "Aug 10, 2025",
  },
  {
    id: 2,
    title: "When Care Meets Innovation",
    description: "How technology is transforming patient care and outcomes.",
    date: "Aug 12, 2025",
  },
  {
    id: 3,
    title: "Nurses: The Silent Heroes",
    description: "Stories of dedication, compassion, and endless energy.",
    date: "Aug 14, 2025",
  },
  {
    id: 4,
    title: "The Future of Surgery",
    description: "Robotics and AI making operations safer and faster.",
    date: "Aug 16, 2025",
  },
  {
    id: 5,
    title: "Mental Health Matters",
    description: "Breaking the stigma and opening doors for healing.",
    date: "Aug 18, 2025",
  },
  {
    id: 6,
    title: "Doctors on the Frontline",
    description: "Courageous stories from hospitals worldwide.",
    date: "Aug 20, 2025",
  },
  {
    id: 7,
    title: "Pharmacy of Tomorrow",
    description: "Personalized medicine and futuristic drug delivery systems.",
    date: "Aug 22, 2025",
  },
];

function Stories() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const currentStories = posts.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => page < totalPages && setPage(page + 1);
  const handlePrev = () => page > 1 && setPage(page - 1);

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
          Stories
        </h1>

        {currentStories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentStories.map((story) => (
              <div
                key={story.id}
                className=" border-2 border-purple-500 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                role="article"
                aria-labelledby={`story-title-${story.id}`}
              >
                <div className="p-6">
                  <h2
                    id={`story-title-${story.id}`}
                    className="text-2xl font-semibold mb-3"
                  >
                    {story.title}
                  </h2>
                  <p className="text-base mb-4">{story.description}</p>
                  <p className="text-sm mb-6">{story.date}</p>
                  <button
                    className="px-5 py-2 text-base font-medium text-white bg-purple-500 border-2 border-purple-500 rounded-lg hover:bg-transparent hover:text-purple-500 transition-all duration-300"
                    aria-label={`Read more about ${story.title}`}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-base">No stories available.</p>
        )}
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
}

export default Stories;
