'use client';
import { useState } from 'react';
import Image from 'next/image';

/**
 * ImageGallery component renders a product's images with navigational controls for cycling through the images.
 * It also displays a clickable thumbnail gallery for selecting specific images.
 *
 * @param {Object} props - The properties object.
 * @param {string[]} props.images - An array of image URLs to display in the gallery.
 * @returns {JSX.Element} - A component that renders the image gallery with navigation and thumbnails.
 */
export default function ImageGallery({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  /**
   * Go to the next image in the gallery. Cycles back to the first image if on the last one.
   */
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  /**
   * Go to the previous image in the gallery. Cycles to the last image if on the first one.
   */
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  /**
   * Set the currently displayed image to the one clicked in the thumbnail gallery.
   *
   * @param {number} index - The index of the image to display.
   */
  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="relative">
      {/* Main product image */}
      <Image 
        src={images[currentImage]} 
        alt="Product" 
        width={800} 
        height={600} 
        objectFit="cover"
        className="w-full h-auto rounded-lg shadow-md"
      />
      
      {images.length > 1 && (
        <>
          {/* Previous image button */}
          <button 
            onClick={prevImage} 
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors duration-300"
            aria-label="Previous image"
          >
            &#8592;
          </button>

          {/* Next image button */}
          <button 
            onClick={nextImage} 
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors duration-300"
            aria-label="Next image"
          >
            &#8594;
          </button>

          {/* Thumbnail gallery */}
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                width={100} 
                height={100}
                objectFit="cover"
                className={`h-16 w-16 object-cover cursor-pointer rounded-md transition-transform duration-300 hover:scale-110 ${currentImage === index ? 'border-2 border-indigo-600' : 'border border-gray-300'}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
