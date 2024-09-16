/**
 * Reviews component to display customer reviews with a rating and comment.
 *
 * @param {Object} props - The properties passed to the Reviews component.
 * @param {Array} props.reviews - An array of review objects.
 * @param {string} props.reviews[].reviewerName - The name of the reviewer.
 * @param {string} props.reviews[].date - The date when the review was posted.
 * @param {number} props.reviews[].rating - The rating given by the reviewer (from 1 to 5).
 * @param {string} props.reviews[].comment - The review comment text.
 * @returns {JSX.Element} - A component that renders a list of customer reviews.
 */
export default function Reviews({ reviews }) {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-indigo-800">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold text-lg text-indigo-700">{review.reviewerName}</span>
              <span className="text-sm text-purple-600">{new Date(review.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center mb-2">
              <div className="text-yellow-500 mr-2">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <span className="text-purple-700">{review.rating} / 5</span>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
