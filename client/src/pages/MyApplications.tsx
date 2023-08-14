import { useState, useEffect, useContext } from 'react';
import { fetchApplications, JobApplication } from '../lib';
import AppContext from '../components/AppContext';
import { useNavigate } from 'react-router-dom';
import ApplicationList from '../components/ApplicationList';
import Footer from '../components/Footer';
import UserInfoStack from '../components/UserInfoStack';

export default function MyApplications() {
  const navigate = useNavigate();
  const { user } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<unknown>();
  const [jobApplication, setJobApplications] = useState<JobApplication[]>([]);

  useEffect(() => {
    async function loadApplicationsAndJobs(userId: number) {
      setIsLoading(true);
      try {
        const applicationsAndJobs = await fetchApplications(userId);
        setJobApplications(applicationsAndJobs);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (user && isLoading === undefined) loadApplicationsAndJobs(user.userId);
  }, [isLoading, user]);

  if (!user) navigate('/jobs');

  if (isLoading) {
    return (
      <section className="pt-24 bg-stone-300">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4 h-screen">
            <p>Loading your applications...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="pt-24 bg-stone-300">
        <div className="container mx-auto flex flex-col items-center gap-4 h-screen">
          <div style={{ color: 'red' }}>
            <p>
              Error: {error instanceof Error ? error.message : 'Unknown Error'}
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (user)
    return (
      <div className="font-satoshi bg-stone-200">
        <section className="pt-40 pb-24 px-4 sm:px-8 min-h-screen">
          <div className="max-w-208 mx-auto">
            <div className="flex flex-wrap md:flex-nowrap items-start">
              <div className="w-full md:w-1/4 md:sticky top-12">
                <UserInfoStack jobApplication={jobApplication} />
              </div>
              <div className="w-full md:w-3/4 mt-5">
                <ApplicationList jobApplication={jobApplication} />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );

  return <></>;
}
