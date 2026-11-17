"use client";

import Navbar from "../../../../components/Navbar";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import "./Product.css";

export default function ProductPage() {
  return (
    <main className="product-wrapper">
      <Navbar />

      <section className="product-section">
        <div className="product-container">

          <div className="product-image-side">
            <Image
              src="/products/cctv/wifi/38TC-H322A.jpg"
              alt="Tiandy 2MP WiFi Astro PT"
              width={600}
              height={600}
              className="product-image"
              priority
            />
          </div>

          <div className="product-details-side">

            <h1>Tiandy 2MP WiFi Astro PT</h1>

            <p className="product-code">
              Product Code: 38TC-H322A
            </p>

            <div className="product-section-block">
              <h2>Overview</h2>

              <p>
                The Tiandy 2MP WiFi Astro PT Camera combines wireless
                connectivity, pan and tilt functionality and intelligent
                tracking features, making it ideal for indoor residential
                and small business surveillance applications.
              </p>
            </div>

            <div className="product-section-block">
              <h2>Key Features</h2>

              <ul>
                <li>2MP Resolution (1920 × 1080)</li>
                <li>WiFi Connectivity</li>
                <li>Pan & Tilt Camera</li>
                <li>Auto Tracking Support</li>
                <li>Built-in Microphone</li>
                <li>Built-in Speaker</li>
                <li>Supports microSD Storage up to 512GB</li>
                <li>Up to 15m Infrared Night Vision</li>
                <li>4mm Fixed Lens</li>
                <li>H.265 / H.264 Video Compression</li>
                <li>Mobile Viewing Support</li>
              </ul>
            </div>

            <div className="product-section-block">
              <h2>Downloads</h2>

              <a
                href="/datasheets/cctv/wifi/38TC-H322A.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="datasheet-link"
              >
                Download Datasheet
              </a>
            </div>

            <div className="product-actions">
              <button className="quote-btn">
                <span>Request Quote</span>
                <small>COMING SOON</small>
              </button>
            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}