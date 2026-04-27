"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";

export default function ContactUs() {
  function handleContactMethodChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selected = e.target.value;
    const label = document.getElementById("contactDetailLabel");
    const input = document.getElementById("contactDetail") as HTMLInputElement;

    if (label && input) {
      if (selected === "email") {
        label.textContent = "Email Address";
        input.type = "email";
        input.placeholder = "Your Email Address";
      } else if (selected === "whatsapp") {
        label.textContent = "WhatsApp Number";
        input.type = "tel";
        input.placeholder = "Your WhatsApp Number";
      } else if (selected === "phone") {
        label.textContent = "Phone Number";
        input.type = "tel";
        input.placeholder = "Your Phone Number";
      } else {
        label.textContent = "Contact Info";
        input.type = "text";
        input.placeholder = "Select Method";
      }
    }
  }

  useEffect(() => {
    const form = document.getElementById("contactForm") as HTMLFormElement;
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement;

    const checkFields = () => {
      const inputs = form.querySelectorAll("input[required], select[required], textarea[required]");
      const allFilled = Array.from(inputs).every(
        (el) => (el as HTMLInputElement).value.trim() !== ""
      );
      submitBtn.disabled = !allFilled;
    };

    form.addEventListener("input", checkFields);
    return () => form.removeEventListener("input", checkFields);
  }, []);

  return (
    <main>
      <Navbar />
      <div className="contact-wrapper">
        <div className="contact-grid">
          <div className="contact-block contact-info-block">
            <h4>Business Hours</h4>
            <div className="hours-grid">
              <div className="day">Monday:</div><div className="time">07:30 - 16:30</div>
              <div className="day">Tuesday:</div><div className="time">07:30 - 16:30</div>
              <div className="day">Wednesday:</div><div className="time">07:30 - 16:30</div>
              <div className="day">Thursday:</div><div className="time">07:30 - 16:30</div>
              <div className="day">Friday:</div><div className="time">08:00 - 15:00</div>
              <div className="day">Saturday:</div><div className="time">08:30 - 13:00</div>
              <div className="day">Sunday:</div><div className="time">Closed</div>
            </div>
            <p className="availability">
              We are available 24/7 for technical support and urgent security system assistance.
            </p>

            <h4>Phone / WhatsApp</h4>
            <p>
              <a href="tel:+27791836591" className="link">079 183 6591</a>
            </p>

            <h4>Email</h4>
            <p>
              <a href="mailto:info@protect360.co.za" className="link">info@protect360.co.za</a>
            </p>

            <h4>Business Address</h4>
            <p>
              <a
                href="https://www.google.com/maps?q=79+Voortrekker+Road+Nigel+Gauteng+South+Africa"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                79 Voortrekker Road, Nigel, 1490, Gauteng, South Africa
              </a>
            </p>

            <h4>Social Links</h4>
            <div className="social-icons">
              <a
                href="https://wa.me/27791836591"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                title="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="https://facebook.com/protect360sa"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                title="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://instagram.com/protect360sa"
                target="_blank"
                rel="noopener noreferrer"
                className="icon"
                title="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>

            <div className="map-container">
              <iframe
                title="Protect 360 Location"
                src="https://www.google.com/maps?q=79+Voortrekker+Road+Nigel+Gauteng+South+Africa&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="contact-block contact-form-block">
            <form className="contact-form" id="contactForm">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your Name" required />

              <label htmlFor="surname">Surname</label>
              <input id="surname" type="text" placeholder="Your Surname" required />

              <label htmlFor="contactMethod">Preferred Contact Method</label>
              <select id="contactMethod" required onChange={(e) => handleContactMethodChange(e)}>
                <option value="">Select</option>
                <option value="email">Email</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="phone">Phone</option>
              </select>

              <label htmlFor="contactDetail" id="contactDetailLabel">Contact Info</label>
              <input id="contactDetail" type="text" placeholder="Select Method" required />

              <label htmlFor="service">Service Selection</label>
              <select id="service" required>
                <option value="">Select</option>
                <option value="Alarm Systems">Alarm Systems</option>
                <option value="CCTV Systems">CCTV Systems</option>
                <option value="Electric Fencing">Electric Fencing</option>
                <option value="Gate & Door Automation">Gate & Door Automation</option>
                <option value="Access Control">Access Control</option>
                <option value="Intercom Systems">Intercom Systems</option>
                <option value="Installation & Integration">Installation & Integration</option>
                <option value="Assessments & Quotes">Assessments & Quotes</option>
                <option value="Maintenance & Repairs">Maintenance & Repairs</option>
                <option value="Add-Ons & Upgrades">Add-Ons & Upgrades</option>
                <option value="Fault-Finding & Troubleshooting">Fault-Finding & Troubleshooting</option>
                <option value="24/7 Support">24/7 Support</option>
                <option value="Other">Other</option>
              </select>

              <label htmlFor="query">Query</label>
              <textarea id="query" rows={5} placeholder="Provide details about your request" required />

              <button type="submit" id="submitBtn" disabled>Submit</button>

              <div className="optional-address">
                <div className="address-row">
                  <label htmlFor="street">Street (Optional)</label>
                  <input id="street" type="text" placeholder="e.g. 79 Voortrekker Road" />
                </div>
                <div className="address-row">
                  <label htmlFor="town">Town / City (Optional)</label>
                  <input id="town" type="text" placeholder="e.g. Nigel" />
                </div>
                <div className="address-row">
                  <label htmlFor="postal">Postal Code (Optional)</label>
                  <input id="postal" type="text" placeholder="e.g. 1490" />
                </div>
                <div className="address-row">
                  <label htmlFor="province">Province (Optional)</label>
                  <input id="province" type="text" placeholder="e.g. Gauteng" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
