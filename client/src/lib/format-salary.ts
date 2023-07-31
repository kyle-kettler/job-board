/**
 * Takes two numbers and formats them into a range
 * @param floor db col salaryFloor
 * @param ceiling db col salaryCeiling
 * @returns formatted string '$XXX,XXX - $XXX-XXX'
 */
export default function formatSalary(floor: number, ceiling: number): string {
  const floorString = floor.toLocaleString('en-US');
  const ceilingString = ceiling.toLocaleString('en-US');
  return `$${floorString} - $${ceilingString}`;
}
