import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Jobs from './pages/Jobs';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Jobs />} />
        </Route>
      </Routes>
    </div>
  );
}
