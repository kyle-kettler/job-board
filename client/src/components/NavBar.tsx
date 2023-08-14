import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Logo from './Logo';
import AppContext from './AppContext';

export default function NavBar() {
  const { user, handleSignOut } = useContext(AppContext);
  return (
    <div className="2xl:container mx-auto relative">
      <nav className="px-4 md:px-8 py-4 absolute w-full font-satoshi">
        <div className="flex content-center justify-between">
          <div>
            <Link to="/">
              <Logo width="160" height="30" />
            </Link>
          </div>
          {!user && (
            <div className="flex items-center gap-4">
              <Link to="/jobs">Explore Jobs</Link>
              <Link to="/sign-in">
                <button className="text-base  px-3 border-[1.5px] border-stone-700 rounded hover:bg-stone-300 transition-colors">
                  Log In
                </button>
              </Link>
              <Link to="/sign-up">
                <button className="px-3 bg-orange-500 border-[1.5px] border-orange-500 hover:border-orange-600 hover:bg-orange-600 text-white rounded transition-colors text-base">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
          {user && (
            <div className="flex items-center gap-4">
              <Link to="/jobs">Explore Jobs</Link>
              <Link to="/applications">My Applications</Link>
              <Link to="/sign-in">
                <button
                  onClick={handleSignOut}
                  className="text-base  px-3 border-[1.5px] border-stone-700 rounded hover:bg-stone-300 transition-colors">
                  Sign Out
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
