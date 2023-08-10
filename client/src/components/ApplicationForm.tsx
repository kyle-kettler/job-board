import { FormEvent, useContext } from 'react';
import { Job } from '../lib';
import Button from './Button';
import AppContext from './AppContext';
import { Link } from 'react-router-dom';

type ApplicationFormProps = {
  job: Job;
  formState: Record<string, string>;
  onInputChange: (key: string, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  formSubmitted: boolean;
};

export default function ApplicationForm({
  job,
  formState,
  onInputChange,
  onSubmit,
  formSubmitted,
}: ApplicationFormProps) {
  type InputData = {
    label: string;
    value?: string;
    type: string;
  };

  const formInputs: Record<string, InputData> = {
    name: {
      label: 'Name *',
      value: '',
      type: 'text',
    },
    email: {
      label: 'Email *',
      value: '',
      type: 'email',
    },
    phone: {
      label: 'Phone Number *',
      value: '',
      type: 'number',
    },
    resume: {
      label: 'Resume *',
      type: 'file',
    },
    portfolioUrl: {
      label: 'Portfolio URL *',
      value: '',
      type: 'text',
    },
    githubUrl: {
      label: 'Github URL *',
      value: '',
      type: 'text',
    },
    proud: {
      label:
        'What is a project or piece of work you are most proud of and why? *',
      value: '',
      type: 'textarea',
    },
    interesting: {
      label:
        'What is the most interesting thing about you that isn’t on your resumé? *',
      value: '',
      type: 'textarea',
    },
  };

  const { user } = useContext(AppContext);
  const inputClasses =
    'rounded-lg p-2 bg-transparent border-[1.5px] border-stone-500 w-full mt-1';

  // Creating the form from the object above
  const inputs = [];
  for (let key in formInputs) {
    if (formInputs[key].type === 'file') {
      inputs.push(
        <div key={key}>
          <label>{formInputs[key].label}</label>
          <input
            className={`${inputClasses} border-dashed`}
            key={key}
            name={key}
            type={formInputs[key].type}
          />
        </div>
      );
    } else if (formInputs[key].type === 'textarea') {
      inputs.push(
        <div key={key}>
          <label>{formInputs[key].label}</label>
          <textarea
            className={inputClasses}
            key={key}
            name={key}
            rows={5}
            value={formState[key]}
            onChange={(e) => onInputChange(key, e.target.value)}
          />
        </div>
      );
    } else {
      inputs.push(
        <div key={key}>
          <label>{formInputs[key].label}</label>
          <input
            className={inputClasses}
            key={key}
            name={key}
            type={formInputs[key].type}
            value={formState[key]}
            onChange={(e) => onInputChange(key, e.target.value)}
          />
        </div>
      );
    }
  }

  // Show the form if it has not been submitted.
  if (user && !formSubmitted) {
    return (
      <form
        onSubmit={(event) => onSubmit(event)}
        className="flex flex-col gap-4">
        <input name="userId" type="text" hidden readOnly value={user?.userId} />
        <input name="jobId" type="text" hidden readOnly value={job.jobId} />
        {inputs}
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

  // Show success message after user submits the form.
  if (user && formSubmitted) {
    return (
      <div className="flex justify-center bg-stone-300 z-10 rounded-lg p-12 text-center text-lg">
        <p>
          Thank you for applying! Your application has been sent to{' '}
          {`${job.companyName}.`}
        </p>
      </div>
    );
  }

  // Show a login message if the user is not logged in.
  return (
    <div className="flex justify-center bg-stone-300 z-10 rounded-lg p-12 text-center">
      {
        <Link
          to="/sign-up"
          className="mr-1 underline hover:text-stone-600 transition-colors">
          Create an account
        </Link>
      }
      or
      {
        <Link
          to="/sign-in"
          className="mx-1 underline hover:text-stone-600 transition-colors">
          login
        </Link>
      }{' '}
      to Apply.
    </div>
  );
}
