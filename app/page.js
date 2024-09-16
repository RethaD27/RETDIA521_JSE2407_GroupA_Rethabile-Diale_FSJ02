import { fetchProducts } from './api';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';

/**
 * Renders the home page with products and pagination.
 *
 * @param {Object} props - The properties passed to the Home component.
 * @param {Object} props.searchParams - The search parameters for the current page.
 * @param {string} [props.searchParams.page] - The current page number from the query string.
 * @returns {JSX.Element} - The rendered home page component with product grid and pagination.
 */
export default async function Home({ searchParams }) {
  const page = Number(searchParams.page) || 1;
  let products;
  let error;

  try {
    // Fetches the list of products for the current page
    products = await fetchProducts(page);
  } catch (e) {
    // Captures the error if the product fetching fails
    error = e.message;
  }

  if (error) {
    return <div className="text-red-600 text-center p-4 bg-red-100 rounded-lg">Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">Discover Amazing Products</h1>
      {/* Display the products in a grid */}
      <ProductGrid products={products} />
      {/* Pagination component, checks if there are more products */}
      <Pagination currentPage={page} hasMore={products.length === 20} />
    </div>
  );
}
