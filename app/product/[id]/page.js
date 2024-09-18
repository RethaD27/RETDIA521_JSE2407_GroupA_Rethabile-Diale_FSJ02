'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { fetchProductById } from '../../api';
import ImageGallery from '../../components/ImageGallery';
import Reviews from '../../components/Reviews';

export default function ProductPage({ params }) {
  const { id } = params;
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [reviewSort, setReviewSort] = useState('date-desc');

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);
      } catch (e) {
        setError(e.message);
      }
    }

    fetchProduct();
  }, [id]);

  function goBack() {
    if (router) {
      router.back();
    } else {
      window.history.back();
    }
  }

  const sortedReviews = product?.reviews.slice().sort((a, b) => {
    switch (reviewSort) {
      case 'date-desc':
        return new Date(b.date) - new Date(a.date);
      case 'date-asc':
        return new Date(a.date) - new Date(b.date);
      case 'rating-desc':
        return b.rating - a.rating;
      case 'rating-asc':
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  if (error) {
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  if (!product) {
    return <div className="text-gray-500 text-center p-4">Loading...</div>;
  }

  return (
    <div className="py-12">
      <button
        onClick={goBack}
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <span className="font-semibold">Go Back</span>
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <ImageGallery images={product.images} />
          </div>
          <div className="md:w-1/2 p-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h1>
            <p className="text-2xl font-semibold text-indigo-600 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <p className="text-sm text-gray-600 mb-2">Category: {product.category}</p>
            <div className="mb-4">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-2">Rating: {product.rating} / 5</p>
            <p className="text-sm text-gray-600 mb-4">
              Stock: {product.stock}
              {product.stock > 0 ? (
                <span className="text-green-600 ml-2">(In Stock)</span>
              ) : (
                <span className="text-red-600 ml-2">(Out of Stock)</span>
              )}
            </p>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-indigo-800">Customer Reviews</h2>
          <select
            value={reviewSort}
            onChange={(e) => setReviewSort(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="date-desc">Newest First</option>
            <option value="date-asc">Oldest First</option>
            <option value="rating-desc">Highest Rating First</option>
            <option value="rating-asc">Lowest Rating First</option>
          </select>
        </div>
        <Reviews reviews={sortedReviews} />
      </div>
    </div>
  );
}