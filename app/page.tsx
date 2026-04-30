"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTAButton from "./components/CTAButton";
import "./Home.css";

export default function Home() {
  const services = [
    "Alarm Systems",
    "CCTV Systems",
    "Electric Fencing",
    "Gate & Door Automation",
    "Access Control",
    "Intercom Systems",
    "Installation & Integration",
    "Assessments & Quotes",
    "Maintenance & Repairs",
    "Add‑Ons & Upgrades",
    "Fault‑Finding & Troubleshooting",
    "24/7 Support",
  ];

  const brands = [
    "ajax",
    "centurion",
    "csb",
    "dahua",
    "dsc",
    "forbatt",
    "hikvision",
    "hilook",
    "ids",
    "nemtek",
    "paradox",
    "sherlotronics",
    "texecom",
    "tiandy",
    "zkteco",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 4000); // 4 s per service (fade in/out)
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <main className="home-wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <Image src="/logo-text.png" alt="Protect 360 Logo" width={520} height={200} />
        <div className="cta-buttons">
          <Link href="https://wa.me/27791836591" className="cta-btn whatsapp">
            WhatsApp
          </Link>
          <Link href="tel:+27791836591" className="cta-btn phone">
            Phone
          </Link>
        </div>
        <p className="slogan">Your first choice for uncompromising security.</p>
      </section>

      {/* Services Section */}
      <section className="simple-services">
        <h2>What We Do</h2>
        <div className="service-display">
          <div key={index} className="fade-text">
            {services[index]}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <h2>Trusted Brands</h2>
        <div className="brands-scroll">
          <div className="brand-track">
            {brands.map((brand) => (
              <div key={brand} className="brand-box">
                <Image src={`/brands/${brand}.png`} alt={brand} width={100} height={60} />
              </div>
            ))}
            {brands.map((brand) => (
              <div key={`${brand}-dup`} className="brand-box">
                <Image src={`/brands/${brand}.png`} alt={brand} width={100} height={60} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-wrapper">
        <CTAButton />
      </div>

      <Footer />
    </main>
  );
}
