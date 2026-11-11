"use client";

import { useEffect, useState } from "react";
import "./ServicesCarousel.css";

export default function ServicesCarousel() {
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

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [services.length]);

  const previousService = () => {
    setIndex((prev) =>
      prev === 0 ? services.length - 1 : prev - 1
    );
  };

  const nextService = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section className="services-showcase">

      <h2>Everything You Need. One Security Partner.</h2>

      <div className="services-carousel">

        <button
          className="service-nav-btn"
          onClick={previousService}
        >
          ‹
        </button>

        <div className="service-card">

          <div className="scanner-border">
            <div className="scanner-dot"></div>
          </div>

          <div className="service-content">
            {services[index]}
          </div>

        </div>

        <button
          className="service-nav-btn"
          onClick={nextService}
        >
          ›
        </button>

      </div>

      <div className="service-dots">
        {services.map((_, dotIndex) => (
          <button
            key={dotIndex}
            className={
              index === dotIndex
                ? "service-dot active"
                : "service-dot"
            }
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>

    </section>
  );
}