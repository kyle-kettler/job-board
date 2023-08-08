import { Job, Application, formatSalary, formatDate } from '../lib';
import Badge from './Badge';

type CardProps = {
  jobApplication: Job & Application;
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

  return (
    <div className="w-full max-w-152 border-[1.5px] border-stone-300 p-3 rounded-xl shadow-sm">
      <div className="flex justify-between mb-8">
        <div className="flex gap-3">
          <div>
            <h2 className="text-2xl">{title}</h2>
            <p>{companyName}</p>
          </div>
        </div>
        <p className="font-light text-md">
          {`Applied on ${formatDate(dateApplied)}`}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Badge text={location} />
          <Badge text={level} />
          <Badge text={formatSalary(salaryFloor, salaryCeiling)} />
        </div>
        <div className="text-grey-200"></div>
      </div>
    </div>
  );
}
