export type Level = '' | 'Entry-Level' | 'Mid-Level' | 'Senior' | 'Principal';

export type Job = {
  jobId: number;
  title: string;
  description: string;
  companyName: string;
  companyImgUrl: string;
  salaryFloor: number;
  salaryCeiling: number;
  level: Level;
  location: string;
  active: boolean;
  dateAdded: string;
};

/**
 * Fetches all jobs from the API.
 * @returns Promise that resolves to an array of jobs.
 */
export async function fetchJobs(): Promise<Job[]> {
  const res = await fetch('/api/jobs');
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}

export async function fetchOneJob(jobId: number): Promise<Job> {
  const res = await fetch(`/api/jobs/${jobId}`);
  if (!res.ok) throw new Error(`fetch Error ${res.status}`);
  return await res.json();
}
