export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center items-center space-x-2 my-12">
      {currentPage > 1 && (
        <button 
          onClick={() => onPageChange(currentPage - 1)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Previous
        </button>
      )}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`${
            currentPage === number
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-indigo-600 hover:bg-indigo-100'
          } font-bold py-2 px-4 rounded transition-colors duration-300`}
        >
          {number}
        </button>
      ))}
      {currentPage < totalPages && (
        <button 
          onClick={() => onPageChange(currentPage + 1)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Next
        </button>
      )}
    </div>
  );
}