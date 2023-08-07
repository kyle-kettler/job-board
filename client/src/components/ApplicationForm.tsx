import { FormEvent, useContext, useState } from 'react';
import { Job, submitApplication } from '../lib';
import Button from './Button';
import AppContext from './AppContext';

type ApplicationFormProps = {
  job: Job;
};

export default function ApplicationForm({ job }: ApplicationFormProps) {
  const { user } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const inputClasses =
    'rounded-lg p-2 bg-transparent border-[1.5px] border-stone-500 w-full mt-1';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      await submitApplication(formData);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    }
  }

  if (user && !submitted) {
    return (
      <div className="relative">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="userId"
            type="text"
            hidden
            readOnly
            value={user?.userId}
          />
          <input name="jobId" type="text" hidden readOnly value={job.jobId} />
          <div>
            <label className="text-sm font-satoshi-md" htmlFor="name">
              Full Name *
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              type="text"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="text-sm font-satoshi-md" htmlFor="email">
              Email *
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              className={inputClasses}
            />
          </div>
          <div>
            <label className="text-sm font-satoshi-md" htmlFor="phone">
              Phone Number *
            </label>
            <input type="tel" name="phone" className={inputClasses} />
          </div>
          <div>
            <label className="text-sm font-satoshi-md" htmlFor="resume">
              Resume *
            </label>
            <input
              name="resume"
              type="file"
              accept=".pdf"
              className={`${inputClasses} border-dashed`}
            />
          </div>
          <div>
            <label className="text-sm font-satoshi-md" htmlFor="portfolioUrl">
              Portfolio URL *
            </label>
            <input type="text" name="portfolioUrl" className={inputClasses} />
          </div>
          <div>
            <label className="text-sm font-satoshi-md" htmlFor="githubUrl">
              Github URL *
            </label>
            <input type="text" name="githubUrl" className={inputClasses} />
          </div>
          <div>
            <label className="text-sm font-satoshi-md" htmlFor="proud">
              What is a project or piece of work you are most proud of and why?
              *
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
      </div>
    );
  }

  if (user && submitted) {
    return (
      <div className="flex justify-center bg-stone-300 z-10 rounded-lg p-12 text-center text-lg">
        <p>
          Thank you for applying! Your application has been sent to{' '}
          {`${job.companyName}.`}
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center bg-stone-300 z-10 rounded-lg p-12 text-center">
      Create an account or login to Apply.
    </div>
  );
}
