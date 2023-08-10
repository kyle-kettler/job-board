import { useState } from 'react';
import { Job, Level } from '../lib';
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
  isLoading: boolean | undefined;
  error: unknown;
  jobs: Job[];
};

export default function JobList({
  searchInput,
  locationSelect,
  levelSelect,
  salarySelect,
  isLoading,
  error,
  jobs,
}: JobListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  if (isLoading) {
    return (
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4 h-screen">
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
          {filteredJobs.length > itemsPerPage && (
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={filteredJobs?.length}
              paginate={handlePaginate}
              currentPage={currentPage}
            />
          )}
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
        </div>
      </div>
    </section>
  );
}
