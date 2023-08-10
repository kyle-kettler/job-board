import { useEffect, useState, FormEvent } from 'react';
import { fetchOneJob, Job, submitApplication } from '../lib';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactMarkdown from 'react-markdown';
import Footer from '../components/Footer';
import JobInfoStack from '../components/JobInfoStack';
import Button from '../components/Button';
import ApplicationForm from '../components/ApplicationForm';

export default function JobDetails() {
  const formState: Record<string, string> = {
    name: '',
    email: '',
    phone: '',
    portfolioUrl: '',
    githubUrl: '',
    proud: '',
    interesting: '',
  };

  const { jobId } = useParams();
  const [job, setJob] = useState<Job>();
  const [loading, setLoading] = useState<boolean>();
  const [tabIndex, setTabIndex] = useState(0);
  const [formValues, setFormValues] = useState(formState);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    async function loadOneJob(jobId: number) {
      setLoading(true);
      try {
        const job = await fetchOneJob(jobId);
        setJob(job);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    if (jobId) {
      loadOneJob(+jobId);
    }
  }, [jobId]);

  function handleInputChange(key: string, value: string): void {
    setFormValues({
      ...formValues,
      [key]: value,
    });
    console.log(formValues);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      await submitApplication(formData);
      setFormSubmitted(true);
      setFormValues(formState);
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) {
    return (
      <div className="font-satoshi bg-stone-200">
        <section className="pt-40 pb-24">
          <div className="max-w-208 mx-auto">
            <div className="flex h-screen">
              <p>Loading...</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (!job) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Job not found</p>
      </div>
    );
  }

  return (
    <div className="font-satoshi bg-stone-200">
      <section className="pt-40 pb-24 min-h-screen">
        <div className="max-w-208 mx-auto">
          <div className="flex items-start gap-12">
            <div className="w-1/3 sticky top-12">
              <JobInfoStack job={job} />
            </div>
            <div className="w-2/3 mt-28">
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
                selectedTabClassName="border-orange-500 text-black"
                className="overflow-visible">
                <TabList className="flex gap-5 mb-4">
                  <Tab className="text-stone-500 pr-12 pb-1 border-b hover:border-orange-500 transition-colors cursor-pointer">
                    Overview
                  </Tab>
                  <Tab className="text-stone-500 pr-12 pb-1 border-b hover:border-orange-500 transition-colors cursor-pointer">
                    Application
                  </Tab>
                </TabList>
                <TabPanel>
                  <ReactMarkdown
                    className="prose mb-8"
                    children={job.description}
                  />
                  <Button
                    type="button"
                    buttonStyle="primary-lg"
                    text="Apply for this Job"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setTabIndex(1);
                    }}
                  />
                </TabPanel>
                <TabPanel>
                  <ApplicationForm
                    job={job}
                    formState={formValues}
                    onInputChange={handleInputChange}
                    onSubmit={handleSubmit}
                    formSubmitted={formSubmitted}
                  />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
