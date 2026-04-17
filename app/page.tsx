export default function Home() {
  return (
    <main className="container">
      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '3rem', color: '#06b6d4', marginBottom: '1rem' }}>Protect360</h1>
        <p style={{ color: '#94a3b8', marginBottom: '2rem' }}>
          Modern security solutions for your world
        </p>
        <a href="/features" className="button">Learn More</a>
      </section>

      {/* Cards */}
      <section style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        <div className="card">
          <h2>Smart Security</h2>
          <p>AI-powered monitoring solutions.</p>
        </div>
        <div className="card">
          <h2>24/7 Support</h2>
          <p>Always here to protect you.</p>
        </div>
        <div className="card">
          <h2>Trusted Experts</h2>
          <p>Professional guidance and installation.</p>
        </div>
      </section>
    </main>
  )
}