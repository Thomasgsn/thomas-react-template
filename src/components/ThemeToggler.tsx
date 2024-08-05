import { Moon, Sun } from "lucide-react";
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

    setTimeout(() => {}, 500);
  }, [darkMode]);

  return (
    <div
      className="relative w-16 h-16 flex items-center justify-center cursor-pointer rounded-full p-1 bg-teal-500 dark:bg-gray-900"
      onClick={() => setDarkMode(!darkMode)}
    >
      <Sun
        size={40}
        className="text-yellow-400 absolute transition-opacity"
        style={{ opacity: darkMode ? 0 : 1 }}
      />
      <Moon
        size={40}
        className="text-white absolute transition-opacity"
        style={{ opacity: darkMode ? 1 : 0 }}
      />
    </div>
  );
};
