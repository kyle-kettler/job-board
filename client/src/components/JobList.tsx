import { useEffect, useState } from 'react';
import { fetchJobs, Job, Level } from '../lib';
import {
  matchesSearch,
  matchesLocation,
  matchesLevel,
  matchesSalary,
} from '../lib/filters';
import JobCard from '../components/JobCard';
import Pagination from '../components/Pagination';

type JobListProps = {
  searchInput: string;
  locationSelect: string;
  levelSelect: Level;
  salarySelect: number;
};

export default function JobList({
  searchInput,
  locationSelect,
  levelSelect,
  salarySelect,
}: JobListProps) {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [jobs, setJobs] = useState<Job[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function loadJobs() {
      setIsLoading(true);
      try {
        const jobs = await fetchJobs();
        setJobs(jobs);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (isLoading === undefined) loadJobs();
  }, [isLoading]);

  if (!jobs) {
    return (
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <p>Loading jobs...</p>
          </div>
        </div>
      </section>
    );
  }

  /**
   * This block filters the jobs list based on the inputs from FilterForm.tsx
   */
  const filteredJobs = jobs.filter(
    (item) =>
      matchesSearch(searchInput, item) &&
      matchesLocation(locationSelect, item) &&
      matchesLevel(levelSelect, item) &&
      matchesSalary(salarySelect, item)
  );

  /**
   * These varaibles determine the number of pages needed based on 'filteredJobs"
   * That data is passed to Pagination.tsx
   */
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentJobs = filteredJobs.slice(firstIndex, lastIndex);

  function handlePaginate(pageNumber: number): void {
    setCurrentPage(pageNumber);
  }

  if (!jobs) {
    return (
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <p>Loading jobs...</p>
          </div>
        </div>
      </section>
    );
  }

  // Showing a message if the users search doesn't yield results
  if (currentJobs?.length === 0) {
    return (
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <p>No jobs found, try changing your search.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          {currentJobs?.map((job) => (
            <JobCard job={job} key={job.jobId} />
          ))}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={filteredJobs?.length}
            paginate={handlePaginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </section>
  );
}
