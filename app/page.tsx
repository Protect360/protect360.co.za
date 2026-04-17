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
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const startCarousel = () => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    setIntervalId(id);
  };

  useEffect(() => {
    startCarousel();
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <main className="home-page">
      {/* Slogan */}
      <section className="slogan">
        <p>Your first choice for uncompromising security solutions.</p>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading two-tone">Protect 360 (Pty) Ltd</h1>
          <p className="hero-subheading">Home & Business Security Systems</p>
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

      {/* Carousel Services */}
      <section
        className="carousel-services"
        onMouseEnter={() => intervalId && clearInterval(intervalId)}
        onMouseLeave={() => startCarousel()}
      >
        <div key={activeIndex} className="carousel-box slide">
          {services[activeIndex]}
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands">
        <h2>Official Brands We Work With</h2>
        <div className="brand-scroll">
          <Image src="/brands/dsc.png" alt="DSC" width={100} height={100} />
          <Image src="/brands/texecom.png" alt="Texecom" width={100} height={100} />
          <Image src="/brands/paradox.png" alt="Paradox" width={100} height={100} />
          <Image src="/brands/ids.png" alt="IDS" width={100} height={100} />
          <Image src="/brands/hikvision.png" alt="Hikvision" width={100} height={100} />
          <Image src="/brands/dahua.png" alt="Dahua" width={100} height={100} />
          <Image src="/brands/hilook.png" alt="HiLook" width={100} height={100} />
        </div>
      </section>
    </main>
  );
}
