export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-section">
        <h2>Ready to secure what matters most?</h2>
        <p>Tell us about your requirements and we’ll reach out with a tailored solution.</p>

        {/* Buttons */}
        <div className="contact-buttons">
          <a href="https://wa.me/27791836591" className="btn btn-primary">WhatsApp</a>
          <a href="tel:+27791836591" className="btn btn-secondary">Phone</a>
        </div>

        <div className="contact-details">
          {/* Contact Info */}
          <div className="contact-info">
            <p><strong>Phone:</strong> +27 79 183 6591</p>
            <p><strong>Email:</strong> info@protect360.co.za</p>
            <p><strong>Address:</strong> 79 Voortrekker Road, Nigel, Gauteng, 1490</p>
            <p><strong>Operating Hours:</strong></p>
            <ul>
              <li>Mon – Thu: 07:30 – 17:00</li>
              <li>Fri: 08:00 – 15:00</li>
              <li>Sat: 08:30 – 13:00</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          {/* Inquiry Form */}
          <div className="contact-form">
            <form>
              <label>Name</label>
              <input type="text" placeholder="Your name" />

              <label>Surname</label>
              <input type="text" placeholder="Your surname" />

              <label>Preferred Contact Method</label>
              <select>
                <option value="whatsapp">WhatsApp</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>

              <label>Contact Detail</label>
              <input type="text" placeholder="Enter number or email" />

              <label>Tell us about your security needs</label>
              <textarea placeholder="How can we help secure your property?" />

              <button type="submit" className="btn btn-primary">Send Enquiry</button>
            </form>
          </div>
        </div>

        {/* Map */}
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
    </main>
  );
}
