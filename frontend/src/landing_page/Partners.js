import React, { useState } from "react";

function Partners() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const API = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API}/api/partners`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus("✅ Request sent successfully!");
        setFormData({
          name: "",
          organization: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setStatus("❌ Failed to send request.");
      }
    } catch {
      setStatus("❌ Server error. Try again.");
    }
  };

  return (
    <main className="container">
      <h2>Partner with GreenYields</h2>
      <p className="helper mt8">
        We work with FPOs, NGOs, corporates, and government to scale low-methane
        rice practices.
      </p>

      <form id="partner-form" className="card mt16" onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Organisation</label>
        <input
          name="organization"
          value={formData.organization}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Phone</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button className="btn" type="submit">
          Send
        </button>
        <div id="partner-status" className="helper mt8">
          {status}
        </div>
      </form>
    </main>
  );
}

export default Partners;
