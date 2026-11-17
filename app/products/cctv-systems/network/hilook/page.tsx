"use client";

import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Link from "next/link";
import "./Category.css";

const categories = [
  {
    title: "Cameras",
    slug: "cameras",
  },
  {
    title: "Recorders",
    slug: "recorders",
  },
  {
    title: "Accessories",
    slug: "accessories",
  },
];

export default function HiLookNetwork() {
  return (
    <main className="category-wrapper">
      <Navbar />

      <section className="category-section">

        <div className="breadcrumbs">
          <Link href="/">Home</Link>
          <span>›</span>

          <Link href="/products">
            Products
          </Link>

          <span>›</span>

          <Link href="/products/cctv-systems">
            CCTV Systems
          </Link>

          <span>›</span>

          <Link href="/products/cctv-systems/network">
            Network
          </Link>

          <span>›</span>

          <span>HiLook</span>
        </div>

        <h1>HiLook Network Products</h1>

        <div className="category-grid">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="category-card"
            >
              <h2>{category.title}</h2>

              <Link
                href={`/products/cctv-systems/network/hilook/${category.slug}`}
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