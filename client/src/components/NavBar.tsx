import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div>
      <nav className="px-4 md:px-8 py-4 absolute w-full font-satoshi">
        <div className="flex justify-between">
          <Link to="/">
            <Logo width="160" height="30" />
          </Link>
          <div className="hidden sm:block">
            <NavLinks size="lg" />
          </div>
          <div className="flex flex-col items-end sm:hidden relative">
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
            {isOpen && (
              <div className="p-4 bg-stone-100 shadow-md rounded-md mt-2">
                <NavLinks size="sm" />
              </div>
            )}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
