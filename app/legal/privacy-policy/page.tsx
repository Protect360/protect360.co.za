"use client";

import "../Legal.css";

export default function PrivacyPolicy() {
  return (
    <main>
      <div className="legal-wrapper">
        <div className="legal-document">
          <header className="legal-header">
            <h1>Privacy Policy</h1>
            <p>Protect 360 (Pty) Ltd</p>
            <p className="legal-date">Effective Date: April 2026</p>
          </header>

          <section className="legal-body">
            <h2>1. Introduction</h2>
            <p>
              Protect 360 (Pty) Ltd values your privacy. This policy explains how we collect,
              use, and protect your personal information when you interact with our website,
              services, or communication channels.
            </p>

            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal details such as your name, contact information, and
              service preferences when you submit forms or contact us directly.
            </p>

            <h2>3. Use of Information</h2>
            <p>
              Your information is used solely to provide requested services, respond to
              inquiries, and improve our offerings. We do not sell or share your data with
              third parties except as required by law.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement industry‑standard security measures to protect your data from
              unauthorized access, alteration, or disclosure.
            </p>

            <h2>5. Contact Us</h2>
            <p>
              For any privacy‑related inquiries, please contact us at{" "}
              <a href="mailto:info@protect360.co.za" className="link">
                info@protect360.co.za
              </a>.
            </p>
          </section>

          <footer className="legal-footer">
            <p>© 2026 Protect 360 (Pty) Ltd — All Rights Reserved</p>
          </footer>
        </div>
      </div>
    </main>
  );
}
