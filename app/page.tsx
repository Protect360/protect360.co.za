export default function HomePage() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero bg-gradient animate-fade-in">
        <div className="hero-content">
          <h1 className="hero-heading animate-slide-up">
            Protection built with precision, reliability, and trust
          </h1>
          <p className="hero-subheading">
            Your first choice for uncompromising security solutions
          </p>
          <div className="hero-buttons">
            <a href="https://wa.me/27791836591" className="btn btn-primary hover-bounce">
              WhatsApp Us
            </a>
            <a href="/services" className="btn btn-secondary hover-bounce">
              Browse Services
            </a>
            <a href="/products" className="btn btn-secondary hover-bounce">
              Browse Products
            </a>
          </div>
        </div>
      </section>

      {/* Quick Highlights Section */}
      <section className="highlights animate-staggered">
        <h2>Security at Every Layer</h2>
        <ul className="highlights-list">
          <li>Alarm Systems</li>
          <li>Electric Fencing</li>
          <li>CCTV Systems</li>
          <li>Gate & Door Automation</li>
          <li>Access Control</li>
          <li>Intercom Systems</li>
          <li>Installation</li>
          <li>Assessments & Quotes</li>
          <li>Maintenance & Repairs</li>
          <li>Add-Ons & Upgrades</li>
          <li>Fault-Finding & Troubleshooting</li>
        </ul>
      </section>

      {/* Service Area Section */}
      <section className="service-area">
        <p>
          Serving Nigel and surrounding Gauteng areas. Larger projects considered nationwide.
        </p>
        <div className="map animate-pulse">
          {/* Map embed or placeholder */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta bg-gradient animate-fade-in">
        <h2>Ready to secure what matters most?</h2>
        <div className="cta-buttons">
          <a href="https://wa.me/27791836591" className="btn btn-primary hover-bounce">
            WhatsApp
          </a>
          <a href="tel:+27791836591" className="btn btn-secondary hover-bounce">
            Call Us
          </a>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="brands">
        <h2>Trusted Brands</h2>
        <p>Official Brands We Work With</p>
        <div className="brand-logos">
          {/* Replace with actual logo images */}
          <img src="/logos/dsc.png" alt="DSC" />
          <img src="/logos/texecom.png" alt="Texecom" />
          <img src="/logos/paradox.png" alt="Paradox" />
          <img src="/logos/ids.png" alt="IDS" />
          <img src="/logos/hikvision.png" alt="Hikvision" />
          <img src="/logos/dahua.png" alt="Dahua" />
          <img src="/logos/hilook.png" alt="HiLook" />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <p>We are building our public testimonial base. Be the first to share your experience.</p>
        {/* Placeholder for testimonials */}
        <div className="testimonial-placeholder">
          <p>Recent customer feedback will appear here.</p>
        </div>
      </section>
    </main>
  );
}