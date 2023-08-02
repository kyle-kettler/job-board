import { useEffect, useState } from 'react';
import { fetchOneJob, Job } from '../lib';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import JobInfoStack from '../components/JobInfoStack';
import ReactMarkdown from 'react-markdown';

export default function JobDetails() {
  const { jobId } = useParams();
  const [job, setJob] = useState<Job>();

  useEffect(() => {
    async function loadOneJob(jobId: number) {
      try {
        const job = await fetchOneJob(jobId);
        setJob(job);
      } catch (err) {
        console.error(err);
      }
    }
    if (jobId) {
      loadOneJob(+jobId);
    }
  }, [jobId]);

  if (!job) return <p>no job</p>;

  return (
    <div className="font-satoshi bg-stone-200">
      <section className="pt-40 pb-24">
        <div className="max-w-208 mx-auto">
          <div className="flex items-start gap-12">
            <div className="w-1/3 sticky top-12">
              <JobInfoStack job={job} />
            </div>
            <ReactMarkdown
              className="prose w-2/3 mt-28"
              children={job.description}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
