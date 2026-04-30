"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTAButton from "./components/CTAButton";
import "./Home.css";

export default function Home() {
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

  // ✅ Service rotation logic
  useEffect(() => {
    const items = document.querySelectorAll(".service-item");
    let index = 0;
    const total = items.length;
    const duration = 10000; // 10 seconds per service

    const cycle = () => {
      items.forEach((item, i) => {
        item.style.opacity = i === index ? "1" : "0";
        item.style.transform = i === index ? "translateX(0)" : "translateX(100%)";
      });

      // slide out current after 8s, then move to next
      setTimeout(() => {
        items[index].style.transform = "translateX(-100%)";
        index = (index + 1) % total;
      }, 8000);
    };

    cycle();
    const interval = setInterval(cycle, duration);
    return () => clearInterval(interval);
  }, []);

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
      <section className="services-carousel">
        <h2>What We Do</h2>
        <div className="service-slider">
          <div className="service-item">Alarm Systems</div>
          <div className="service-item">CCTV Systems</div>
          <div className="service-item">Electric Fencing</div>
          <div className="service-item">Gate & Door Automation</div>
          <div className="service-item">Access Control</div>
          <div className="service-item">Intercom Systems</div>
          <div className="service-item">Installation & Integration</div>
          <div className="service-item">Assessments & Quotes</div>
          <div className="service-item">Maintenance & Repairs</div>
          <div className="service-item">Add-Ons & Upgrades</div>
          <div className="service-item">Fault-Finding & Troubleshooting</div>
          <div className="service-item">24/7 Support</div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <h2>Trusted Brands</h2>
        <div className="brands-scroll">
          <div className="brand-track">
            {/* First set */}
            {brands.map((brand) => (
              <div key={brand} className="brand-box">
                <Image src={`/brands/${brand}.png`} alt={brand} width={100} height={60} />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
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
