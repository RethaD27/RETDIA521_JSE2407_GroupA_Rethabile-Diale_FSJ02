'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

/**
 * ProductCard Component displays a single product with an image carousel, title, price, and a link to product details.
 *
 * @param {Object} props - The properties object.
 * @param {Object} props.product - The product object containing details to be displayed.
 * @param {string} props.product.id - The unique identifier of the product.
 * @param {string[]} props.product.images - An array of image URLs for the product.
 * @param {string} props.product.thumbnail - The URL of the product's thumbnail image.
 * @param {string} props.product.title - The title of the product.
 * @param {number} props.product.price - The price of the product.
 * @returns {JSX.Element} - A component that displays the product card with image carousel and details.
 */
const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /**
   * Moves to the next image in the carousel.
   * @param {React.MouseEvent} e - The click event.
   */
  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % product.images.length
    );
  };

  /**
   * Moves to the previous image in the carousel.
   * @param {React.MouseEvent} e - The click event.
   */
  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) => 
      (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <Link href={`/product/${product.id}`}>
        <div className="relative">
          <Image 
            src={product.images[currentImageIndex] || product.thumbnail} 
            alt={product.title} 
            width={250}
            height={250}
            objectFit="cover"
          />
          {product.images.length > 1 && (
            <>
              <button 
                onClick={prevImage} 
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-xl"
                aria-label="Previous image"
              >
                &#8249;
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full w-8 h-8 flex items-center justify-center text-xl"
                aria-label="Next image"
              >
                &#8250;
              </button>
            </>
          )}
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold text-indigo-800 mb-2 truncate">{product.title}</h2>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-purple-600">${product.price.toFixed(2)}</span>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

/**
 * ProductGrid Component renders a grid of ProductCard components.
 *
 * @param {Object} props - The properties object.
 * @param {Object[]} props.products - An array of product objects to be displayed.
 * @param {string} props.products.id - The unique identifier of each product.
 * @param {string[]} props.products.images - An array of image URLs for each product.
 * @param {string} props.products.thumbnail - The URL of each product's thumbnail image.
 * @param {string} props.products.title - The title of each product.
 * @param {number} props.products.price - The price of each product.
 * @returns {JSX.Element} - A component that displays a grid of product cards.
 */
export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
