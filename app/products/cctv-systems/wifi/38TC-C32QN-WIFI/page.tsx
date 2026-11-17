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
              src="/products/cctv/wifi/38TC-C34QN-WIFI.jpg"
              alt="Tiandy 4MP WiFi Bullet"
              width={600}
              height={600}
              className="product-image"
              priority
            />
          </div>

          <div className="product-details-side">

            <h1>Tiandy 4MP WiFi Bullet</h1>

            <p className="product-code">
              Product Code: 38TC-C34QN-WIFI
            </p>

            <div className="product-section-block">
              <h2>Overview</h2>

              <p>
                The Tiandy 4MP WiFi Bullet Camera is designed for
                residential and commercial surveillance applications,
                delivering high-resolution video, wireless connectivity
                and reliable day and night performance.
              </p>
            </div>

            <div className="product-section-block">
              <h2>Key Features</h2>

              <ul>
                <li>4MP Resolution (2560 × 1440)</li>
                <li>WiFi Connectivity</li>
                <li>Built-in Microphone</li>
                <li>Built-in Speaker</li>
                <li>Supports microSD Storage up to 512GB</li>
                <li>Up to 50m Infrared Night Vision</li>
                <li>IP67 Weatherproof Protection</li>
                <li>2.8mm Fixed Lens</li>
                <li>H.265 / H.264 Video Compression</li>
                <li>Mobile Viewing Support</li>
              </ul>
            </div>

            <div className="product-section-block">
              <h2>Downloads</h2>

              <a
                href="/datasheets/cctv/wifi/38TC-C34QN-WIFI.pdf"
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