"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";
import Link from "next/link";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="home-wrapper">
          <section className="hero">
            <Image src="/logo.png" alt="Protect 360 Logo" width={120} height={120} />
            <h1>Protect 360 (Pty) Ltd</h1>
            <p className="slogan">Your first choice for uncompromising security.</p>
            <Link href="/services" className="cta-btn">Explore Our Services</Link>
          </section>

          <section className="overview">
            <h2>Why Choose Protect 360</h2>
            <p>
              We deliver professional, reliable, and compliant security solutions for homes and businesses.
              Our team operates 24/7 to ensure your peace of mind.
            </p>
          </section>

          <section className="services-preview">
            <h2>Our Security Solutions</h2>
            <div className="service-grid">
              <div className="service-box">Alarm Systems</div>
              <div className="service-box">CCTV Installation</div>
              <div className="service-box">Access Control</div>
            </div>
            <Link href="/services" className="cta-link">View All Services</Link>
          </section>

          <section className="contact-cta">
            <h2>Need Assistance or a Quote?</h2>
            <Link href="/contact-us" className="cta-btn">Contact Us</Link>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
