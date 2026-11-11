"use client";

import Image from "next/image";
import Link from "next/link";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CTAButton from "./components/CTAButton";
import ServicesCarousel from "./components/ServicesCarousel";
import BrandCarousel from "./components/BrandCarousel";

import "./home.css";

export default function Home() {
  return (
    <div className="home-wrapper">

      <Navbar />

      <main>

        <section className="hero">
          <div className="hero-box">
            <Image
              src="/logo-text.png"
              alt="Protect 360 Logo"
              width={1040}
              height={400}
            />

            <div className="cta-buttons">

              <Link
                href="https://wa.me/27791836591"
                className="cta-btn whatsapp"
              >
                WhatsApp
              </Link>

              <Link
                href="tel:+27791836591"
                className="cta-btn phone"
              >
                Phone
              </Link>

            </div>

            <p className="slogan">
              Your first choice for uncompromising security.
            </p>

          </div>
        </section>

        <ServicesCarousel />

        {/* Future Featured Products Section Goes Here */}

        <BrandCarousel />

        <div className="cta-wrapper">
          <CTAButton />
        </div>

      </main>

      <Footer />

    </div>
  );
}