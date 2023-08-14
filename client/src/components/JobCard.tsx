import { Job, formatSalary, formatDate } from '../lib';
import { Link } from 'react-router-dom';
import Badge from './Badge';

type CardProps = {
  job: Job;
};

export default function JobCard({ job }: CardProps) {
  const {
    jobId,
    title,
    companyName,
    companyImgUrl,
    location,
    level,
    dateAdded,
    salaryFloor,
    salaryCeiling,
  } = job;

  return (
    <Link
      to={`/jobs/${jobId}`}
      className="w-full max-w-152 border-[1.5px] p-3 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:justify-between mb-8">
        <div className="flex gap-4 w-full sm:w-3/4">
          <img
            className="rounded-full w-14 h-14"
            src={companyImgUrl}
            alt={companyName}
          />
          <div>
            <h2 className="text-2xl">{title}</h2>
            <p>{companyName}</p>
          </div>
        </div>
        <p className="order-first mb-2 sm:order-none sm:mb-0 font-light text-sm flex-shrink-0">
          {`Posted on ${formatDate(dateAdded)}`}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 flex-wrap items-center">
          <Badge text={location} />
          <Badge text={level} />
          <Badge text={formatSalary(salaryFloor, salaryCeiling)} />
        </div>
      </div>
    </Link>
  );
}
