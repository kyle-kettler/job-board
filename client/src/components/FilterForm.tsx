import { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

type FilterProps = {
  onSearchInput: (value: string) => void;
};

export default function FilterForm({ onSearchInput }: FilterProps) {
  const [location, setLocation] = useState('');
  const [level, setLevel] = useState('');
  const [salary, setSalary] = useState('');

  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="relative flex items-center">
          <input
            className="p-4 pl-10 rounded-lg border-[1.5px] w-full"
            placeholder="Job Title or Company"
            onChange={(e) => onSearchInput(e.currentTarget.value)}
          />
          <SearchIcon className="absolute left-3" color="#989898" />
          <button className="text-sm text-gray-400 absolute right-4">
            Clear
          </button>
        </div>
        <div className="w-full flex gap-3">
          <select
            className="w-full flex-grow p-2 rounded-md border-[1.5px] text-gray-500"
            value={location}
            onChange={(e) => setLocation(e.currentTarget.value)}>
            <option value={''}>Location</option>
            <option value={'San Francisco, CA'}>San Francisco, CA</option>
            <option value={'Bellevue, WA'}>Bellevue, WA</option>
            <option value={'Austin, TX'}>Austin, TX</option>
            <option value={'Remote'}>Remote</option>
          </select>
          <select
            className="w-full flex-grow p-2 rounded-md border-[1.5px] text-gray-500"
            value={level}
            onChange={(e) => setLevel(e.currentTarget.value)}>
            <option value={''}>Level</option>
            <option value={'Entry-Level'}>Entry-Level</option>
            <option value={'Mid-Level'}>Mid-Level</option>
            <option value={'Senior'}>Senior</option>
            <option value={'Principal'}>Principal</option>
          </select>
          <select
            className="w-full flex-grow p-2 rounded-md border-[1.5px] text-gray-500"
            value={salary}
            onChange={(e) => setSalary(e.currentTarget.value)}>
            <option value={''}>Salary</option>
            <option value={'$50,000 - $100,000'}>$50,000 - $100,000</option>
            <option value={'$101,000 - $150,000'}>$101,000 - $150,000</option>
            <option value={'$151,000 - $200,000'}>$151,000 - $200,000</option>
            <option value={'$200,000+'}>$200,000+</option>
          </select>
        </div>
      </div>
    </div>
  );
}
