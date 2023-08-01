import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <section className="w-full px-4 font-satoshi">
      <footer className="py-4 border-t">
        <div className="flex content-center justify-between">
          <div>
            <Link to="/">
              <Logo width="160" height="30" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <p>&copy; {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
