"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function HomePage() {
  const boxes = [
    "Alarm Systems",
    "CCTV Systems",
    "Electric Fencing",
    "Gate & Door Automation",
    "Access Control",
    "Intercom Systems",
    "Installation & Integration",
    "Assessments & Quotes",
    "Maintenance & Repairs",
    "Add-Ons & Upgrades",
    "Fault-Finding & Troubleshooting",
    "24/7 Support",
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % boxes.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [paused, boxes.length]);

  return (
    <main className="home-page">
      {/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="slogan-box">
          <p>Your first choice for uncompromising security solutions.</p>
        </div>

        <div className="hero-content">
          <Image
            src="/logos/logo text.png"
            alt="Protect 360 Logo"
            className="hero-logo"
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

      {/* ===== Slideshow Services ===== */}
      <section
        className="slideshow-services"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="slideshow-box active">{boxes[index]}</div>
      </section>

      {/* ===== Brands Section ===== */}
      <section className="brands">
        <h2>Official Brands We Work With</h2>
        <div className="brand-scroll">
          <Image src="/brands/dsc.png" alt="DSC" width={120} height={60} />
          <Image src="/brands/texecom.png" alt="Texecom" width={120} height={60} />
          <Image src="/brands/paradox.png" alt="Paradox" width={120} height={60} />
          <Image src="/brands/ids.png" alt="IDS" width={120} height={60} />
          <Image src="/brands/hikvision.png" alt="Hikvision" width={120} height={60} />
          <Image src="/brands/dahua.png" alt="Dahua" width={120} height={60} />
          <Image src="/brands/hilook.png" alt="HiLook" width={120} height={60} />
        </div>
      </section>
    </main>
  );
}
