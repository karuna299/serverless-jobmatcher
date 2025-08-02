
import { useState, useEffect } from 'react';
import JobList from './JobList';
import { useNavigate } from 'react-router-dom';

function JobSeekerUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/feature');
  };

  return (
    <div className="space-y-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow p-6 rounded space-y-4"
      >
        <h2 className="text-xl font-semibold">Upload Your Resume</h2>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="block w-full border p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Upload
        </button>
      </form>

      <div>
        <h2 className="text-xl font-semibold mb-2">Available Jobs</h2>
        <JobList />
      </div>
    </div>
  );
}

export default JobSeekerUpload;
