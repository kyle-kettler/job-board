import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-satoshi">
      <section className="pt-24 h-screen">
        <div className="w-full max-w-208 mx-auto">
          <h1 className="text-6xl font-satoshi-bold mb-1 tracking-tighter">
            Find a job where you can design and write code.
          </h1>
          <p>
            Design-focused software engineering jobs at design-mature tech
            companies.
          </p>
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
