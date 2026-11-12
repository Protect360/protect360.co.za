import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Copyright © 2026 Protect 360 (Pty) Ltd - All rights reserved.</p>
      <p className="footer-links">
        <Link href="/legal/privacy-policy" className="footer-link">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/legal/terms-and-conditions" className="footer-link">Terms & Conditions</Link>
      </p>
    </footer>
  );
}
