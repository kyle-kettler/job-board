import { Link, Outlet } from 'react-router-dom';
import Logo from './Logo';

export default function NavBar() {
  return (
    <div>
      <nav className="container-xl px-4 py-4 absolute w-full font-satoshi">
        <div className="flex content-center justify-between">
          <div>
            <Link to="/">
              <Logo width="160" height="30" />
            </Link>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
            <li>
              <Link to="/applied">Applied</Link>
            </li>
            <li>
              <Link to="/sign-up">
                <button className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded transition-colors text-base">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
