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
      <section
        className="carousel-services"
      >
        <div className="slogan-slide">
          <p>Your first choice for uncompromising security solutions.</p>
        </div>

        <div key={activeIndex} className="carousel-box slide">
          {services[activeIndex]}
        </div>
      </section>

      {/* ===== Brands Section ===== */}
      <section className="brands">
  <h2>Official Brands We Work With</h2>
  <div className="brand-scroll">
    <div className="brand-track">
      {/* 15 logos here */}
      <div className="brand-box"><Image src="/brands/ajax.png" alt="Ajax" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/centurion.png" alt="Centurion" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/csb.png" alt="CSB" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/dahua.png" alt="Dahua" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/dsc.png" alt="DSC" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/forbatt.png" alt="Forbatt" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/hikvision.png" alt="Hikvision" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/hilook.png" alt="HiLook" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/ids.png" alt="IDS" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/nemtek.png" alt="Nemtek" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/paradox.png" alt="Paradox" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/sherlotronics.png" alt="Sherlotronics" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/texecom.png" alt="Texecom" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/tiandy.png" alt="Tiandy" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/zkteco.png" alt="ZKTeco" width={120} height={60} /></div>

      {/* Duplicate sequence for seamless loop */}
      <div className="brand-box"><Image src="/brands/ajax.png" alt="Ajax" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/centurion.png" alt="Centurion" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/csb.png" alt="CSB" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/dahua.png" alt="Dahua" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/dsc.png" alt="DSC" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/forbatt.png" alt="Forbatt" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/hikvision.png" alt="Hikvision" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/hilook.png" alt="HiLook" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/ids.png" alt="IDS" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/nemtek.png" alt="Nemtek" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/paradox.png" alt="Paradox" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/sherlotronics.png" alt="Sherlotronics" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/texecom.png" alt="Texecom" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/tiandy.png" alt="Tiandy" width={120} height={60} /></div>
      <div className="brand-box"><Image src="/brands/zkteco.png" alt="ZKTeco" width={120} height={60} /></div>
    </div>
  </div>
</section>
     </main>
   );
}
