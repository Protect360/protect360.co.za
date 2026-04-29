"use client";
import "../Legal.css";

export default function CopyrightNotice() {
  return (
    <main>
      <div className="legal-wrapper">
        <div className="legal-document">
          <a href="/" title="Back to Home">
            <img src="/logo-logo.png" alt="Protect 360 Logo" className="back-icon" />
          </a>

          <header className="legal-header">
            <h1>Copyright Notice</h1>
            <p>Protect 360 (Pty) Ltd</p>
            <p className="legal-date">Effective Date: April 2026</p>
          </header>

          <section className="legal-body">
            <h2>1. Ownership of Content</h2>
            <p>
              All content, graphics, and materials on this website are the property of Protect 360 (Pty) Ltd unless otherwise stated.
            </p>

            <h2>2. Usage Rights</h2>
            <p>
              No part of this website may be reproduced, distributed, or transmitted without prior written permission from Protect 360 (Pty) Ltd.
            </p>

            <h2>3. Trademarks</h2>
            <p>
              All trademarks, logos, and service marks displayed are registered and owned by Protect 360 (Pty) Ltd or its affiliates.
            </p>

            <h2>4. Reporting Infringement</h2>
            <p>
              If you believe any content infringes your copyright, please contact us at <a className="link">info@protect360.co.za</a> with full details.
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
