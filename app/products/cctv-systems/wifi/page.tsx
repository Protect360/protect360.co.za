"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "./Category.css";

const products = [
  {
    code: "38TC-C320N-WIFI",
    title: "Tiandy 2MP WiFi Bullet",
    description: "2MP WiFi Bullet Camera, 50M IR + 15M White Light",
  },
  {
    code: "38TC-C340N-WIFI",
    title: "Tiandy 4MP WiFi Bullet",
    description: "4MP WiFi Bullet Camera, 50M IR + 15M White Light",
  },
  {
    code: "38TC-H322A",
    title: "Tiandy 2MP WiFi Astro PT",
    description: "2MP PT Camera, 15M IR + 10M White Light",
  },
  {
    code: "38TC-H322N 9DA-4",
    title: "Tiandy 2MP WiFi Home PT",
    description: "2MP Home PT Camera, 15M IR + 10M White Light",
  },
  {
    code: "38TC-H342A",
    title: "Tiandy 4MP WiFi Astro PT",
    description: "4MP PT Camera, 15M IR + 10M White Light",
  },
  {
    code: "38TC-H342N 9DA-4",
    title: "Tiandy 4MP WiFi Home PT",
    description: "4MP Home PT Camera, 15M IR + 10M White Light",
  },
];

export default function WifiProducts() {
  return (
    <main className="wifi-wrapper">
      <Navbar />

      <section className="wifi-section">
        <h1>WiFi CCTV</h1>

        <p className="wifi-subtitle">
          Browse our range of WiFi CCTV cameras and wireless surveillance
          solutions.
        </p>

        <div className="wifi-controls">
          <input
            type="text"
            placeholder="Search WiFi CCTV Products..."
            className="wifi-search"
            disabled
          />

          <select
            className="wifi-filter"
            disabled
          >
            <option>All WiFi Products</option>
          </select>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div
              key={product.code}
              className="product-card"
            >
              <h2>{product.title}</h2>

              <p className="product-code">
                {product.code}
              </p>

              <p className="product-description">
                {product.description}
              </p>

              <button className="product-btn">
                View Product
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}