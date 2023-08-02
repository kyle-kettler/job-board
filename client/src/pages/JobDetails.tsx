import { useEffect, useState } from 'react';
import { fetchOneJob, Job } from '../lib';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import JobInfoStack from '../components/JobInfoStack';
import ReactMarkdown from 'react-markdown';

export default function JobDetails() {
  const { jobId } = useParams();
  const [job, setJob] = useState<Job>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    async function loadOneJob(jobId: number) {
      setLoading(true);
      try {
        const job = await fetchOneJob(jobId);
        setJob(job);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    if (jobId) {
      loadOneJob(+jobId);
    }
  }, [jobId]);

  if (loading) {
    return (
      <div className="font-satoshi bg-stone-200">
        <section className="pt-40 pb-24">
          <div className="max-w-208 mx-auto">
            <div className="flex h-screen">
              <p>Loading...</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Job not found</p>
      </div>
    );
  }

  return (
    <div className="font-satoshi bg-stone-200">
      <section className="pt-40 pb-24">
        <div className="max-w-208 mx-auto">
          <div className="flex items-start gap-12">
            <div className="w-1/3 sticky top-12">
              <JobInfoStack job={job} />
            </div>
            <div className="w-2/3 mt-28">
              <ReactMarkdown
                className="prose mb-8"
                children={job.description}
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-8 rounded transition-colors text-base">
                Apply for this Job
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
