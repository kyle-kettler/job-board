import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJobs, formatSalary, Job } from '../lib';
import JobCard from '../components/JobCard';

export default function Jobs() {
  const [jobs, setJobs] = useState<Job[]>();

  useEffect(() => {
    async function loadJobs() {
      try {
        const jobs = await fetchJobs();
        setJobs(jobs);
      } catch (err) {
        console.error(err);
      }
    }
    loadJobs();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-4">
        {jobs?.map((job) => (
          <JobCard job={job} key={job.jobId} />
        ))}
      </div>
    </div>
  );
}
