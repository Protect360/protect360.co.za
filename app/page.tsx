"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const services = [
    { title: "Alarm Systems", description: "Instant alerts for intrusion detection and rapid response through integrated monitoring." },
    { title: "Electric Fencing", description: "Strong perimeter defense that deters threats and reinforces property boundaries." },
    { title: "CCTV Systems", description: "24/7 high-definition monitoring with clear footage and remote viewing access." },
    { title: "Access Control", description: "Biometric and card-based systems to manage and track authorized entry points." },
    { title: "Gate & Door Automation", description: "Secure and convenient entry solutions for residential and commercial properties." },
    { title: "Intercom Systems", description: "Clear communication between entry points and occupants for tighter visitor control." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-swap cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Protect 360 (Pty) Ltd</h1>
          <p>Your first choice for uncompromising security solutions.</p>
          <a href="/contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </section>

      {/* Animated Services Section */}
      <section className="interactive-services">
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${index === activeIndex ? "active" : ""}`}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands">
        <h2>Trusted Brands We Install and Support</h2>
        <div className="brand-logos">
          <Image src="/brands/hikvision.svg" alt="Hikvision" width={100} height={40} />
          <Image src="/brands/dahua.svg" alt="Dahua" width={100} height={40} />
          <Image src="/brands/dsc.png" alt="DSC" width={100} height={40} />
          <Image src="/brands/paradox.png" alt="Paradox" width={100} height={40} />
          <Image src="/brands/texecom.svg" alt="Texecom" width={100} height={40} />
        </div>
      </section>
    </main>
  );
}
