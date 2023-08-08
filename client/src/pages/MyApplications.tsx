import { useState, useEffect, useContext } from 'react';
import { fetchApplications, Job, Application } from '../lib';
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
  const [jobApplication, setJobApplications] =
    useState<(Application & Job)[]>();

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

  if (user)
    return (
      <div className="font-satoshi bg-stone-200">
        <section className="pt-40 pb-24 min-h-screen">
          <div className="max-w-208 mx-auto">
            <div className="flex items-start gap-12">
              <div className="w-1/4 sticky top-12">
                <UserInfoStack jobApplication={jobApplication} />
              </div>
              <div className="w-3/4 mt-6">
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
