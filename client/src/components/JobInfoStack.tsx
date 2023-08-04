import { formatDate, formatSalary, Job } from '../lib';
import { Link } from 'react-router-dom';
import Button from './Button';

type InfoStackProps = {
  job: Job;
};

export default function JobInfoStack({ job }: InfoStackProps) {
  const {
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
    <div className="flex flex-col gap-4">
      <img
        className="rounded-full w-24 h-24"
        src={`../${companyImgUrl}`}
        alt={companyName}
      />
      <h1 className="text-2xl">{title}</h1>
      <div>
        <p className="text-sm">Company</p>
        <p className="text-lg">{companyName}</p>
      </div>
      <div>
        <p className="text-sm">Location</p>
        <p className="text-lg">{location}</p>
      </div>
      <div>
        <p className="text-sm">Level</p>
        <p className="text-lg">{level}</p>
      </div>
      <div>
        <p className="text-sm">Salary</p>
        <p className="text-lg">{formatSalary(salaryFloor, salaryCeiling)}</p>
      </div>
      <div>
        <p className="text-sm">Date Posted</p>
        <p className="text-lg">{formatDate(dateAdded)}</p>
      </div>
      <Link to={'/jobs'}>
        <Button type="button" buttonStyle={'secondary'} text="Back to Jobs" />
      </Link>
    </div>
  );
}
