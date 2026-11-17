"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
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

          <span>WiFi</span>
        </div>

        <h1>WiFi CCTV</h1>

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
                <Link
                  href={`/products/cctv-systems/wifi/${product.code}`}
                  className="details-btn"
                >
                  Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}