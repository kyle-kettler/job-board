import { useState } from 'react';
import { Job, Application } from '../lib';
import JobApplicationCard from './JobApplicationCard';
import Pagination from './Pagination';

type ApplicationListProps = {
  jobApplication: (Application & Job)[] | undefined;
};

export default function ApplicationList({
  jobApplication,
}: ApplicationListProps) {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [error, setError] = useState<unknown>();
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

  if (!jobApplication) {
    return (
      <section>
        <div className="container mx-auto">
          <div className="h-screen">
            <p>Loading applications...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          {currentJobApplications?.map((job) => (
            <JobApplicationCard key={job.applicationId} jobApplication={job} />
          ))}
          <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={jobApplication?.length}
            paginate={handlePaginate}
            currentPage={currentPage}
          />
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
