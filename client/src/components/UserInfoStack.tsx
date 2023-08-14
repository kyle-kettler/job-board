import { formatDate, JobApplication } from '../lib';
import { Link } from 'react-router-dom';
import Button from './Button';

type InfoStackProps = {
  jobApplication: JobApplication[];
};

export default function UserInfoStack({ jobApplication }: InfoStackProps) {
  if (!jobApplication) return <div></div>;
  const applicationsSubmitted = jobApplication.length;
  const lastSubmission = jobApplication.at(0)?.dateApplied;

  return (
    <div className="flex flex-wrap md:flex-col gap-y-4">
      <h1 className="text-2xl w-full">My Applications</h1>
      <div className="w-1/2">
        <p className="text-sm">Applications Submitted</p>
        <p className="text-lg">{applicationsSubmitted}</p>
      </div>
      <div className="w-1/2">
        <p className="text-sm">Last Submission On</p>
        <p className="text-lg">
          {lastSubmission
            ? formatDate(lastSubmission as string)
            : 'No submissions'}
        </p>
      </div>
      <Link to={'/jobs'}>
        <Button type="button" buttonStyle={'secondary'} text="Explore Jobs" />
      </Link>
    </div>
  );
}
