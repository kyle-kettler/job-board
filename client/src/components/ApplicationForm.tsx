import Button from './Button';

export default function ApplicationForm() {
  const inputClasses =
    'rounded-lg p-2 bg-transparent border-[1.5px] border-stone-500 w-full';

  return (
    <form className="flex flex-col gap-4">
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
          Resume and Cover Letter *
        </label>
        <input
          name="resume-cover-letter"
          type="file"
          accept=".pdf"
          multiple
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
