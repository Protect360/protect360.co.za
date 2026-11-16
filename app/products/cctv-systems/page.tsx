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

        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>›</span>
          <Link href="/products">Products</Link>
          <span>›</span>
          <span>CCTV Systems</span>
        </div>

        <h1>CCTV Systems</h1>

        <div className="category-grid">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="category-card"
            >
              <h2>{category.title}</h2>

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