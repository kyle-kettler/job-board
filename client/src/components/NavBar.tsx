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
              <Link to="/">Explore Jobs</Link>
            </li>
            <li>
              <Link to="/sign-in">
                <button className="text-base  px-3 border-[1.5px] border-stone-700 rounded hover:bg-stone-300 transition-colors">
                  Sign In
                </button>
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <button className="px-3 bg-orange-500 border-[1.5px] border-orange-500 hover:border-orange-600 hover:bg-orange-600 text-white rounded transition-colors text-base">
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
