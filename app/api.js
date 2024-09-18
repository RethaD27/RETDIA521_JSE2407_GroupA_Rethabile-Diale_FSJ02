const API_BASE_URL = 'https://next-ecommerce-api.vercel.app';

/**
 * Fetches a list of products from the API with optional pagination, search, category filtering, and sorting.
 *
 * @param {Object} [params={}] - Parameters for fetching products.
 * @param {number} [params.page=1] - The current page number for pagination.
 * @param {number} [params.limit=20] - The number of products to fetch per page.
 * @param {string} [params.search=''] - Search query to filter products by name or description.
 * @param {string} [params.category=''] - Category to filter products.
 * @param {string} [params.sortBy='price'] - Field to sort products by (e.g., 'price', 'name').
 * @param {string} [params.sortOrder='asc'] - Sort order ('asc' for ascending, 'desc' for descending).
 * @returns {Promise<Object>} - A promise that resolves to an object containing products, totalPages, and totalProducts.
 * @throws {Error} If the fetch request fails.
 */
export async function fetchProducts(params = {}) {
  const {
    page = 1,
    limit = 20,
    search = '',
    category = '',
    sortBy = 'price',
    sortOrder = 'asc',
  } = params;

  // Calculate skip value for pagination
  const skip = (page - 1) * limit;

  // Create query parameters
  const queryParams = new URLSearchParams({
    limit: limit.toString(),
    skip: skip.toString(),
    search,
    category,
    sortBy,
    sortOrder,
  });

  // Make the API request with query parameters
  const response = await fetch(`${API_BASE_URL}/products?${queryParams}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  // Parse and return the response data
  const data = await response.json();
  return {
    products: data || [],
    totalPages: data.totalPages || 1,
    totalProducts: data.totalProducts || 0,
  };
}

/**
 * Fetches a specific product by its ID from the API.
 *
 * @param {string} id - The ID of the product to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the product data.
 * @throws {Error} If the fetch request fails.
 */
export async function fetchProductById(id) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }

  // Parse and return the product data
  return response.json();
}

/**
 * Fetches a list of product categories from the API.
 *
 * @returns {Promise<Object[]>} - A promise that resolves to an array of categories.
 * @throws {Error} If the fetch request fails.
 */
export async function fetchCategories() {
  const response = await fetch(`${API_BASE_URL}/categories`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  // Parse and return the categories
  return response.json();
}
