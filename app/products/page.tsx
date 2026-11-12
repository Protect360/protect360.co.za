"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import "./Products.css";

const categories = [
  {
    title: "Alarm Systems",
    slug: "alarm-systems",
  },
  {
    title: "CCTV Systems",
    slug: "cctv-systems",
  },
  {
    title: "Electric Fencing",
    slug: "electric-fencing",
  },
  {
    title: "Access Control",
    slug: "access-control",
  },
  {
    title: "Intercom Systems",
    slug: "intercom-systems",
  },
  {
    title: "Automation",
    slug: "automation",
  },
  {
    title: "Accessories",
    slug: "accessories",
  },
  {
    title: "DIY Solutions",
    slug: "diy-solutions",
  },
];

export default function Products() {
  return (
    <main className="products-wrapper">
      <Navbar />

      <section className="products-section">
        <h1>Products</h1>

        <p className="products-subtitle">
          Browse our available security solutions and product categories.
        </p>

        <div className="products-controls">
          <input
            type="text"
            placeholder="Search Products..."
            className="products-search"
            disabled
          />

          <select className="products-filter" disabled>
            <option>All Categories</option>
          </select>
        </div>

        <div className="categories-grid">
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
                href={`/products/${category.slug}`}
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