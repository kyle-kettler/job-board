import { useEffect, useState } from 'react';
import { fetchJobs, Job } from '../lib';
import JobCard from '../components/JobCard';
import Pagination from '../components/Pagination';

type JobListProps = {
  searchInput: string;
  locationSelect: string;
  levelSelect: string;
  salarySelect: string;
};

export default function JobList({
  searchInput,
  locationSelect,
  levelSelect,
  salarySelect,
}: JobListProps) {
  const [jobs, setJobs] = useState<Job[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  /**
   * loading jobs from database on first render
   * fetchJobs() is at lib/api.ts
   */
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

  /**
   * This block filters the jobs list based on the inputs from FilterForm.tsx
   * There is a ternary for each input field.
   * Salary ternary handles the number to string comparison;
   *   The select options for salary increments by 50000, hence line 55
   */
  const filteredJobs = jobs?.filter(
    (item) =>
      (searchInput
        ? item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.companyName.toLowerCase().includes(searchInput.toLowerCase())
        : true) &&
      (locationSelect ? item.location === locationSelect : true) &&
      (levelSelect ? item.level === levelSelect : true) &&
      (salarySelect
        ? item.salaryFloor >= Number(salarySelect) &&
          item.salaryFloor < Number(salarySelect) + 50000
        : true)
  );

  /**
   * These varaibles determine the number of pages needed based on 'filteredJobs"
   * That data is passed to Pagination.tsx
   */
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentJobs = filteredJobs?.slice(firstIndex, lastIndex);

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
