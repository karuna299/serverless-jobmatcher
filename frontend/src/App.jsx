import React, { useState } from 'react';
import RecruiterForm from './components/RecruiterForm';
import JobList from './components/JobList';
import JobSeekerUpload from './components/JobSeekerUpload';

export default function App() {
  const [view, setView] = useState('recruiter');

  return (
    <div className="min-h-screen p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Job Matcher</h1>
        <div className="space-x-2">
          <button
            className={`px-4 py-2 rounded ${view === 'recruiter' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('recruiter')}
          >
            Recruiter
          </button>
          <button
            className={`px-4 py-2 rounded ${view === 'jobseeker' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('jobseeker')}
          >
            Job Seeker
          </button>
        </div>
      </header>

      {view === 'recruiter' && (
        <>
          <RecruiterForm />
          <hr className="my-4" />
          <JobList />
        </>
      )}

      {view === 'jobseeker' && <JobSeekerUpload />}
    </div>
  );
}
