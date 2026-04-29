"use client";
import Link from "next/link";
import Image from "next/image";
import "./Legal.css";

export default function TermsAndConditions() {
  return (
    <main>
      <div className="legal-wrapper">
        <div className="legal-document">
          <Link href="/" title="Back to Home">
            <Image src="/logo-logo.png" alt="Protect 360 Logo" className="back-icon" width={40} height={40} />
          </Link>

          <header className="legal-header">
            <h1>Terms & Conditions</h1>
            <p>Protect 360 (Pty) Ltd</p>
            <p className="legal-date">Effective Date: April 2026</p>
          </header>

          <section className="legal-body">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using our website, you agree to comply with these Terms & Conditions.
            </p>

            <h2>2. Use of Services</h2>
            <p>
              Our services are provided for lawful purposes only. You agree not to misuse or attempt to compromise system integrity.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content, trademarks, and materials on this site are the property of Protect 360 (Pty) Ltd and may not be reproduced without permission.
            </p>

            <h2>4. Limitation of Liability</h2>
            <p>
              Protect 360 (Pty) Ltd shall not be liable for any indirect or consequential damages arising from the use of our website or services.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              For questions regarding these terms, contact us at <a className="link">info@protect360.co.za</a>.
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
