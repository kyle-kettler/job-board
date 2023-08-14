import { formatSalary, formatDate, JobApplication } from '../lib';
import Badge from './Badge';

type CardProps = {
  jobApplication: JobApplication;
};

export default function JobApplicationCard({ jobApplication }: CardProps) {
  const {
    title,
    companyName,
    location,
    level,
    dateApplied,
    salaryFloor,
    salaryCeiling,
  } = jobApplication;

  if (!jobApplication) return <p>no applications</p>;

  return (
    <div className="w-full max-w-152 border-[1.5px] border-stone-300 p-3 rounded-xl shadow-sm">
      <div className="flex flex-wrap sm:justify-between mb-4 gap-4">
        <div className="flex flex-col md:w-3/5">
          <h2 className="text-2xl mb-1">{title}</h2>
          <p>{companyName}</p>
        </div>
        <p className="font-light text-md shrink-0 mt-1">
          {`Applied on ${formatDate(dateApplied)}`}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center flex-wrap">
          <Badge text={location} />
          <Badge text={level} />
          <Badge text={formatSalary(salaryFloor, salaryCeiling)} />
        </div>
      </div>
    </div>
  );
}
