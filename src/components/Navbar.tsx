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

  return (
    <button
      onClick={handleClick}
      className="hover:scale-110 transition-transform cursor-pointer"
    >
      {darkMode ? <GoSun size={24} strokeWidth={.5} /> : <GoMoon size={24} strokeWidth={.5} />}
    </button>
  );
};

export const Navbar = () => {
  return (
    <nav className="margin-auto py-8 justify-between flex items-center z-50 sticky -top-6 ">
      <h1 className="text-lg">
        React TypeScript Thomas's Template
        <span className="animate-pulse">.</span>
      </h1>
      <ThemeToggler />
    </nav>
  );
};
