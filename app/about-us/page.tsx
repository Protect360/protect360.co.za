"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTAButton from "../components/CTAButton";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <main>
      {/* Global Navbar identical to other pages */}
      <Navbar />

      {/* Wrapper fills viewport between Navbar and Footer */}
      <div className="about-wrapper">
        <div className="about-container">
          <section className="hero-section">
            <h1>About Protect 360 (Pty) Ltd</h1>
            <p>Your trusted partner in integrated security solutions.</p>
          </section>

          <section className="overview-section">
            <h2>Who We Are</h2>
            <p>
              Founded in Gauteng, Protect 360 (Pty) Ltd specializes in comprehensive electronic
              security systems, including CCTV, alarms, access control, and automation. Our approach
              is simple: deliver high‑quality installations, responsive support, and long‑term
              reliability. We serve residential, commercial, and industrial clients across South Africa,
              ensuring every project meets strict safety and compliance standards.
            </p>
          </section>

          <section className="mission-section">
            <h2>Our Mission & Vision</h2>
            <p>
              <strong>Mission:</strong> To provide peace of mind through advanced, reliable, and
              accessible security solutions tailored to every client’s needs.
            </p>
            <p>
              <strong>Vision:</strong> To be South Africa’s most trusted name in integrated protection
              systems, setting the standard for professionalism and innovation in the security industry.
            </p>
          </section>

          <section className="values-section">
            <h2>What Drives Us</h2>
            <ul>
              <li><strong>Integrity:</strong> We operate with honesty and accountability in every project.</li>
              <li><strong>Professionalism:</strong> Our team delivers service excellence from start to finish.</li>
              <li><strong>Innovation:</strong> We embrace technology to stay ahead of evolving security challenges.</li>
              <li><strong>Customer Commitment:</strong> Your safety and satisfaction are our top priorities.</li>
              <li><strong>Safety & Compliance:</strong> We adhere to all industry regulations and standards.</li>
            </ul>
          </section>

          <section className="quality-section">
            <h2>Our Commitment to Quality</h2>
            <p>
              Protect 360 (Pty) Ltd is committed to maintaining full compliance with South African
              safety and electrical standards. As we continue to grow, we aim to expand our certifications
              and partnerships to further strengthen our professional standing.
            </p>
          </section>

          <section className="team-section">
            <h2>Our Team</h2>
            <p>
              Our team consists of skilled professionals with years of experience in electronic security,
              networking, and automation. Each member is committed to delivering quality workmanship and
              dependable support.
            </p>
          </section>

          <section className="legal-section">
            <h2>Legal & Compliance Documents</h2>
            <p>
              For transparency and accountability, please review our official policies:
              Privacy Policy, Terms & Conditions, Accessibility Statement, Cookies Policy,
              Copyright Notice, and Disclaimer.
            </p>
          </section>

          {/* Global CTA Button */}
          <div className="cta-wrapper">
            <CTAButton />
          </div>
        </div>
      </div>

      {/* Global Footer identical to other pages */}
      <Footer />
    </main>
  );
}
