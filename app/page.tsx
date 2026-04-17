import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">Protect 360 (Pty) Ltd</h1>
          <p className="hero-subheading">
            Home & Business Security Systems — built with precision, reliability, and trust.
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/27791836591" className="btn btn-primary">
              Chat on WhatsApp
            </a>
            <a href="tel:+27791836591" className="btn btn-secondary">
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Our Core Services</h2>
        <ul className="service-list">
          <li>Alarm Systems</li>
          <li>Electric Fencing</li>
          <li>CCTV Systems</li>
          <li>Gate & Door Automation</li>
          <li>Access Control</li>
          <li>Intercom Systems</li>
          <li>Maintenance & Repairs</li>
          <li>Fault‑Finding & Troubleshooting</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Ready to secure what matters most?</h2>
        <p>Tell us about your requirements and we’ll reach out with a tailored solution.</p>

        <div className="contact-details">
          <div className="contact-info">
            <p><strong>Phone:</strong> +27 79 183 6591</p>
            <p><strong>Email:</strong> info@protect360.co.za</p>
            <p><strong>Address:</strong> 79 Voortrekker Road, Nigel, Gauteng, 1490</p>
            <p><strong>Operating Hours:</strong></p>
            <ul>
              <li>Mon – Thu: 07:30 – 17:00</li>
              <li>Fri: 08:00 – 15:00</li>
              <li>Sat: 08:30 – 13:00</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          <div className="contact-form">
            <form>
              <label>Name</label>
              <input type="text" placeholder="Your full name" />
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
              <label>Project details</label>
              <textarea placeholder="What type of security solution do you need?" />
              <button type="submit" className="btn btn-primary">Send Enquiry</button>
            </form>
          </div>
        </div>

        <div className="map fade-in">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.905679497489!2d28.468212417443848!3d-26.4265202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e94d96e6124e2bb%3A0xa898d04de78aae9a!2sProtect%20360%20(Pty)%20Ltd.!5e0!3m2!1sen!2sza!4v1776407686854!5m2!1sen!2sza"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="brands">
        <h2>Trusted Brands</h2>
        <p>Official Brands We Work With</p>
        <div className="brand-logos">
          <Image src="/brands/dsc.png" alt="DSC" width={100} height={100} />
          <Image src="/brands/texecom.png" alt="Texecom" width={100} height={100} />
          <Image src="/brands/paradox.png" alt="Paradox" width={100} height={100} />
          <Image src="/brands/ids.png" alt="IDS" width={100} height={100} />
          <Image src="/brands/hikvision.png" alt="Hikvision" width={100} height={100} />
          <Image src="/brands/dahua.png" alt="Dahua" width={100} height={100} />
          <Image src="/brands/hilook.png" alt="HiLook" width={100} height={100} />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Protect 360 (Pty) Ltd. All rights reserved.</p>
      </footer>
    </main>
  );
}
