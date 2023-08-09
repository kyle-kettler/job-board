import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="h-screen">
      <div className="font-satoshi h-screen">
        <section className="pt-24 px-8 flex justify-center">
          <div className="pt-8">
            <h1 className="text-6xl font-satoshi-bold mb-4 tracking-tighter max-w-164 text-center">
              Find a job where you can design and write code.
            </h1>
            <h2 className="text-lg text-center">
              Design-focused software engineering jobs at design-mature tech
              companies.
            </h2>
            <div className="flex gap-4 mt-8 justify-center">
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
        <section className="p-16 min-h-96">
          <img src="../images/landingpage.png" alt="home illustrations"></img>
        </section>
        <Footer />
      </div>
    </div>
  );
}
