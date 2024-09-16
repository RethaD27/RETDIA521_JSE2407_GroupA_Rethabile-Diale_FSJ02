const API_BASE_URL = 'https://next-ecommerce-api.vercel.app';

/**
 * Fetches a list of products from the API with pagination.
 *
 * @param {number} [page=1] - The current page number for pagination.
 * @param {number} [limit=20] - The number of products to fetch per page.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of products.
 * @throws {Error} If the fetch request fails.
 */
export async function fetchProducts(page = 1, limit = 20) {
  const skip = (page - 1) * limit;
  const response = await fetch(`${API_BASE_URL}/products?limit=${limit}&skip=${skip}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  // Returns the response as a JSON object
  return response.json();
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

  // Returns the product data as a JSON object
  return response.json();
}
