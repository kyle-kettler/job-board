import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import AppContext from '../components/AppContext';

type AuthPageProps = {
  action: 'sign-in' | 'sign-up';
};

export default function AuthPage({ action }: AuthPageProps) {
  const navigate = useNavigate();
  const { user, handleSignIn } = useContext(AppContext);

  useEffect(() => {
    if (user) navigate('/jobs');
  }, [user, navigate]);

  return (
    <div className="font-satoshi w-full h-screen flex justify-center items-center">
      <AuthForm action={action} onSignIn={handleSignIn} />
    </div>
  );
}
