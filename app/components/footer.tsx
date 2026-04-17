export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Protect 360 (Pty) Ltd. All rights reserved.</p>
        <p>
          79 Voortrekker Road, Nigel 1490 | Email: info@protect360.co.za | Phone: +27 79 183 6591
        </p>
        <p className="footer-links">
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
}
