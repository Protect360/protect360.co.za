import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "Protect 360 (Pty) Ltd.",
  description: "Home & Business Security Systems",
  keywords: [
    "Protect 360 (Pty) Ltd.",
    "Alarm Systems",
    "Electric Fencing",
    "CCTV Systems",
    "Gate & Door Automation",
    "Access Control",
    "Intercom Systems",
    "Installation",
    "Assessments & Quotes",
    "Maintenance & Repairs",
    "Add‑Ons & Upgrades",
    "Fault‑Finding & Troubleshooting",
  ],
  authors: [{ name: "Protect 360 (Pty) Ltd." }],
  openGraph: {
    title: "Protect 360 (Pty) Ltd.",
    description: "Home & Business Security Systems",
    url: "https://protect360.co.za",
    siteName: "Protect 360 (Pty) Ltd.",
    locale: "en_ZA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo.png" type="image/png" />
      </head>
      <body>
        <div className="layout-container">
          <Navbar />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
