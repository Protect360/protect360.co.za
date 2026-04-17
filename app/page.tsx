export default function HomePage() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          {/* Logo-style company name */}
          <h1 className="hero-heading two-tone">Protect 360 (Pty) Ltd</h1>
          <p className="hero-subheading">Home & Business Security Systems</p>
          <div className="hero-buttons">
            <a href="https://wa.me/27791836591" className="btn btn-primary">
              WhatsApp
            </a>
            <a href="tel:+27791836591" className="btn btn-secondary">
              Phone
            </a>
          </div>
        </div>
      </section>

      {/* Slogan */}
      <section className="slogan">
        <p>Your first choice for uncompromising security solutions.</p>
      </section>

      {/* Interactive Services */}
      <section className="interactive-services">
        <h2>Our Core Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <span className="glow-text">Alarm Systems</span>
            <div className="tooltip">Instant alerts for intrusion detection and rapid response through integrated monitoring.</div>
          </div>
          <div className="service-item">
            <span className="glow-text">Electric Fencing</span>
            <div className="tooltip">Strong perimeter defense that deters threats and reinforces property boundaries.</div>
          </div>
          <div className="service-item">
            <span className="glow-text">CCTV Systems</span>
            <div className="tooltip">24/7 high-definition monitoring with clear footage and remote viewing access.</div>
          </div>
          <div className="service-item">
            <span className="glow-text">Gate & Door Automation</span>
            <div className="tooltip">Secure and convenient entry solutions for residential and commercial properties.</div>
          </div>
          <div className="service-item">
            <span className="glow-text">Access Control</span>
            <div className="tooltip">Biometric and card-based systems to manage and track authorized entry points.</div>
          </div>
          <div className="service-item">
            <span className="glow-text">Intercom Systems</span>
            <div className="tooltip">Clear communication between entry points and occupants for tighter visitor control.</div>
          </div>
          <div className="service-item">
            <span className="glow-text">Installation</span>
            <div className="tooltip">Professional setup, testing, and optimization for flawless performance.</div>
          </div>
          <div className="service-item">
            <span className="glow-text">Assessments & Quotes</span>
            <div className="tooltip">On-site evaluations and transparent, tailored quotations before commitment.</div>
          </div>
          <div className="service-item">
            <span className="glow-text">Maintenance & Repairs</span>
            <div className="tooltip">Scheduled maintenance and responsive repairs to ensure system reliability.</div>
          </div>
          <div className="service-item">
            <span className="glow-text">Add-Ons & Upgrades</span>
            <div className="tooltip">Seamless expansion with additional cameras, access control, or fencing upgrades.</div>
          </div>
          <div className="service-item">
            <span className="glow-text">Fault-Finding & Troubleshooting</span>
            <div className="tooltip">Fast diagnostics and issue resolution to minimize downtime and restore security.</div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="brands">
        <h2>Official Brands We Work With</h2>
        <div className="brand-scroll">
          <img src="/brands/dsc.png" alt="DSC" />
          <img src="/brands/texecom.png" alt="Texecom" />
          <img src="/brands/paradox.png" alt="Paradox" />
          <img src="/brands/ids.png" alt="IDS" />
          <img src="/brands/hikvision.png" alt="Hikvision" />
          <img src="/brands/dahua.png" alt="Dahua" />
          <img src="/brands/hilook.png" alt="HiLook" />
          {/* Add more logos here */}
        </div>
      </section>
    </main>
  );
}
