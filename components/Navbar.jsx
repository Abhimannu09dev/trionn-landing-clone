"use client";

import { AudioLines, Moon, Sun, Menu, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full px-6 py-4 flex items-center justify-around mx-auto ">
        {/* Logo */}
        <Image
          src="/images/logo.svg"
          alt="Trionn Logo"
          width={100}
          height={40}
        />

        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle Theme"
            className="p-2 rounded transition hover:opacity-70 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundOn(!soundOn)}
            aria-label="Toggle Sound"
            className="p-2 rounded transition hover:opacity-70 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full "
          >
            <AudioLines size={20} />
          </button>
        </div>
        <div className="flex items-center space-x-2">
          {/* Menu Button */}
          <button
            className="p-2 rounded flex items-center space-x-1 hover:opacity-70 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <>
                <span className="text-sm font-medium">Close</span>
                <X size={22} />
              </>
            ) : (
              <>
                <span className="text-sm font-medium">Menu</span>
                <Menu size={22} />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Full-screen Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-md transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Nav Links — centered */}
        <ul className="flex flex-col items-center space-y-6 uppercase text-3xl font-medium mb-12">
          {["Work", "About", "Services", "Team", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:opacity-60 transition cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Contact + Socials */}
        <div className="flex flex-col items-center space-y-4 text-sm">
          <div className="text-center">
            <p>hello@trionn.com</p>
            <p>+91 98241 82099</p>
          </div>
          <div className="flex items-center space-x-3">
            {["dribble", "linkedin", "instagram", "behance", "facebook"].map(
              (icon) => (
                <Image
                  key={icon}
                  src={`/images/${icon}.svg`}
                  alt={icon}
                  width={28}
                  height={28}
                  className="hover:opacity-60 transition cursor-pointer"
                />
              ),
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
