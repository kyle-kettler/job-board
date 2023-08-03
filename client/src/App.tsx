import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import JobDetails from './pages/JobDetails';
import Jobs from './pages/Jobs';
import AuthPage from './pages/AuthPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Jobs />} />
          <Route path="jobs/:jobId" element={<JobDetails />} />
          <Route path="/sign-in" element={<AuthPage action="sign-in" />} />
          <Route path="/sign-up" element={<AuthPage action="sign-up" />} />
        </Route>
      </Routes>
    </div>
  );
}
