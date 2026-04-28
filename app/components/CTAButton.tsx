"use client";

import Link from "next/link";
import "./CTAButton.css";

export default function CTAButton() {
  return (
    <Link href="/contact-us" className="cta-button">
      <span className="cta-large">Peace of Mind</span>
      <span className="cta-small">Contact Us</span>
    </Link>
  );
}
