"use client";
import Link from "next/link";
import Image from "next/image";
import "./Legal.css";

export default function Disclaimer() {
  return (
    <main>
      <div className="legal-wrapper">
        <div className="legal-document">
          <Link href="/" title="Back to Home">
            <Image src="/logo-logo.png" alt="Protect 360 Logo" className="back-icon" width={40} height={40} />
          </Link>

          <header className="legal-header">
            <h1>Disclaimer</h1>
            <p>Protect 360 (Pty) Ltd</p>
            <p className="legal-date">Effective Date: April 2026</p>
          </header>

          <section className="legal-body">
            <h2>1. General Information</h2>
            <p>
              The content on this website is provided for general informational purposes only and may change without notice.
            </p>

            <h2>2. No Guarantees</h2>
            <p>
              Protect 360 (Pty) Ltd makes no warranties regarding the accuracy, completeness, or reliability of any information on this site.
            </p>

            <h2>3. External Links</h2>
            <p>
              We are not responsible for the content or security of external websites linked from our site.
            </p>

            <h2>4. Liability Limitation</h2>
            <p>
              Protect 360 (Pty) Ltd shall not be held liable for any loss or damage resulting from reliance on website content.
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
