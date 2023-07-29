import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchJobs, formatSalary, Job } from '../lib';
import JobCard from '../components/JobCard';
import FilterForm from '../components/FilterForm';

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
    <div>
      <section className="bg-stone-200 pt-24 pb-8">
        <div className="w-full max-w-152 mx-auto">
          <div className="text-stone-600">
            <h1 className="text-4xl font-light mb-1">Explore Jobs</h1>
            <p>
              Design-focused engineering jobs at the worlds top tech companies.
            </p>
          </div>
          <div className="mt-2">
            <FilterForm />
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            {jobs?.map((job) => (
              <JobCard job={job} key={job.jobId} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
