export type PaginationProps = {
  itemsPerPage: number;
  totalItems?: number;
  currentPage: number;
  paginate: (page: number) => void;
};

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: PaginationProps) {
  const pageNumbers = [];

  if (totalItems) {
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav className="mt-4 py-2 border-t border-b w-full max-w-152">
      <ul className="flex justify-center gap-2">
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              className={`${
                currentPage === page ? `bg-stone-100` : ``
              } rounded text-sm w-6 h-6 flex justify-center items-center font-light cursor-pointer hover:bg-stone-100 transition-colors`}
              onClick={() => paginate(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
