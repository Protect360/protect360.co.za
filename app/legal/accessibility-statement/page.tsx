"use client";
import Link from "next/link";
import Image from "next/image";
import "../Legal.css";

export default function AccessibilityStatement() {
  return (
    <main>
      <div className="legal-wrapper">
        <div className="legal-document">
          <Link href="/" title="Back to Home">
            <Image src="/logo-logo.png" alt="Protect 360 Logo" className="back-icon" width={40} height={40} />
          </Link>

          <header className="legal-header">
            <h1>Accessibility Statement</h1>
            <p>Protect 360 (Pty) Ltd</p>
            <p className="legal-date">Effective Date: April 2026</p>
          </header>

          <section className="legal-body">
            <h2>1. Our Commitment</h2>
            <p>
              Protect 360 (Pty) Ltd is committed to ensuring that our website and digital services are accessible to all users, including individuals with disabilities.
            </p>

            <h2>2. Accessibility Standards</h2>
            <p>
              We strive to comply with recognized accessibility guidelines such as the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA to provide an inclusive experience for all visitors.
            </p>

            <h2>3. Ongoing Improvements</h2>
            <p>
              We continuously review and update our website to improve accessibility and usability. Feedback from users helps us identify and resolve potential barriers.
            </p>

            <h2>4. Feedback and Support</h2>
            <p>
              If you encounter any accessibility issues or require assistance, please contact us at <a className="link">info@protect360.co.za</a> and we will respond promptly to address your concerns.
            </p>

            <h2>5. Third‑Party Content</h2>
            <p>
              While we aim to ensure accessibility across all areas of our site, some third‑party content or integrations may not fully meet accessibility standards. We encourage those providers to improve accessibility wherever possible.
            </p>
          </section>

          <footer className="legal-footer">
            <p>© 2026 Protect 360 (Pty) Ltd ‑ All Rights Reserved</p>
          </footer>

          <ul className="legal-links">
            <li><Link href="/legal/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/legal/terms-and-conditions">Terms & Conditions</Link></li>
            <li><Link href="/legal/cookies-policy">Cookies Policy</Link></li>
            <li><Link href="/legal/disclaimer">Disclaimer</Link></li>
            <li><Link href="/legal/copyright-notice">Copyright Notice</Link></li>
            <li><Link href="/legal/accessibility-statement">Accessibility Statement</Link></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
