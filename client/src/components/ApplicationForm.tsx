import { useContext } from 'react';
import { Job } from '../lib';
import Button from './Button';
import AppContext from './AppContext';

type ApplicationFormProps = {
  job: Job;
};

export default function ApplicationForm({ job }: ApplicationFormProps) {
  const { user } = useContext(AppContext);
  const inputClasses =
    'rounded-lg p-2 bg-transparent border-[1.5px] border-stone-500 w-full mt-1';

  return (
    <form className="flex flex-col gap-4">
      <input name="user" type="text" hidden value={user?.userId} />
      <input name="user" type="text" hidden value={job.jobId} />
      <div>
        <label className="text-sm font-satoshi-md" htmlFor="full-name">
          Full Name *
        </label>
        <input name="full-name" type="text" className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-satoshi-md" htmlFor="email">
          Email *
        </label>
        <input type="email" name="email" className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-satoshi-md" htmlFor="phone">
          Phone Number *
        </label>
        <input type="tel" name="phone" className={inputClasses} />
      </div>
      <div>
        <label
          className="text-sm font-satoshi-md"
          htmlFor="resume-cover-letter">
          Resume *
        </label>
        <input
          name="resume-cover-letter"
          type="file"
          accept=".pdf"
          className={`${inputClasses} border-dashed`}
        />
      </div>
      <div>
        <label className="text-sm font-satoshi-md" htmlFor="portfolio">
          Portfolio URL *
        </label>
        <input type="text" name="portfolio" className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-satoshi-md" htmlFor="github">
          Github URL *
        </label>
        <input type="text" name="github" className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-satoshi-md" htmlFor="proud">
          What is a project or piece of work you are most proud of and why? *
        </label>
        <textarea rows={5} name="proud" className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-satoshi-md" htmlFor="interesting">
          What is the most interesting thing about you that isn’t on your
          resumé? *
        </label>
        <textarea rows={5} name="interesting" className={inputClasses} />
      </div>
      <div className="self-start">
        <Button
          type="submit"
          buttonStyle="primary-lg"
          text="Submit Application"
        />
      </div>
    </form>
  );
}
