import { useState } from 'react';
import FilterForm from '../components/FilterForm';
import Footer from '../components/Footer';
import JobList from '../components/JobList';
import { Level } from '../lib';

export default function Jobs() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [level, setLevel] = useState<Level>('');
  const [salary, setSalary] = useState(0);

  function handleSearch(searchInput: string): void {
    setSearch(searchInput);
  }

  function handleLocationSelect(location: string): void {
    setLocation(location);
  }

  function handleLevelSelect(level: Level): void {
    setLevel(level);
  }

  function handleSalarySelect(salary: number): void {
    setSalary(salary);
  }

  function handleClear() {
    setSearch('');
    setLocation('');
    setLevel('');
    setSalary(0);
  }

  return (
    <div className="font-satoshi">
      <section className="bg-stone-200 pt-24 pb-8">
        <div className="w-full max-w-152 mx-auto">
          <div className="text-stone-600">
            <h1 className="text-4xl font-light mb-1">Explore Jobs</h1>
            <p>
              Design-focused software engineering jobs at the worlds top tech
              companies.
            </p>
          </div>
          <div className="mt-2">
            <FilterForm
              searchValue={search}
              locationValue={location}
              levelValue={level}
              salaryValue={salary}
              onSearchInput={handleSearch}
              onLocationSelect={handleLocationSelect}
              onLevelSelect={handleLevelSelect}
              onSalarySelect={handleSalarySelect}
              onClearFilter={handleClear}
            />
          </div>
        </div>
      </section>
      <JobList
        searchInput={search}
        locationSelect={location}
        levelSelect={level}
        salarySelect={salary}
      />
      <Footer />
    </div>
  );
}
