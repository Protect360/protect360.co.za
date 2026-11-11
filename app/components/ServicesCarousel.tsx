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

  const [currentService, setCurrentService] =
    useState(services[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      let nextService;

      do {
        nextService =
          services[
            Math.floor(Math.random() * services.length)
          ];
      } while (
        nextService === currentService
      );

      setCurrentService(nextService);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentService]);

  return (
    <section className="services-showcase">
      <h2>
        Everything You Need. One Security Partner.
      </h2>

      <div className="service-card">
        <div className="scanner-dot"></div>

        <div className="service-content">
          {currentService}
        </div>
      </div>
    </section>
  );
}