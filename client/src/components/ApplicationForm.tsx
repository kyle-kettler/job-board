export default function ApplicationForm() {
  const inputClasses =
    'rounded-lg p-2 bg-transparent border-[1.5px] border-stone-500 w-full';

  return (
    <form className="flex flex-col gap-4">
      <div>
        <label className="text-sm font-satoshi-md">Full Name *</label>
        <input className={inputClasses} />
      </div>
      <div>
        <label className="text-sm font-satoshi-md">Email *</label>
        <input className={inputClasses} />
      </div>
    </form>
  );
}
