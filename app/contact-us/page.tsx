import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <main>
      <Navbar />
      <div className="contact-wrapper">
        <div className="contact-grid">
          <div className="contact-block contact-info-block">
            <h4>Business Hours</h4>
             <div className="hours-grid">
              <div className="day">Monday:</div><div className="time">07:30-16:30</div>
              <div className="day">Tuesday:</div><div className="time">07:30-16:30</div>
              <div className="day">Wednesday:</div><div className="time">07:30-16:30</div>
              <div className="day">Thursday:</div><div className="time">07:30-16:30</div>
              <div className="day">Friday:</div><div className="time">08:00-15:00</div>
              <div className="day">Saturday:</div><div className="time">08:30-13:00</div>
             <div className="day">Sunday:</div><div className="time">Closed</div>
            </div>
            <p className="availability">We are available 24/7 for technical support and urgent security system assistance.</p>

            <h4>Phone / WhatsApp</h4>
            <p>
             <a href="tel:+27791836591" className="link">079 183 6591</a>
            </p>

            <h4>Email</h4>
            <p>
             <a href="mailto:info@protect360.co.za" className="link">info@protect360.co.za</a>
            </p>

            <h4>Business Address</h4>
            <p>
             <a
              href="https://www.google.com/maps?q=79+Voortrekker+Road+Nigel+Gauteng+South+Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
             >
              79 Voortrekker Road, Nigel, 1490, Gauteng, South Africa
             </a>
            </p>
            <div className="map-container">
              <iframe
                title="Protect 360 Location"
                src="https://www.google.com/maps?q=79+Voortrekker+Road+Nigel+Gauteng+South+Africa&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="contact-block contact-form-block">
            <form className="contact-form">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your Name" required />

              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Your Email" required />

              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Subject" required />

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
