"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Gallery.css";

export default function Gallery() {
  return (
    <main className="gallery-wrapper">
      <Navbar />

      <section className="gallery-section">
        <h1>Gallery</h1>

        <p className="gallery-subtitle">
          A collection of company photos, workmanship, installations,
          equipment, events and highlights from Protect 360.
        </p>

        <div className="gallery-coming-soon">
          <h2>Gallery Coming Soon</h2>

          <p>
            Images and company updates will appear here as new content
            is added through the Protect 360 administration portal.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
