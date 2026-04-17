export default function Contact() {
  return (
    <main className="container">
      <h1 style={{ fontSize: '2rem', color: '#06b6d4', marginBottom: '1rem' }}>Contact Us</h1>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input type="text" placeholder="Your Name" className="card" />
        <input type="email" placeholder="Your Email" className="card" />
        <textarea placeholder="Message" className="card"></textarea>
        <button type="submit" className="button">Send</button>
      </form>
    </main>
  )
}