"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";
  const isReviews = pathname === "/reviews";
  const isGallery = pathname === "/gallery";

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link href="/">
          <Image
            src="/logos/logo.png"
            alt="Protect 360 Logo"
            width={140}
            height={70}
            priority
            className="navbar-logo"
          />
        </Link>
      </div>

      {/* Hamburger toggle for mobile */}
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        {/* Show only Home link on Reviews and Gallery pages */}
        {(isReviews || isGallery) && (
          <li>
            <Link href="/">Home</Link>
          </li>
        )}

        {/* Hide Home link when on homepage */}
        {!isHome && !isReviews && !isGallery && (
          <li>
            <Link href="/">Home</Link>
          </li>
        )}

        {/* Show all links on Home page */}
        {isHome && (
          <>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </>
        )}

        {/* Show all except Reviews and Gallery on other pages */}
        {!isHome && !isReviews && !isGallery && (
          <>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
