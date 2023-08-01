import { Job, Level } from './api';

export function matchesSearch(searchInput: string, item: Job) {
  return searchInput
    ? item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        item.companyName.toLowerCase().includes(searchInput.toLowerCase())
    : true;
}

export function matchesLocation(locationSelect: string, item: Job) {
  return locationSelect ? item.location === locationSelect : true;
}

export function matchesLevel(levelSelect: Level, item: Job) {
  return levelSelect ? item.level === levelSelect : true;
}

export function matchesSalary(salarySelect: number, item: Job) {
  return salarySelect
    ? item.salaryFloor >= salarySelect &&
        item.salaryFloor < salarySelect + 50000
    : true;
}
