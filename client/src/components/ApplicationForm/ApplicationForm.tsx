import { FormEvent, useContext, Dispatch, SetStateAction } from 'react';
import { Job } from '../../lib';
import Button from '../Button';
import AppContext from '../AppContext';
import FormSuccess from './FormSuccess';
import NoUser from './NoUser';
import FormInput from './FormInput';
import Dropzone from './Dropzone';

type ApplicationFormProps = {
  job: Job;
  formState: Record<string, string>;
  onInputChange: (key: string, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  formSubmitted: boolean;
  setFile: Dispatch<SetStateAction<File | undefined>>;
};

export default function ApplicationForm({
  job,
  formState,
  onInputChange,
  onSubmit,
  formSubmitted,
  setFile,
}: ApplicationFormProps) {
  type InputData = {
    label: string;
    type: string;
    placeholder?: string;
  };

  const formInputs: Record<string, InputData> = {
    name: {
      label: 'Full Name *',
      type: 'text',
      placeholder: 'Enter your name...',
    },
    email: {
      label: 'Email *',
      type: 'email',
      placeholder: 'you@email.com',
    },
    phone: {
      label: 'Phone Number *',
      type: 'tel',
      placeholder: '123-456-7890',
    },
    resume: {
      label: 'Resume *',
      type: 'file',
    },
    portfolioUrl: {
      label: 'Portfolio URL *',
      type: 'text',
      placeholder: 'yourwebsite.com',
    },
    githubUrl: {
      label: 'Github URL *',
      type: 'text',
      placeholder: 'github.com/you',
    },
    proud: {
      label:
        'What is a project or piece of work you are most proud of and why? *',
      type: 'textarea',
      placeholder: 'Type here...',
    },
    interesting: {
      label:
        "What is the most interesting thing about you that isn't on your resumé? *",
      type: 'textarea',
      placeholder: 'Type here...',
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
          <Dropzone
            setFile={setFile}
            className={`${inputClasses} border-dashed text-center py-12 text-sm text-stone-600`}
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
            placeholder={formInputs[key].placeholder}
            required
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
            placeholder={formInputs[key].placeholder}
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
