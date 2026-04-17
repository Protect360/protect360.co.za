import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Protect 360 (Pty) Ltd",
  description:
    "Protect 360 (Pty) Ltd — Professional home and business security systems in Gauteng. Trusted brands, expert installation, and reliable maintenance.",
  keywords:
    "Protect 360, security systems, CCTV, alarm systems, electric fencing, gate automation, access control, intercoms, Gauteng security, Nigel security, Protect360",
  authors: [{ name: "Protect 360 (Pty) Ltd" }],
  openGraph: {
    title: "Protect 360 (Pty) Ltd",
    description:
      "Professional home and business security systems — built with precision, reliability, and trust.",
    url: "https://protect360.co.za",
    siteName: "Protect 360 (Pty) Ltd",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
