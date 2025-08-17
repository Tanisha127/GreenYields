import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('✅ Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('❌ Failed to send message.');
      }
    } catch {
      setStatus('❌ Server error. Try again.');
    }
  };

  return (
    <main className="container">
      <h2>Contact Us</h2>
      <form id="contact-form" className="card mt16" onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />

        <label>Subject</label>
        <input name="subject" value={formData.subject} onChange={handleChange} />

        <label>Message</label>
        <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />

        <button className="btn" type="submit">Send</button>
        <div id="contact-status" className="helper mt8">{status}</div>
      </form>

      <section className="mt16">
        <h3>Support</h3>
        <p className="helper">
          Toll-free: 1800-XXX-XXXX · WhatsApp: +91-XXXXXXXXXX · Email: support@greenyields.org
        </p>
      </section>
    </main>
  );
}

export default Contact;
