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
        onMouseEnter={() => intervalId && clearInterval(intervalId)}
        onMouseLeave={() => startCarousel()}
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
    {/* First sequence */}
    <div className="brand-box"><Image src="/brands/ajax logo.png" alt="Ajax" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/centurion logo.png" alt="Centurion" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/csb logo.png" alt="CSB" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/dahua logo.png" alt="Dahua" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/dsc logo.png" alt="DSC" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/forbatt logo.png" alt="Forbatt" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/hikvision logo.png" alt="Hikvision" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/hilook logo.png" alt="HiLook" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/ids logo.png" alt="IDS" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/nemtek logo.png" alt="Nemtek" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/paradox logo.png" alt="Paradox" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/sherlotronics logo.png" alt="Sherlotronics" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/texecom logo.png" alt="Texecom" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/tiandy logo.png" alt="Tiandy" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/zkteco logo.png" alt="ZKTeco" width={120} height={60} /></div>

    {/* Duplicate sequence for seamless loop */}
    <div className="brand-box"><Image src="/brands/ajax logo.png" alt="Ajax" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/centurion logo.png" alt="Centurion" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/csb logo.png" alt="CSB" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/dahua logo.png" alt="Dahua" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/dsc logo.png" alt="DSC" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/forbatt logo.png" alt="Forbatt" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/hikvision logo.png" alt="Hikvision" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/hilook logo.png" alt="HiLook" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/ids logo.png" alt="IDS" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/nemtek logo.png" alt="Nemtek" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/paradox logo.png" alt="Paradox" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/sherlotronics logo.png" alt="Sherlotronics" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/texecom logo.png" alt="Texecom" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/tiandy logo.png" alt="Tiandy" width={120} height={60} /></div>
    <div className="brand-box"><Image src="/brands/zkteco logo.png" alt="ZKTeco" width={120} height={60} /></div>
  </div>
</section>
     </main>
   );
}
