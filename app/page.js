'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { fetchProducts, fetchCategories } from './api';
import ProductGrid from './components/ProductGrid';
import Pagination from './components/Pagination';
import FilterSort from './components/FilterSort';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);

  const page = Number(searchParams.get('page')) || 1;
  const search = searchParams.get('search') || '';
  const category = searchParams.get('category') || '';
  const sortBy = searchParams.get('sortBy') || '';
  const sortOrder = searchParams.get('sortOrder') || 'asc';

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        const [productsData, categoriesData] = await Promise.all([
          fetchProducts({ page, search, category, sortBy, sortOrder }),
          fetchCategories()
        ]);
        setProducts(productsData.products);
        setTotalPages(productsData.totalPages);
        setCategories(categoriesData);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [page, search, category, sortBy, sortOrder]);

  const updateUrl = (newParams) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        updatedSearchParams.set(key, value);
      } else {
        updatedSearchParams.delete(key);
      }
    });
    router.push(`/?${updatedSearchParams.toString()}`);
  };

  if (error) {
    return <div className="text-red-600 text-center p-4 bg-red-100 rounded-lg">Error: {error}</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-indigo-800 mb-8 text-center">Discover Amazing Products</h1>
      <FilterSort
        categories={categories}
        currentCategory={category}
        currentSortBy={sortBy}
        currentSortOrder={sortOrder}
        currentSearch={search}
        onFilter={(newCategory) => updateUrl({ category: newCategory, page: 1 })}
        onSort={(newSortBy, newSortOrder) => updateUrl({ sortBy: newSortBy, sortOrder: newSortOrder, page: 1 })}
        onSearch={(newSearch) => updateUrl({ search: newSearch, page: 1 })}
        onReset={() => router.push('/')}
      />
      {loading ? (
        <div className="text-center p-4">Loading...</div>
      ) : (
        <>
          {products.length > 0 ? (
            <ProductGrid products={products} />
          ) : (
            <div className="text-center p-4">No products found.</div>
          )}
          {totalPages > 1 && (
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(newPage) => updateUrl({ page: newPage })}
            />
          )}
        </>
      )}
    </div>
  );
}