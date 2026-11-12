"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Navbar.css";

type Theme = "light" | "dark";

const themeChangeEvent = "protect360-theme-change";

function subscribeToTheme(callback: () => void) {
  window.addEventListener(themeChangeEvent, callback);
  return () => window.removeEventListener(themeChangeEvent, callback);
}

function getThemeSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

export default function Navbar() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  const menuRef = useRef<HTMLUListElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(target)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    window.dispatchEvent(new Event(themeChangeEvent));
  };

  const allLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/about-us", label: "About Us" },
    { href: "/reviews", label: "Reviews" },
    { href: "/gallery", label: "Gallery" },
  ];

  let visibleLinks: { href: string; label: string }[] = [];

  if (pathname === "/") {
    visibleLinks = allLinks.filter(
      (link) => link.href !== pathname
    );
  } else if (
    pathname === "/reviews" ||
    pathname === "/gallery"
  ) {
    visibleLinks = allLinks.filter(
      (link) => link.href === "/"
    );
  } else {
    visibleLinks = allLinks.filter(
      (link) =>
        link.href !== pathname &&
        link.href !== "/reviews" &&
        link.href !== "/gallery"
    );
  }

  return (
    <nav className="navbar">

      <Link href="/" aria-label="Home">
        <Image
          src="/logo-logo.png"
          alt="Protect 360 Logo"
          width={120}
          height={40}
          className="navbar-logo"
        />
      </Link>

      <button
        ref={hamburgerRef}
        className="hamburger"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
        aria-label="Menu"
      >
        ☰
      </button>

      <ul
        ref={menuRef}
        className={
          menuOpen
            ? "nav-links open"
            : "nav-links"
        }
      >
        {visibleLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={() =>
                setMenuOpen(false)
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-right">
        <button
          className="toggle-btn"
          onClick={toggleTheme}
        >
          <Image
            src={
              theme === "dark"
                ? "/bulb-off.png"
                : "/bulb-on.png"
            }
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