import { useState } from 'react';
import { JobApplication } from '../lib';
import JobApplicationCard from './JobApplicationCard';
import Pagination from './Pagination';

type ApplicationListProps = {
  jobApplication: JobApplication[];
};

export default function ApplicationList({
  jobApplication,
}: ApplicationListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentJobApplications = jobApplication?.slice(firstIndex, lastIndex);

  function handlePaginate(pageNumber: number): void {
    setCurrentPage(pageNumber);
  }

  if (currentJobApplications?.length === 0) {
    return (
      <section className="py-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-4">
            <p>
              You haven't submitted any applications, go throw your name in the
              hat!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="flex flex-col gap-4 w-full">
        {currentJobApplications?.map((job) => (
          <JobApplicationCard key={job.applicationId} jobApplication={job} />
        ))}
        {jobApplication.length > itemsPerPage && (
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={jobApplication?.length}
            paginate={handlePaginate}
            currentPage={currentPage}
          />
        )}
      </div>
    </section>
  );
}
