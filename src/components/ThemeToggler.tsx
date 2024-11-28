import { GoMoon, GoSun } from "react-icons/go";
import { useEffect, useState } from "react";

export const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      className="hover:scale-110 transition-transform"
      onClick={handleClick}
    >
      {darkMode ? (
        <GoSun size={24} strokeWidth={0.5} className="icon" />
      ) : (
        <GoMoon size={24} strokeWidth={0.5} className="icon" />
      )}
    </button>
  );
};
