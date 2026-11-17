"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import "./Category.css";

const brands = [
  {
    name: "Tiandy",
    slug: "tiandy",
    image: "/brands/tiandy.png",
  },
  {
    name: "Hikvision",
    slug: "hikvision",
    image: "/brands/hikvision.png",
  },
  {
    name: "HiLook",
    slug: "hilook",
    image: "/brands/hilook.png",
  },
  {
    name: "Dahua",
    slug: "dahua",
    image: "/brands/dahua.png",
  },
];

export default function NetworkProducts() {
  return (
    <main className="network-wrapper">
      <Navbar />

      <section className="network-section">

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

          <span>Network</span>
        </div>

        <h1>Network CCTV</h1>

        <div className="brands-grid">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/products/cctv-systems/network/${brand.slug}`}
              className="brand-card"
            >
              <div className="brand-image-container">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={300}
                  height={120}
                  className="brand-image"
                />
              </div>
            </Link>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}