const API_BASE_URL = 'https://next-ecommerce-api.vercel.app';

export async function fetchProducts(params = {}) {
  const {
    page = 1,
    limit = 20,
    search = '',
    category = '',
    sortBy = '',
    sortOrder = 'asc'
  } = params;

  const queryParams = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    search,
    category,
    sortBy,
    sortOrder
  });

  const response = await fetch(`${API_BASE_URL}/products?${queryParams}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();
  return {
    products: data.products || [],
    totalPages: data.total ? Math.ceil(data.total / limit) : 1
  };
}

export async function fetchProductById(id) {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }

  return response.json();
}

export async function fetchCategories() {
  const response = await fetch(`${API_BASE_URL}/categories`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch categories');
  }

  return response.json();
}