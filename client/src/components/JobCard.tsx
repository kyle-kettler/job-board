import { Job, formatSalary, formatDate } from '../lib';
import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
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
      <div className="flex justify-between mb-8">
        <div className="flex gap-3">
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
        <p className="font-light text-sm">
          {`Posted on ${formatDate(dateAdded)}`}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Badge text={location} />
          <Badge text={level} />
          <Badge text={formatSalary(salaryFloor, salaryCeiling)} />
        </div>
        <div className="text-grey-200">
          <Bookmark color="#D9D8D8" strokeWidth={1.5} />
        </div>
      </div>
    </Link>
  );
}
