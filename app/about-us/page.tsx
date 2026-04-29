"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTAButton from "../components/CTAButton";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <main>
      <Navbar />
      <div className="about-wrapper">
        <div className="about-container">
          {/* Hero Section */}
          <section className="hero-section">
            <h1>About Us</h1>
            <h2>Protect 360 (Pty) Ltd</h2>
            <p className="slogan">YOUR FIRST CHOICE FOR UNCOMPROMISING SECURITY</p>
          </section>

          {/* Top row: Mission | Who We Are | Vision */}
          <section className="mission-who-vision-grid">
            <div className="mission-block">
              <h2>Our Mission</h2>
              <p>
                To provide peace of mind through advanced, reliable, and accessible security solutions
                tailored to every client’s needs.
              </p>
            </div>

            <div className="overview-block">
              <h2>Who We Are</h2>
              <p>
                Founded in Gauteng, Protect 360 (Pty) Ltd specializes in comprehensive electronic
                security systems, including CCTV, alarms, access control, and automation. Our approach
                is simple: deliver high‑quality installations, responsive support, and long‑term
                reliability. We serve residential, commercial, and industrial clients across South Africa,
                ensuring every project meets strict safety and compliance standards.
              </p>
            </div>

            <div className="vision-block">
              <h2>Our Vision</h2>
              <p>
                To be South Africa’s most trusted name in integrated protection systems, setting the
                standard for professionalism and innovation in the security industry.
              </p>
            </div>
          </section>

          {/* Second row: What Drives Us blocks */}
          <section className="drives-grid">
            <h2>What Drives Us</h2>
            <div className="drives-row">
              <div className="drive-block">
                <h3>Integrity</h3>
                <p>We operate with honesty and accountability in every project.</p>
              </div>
              <div className="drive-block">
                <h3>Professionalism</h3>
                <p>Our team delivers service excellence from start to finish.</p>
              </div>
              <div className="drive-block">
                <h3>Innovation</h3>
                <p>We embrace technology to stay ahead of evolving security challenges.</p>
              </div>
              <div className="drive-block">
                <h3>Customer Commitment</h3>
                <p>Your safety and satisfaction are our top priorities.</p>
              </div>
              <div className="drive-block">
                <h3>Safety & Compliance</h3>
                <p>We adhere to all industry regulations and standards.</p>
              </div>
            </div>
          </section>

          <section className="quality-section">
            <h2>Our Commitment to Quality</h2>
            <p>
              Protect 360 (Pty) Ltd is committed to maintaining full compliance with South African
              safety and electrical standards. As we continue to grow, we aim to expand our certifications
              and partnerships to further strengthen our professional standing.
            </p>
          </section>

          <section className="legal-section">
            <h2>Legal & Compliance Documents</h2>
            <p>For transparency and accountability, please review our official policies:</p>
            <ul className="legal-links">
              <li><a href="/legal/privacy-policy" className="link">Privacy Policy</a></li>
              <li><a href="/legal/terms-and-conditions" className="link">Terms & Conditions</a></li>
              <li><a href="/legal/accessibility-statement" className="link">Accessibility Statement</a></li>
              <li><a href="/legal/cookies-policy" className="link">Cookies Policy</a></li>
              <li><a href="/legal/copyright-notice" className="link">Copyright Notice</a></li>
              <li><a href="/legal/disclaimer" className="link">Disclaimer</a></li>
            </ul>
          </section>

          <div className="cta-wrapper">
            <CTAButton />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
