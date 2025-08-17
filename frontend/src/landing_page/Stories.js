import React, { useState, useEffect } from 'react';

function Stories() {
  const [stories, setStories] = useState([]); 
  const [formData, setFormData] = useState({
    name: '',
    district: '',
    practice: 'AWD',
    summary: ''
  });
  const [status, setStatus] = useState('');

  // Fetch stories from backend
  useEffect(() => {
    fetch('/api/stories')
      .then(res => res.json())
      .then(data => setStories(data))
      .catch(() => setStatus('⚠️ Failed to load stories.'));
  }, []);

  // handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.summary) {
      setStatus('⚠️ Please fill all required fields.');
      return;
    }

    try {
      const res = await fetch('/api/stories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const newStory = await res.json();
        setStories([...stories, newStory]); // update UI
        setStatus('✅ Story submitted successfully!');
        setFormData({ name: '', district: '', practice: 'AWD', summary: '' });
      } else {
        setStatus('❌ Failed to submit story.');
      }
    } catch {
      setStatus('❌ Server error. Try again.');
    }
  };

  return (
    <main className="container">
      <h2>Real farmers. Real results.</h2>

      {/* Stories list */}
      <div id="stories-list" className="grid cols-3 mt16">
        {stories.length === 0 && (
          <p className="helper">No stories yet. Be the first to share!</p>
        )}
        {stories.map((story, index) => (
          <div key={index} className="card">
            <h4>{story.name}</h4>
            {story.district && <p><strong>District:</strong> {story.district}</p>}
            <p><strong>Practice:</strong> {story.practice}</p>
            <p>{story.summary}</p>
          </div>
        ))}
      </div>

      {/* Story form */}
      <h3 className="mt24">Share your story</h3>
      <form id="story-form" className="card mt16" onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={formData.name} onChange={handleChange} required />

        <label>District</label>
        <input name="district" value={formData.district} onChange={handleChange} />

        <label>Practice</label>
        <select name="practice" value={formData.practice} onChange={handleChange}>
          <option>AWD</option>
          <option>DSR</option>
          <option>Straw recycling</option>
        </select>

        <label>Summary</label>
        <textarea name="summary" rows="4" value={formData.summary} onChange={handleChange} required />

        <button className="btn" type="submit">Submit story</button>
        <div id="story-status" className="helper mt8">{status}</div>
      </form>
    </main>
  );
}

export default Stories;
