"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "./Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

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

  // ✅ Define all links
  const allLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/about-us", label: "About Us" },
    { href: "/reviews", label: "Reviews" },
    { href: "/gallery", label: "Gallery" },
  ];

  // ✅ Conditional display logic
  let visibleLinks: { href: string; label: string }[] = [];

  if (pathname === "/") {
    // Home page → show all links except Home itself
    visibleLinks = allLinks.filter((link) => link.href !== pathname);
  } else if (pathname === "/reviews" || pathname === "/gallery") {
    // Reviews or Gallery page → show only Home
    visibleLinks = allLinks.filter((link) => link.href === "/");
  } else {
    // Other pages → hide current page and hide Reviews & Gallery
    visibleLinks = allLinks.filter(
      (link) =>
        link.href !== pathname &&
        link.href !== "/reviews" &&
        link.href !== "/gallery"
    );
  }

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
        {visibleLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
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
