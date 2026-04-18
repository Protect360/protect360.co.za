"use client";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="home-page">
      {/* ===== Hero Slogan ===== */}
      <section className="hero">
        <div className="slogan-box">
          <p>Your first choice for uncompromising security solutions.</p>
        </div>

        {/* ===== Hero Logo ===== */}
        <div className="hero-content">
          <Image
            src="/logos/logo text.png"
            alt="Protect 360 Logo"
            className="hero-logo"
          />

          {/* ===== Hero Buttons ===== */}
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

      {/* ===== Carousel Services ===== */}
      <section className="carousel-services">
        <div className="carousel-track">
          <div className="carousel-box">
            Alarm Systems
            <div className="carousel-description">
              Advanced intrusion detection, fire alarms, and environmental monitoring to protect your property and loved ones.
            </div>
          </div>
          <div className="carousel-box">
            CCTV Systems
            <div className="carousel-description">
              24/7 high-definition monitoring with clear footage and remote viewing access.
            </div>
          </div>
          <div className="carousel-box">
            Electric Fencing
            <div className="carousel-description">
             Strong perimeter defense that deters threats and reinforces property boundaries. 
            </div>
          </div>
          <div className="carousel-box">
            Gate & Door Automation
            <div className="carousel-description">
              Secure and convenient entry solutions for residential and commercial properties.
            </div>
          </div>
          <div className="carousel-box">
            Access Control
            <div className="carousel-description">
              Comprehensive access management systems for enhanced security, monitoring and control.
            </div>
          </div>
          <div className="carousel-box">
            Intercom Systems
            <div className="carousel-description">
              Clear communication between entry points and occupants for tighter visitor control.
            </div>
          </div>
          <div className="carousel-box">
            Installation & Integration
            <div className="carousel-description">
              Professional installation and seamless integration of security systems for optimal performance.
            </div>
          </div>
          <div className="carousel-box">
            Assessments & Quotes
            <div className="carousel-description">
              Comprehensive security assessments and personalized quotes to meet your specific needs and budget.
            </div>
          </div>
          <div className="carousel-box">
            Maintenance & Repairs
            <div className="carousel-description">
              Reliable maintenance and prompt repairs to ensure your security systems operate at peak performance.
            </div>
          </div>
          <div className="carousel-box">
            Add-Ons & Upgrades
            <div className="carousel-description">
              Enhance your security with add-ons and upgrades for improved functionality and protection.
            </div>
          </div>
          <div className="carousel-box">
            Fault-Finding & Troubleshooting
            <div className="carousel-description">
              Expert diagnosis and resolution of security system issues to minimize downtime and ensure optimal performance.
            </div>
          </div>
          <div className="carousel-box">
            24/7 Support
            <div className="carousel-description">
              Round-the-clock support for any security system emergencies or inquiries, ensuring your safety and peace of mind.
            </div>  
          </div>
        </div>      
      </section>

      {/* ===== Brands Section ===== */}
      <section className="brands">
        <h2>Official Brands We Work With</h2>
        <div className="brand-scroll">
          <Image src="/brands/dsc.png" alt="DSC" />
          <Image src="/brands/texecom.png" alt="Texecom" />
          <Image src="/brands/paradox.png" alt="Paradox" />
          <Image src="/brands/ids.png" alt="IDS" />
          <Image src="/brands/hikvision.png" alt="Hikvision" />
          <Image src="/brands/dahua.png" alt="Dahua" />
          <Image src="/brands/hilook.png" alt="HiLook" />
        </div>
      </section>
    </main>
  );
}
