import React, { useState } from 'react';

export default function JobSeekerUpload() {
  const [resumeFile, setResumeFile] = useState(null);
  const [matches, setMatches] = useState([]);
  const [status, setStatus] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!resumeFile) {
      setStatus('Please upload your resume.');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resumeFile);

    setStatus('Uploading and matching...');

    try {
      const res = await fetch(import.meta.env.VITE_API_BASE_URL + '/match-resume', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('Server error');
      const data = await res.json();

      setMatches(data.matches || []);
      setStatus('Matching complete.');
    } catch (err) {
      setStatus('Failed to upload or match.');
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Upload Resume</h2>
      <form onSubmit={handleUpload} className="space-y-3">
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          onChange={(e) => setResumeFile(e.target.files[0])}
          className="w-full"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Upload
        </button>
        {status && <p className="text-sm text-gray-700">{status}</p>}
      </form>

      {matches.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Matched Jobs:</h3>
          <ul className="list-disc ml-6">
            {matches.map((job, i) => (
              <li key={i}>{job.title} — {job.location}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
