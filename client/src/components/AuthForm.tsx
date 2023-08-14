import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Auth, signIn, signUp } from '../lib';
import Logo from './Logo';
import Button from './Button';

type AuthFormProps = {
  action: 'sign-up' | 'sign-in';
  onSignIn: (auth: Auth) => void;
};

export default function AuthForm({ action, onSignIn }: AuthFormProps) {
  const navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState<unknown>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    async function handleSignUp(username: string, password: string) {
      await signUp(username, password);
      navigate('/sign-in');
    }
    async function handleSignIn(username: string, password: string) {
      const auth = await signIn(username, password);
      if (auth.user && auth.token) {
        onSignIn(auth);
      }
    }
    event.preventDefault();
    if (event.target === null) throw new Error();
    const formData = new FormData(event.currentTarget);
    const entries = Object.fromEntries(formData.entries());
    const username = entries.username as string;
    const password = entries.password as string;
    try {
      if (action === 'sign-up') {
        handleSignUp(username, password);
        setPasswordInput('');
        setUsernameInput('');
      } else {
        handleSignIn(username, password);
        setPasswordInput('');
        setUsernameInput('');
      }
    } catch (err) {
      setError(err);
    }
  }

  const alternatePath = action === 'sign-up' ? '/sign-in' : '/sign-up';
  const alternateText = action === 'sign-up' ? 'Log In' : 'Sign Up';
  const currentText = action === 'sign-in' ? 'Log In' : 'Sign Up';
  const buttonText = action === 'sign-in' ? 'Log In' : 'Create Account';

  return (
    <div className="p-4 bg-stone-200 rounded-lg flex flex-col gap-4 shadow-md w-72">
      <div className="w-full flex justify-between mb-4">
        <Logo width="125" height="25" />
        <Link
          className="text-stone-500 hover:text-stone-700 transition-colors"
          to={alternatePath}>
          {alternateText}
        </Link>
      </div>
      <h1 className="text-2xl">{currentText}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-start">
        <div className="flex flex-col w-full gap-2">
          <label className="text-sm font-satoshi-md text-stone-600">
            Username
          </label>
          <input
            type="text"
            name="username"
            required
            className="rounded-sm p-1"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label className="text-sm font-satoshi-md text-stone-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            className="rounded-sm p-1"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
        </div>
        <Button type="submit" buttonStyle="primary" text={buttonText} />
        <>
          {error && (
            <div style={{ color: 'red' }}>
              <p>
                Error:{' '}
                {error instanceof Error ? error.message : 'Unknown Error'}
              </p>
            </div>
          )}
        </>
      </form>
    </div>
  );
}
