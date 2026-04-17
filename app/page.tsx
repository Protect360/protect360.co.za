"use client";
import { useEffect, useState } from "react";

export default function HomePage() {
  const services = [
    {
      title: "Alarm Systems",
      description:
        "Instant alerts for intrusion detection and rapid response through integrated monitoring.",
    },
    {
      title: "Electric Fencing",
      description:
        "Strong perimeter defense that deters threats and reinforces property boundaries.",
    },
    {
      title: "CCTV Systems",
      description:
        "24/7 high‑definition monitoring with clear footage and remote viewing access.",
    },
    {
      title: "Access Control",
      description:
        "Biometric and card‑based systems to manage and track authorized entry points.",
    },
    {
      title: "Gate & Door Automation",
      description:
        "Secure and convenient entry solutions for residential and commercial properties.",
    },
    {
      title: "Intercom Systems",
      description:
        "Clear communication between entry points and occupants for tighter visitor control.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto‑swap cards every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="slogan">
        <p>Your first choice for uncompromising security solutions.</p>
      </section>

      {/* Interactive Services Section */}
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
    </main>
  );
}
