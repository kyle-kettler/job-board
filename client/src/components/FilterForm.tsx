import { Search } from 'lucide-react';

export default function FilterForm() {
  return (
    <div>
      <form>
        <div className="flex flex-col gap-3">
          <div className="relative flex items-center">
            <input
              className="p-4 pl-10 rounded-lg border-[1.5px] w-full"
              placeholder="Job Title or Company"
            />
            <Search className="absolute left-3" color="#989898" />
          </div>
          <div className="w-full flex gap-3">
            <select className="w-full flex-grow p-2 rounded-md border-[1.5px] text-gray-400">
              <option>Location</option>
              <option>San Fransico, CA</option>
              <option>Bellevue, WA</option>
              <option>Austin, TX</option>
              <option>Remote</option>
            </select>
            <select className="w-full flex-grow p-2 rounded-md border-[1.5px] text-gray-400">
              <option>Level</option>
              <option>Entry-Level</option>
              <option>Mid-Level</option>
              <option>Senior</option>
              <option>Principal</option>
            </select>
            <select className="w-full flex-grow p-2 rounded-md border-[1.5px] text-gray-400">
              <option>Salary</option>
              <option>$50,000 - $100,000</option>
              <option>$101,000 - $150,000</option>
              <option>$151,000 - $200,000</option>
              <option>$200,000+</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
}
