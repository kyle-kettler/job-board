/**
 * Formats timestamp from db
 * @param date - timestamp from db
 * @returns formated date 'MM/DD/YY'
 */
export default function formatDate(date: string): string {
  const [year, month, rest] = date.split('-');
  const twoDigitYear = year.slice(2);
  const [day] = rest.split('T');
  const formattedDate = `${month}/${day}/${twoDigitYear}`;
  return formattedDate;
}
