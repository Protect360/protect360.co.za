export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Protect 360 (Pty) Ltd. All rights reserved.
        </p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a>
        </nav>
      </div>
    </footer>
  );
}
