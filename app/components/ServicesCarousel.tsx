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
    }, 4000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="simple-services">
      <h2>What We Do</h2>

      <div className="service-display">
        <div key={index} className="fade-text">
          {services[index]}
        </div>
      </div>
    </section>
  );
}