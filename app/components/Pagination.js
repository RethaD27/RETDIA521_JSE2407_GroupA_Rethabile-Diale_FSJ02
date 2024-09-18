/**
 * Pagination component for navigating through pages.
 * 
 * @param {Object} props - The props for the component.
 * @param {number} props.currentPage - The current page number.
 * @param {number} props.totalPages - Total number of pages.
 * @param {function} props.onPageChange - Function to handle page changes.
 * @param {boolean} props.hasMore - (Optional) Indicates if there are more pages available, used for dynamic content.
 * @returns {JSX.Element} The Pagination component.
 */
export default function Pagination({ currentPage, totalPages, onPageChange, hasMore = true }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center space-x-4 my-12">
      {/* Previous button */}
      {currentPage > 1 && (
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          ← Previous
        </button>
      )}

      {/* Page number buttons */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`px-4 py-2 rounded-md ${
            number === currentPage
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-600 hover:bg-indigo-100'
          }`}
        >
          {number}
        </button>
      ))}

      {/* Next button */}
      {(currentPage < totalPages || hasMore) && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          Next →
        </button>
      )}
    </div>
  );
}
