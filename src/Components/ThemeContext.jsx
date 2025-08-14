import { createContext } from "react";

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
  colors: {
    primary: "#6924b9",
    lightBg: "#fff",
    darkBg: "#000",
    lightText: "#000",
    darkText: "#fff",
  },
});

export default ThemeContext;
