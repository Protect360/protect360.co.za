export default function ServicesPage() {
  return (
    <main className="services-page">
      {/* Core Services */}
      <section className="services-block">
        <h2>CORE SERVICES</h2>
        <p>Security Systems We Install and Support</p>
        <div className="services-grid">
          <div className="service-box">
            <strong>Alarm Systems</strong>
            <span>Instant alerts for intrusion detection and rapid response through integrated monitoring.</span>
          </div>
          <div className="service-box">
            <strong>Electric Fencing</strong>
            <span>Strong perimeter defense that deters threats and reinforces property boundaries.</span>
          </div>
          <div className="service-box">
            <strong>CCTV Systems</strong>
            <span>24/7 high-definition monitoring with clear footage and remote viewing access.</span>
          </div>
          <div className="service-box">
            <strong>Gate & Door Automation</strong>
            <span>Secure and convenient entry solutions for residential and commercial properties.</span>
          </div>
          <div className="service-box">
            <strong>Access Control</strong>
            <span>Biometric and card-based systems to manage and track authorized entry points.</span>
          </div>
          <div className="service-box">
            <strong>Intercom Systems</strong>
            <span>Clear communication between entry points and occupants for tighter visitor control.</span>
          </div>
        </div>
      </section>

      {/* Complete Service Lifecycle */}
      <section className="services-block">
        <h2>OUR EXPERTISE BEYOND PRODUCTS</h2>
        <p>Complete Service Lifecycle</p>
        <div className="services-grid">
          <div className="service-box">
            <strong>Installation</strong>
            <span>Professional setup, testing, and optimization for flawless performance.</span>
          </div>
          <div className="service-box">
            <strong>Assessments & Quotes</strong>
            <span>On-site evaluations and transparent, tailored quotations before commitment.</span>
          </div>
          <div className="service-box">
            <strong>Maintenance & Repairs</strong>
            <span>Scheduled maintenance and responsive repairs to ensure system reliability.</span>
          </div>
          <div className="service-box">
            <strong>Add-Ons & Upgrades</strong>
            <span>Seamless expansion with additional cameras, access control, or fencing upgrades.</span>
          </div>
          <div className="service-box">
            <strong>Fault-Finding & Troubleshooting</strong>
            <span>Fast diagnostics and issue resolution to minimize downtime and restore security.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
