"use client";
import { useState } from "react";
import Image from "next/image";
import "./Services.css";

export default function Services() {
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
          <li>Home</li>
          <li>Products</li>
          <li>Services</li>
          <li>Contact Us</li>
          <li>About Us</li>
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

      <section className="content">
        <div className="section">
          <h2>SECURITY SYSTEMS</h2>
          <h3>Comprehensive Security Solutions</h3>

          <div className="service-grid">
            <div className="service">
              <h4>Alarm Systems</h4>
              <p>
                Advanced intrusion detection, fire alarms, and environmental monitoring to protect your property and loved ones.
              </p>
            </div>

            <div className="service">
              <h4>CCTV Systems</h4>
              <p>
                High‑definition surveillance cameras with remote access and intelligent analytics for comprehensive monitoring.
              </p>
            </div>

            <div className="service">
              <h4>Electric Fencing</h4>
              <p>
                Strong perimeter defense that deters threats and reinforces property boundaries.
              </p>
            </div>

            <div className="service">
              <h4>Gate & Door Automation</h4>
              <p>
                Secure and convenient entry solutions for residential and commercial properties.
              </p>
            </div>

            <div className="service">
              <h4>Access Control</h4>
              <p>
                Comprehensive access management systems for enhanced security, monitoring, and control.
              </p>
            </div>

            <div className="service">
              <h4>Intercom Systems</h4>
              <p>
                Clear communication between entry points and occupants for tighter visitor control.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>OUR EXPERTISE BEYOND PRODUCTS</h2>
          <h3>Specialized Service Excellence</h3>

          <div className="service-grid">
            <div className="service">
              <h4>Installation & Integration</h4>
              <p>
                Professional installation and seamless integration of security systems for optimal performance.
              </p>
            </div>

            <div className="service">
              <h4>Assessments & Quotes</h4>
              <p>
                Comprehensive security assessments and personalized quotes to meet your specific needs and budget.
              </p>
            </div>

            <div className="service">
              <h4>Maintenance & Repairs</h4>
              <p>
                Regular maintenance and prompt repairs to ensure your security systems operate at peak performance.
              </p>
            </div>

            <div className="service">
              <h4>Add‑Ons & Upgrades</h4>
              <p>
                Enhance your security with add‑ons and upgrades for improved functionality and protection.
              </p>
            </div>

            <div className="service">
              <h4>Fault‑Finding & Troubleshooting</h4>
              <p>
                Expert diagnosis and resolution of security system issues to minimize downtime and ensure optimal performance.
              </p>
            </div>

            <div className="service">
              <h4>24/7 Support</h4>
              <p>
                Support for any security system emergencies or inquiries, ensuring your safety and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Copyright © 2026 Protect 360 (Pty) Ltd - All rights reserved.</p>
        <p className="footer-links">
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <span className="divider">|</span>
          <a href="/terms-and-conditions" className="footer-link">Terms & Conditions</a>
        </p>
      </footer>
    </main>
  );
}
