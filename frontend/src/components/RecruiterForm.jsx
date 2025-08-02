import React, { useState } from 'react';

export default function RecruiterForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Posting...');

    try {
      const res = await fetch(import.meta.env.VITE_API_BASE_URL + '/post-job', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setStatus('Job posted successfully!');
        setFormData({ title: '', description: '', location: '' });
      } else {
        setStatus('Failed to post job.');
      }
    } catch (err) {
      setStatus('Error occurred while posting.');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Post a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="title"
          type="text"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          name="location"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit
        </button>
        {status && <p className="text-sm text-gray-700">{status}</p>}
      </form>
    </div>
  );
}
