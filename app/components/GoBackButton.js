"use client";

const GoBackButton = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
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
  );
};

export default GoBackButton;
