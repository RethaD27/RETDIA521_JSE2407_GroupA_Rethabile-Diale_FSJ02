"use client"; // Marks this as a Client Component

import { useState } from 'react';
import Reviews from '../../components/Reviews';

export default function ReviewsSection({ reviews }) {
  const [reviewSort, setReviewSort] = useState('date-desc');

  const sortedReviews = [...reviews].sort((a, b) => {
    if (reviewSort === 'date-desc') {
      return new Date(b.date) - new Date(a.date);
    } else if (reviewSort === 'date-asc') {
      return new Date(a.date) - new Date(b.date);
    } else if (reviewSort === 'rating-desc') {
      return b.rating - a.rating;
    } else if (reviewSort === 'rating-asc') {
      return a.rating - b.rating;
    }
    return 0;
  });

  return (
    <div className="mt-16 px-8 pb-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-indigo-800 mb-4 sm:mb-0">
          Customer Reviews
        </h2>
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
  );
}
