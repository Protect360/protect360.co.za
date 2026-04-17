import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "Protect 360 (Pty) Ltd",
  description: "Professional home and business security systems — electric fencing, CCTV, alarms, and automation.",
  keywords: [
    "Protect 360",
    "security systems",
    "CCTV",
    "alarm systems",
    "electric fencing",
    "access control",
    "gate automation",
    "intercom systems",
  ],
  authors: [{ name: "Protect 360 (Pty) Ltd" }],
  openGraph: {
    title: "Protect 360 (Pty) Ltd",
    description: "Professional home and business security systems — built with reliability and precision.",
    url: "https://protect360.co.za",
    siteName: "Protect 360 (Pty) Ltd",
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
        {/* Navbar at top */}
        <Navbar />

        {/* Main content */}
        <main>{children}</main>

        {/* Footer at bottom */}
        <Footer />
      </body>
    </html>
  );
}
