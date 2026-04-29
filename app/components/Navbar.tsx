"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import "./Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  // ✅ Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // ✅ Apply theme and save to localStorage whenever it changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Image
          src="/logo-logo.png"
          alt="Protect 360 Logo"
          width={120}
          height={40}
          className="navbar-logo"
        />
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact-us">Contact Us</a></li>
        <li><a href="/about-us">About Us</a></li>
      </ul>

      <div className="nav-right">
        <button className="toggle-btn" onClick={toggleTheme}>
          <Image
            src={theme === "dark" ? "/bulb-off.png" : "/bulb-on.png"}
            alt="Theme Toggle"
            width={26}
            height={26}
            className="toggle-icon"
          />
        </button>
      </div>
    </nav>
  );
}
