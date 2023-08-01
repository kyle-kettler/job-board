import { Job, Level } from './api';

/**
 * @param searchInput state variable for a controlled input
 * @param item a Job object
 * @returns a boolean.
 */
export function matchesSearch(searchInput: string, item: Job): boolean {
  return searchInput
    ? item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.companyName.toLowerCase().includes(searchInput.toLowerCase())
    : true;
}

/**
 * @param locationSelect state variable for a controlled select
 * @param item a Job object
 * @returns a boolean
 */
export function matchesLocation(locationSelect: string, item: Job): boolean {
  return locationSelect ? item.location === locationSelect : true;
}

/**
 * @param levelSelect state variable for a controlled select
 * @param item a Job object
 * @returns a boolean
 */
export function matchesLevel(levelSelect: Level, item: Job): boolean {
  return levelSelect ? item.level === levelSelect : true;
}

/**
 * @param salarySelect state variable for a controlled select
 * @param item a Job object
 * @returns a boolean
 */
export function matchesSalary(salarySelect: number, item: Job): boolean {
  return salarySelect
    ? item.salaryFloor >= salarySelect &&
        item.salaryFloor < salarySelect + 50000
    : true;
}
