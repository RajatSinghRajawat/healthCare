import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeContext from "./ThemeContext.jsx";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Doctor from "./Pages/Doctor.jsx";
import DoctorDetials from "./Pages/DoctorDetials.jsx";
import Blog from "./Pages/Blog.jsx";
import Contact from "./Pages/Contact_Support.jsx";
import Stories from "./Pages/Stories.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Add/remove dark mode class from HTML
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const theme = {
    isDarkMode,
    toggleTheme: () => setIsDarkMode((prev) => !prev),
    colors: {
      primary: "#6924b9", // bg-yellow-500
      lightBg: "#fff",
      darkBg: "#000",
      lightText: "#000",
      darkText: "#fff",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Router>
        <div
          style={{
            backgroundColor: isDarkMode
              ? theme.colors.darkBg
              : theme.colors.lightBg,
            color: isDarkMode ? theme.colors.darkText : theme.colors.lightText,
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/doctors" element={<Doctor />} />
              <Route path="/doctors/detials" element={<DoctorDetials />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/stories" element={<Stories />} /> 
              <Route path="/contact-support" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
