"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./BrandCarousel.css";

export default function BrandCarousel() {
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
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(brands.length / itemsPerPage);

  const [page, setPage] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused, totalPages]);

  const previousPage = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const nextPage = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const visibleBrands = brands.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section
      className="brands-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h2>Trusted Technology Partners</h2>

      <div className="brands-carousel">

        <button
          className="carousel-btn"
          onClick={previousPage}
        >
          ‹
        </button>

        <div className="brands-grid">
          {visibleBrands.map((brand) => (
            <div
              key={brand}
              className="brand-card"
            >
              <Image
                src={`/brands/${brand}.png`}
                alt={brand}
                width={180}
                height={100}
              />
            </div>
          ))}
        </div>

        <button
          className="carousel-btn"
          onClick={nextPage}
        >
          ›
        </button>

      </div>

      <div className="carousel-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={
              page === index
                ? "dot active"
                : "dot"
            }
            onClick={() => setPage(index)}
          />
        ))}
      </div>
    </section>
  );
}