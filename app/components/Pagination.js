import Link from 'next/link';

/**
 * Pagination component for navigating through pages.
 * 
 * @param {Object} props - The props for the component.
 * @param {number} props.currentPage - The current page number.
 * @param {boolean} props.hasMore - Indicates if there are more pages available.
 * @returns {JSX.Element} The Pagination component.
 */
export default function Pagination({ currentPage, hasMore }) {
  return (
    <div className="flex justify-center items-center space-x-4 my-12">
      {currentPage > 1 && (
        <Link 
          href={`/?page=${currentPage - 1}`} 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          ← Previous
        </Link>
      )}
      <span className="text-indigo-800 font-semibold">Page {currentPage}</span>
      {hasMore && (
        <Link 
          href={`/?page=${currentPage + 1}`} 
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300"
        >
          Next →
        </Link>
      )}
    </div>
  );
}
