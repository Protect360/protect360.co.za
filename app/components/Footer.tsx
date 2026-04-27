import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Copyright © 2026 Protect 360 (Pty) Ltd - All rights reserved.</p>
      <p className="footer-links">
        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        <span className="divider">|</span>
        <a href="/terms-and-conditions" className="footer-link">Terms & Conditions</a>
      </p>
    </footer>
  );
}
