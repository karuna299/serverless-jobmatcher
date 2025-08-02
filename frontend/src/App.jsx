import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecruiterForm from './components/RecruiterForm';
import JobList from './components/JobList';
import JobSeekerUpload from './components/JobSeekerUpload';
import FeatureInDevelopment from './pages/FeatureInDevelopment';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-blue-600 text-white px-4 py-3 flex gap-4">
          <Link to="/">Recruiter</Link>
          <Link to="/jobseeker">Job Seeker</Link>
        </nav>

        <div className="p-4">
          <Routes>
            <Route path="/" element={<RecruiterForm />} />
            <Route path="/jobseeker" element={<JobSeekerUpload />} />
            <Route path="/feature" element={<FeatureInDevelopment />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
