import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Services.css";

export default function Services() {
  return (
    <main>
      <Navbar />
      <div className="services-wrapper">
        <div className="services-container">
          <h2>SECURITY SYSTEMS</h2>
          <h3>Comprehensive Security Solutions</h3>
          <div className="services-grid">
            <div className="service-box">
              <h4>Alarm Systems</h4>
              <p>Advanced intrusion detection, fire alarms, and environmental monitoring to protect your property and loved ones.</p>
            </div>
            <div className="service-box">
              <h4>CCTV Systems</h4>
              <p>High‑definition surveillance cameras with remote access and intelligent analytics for comprehensive monitoring.</p>
            </div>
            <div className="service-box">
              <h4>Electric Fencing</h4>
              <p>Strong perimeter defense that deters threats and reinforces property boundaries.</p>
            </div>
            <div className="service-box">
              <h4>Gate & Door Automation</h4>
              <p>Secure and convenient entry solutions for residential and commercial properties.</p>
            </div>
            <div className="service-box">
              <h4>Access Control</h4>
              <p>Comprehensive access management systems for enhanced security, monitoring, and control.</p>
            </div>
            <div className="service-box">
              <h4>Intercom Systems</h4>
              <p>Clear communication between entry points and occupants for tighter visitor control.</p>
            </div>
          </div>
        </div>
        <div className="services-container">
          <h2>OUR EXPERTISE BEYOND PRODUCTS</h2>
          <h3>Specialized Service Excellence</h3>
          <div className="services-grid">
            <div className="service-box">
              <h4>Installation & Integration</h4>
              <p>Professional installation and seamless integration of security systems for optimal performance.</p>
            </div>
            <div className="service-box">
              <h4>Assessments & Quotes</h4>
              <p>Comprehensive security assessments and personalized quotes to meet your specific needs and budget.</p>
            </div>
            <div className="service-box">
              <h4>Maintenance & Repairs</h4>
              <p>Regular maintenance and prompt repairs to ensure your security systems operate at peak performance.</p>
            </div>
            <div className="service-box">
              <h4>Add‑Ons & Upgrades</h4>
              <p>Enhance your security with add‑ons and upgrades for improved functionality and protection.</p>
            </div>
            <div className="service-box">
              <h4>Fault‑Finding & Troubleshooting</h4>
              <p>Expert diagnosis and resolution of security system issues to minimize downtime and ensure optimal performance.</p>
            </div>
            <div className="service-box">
              <h4>24/7 Support</h4>
              <p>Support for any security system emergencies or inquiries, ensuring your safety and peace of mind.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
