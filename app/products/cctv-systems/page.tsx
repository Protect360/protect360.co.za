"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import "./Category.css";

const categories = [
  {
    title: "Analogue",
    slug: "analogue",
  },
  {
    title: "Network",
    slug: "network",
  },
  {
    title: "WiFi",
    slug: "wifi",
  },
  {
    title: "Accessories",
    slug: "accessories",
  },
];

export default function CCTVSystems() {
  return (
    <main className="category-wrapper">
      <Navbar />

      <section className="category-section">
        <h1>CCTV Systems</h1>

        <p className="category-subtitle">
          Browse our CCTV product categories and solutions.
        </p>

        <div className="category-controls">
          <input
            type="text"
            placeholder="Search CCTV Products..."
            className="category-search"
            disabled
          />

          <select
            className="category-filter"
            disabled
          >
            <option>All CCTV Categories</option>
          </select>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="category-card"
            >
              <h2>{category.title}</h2>

              <p>
                Products coming soon.
              </p>

              <Link
                href={`/products/cctv-systems/${category.slug}`}
                className="category-btn"
              >
                View Category
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}