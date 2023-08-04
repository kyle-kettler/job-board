import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-satoshi h-screen flex flex-col justify-between">
      <section className="pt-24 px-8">
        <div className="pt-8">
          <h1 className="text-6xl font-satoshi-bold mb-4 tracking-tighter max-w-164">
            Find a job where you can design and write code.
          </h1>
          <h2 className="text-lg">
            Design-focused software engineering jobs at design-mature tech
            companies.
          </h2>
          <div className="flex gap-4 mt-8">
            <Link to="/jobs">
              <Button
                type="button"
                buttonStyle="primary-lg"
                text="Find Your Next Job"
              />
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
