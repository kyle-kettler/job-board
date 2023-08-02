import { Search as SearchIcon } from 'lucide-react';
import { Level } from '../lib';

type FilterProps = {
  onSearchInput: (value: string) => void;
  onLocationSelect: (value: string) => void;
  onLevelSelect: (value: Level) => void;
  onSalarySelect: (value: number) => void;
  onClearFilter: () => void;
  searchValue: string;
  locationValue: string;
  levelValue: string;
  salaryValue: number;
};

export default function FilterForm({
  onSearchInput,
  onLocationSelect,
  onLevelSelect,
  onSalarySelect,
  onClearFilter,
  searchValue,
  locationValue,
  levelValue,
  salaryValue,
}: FilterProps) {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <div className="relative flex items-center">
          <input
            className="p-4 pl-10 rounded-lg border-[1.5px] w-full"
            placeholder="Job Title or Company"
            value={searchValue}
            onChange={(e) => onSearchInput(e.currentTarget.value)}
          />
          <SearchIcon className="absolute left-3" color="#989898" />
          <button
            className="text-sm text-gray-400 absolute right-4 hover:text-gray-600 transition-colors"
            onClick={() => onClearFilter()}>
            Clear
          </button>
        </div>
        <div className="w-full flex gap-3">
          <select
            className="w-full flex-grow p-2 rounded-md border-[1.5px] text-gray-500 cursor-pointer"
            value={locationValue}
            onChange={(e) => onLocationSelect(e.currentTarget.value)}>
            <option value={''}>Location</option>
            <option value={'San Francisco, CA'}>San Francisco, CA</option>
            <option value={'Bellevue, WA'}>Bellevue, WA</option>
            <option value={'Austin, TX'}>Austin, TX</option>
            <option value={'Remote'}>Remote</option>
          </select>
          <select
            className="w-full flex-grow p-2 rounded-md border-[1.5px] text-gray-500 cursor-pointer"
            value={levelValue}
            onChange={(e) => onLevelSelect(e.currentTarget.value as Level)}>
            <option value={''}>Level</option>
            <option value={'Entry-Level'}>Entry-Level</option>
            <option value={'Mid-Level'}>Mid-Level</option>
            <option value={'Senior'}>Senior</option>
            <option value={'Principal'}>Principal</option>
          </select>
          <select
            className="w-full flex-grow p-2 rounded-md border-[1.5px] text-gray-500 cursor-pointer"
            value={salaryValue}
            onChange={(e) => onSalarySelect(Number(e.currentTarget.value))}>
            <option value={0}>Salary</option>
            <option value={50000}>$50,000 - $100,000</option>
            <option value={100000}>$100,000 - $150,000</option>
            <option value={150000}>$150,000 - $200,000</option>
            <option value={200000}>$200,000+</option>
          </select>
        </div>
      </div>
    </div>
  );
}
