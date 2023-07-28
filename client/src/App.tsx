import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Jobs from './pages/Jobs';

export default function App() {
  const [serverData, setServerData] = useState('');

  useEffect(() => {
    async function readServerData() {
      const resp = await fetch('/api/hello');
      const data = await resp.json();

      console.log('Data from server:', data);

      setServerData(data.message);
    }

    readServerData();
  }, []);

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
