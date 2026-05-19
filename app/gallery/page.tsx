"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Gallery.css";

export default function Gallery() {
  return (
    <main className="gallery-wrapper">
      <Navbar />

      {/* ✅ Gallery Section */}
      <section className="gallery-section">
        <h1>Project Gallery</h1>
        <p className="gallery-subtitle">
          Showcasing our completed installations and company progress.
        </p>

        {/* ✅ Placeholder grid */}
        <div className="gallery-grid">
          <div className="gallery-item placeholder">Image 1</div>
          <div className="gallery-item placeholder">Image 2</div>
          <div className="gallery-item placeholder">Image 3</div>
          <div className="gallery-item placeholder">Image 4</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
