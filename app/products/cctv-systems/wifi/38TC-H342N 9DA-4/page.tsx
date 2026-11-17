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
              src="/products/cctv/wifi/38TC-H342N 9DA-4.jpg"
              alt="Tiandy 4MP WiFi Home PT"
              width={600}
              height={600}
              className="product-image"
              priority
            />
          </div>

          <div className="product-details-side">

            <h1>Tiandy 4MP WiFi Home PT</h1>

            <p className="product-code">
              Product Code: 38TC-H342N 9DA-4
            </p>

            <div className="product-section-block">
              <h2>Overview</h2>

              <p>
                The Tiandy 4MP WiFi Home PT Camera combines high-resolution
                imaging, wireless connectivity, intelligent auto tracking
                and two-way audio in a compact indoor surveillance solution
                for home and small business environments.
              </p>
            </div>

            <div className="product-section-block">
              <h2>Key Features</h2>

              <ul>
                <li>4MP Resolution (2560 × 1440)</li>
                <li>WiFi Connectivity</li>
                <li>Pan & Tilt Camera</li>
                <li>Auto Tracking Support</li>
                <li>Built-in Microphone</li>
                <li>Built-in Speaker</li>
                <li>Supports microSD Storage up to 512GB</li>
                <li>Up to 20m Infrared Night Vision</li>
                <li>4mm Fixed Lens</li>
                <li>H.265 / H.264 Video Compression</li>
                <li>Mobile Viewing Support</li>
                <li>RJ45 Network Connection</li>
              </ul>
            </div>

            <div className="product-section-block">
              <h2>Downloads</h2>

              <a
                href="/datasheets/cctv/wifi/38TC-H342N 9DA-4.pdf"
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
