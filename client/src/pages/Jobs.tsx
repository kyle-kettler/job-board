import { useState } from 'react';
import FilterForm from '../components/FilterForm';
import Footer from '../components/Footer';
import JobList from '../components/JobList';

export default function Jobs() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [level, setLevel] = useState('');
  const [salary, setSalary] = useState('');

  function handleSearch(searchInput: string): void {
    setSearch(searchInput);
  }

  function handleLocationSelect(location: string): void {
    setLocation(location);
  }

  function handleLevelSelect(level: string): void {
    setLevel(level);
  }

  function handleSalarySelect(salary: string): void {
    setSalary(salary);
    console.log(salary);
  }

  function handleClear() {
    setSearch('');
    setLocation('');
    setLevel('');
    setSalary('');
  }

  return (
    <div>
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
