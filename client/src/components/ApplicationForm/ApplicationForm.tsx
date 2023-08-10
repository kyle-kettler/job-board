import { FormEvent, useContext } from 'react';
import { Job } from '../../lib';
import Button from '../Button';
import AppContext from '../AppContext';
import FormSuccess from './FormSuccess';
import NoUser from './NoUser';
import FormInput from './FormInput';

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
    type: string;
  };

  const formInputs: Record<string, InputData> = {
    name: {
      label: 'Name *',
      type: 'text',
    },
    email: {
      label: 'Email *',
      type: 'email',
    },
    phone: {
      label: 'Phone Number *',
      type: 'number',
    },
    resume: {
      label: 'Resume *',
      type: 'file',
    },
    portfolioUrl: {
      label: 'Portfolio URL *',
      type: 'text',
    },
    githubUrl: {
      label: 'Github URL *',
      type: 'text',
    },
    proud: {
      label:
        'What is a project or piece of work you are most proud of and why? *',
      type: 'textarea',
    },
    interesting: {
      label:
        "What is the most interesting thing about you that isn't on your resumé? *",
      type: 'textarea',
    },
  };

  const inputClasses =
    'rounded-lg p-2 bg-transparent border-[1.5px] border-stone-500 w-full mt-1';
  const { user } = useContext(AppContext);

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
          <FormInput
            type={formInputs[key].type}
            label={formInputs[key].label}
            name={key}
            value={formState[key]}
            className={inputClasses}
            onChange={(e) =>
              onInputChange(key, (e.target as HTMLInputElement).value)
            }
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
    return <FormSuccess companyName={job.companyName} />;
  }

  // Show a login message if the user is not logged in.
  return <NoUser />;
}
