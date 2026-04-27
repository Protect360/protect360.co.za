import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <main>
      <Navbar />
      <div className="contact-wrapper">
        <div className="contact-container">
          <h2>CONTACT US</h2>
          <h3>We’re here to help</h3>

          <div className="contact-grid">
            {/* Left side — business info */}
            <div className="contact-info">
              <h4>Address</h4>
              <p>Unit 12, Secure Park, Brakpan, Gauteng, South Africa</p>

              <h4>Phone / WhatsApp</h4>
              <p>+27 82 123 4567</p>

              <h4>Email</h4>
              <p>info@protect360.co.za</p>

              <h4>Business Hours</h4>
              <p>Mon – Fri 08:00 – 17:00</p>
              <p>Sat 09:00 – 13:00</p>
            </div>

            {/* Right side — contact form */}
            <form className="contact-form">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your Name" required />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Your Email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Your Message" required />

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
