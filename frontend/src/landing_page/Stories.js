import React, { useState, useEffect } from "react";

const API = "https://greenyields.onrender.com"; // your backend base URL

function Stories() {
  const [stories, setStories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    district: "",
    practice: "AWD",
    summary: "",
  });
  const [status, setStatus] = useState("");

  // fetch stories on load
  useEffect(() => {
    fetch(`${API}/api/stories`)
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Error fetching stories:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const res = await fetch(`${API}/api/stories`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // ✅ refetch updated list instead of appending manually
        await fetch(`${API}/api/stories`)
          .then((res) => res.json())
          .then((data) => setStories(data));

        setStatus("✅ Story submitted successfully!");
        setFormData({ title: "", district: "", practice: "AWD", summary: "" });
      } else {
        const errData = await res.json();
        setStatus(`❌ Error: ${errData.error}`);
      }
    } catch (err) {
      console.error("Error submitting story:", err);
      setStatus("❌ Failed to submit story");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📖 Farmer Stories</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <div>
          <label>Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>District</label>
          <input
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Practice</label>
          <select
            name="practice"
            value={formData.practice}
            onChange={handleChange}
          >
            <option value="AWD">AWD</option>
            <option value="DSR">DSR</option>
            <option value="Straw Recycling">Straw Recycling</option>
          </select>
        </div>

        <div>
          <label>Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      <p>{status}</p>

      {/* Stories list */}
      <div>
        {stories.length === 0 ? (
          <p>No stories yet.</p>
        ) : (
          stories.map((story) => (
            <div
              key={story._id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{story.title}</h3>
              {story.district && (
                <p>
                  <strong>District:</strong> {story.district}
                </p>
              )}
              <p>
                <strong>Practice:</strong> {story.practice}
              </p>
              {story.summary && (
                <p>
                  <strong>Summary:</strong> {story.summary}
                </p>
              )}
              <small>
                <em>
                  {new Date(story.createdAt).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </em>
              </small>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Stories;
