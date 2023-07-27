import { Link, Outlet } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav>
        <div>
          <ul>
            <li>
              <Link to="/">Jobs</Link>
            </li>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
            <li>
              <Link to="/applied">Applied</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
