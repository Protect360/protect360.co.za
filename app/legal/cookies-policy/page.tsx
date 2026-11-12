"use client";
import Link from "next/link";
import Image from "next/image";
import "../Legal.css";

export default function CookiesPolicy() {
  return (
    <main>
      <div className="legal-wrapper">
        <div className="legal-document">
          <Link href="/" title="Back to Home">
            <Image src="/logo-logo.png" alt="Protect 360 Logo" className="back-icon" width={40} height={40} />
          </Link>

          <header className="legal-header">
            <h1>Cookies Policy</h1>
            <p>Protect 360 (Pty) Ltd</p>
            <p className="legal-date">Effective Date: April 2026</p>
          </header>

          <section className="legal-body">
            <h2>1. Use of Cookies</h2>
            <p>
              Our website uses cookies to enhance user experience and analyze site traffic.
            </p>

            <h2>2. Types of Cookies</h2>
            <p>
              We use essential, performance, and analytics cookies. You can manage cookie preferences through your browser settings.
            </p>

            <h2>3. Third‑Party Cookies</h2>
            <p>
              Some cookies may be set by third‑party services integrated into our site.
            </p>

            <h2>4. Consent</h2>
            <p>
              By continuing to use our website, you consent to our use of cookies as described in this policy.
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
