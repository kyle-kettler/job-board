import { useEffect, useState } from 'react';
import { fetchJobs, Job } from '../lib';
import JobCard from '../components/JobCard';
import Pagination from '../components/Pagination';

export default function JobList() {
  const [jobs, setJobs] = useState<Job[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 1;

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

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentJobs = jobs?.slice(firstIndex, lastIndex);

  function handlePaginate(pageNumber: number): void {
    setCurrentPage(pageNumber);
  }

  function handleSearch() {}

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          {currentJobs?.map((job) => (
            <JobCard job={job} key={job.jobId} />
          ))}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={jobs?.length}
            paginate={handlePaginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </section>
  );
}
