import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

const ThemeToggler = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleClick = () => {
    setDarkMode((prev) => !prev);
  };

  const ThemeIcon = darkMode ? GoSun : GoMoon;

  return (
    <button
      onClick={handleClick}
      className="hover:scale-110 transition-transform cursor-pointer"
    >
      <ThemeIcon size={22} strokeWidth={.5} />
    </button>
  );
};

export const Navbar = () => {
  return (
    <nav className="centered py-4 justify-between flex items-center backdrop-blur border-b border-black/10 dark:border-white/10 sticky top-0 z-50">
      <h1 className="text-lg">
        React TypeScript Thomas's Template
        <span className="animate-pulse">.</span>
      </h1>
      <ThemeToggler />
    </nav>
  );
};
