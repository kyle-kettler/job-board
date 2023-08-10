import { Link } from 'react-router-dom';

export default function NoUser() {
  return (
    <div className="flex justify-center bg-stone-300 rounded-lg p-12 text-center">
      {
        <Link
          to="/sign-up"
          className="mr-1 underline hover:text-stone-600 transition-colors">
          Create an account
        </Link>
      }
      or
      {
        <Link
          to="/sign-in"
          className="mx-1 underline hover:text-stone-600 transition-colors">
          login
        </Link>
      }{' '}
      to Apply.
    </div>
  );
}
