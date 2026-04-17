"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Page checks
  const isHome = pathname === "/";
  const isProducts = pathname === "/products";
  const isServices = pathname === "/services";
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isReviews = pathname === "/reviews";
  const isGallery = pathname === "/gallery";

  return (
    <nav className="navbar">
      {/* Left section with logo */}
      <div className="navbar-left">
        <Link href="/">
          <Image
            src="/logos/logo.png"
            alt="Protect 360 Logo"
            width={60}
            height={60}
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

      {/* Navigation Links */}
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
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/reviews">Reviews</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </>
        )}

        {/* Show all except Reviews and Gallery on other pages */}
        {!isHome && !isReviews && !isGallery && (
          <>
            {!isProducts && <li><Link href="/products">Products</Link></li>}
            {!isServices && <li><Link href="/services">Services</Link></li>}
            {!isContact && <li><Link href="/contact">Contact</Link></li>}
            {!isAbout && <li><Link href="/about">About Us</Link></li>}
          </>
        )}
      </ul>
    </nav>
  );
}
