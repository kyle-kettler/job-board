import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from './AppContext';
import Button from './Button';

type NavLinksProps = {
  size: string;
};

export default function NavLinks({ size }: NavLinksProps) {
  const { user, handleSignOut } = useContext(AppContext);

  if (size === 'lg') {
    if (user) {
      return (
        <div className="flex items-center gap-4">
          <Link to="/jobs">Explore Jobs</Link>
          <Link to="/applications">My Applications</Link>
          <Link to="/sign-in">
            <Button
              type="button"
              buttonStyle="secondary-sm"
              text="Sign Out"
              onClick={handleSignOut}
            />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="flex items-center gap-4">
          <Link to="/jobs">Explore Jobs</Link>
          <Link to="/sign-in">
            <Button type="button" buttonStyle="secondary-sm" text="Log In" />
          </Link>
          <Link to="/sign-up">
            <Button type="button" buttonStyle="primary-sm" text="Sign Up" />
          </Link>
        </div>
      );
    }
  }

  if (user) {
    return (
      <div className="flex flex-col items-end gap-4">
        <Link to="/jobs">Explore Jobs</Link>
        <Link to="/applications">My Applications</Link>
        <Link to="/sign-in">
          <Button
            type="button"
            buttonStyle="secondary-sm"
            text="Sign Out"
            onClick={handleSignOut}
          />
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-end gap-4">
        <Link to="/jobs">Explore Jobs</Link>
        <Link to="/sign-up">
          <Button type="button" buttonStyle="primary-sm" text="Sign Up" />
        </Link>
        <Link to="/sign-in">
          <Button type="button" buttonStyle="secondary-sm" text="Log In" />
        </Link>
      </div>
    );
  }
}
