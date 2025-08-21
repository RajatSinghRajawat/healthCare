// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ThemeContext from "./ThemeContext.jsx";
// import Navbar from "./Components/Navbar";

// function App() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Add/remove dark mode class from HTML
//   useEffect(() => {
//     document.documentElement.classList.toggle("dark", isDarkMode);
//   }, [isDarkMode]);

//   const theme = {
//     isDarkMode,
//     toggleTheme: () => setIsDarkMode((prev) => !prev),
//     colors: {
//       primary: "#6924b9", // new purple
//       lightBg: "#fff",
//       darkBg: "#000",
//       lightText: "#000",
//       darkText: "#fff",
//     },
//   };

//   return (
//     <ThemeContext.Provider value={theme}>
//       <Router>
//         <div
//           style={{
//             backgroundColor: isDarkMode
//               ? theme.colors.darkBg
//               : theme.colors.lightBg,
//             color: isDarkMode ? theme.colors.darkText : theme.colors.lightText,
//             minHeight: "100vh",
//           }}
//         >
//           <Navbar />
//           <Routes>
//             {/* <Route path="/" element={<Home />} /> */}
//           </Routes>
//         </div>
//       </Router>
//     </ThemeContext.Provider>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeContext from "./ThemeContext.jsx";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
<<<<<<< HEAD
import Doctor from "./Components/Doctor.jsx";
import Emergency from "./Components/Emergency.jsx";
=======
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Doctor from "./Pages/Doctor.jsx";
>>>>>>> 7da3b563b6209fb076c6b9243281f8a06c713d5d
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
      primary: "#6924b9", // bg-purple-500
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
<<<<<<< HEAD
          <Emergency/>
          {/* <main className="flex-grow">
            <Routes>
              <Route path="/doctors" element={<Doctor />} />
            </Routes>
          </main>
          <Footer /> */}
=======
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/doctors" element={<Doctor />} />



            </Routes>
          </main>
          <Footer />
>>>>>>> 7da3b563b6209fb076c6b9243281f8a06c713d5d
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
