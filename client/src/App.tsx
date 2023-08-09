import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppContext from './components/AppContext';
import NavBar from './components/NavBar';
import JobDetails from './pages/JobDetails';
import Jobs from './pages/Jobs';
import AuthPage from './pages/AuthPage';
import './App.css';
import { Auth, User } from './lib';
import Home from './pages/Home';
import MyApplications from './pages/MyApplications';

const tokenKey = 'designengineer';

export default function App() {
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();
  const [isAuthorizing, setIsAuthorizing] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem(tokenKey);
    if (auth) {
      const a = JSON.parse(auth);
      setUser(a.user);
      setToken(a.token);
    }
    setIsAuthorizing(false);
  }, []);

  if (isAuthorizing) return null;

  function handleSignIn(auth: Auth) {
    localStorage.setItem(tokenKey, JSON.stringify(auth));
    setUser(auth.user);
    setToken(auth.token);
  }

  function handleSignOut() {
    localStorage.removeItem(tokenKey);
    setUser(undefined);
    setToken(undefined);
  }

  const contextValue = { user, token, handleSignIn, handleSignOut };
  return (
    <AppContext.Provider value={contextValue}>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="jobs/:jobId" element={<JobDetails />} />
          <Route path="/sign-in" element={<AuthPage action="sign-in" />} />
          <Route path="/sign-up" element={<AuthPage action="sign-up" />} />
          <Route path="/applications" element={<MyApplications />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}
