import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Protect360',
  description: 'Modern security solutions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: '#1e293b', padding: '1rem' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 style={{ color: '#06b6d4' }}>Protect360</h1>
            <nav>
              <Link href="/" style={{ marginRight: '1rem', color: '#fff' }}>Home</Link>
              <Link href="/features" style={{ marginRight: '1rem', color: '#fff' }}>Features</Link>
              <Link href="/contact" style={{ color: '#fff' }}>Contact</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer style={{ background: '#1e293b', padding: '1rem', textAlign: 'center', marginTop: '2rem' }}>
          <p style={{ color: '#94a3b8' }}>© {new Date().getFullYear()} Protect360. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
