"use client";
import { useState } from "react";
import "./home.css";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.body.className = newTheme ? "dark" : "light";
  };

  return (
    <main className={isDark ? "dark" : "light"}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Protect 360 (Pty) Ltd</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Reviews</li>
          <li>Gallery</li>
        </ul>
        <button className="toggle-btn" onClick={toggleTheme}>
          <img
            src={isDark ? "/bulb-off.png" : "/bulb-on.png"}
            alt="Theme Toggle"
            className="toggle-icon"
          />
        </button>
      </nav>

      {/* Page Content */}
      <section className="content">
        <h1>Protect 360 (Pty) Ltd</h1>
        <p>Your first choice for uncompromising security.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Protect 360 (Pty) Ltd | Privacy Policy | Terms & Conditions</p>
      </footer>
    </main>
  );
}
