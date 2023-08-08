import { formatDate, Job, Application } from '../lib';
import { Link } from 'react-router-dom';
import Button from './Button';

type InfoStackProps = {
  jobApplication: (Application & Job)[] | undefined;
};

export default function UserInfoStack({ jobApplication }: InfoStackProps) {
  if (!jobApplication) return <div></div>;
  const applicationsSubmitted = jobApplication.length;
  const lastSubmission = jobApplication.at(0)?.dateApplied;

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl">My Applications</h1>
      <div>
        <p className="text-sm">Applications Submitted</p>
        <p className="text-lg">{applicationsSubmitted}</p>
      </div>
      <div>
        <p className="text-sm">Last Submission On</p>
        <p className="text-lg">{formatDate(lastSubmission as string)}</p>
      </div>
      <Link to={'/jobs'}>
        <Button type="button" buttonStyle={'secondary'} text="Explore Jobs" />
      </Link>
    </div>
  );
}
