'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ImageGallery from '../../components/ImageGallery';
import Reviews from '../../components/Reviews';
import { fetchProductById } from '@/app/api';

export default function ProductPage({ params }) {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reviewSort, setReviewSort] = useState('date-desc');

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await fetchProductById(params.id);
        setProduct(data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [params.id]);

  function goBack() {
    router.back();
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-indigo-500"></div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-gray-500 text-center p-4">Product not found.</div>;
  }

  const sortedReviews = product.reviews.slice().sort((a, b) => {
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

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-r from-indigo-50 to-purple-50">
      <button
        onClick={goBack}
        className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 mb-8 transition-colors duration-300 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform group-hover:-translate-x-1 transition-transform duration-300"
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

      <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
        <div className="md:flex">
          <div className="md:w-1/2">
            <ImageGallery images={product.images} />
          </div>
          <div className="md:w-1/2 p-8 bg-gradient-to-br from-white to-indigo-50">
            <h1 className="text-4xl font-bold mb-4 text-indigo-800">{product.title}</h1>
            <p className="text-3xl font-semibold text-indigo-600 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">{product.description}</p>
            <p className="text-sm text-gray-600 mb-2">Category: <span className="font-semibold text-indigo-700">{product.category}</span></p>
            <div className="mb-4 flex flex-wrap">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-indigo-100 text-indigo-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 transform hover:scale-105 transition-transform duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-600 mb-2">Rating: <span className="font-semibold text-yellow-500">{product.rating} / 5</span></p>
            <p className="text-sm text-gray-600 mb-4">
              Stock: <span className="font-semibold">{product.stock}</span>
              {product.stock > 0 ? (
                <span className="text-green-600 ml-2 font-semibold">(In Stock)</span>
              ) : (
                <span className="text-red-600 ml-2 font-semibold">(Out of Stock)</span>
              )}
            </p>
            <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4 sm:mb-0">Customer Reviews</h2>
          <select
            value={reviewSort}
            onChange={(e) => setReviewSort(e.target.value)}
            className="p-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 bg-white"
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