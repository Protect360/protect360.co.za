import Image from 'next/image';

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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.905679497489!2d28.468212417443848!3d-26.4265202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e94d96e6124e2bb%3A0xa898d04de78aae9a!2sProtect%20360%20(Pty)%20Ltd.!5e0!3m2!1sen!2sza!4v1776407686854!5m2!1sen!2sza"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
          <Image src="/brands/dsc.png" alt="DSC" width={100} height={100} />
          <Image src="/brands/texecom.png" alt="Texecom" width={100} height={100} />
          <Image src="/brands/paradox.png" alt="Paradox" width={100} height={100} />
          <Image src="/brands/ids.png" alt="IDS" width={100} height={100} />
          <Image src="/brands/hikvision.png" alt="Hikvision" width={100} height={100} />
          <Image src="/brands/dahua.png" alt="Dahua" width={100} height={100} />
          <Image src="/brands/hilook.png" alt="HiLook" width={100} height={100} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <p>We are building our public testimonial base. Be the first to share your experience.</p>
        <div className="testimonial-placeholder">
          <p>Recent customer feedback will appear here.</p>
        </div>
      </section>
    </main>
  );
}