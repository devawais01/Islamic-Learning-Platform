import { useEffect, useState } from "react";

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
       document.title="Quran Academy - Dark "
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
       document.title="Quran Academy - Light"
    }
  }, [darkMode]);

  return (
    <button className="darkModeBtn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Light Mode" : "Dark Mode"}
     
    </button>
  );
};

export default DarkModeButton;
