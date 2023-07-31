import FilterForm from '../components/FilterForm';
import Footer from '../components/Footer';
import JobList from '../components/JobList';

export default function Jobs() {
  function handleSearch() {}

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
            <FilterForm onSearchInput={handleSearch} />
          </div>
        </div>
      </section>
      <JobList />
      <Footer />
    </div>
  );
}
