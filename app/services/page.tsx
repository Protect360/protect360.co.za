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
            <span>Advanced intrusion detection, fire alarms, and environmental monitoring to protect your property and loved ones.</span>
          </div>
          <div className="service-box">
            <strong>CCTV Systems</strong>
            <span>High-definition surveillance cameras with remote access and intelligent analytics for comprehensive monitoring.</span>
          </div>
          <div className="service-box">
            <strong>Electric Fencing</strong>
            <span>Strong perimeter defense that deters threats and reinforces property boundaries.</span>
        </div>
          <div className="service-box">
            <strong>Gate & Door Automation</strong>
            <span>Secure and convenient entry solutions for residential and commercial properties.</span>
          </div>
          <div className="service-box">
            <strong>Access Control</strong>
            <span>Comprehensive access management systems for enhanced security, monitoring and control.</span>
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
            <strong>Installation & Integration</strong>
            <span>Professional installation and seamless integration of security systems for optimal performance.</span>
          </div>
          <div className="service-box">
            <strong>Assessments & Quotes</strong>
            <span>Comprehensive security assessments and personalized quotes to meet your specific needs and budget.</span>
          </div>
          <div className="service-box">
            <strong>Maintenance & Repairs</strong>
            <span>Regular maintenance and prompt repairs to ensure your security systems operate at peak performance.</span>
          </div>
          <div className="service-box">
            <strong>Add-Ons & Upgrades</strong>
            <span>Enhance your security with add-ons and upgrades for improved functionality and protection.</span>
          </div>
          <div className="service-box">
            <strong>Fault-Finding & Troubleshooting</strong>
            <span>Expert diagnosis and resolution of security system issues to minimize downtime and ensure optimal performance.</span>
          </div>
          <div className="service-box">
            <strong>24/7 Support</strong>
            <span>Round-the-clock support for any security system emergencies or inquiries, ensuring your safety and peace of mind.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
