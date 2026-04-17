import "./globals.css";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Protect 360 (Pty) Ltd",
  description: "Protection built with precision, reliability, and trust.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}