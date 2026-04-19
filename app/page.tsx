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

  const brands = [
    { src: "/brands/ajax.png", alt: "Ajax" },
    { src: "/brands/centurion.png", alt: "Centurion" },
    { src: "/brands/csb.png", alt: "CSB" },
    { src: "/brands/dahua.png", alt: "Dahua" },
    { src: "/brands/dsc.png", alt: "DSC" },
    { src: "/brands/forbatt.png", alt: "Forbatt" },
    { src: "/brands/hikvision.png", alt: "Hikvision" },
    { src: "/brands/hilook.png", alt: "HiLook" },
    { src: "/brands/ids.png", alt: "IDS" },
    { src: "/brands/nemtek.png", alt: "Nemtek" },
    { src: "/brands/paradox.png", alt: "Paradox" },
    { src: "/brands/sherlotronics.png", alt: "Sherlotronics" },
    { src: "/brands/texecom.png", alt: "Texecom" },
    { src: "/brands/tiandy.png", alt: "Tiandy" },
    { src: "/brands/zkteco.png", alt: "ZKTeco" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(id);
  }, [services.length]);

  return (
    <main className="home-page">
{/* ===== Hero Section ===== */}
      <section className="hero">
        <div className="hero-content">
          <Image
            src="/logos/logo-text.png"
            alt="Protect 360 Logo Text"
            className="hero-logo"
            width={768}
            height={200}
            priority
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

{/* ===== Carousel Slogan/Services ===== */}
      <section className="carousel-services">
    {/* Slogan */}
        <p className="slogan-slide">
          Your first choice for uncompromising security solutions.
        </p>

    {/* Services */}
        <div
          key={activeIndex}
          className="carousel-box"
          aria-live="polite"
          aria-label={`Service: ${services[activeIndex]}`}
        >
          {services[activeIndex]}
        </div>

{/* ===== Brands ===== */}
        <div className="brands">
          <div className="brand-scroll">
      {/* 1st Sequence */}
            {brands.map((brand, i) => (
              <div key={`brand-${i}`} className="brand-box">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  style={{ display: "inline-block" }}
                />
              </div>
            ))}
      {/* 2nd Sequence */}
            {brands.map((brand, i) => (
              <div key={`brand-dup-${i}`} className="brand-box">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  style={{ display: "inline-block" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
