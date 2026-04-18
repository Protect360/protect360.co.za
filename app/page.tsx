"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function HomePage() {
  // === Carousel Logic ===
  const services = [
    "Alarm Systems",
    "Electric Fencing",
    "CCTV Systems",
    "Gate & Door Automation",
    "Access Control",
    "Intercom Systems",
    "Installation",
    "Assessments & Quotes",
    "Maintenance & Repairs",
    "Add‑Ons & Upgrades",
    "Fault‑Finding & Troubleshooting",
  ];

const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2500);

    return () => {
      clearInterval(id);
    };
  }, [services.length]);

  return (
    <main className="home-page">
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-content">
          <Image
            src="/logos/logo text.png"
            alt="Protect 360 Logo"
            className="hero-logo"
            width={720}
            height={200}
          />

          <div className="hero-buttons">
            <a href="https://wa.me/27791836591" className="btn btn-primary">
              WhatsApp
            </a>
            <a href="tel:+27791836591" className="btn btn-secondary">
              Phone
            </a>
          </div>
        </div>
      </section>

      {/* ===== Carousel Services with Slogan ===== */}
<section className="carousel-services">
  {/* Slogan */}
  <div className="slogan-slide">
    Your first choice for uncompromising security solutions.
  </div>

  {/* Active service block */}
  <div key={activeIndex} className="carousel-box slide">
    {services[activeIndex]}
  </div>
</section>
          </main>
        );
      }
