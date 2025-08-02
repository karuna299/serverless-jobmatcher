import React, { useEffect, useState } from 'react';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(import.meta.env.VITE_API_BASE_URL + '/list-jobs')
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <p className="mt-4">Loading jobs...</p>;

  return (
    <div className="mt-4 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Job Listings</h2>
      {jobs.length === 0 ? (
        <p>No jobs available.</p>
      ) : (
        <ul className="space-y-2">
          {jobs.map((job, index) => (
            <li key={index} className="border p-2 rounded">
              <h3 className="font-bold">{job.title}</h3>
              <p className="text-sm">{job.description}</p>
              <p className="text-sm text-gray-600">📍 {job.location}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
