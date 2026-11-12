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
          equipment, events and highlights from Protect 360 (PTY) Ltd.
        </p>

        <div className="gallery-coming-soon">
          <h2>Gallery Coming Soon</h2>

          <p>
            Images and updates will appear here when content is
            added by Protect 360 (PTY) Ltd administration.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}