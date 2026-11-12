"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import "./Category.css";

const products = [
  {
    code: "38TC-C32QN-WIFI",
    name: "Tiandy 2MP WiFi Bullet",
    image: "/products/cctv/wifi/38TC-C32QN-WIFI.jpg",
  },
  {
    code: "38TC-C34QN-WIFI",
    name: "Tiandy 4MP WiFi Bullet",
    image: "/products/cctv/wifi/38TC-C34QN-WIFI.jpg",
  },
  {
    code: "38TC-H322A",
    name: "Tiandy 2MP WiFi Astro PT",
    image: "/products/cctv/wifi/38TC-H322A.jpg",
  },
  {
    code: "38TC-H322N 9DA-4",
    name: "Tiandy 2MP WiFi Home PT",
    image: "/products/cctv/wifi/38TC-H322N 9DA-4.jpg",
  },
  {
    code: "38TC-H342A",
    name: "Tiandy 4MP WiFi Astro PT",
    image: "/products/cctv/wifi/38TC-H342A.jpg",
  },
  {
    code: "38TC-H342N 9DA-4",
    name: "Tiandy 4MP WiFi Home PT",
    image: "/products/cctv/wifi/38TC-H342N 9DA-4.jpg",
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
              <div className="product-image-container">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="product-image"
                />
              </div>

              <div className="product-info">
                <h2>{product.name}</h2>

                <p className="product-code">
                  {product.code}
                </p>
              </div>

              <div className="product-actions">
                <button className="quote-btn">
                  Request Quote
                </button>

                <button className="details-btn">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}