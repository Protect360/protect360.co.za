"use client";
import "../Legal.css";

export default function PrivacyPolicy() {
  return (
    <main>
      <div className="legal-wrapper">
        <div className="legal-document">
          <a href="/" title="Back to Home">
            <img src="/logo-logo.png" alt="Protect 360 Logo" className="back-icon" />
          </a>

          <header className="legal-header">
            <h1>Privacy Policy</h1>
            <p>Protect 360 (Pty) Ltd</p>
            <p className="legal-date">Effective Date: April 2026</p>
          </header>

          <section className="legal-body">
            <h2>1. Information We Collect</h2>
            <p>
              We collect personal and technical information necessary to provide and improve our services.
            </p>

            <h2>2. Use of Information</h2>
            <p>
              Your information is used solely for service delivery, communication, and compliance with legal obligations.
            </p>

            <h2>3. Data Protection</h2>
            <p>
              We implement strict security measures to protect your data from unauthorized access or disclosure.
            </p>

            <h2>4. Contact Us</h2>
            <p>
              For privacy inquiries, contact us at <a className="link">info@protect360.co.za</a>.
            </p>
          </section>

          <footer className="legal-footer">
            <p>© 2026 Protect 360 (Pty) Ltd ‑ All Rights Reserved</p>
          </footer>

          <ul className="legal-links">
            <li><a href="/legal/privacy-policy">Privacy Policy</a></li>
            <li><a href="/legal/terms-and-conditions">Terms & Conditions</a></li>
            <li><a href="/legal/cookies-policy">Cookies Policy</a></li>
            <li><a href="/legal/disclaimer">Disclaimer</a></li>
            <li><a href="/legal/copyright-notice">Copyright Notice</a></li>
            <li><a href="/legal/accessibility-statement">Accessibility Statement</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
