export default function formatSalary(floor: number, ceiling: number): string {
  const floorString = floor.toLocaleString('en-US');
  const ceilingString = ceiling.toLocaleString('en-US');
  return `$${floorString} - ${ceilingString}`;
}
