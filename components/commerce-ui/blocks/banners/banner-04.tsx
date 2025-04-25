import React from "react";

function Banner_04() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-0.5">
      {/* Inner container with border effect */}
      <div className="relative rounded-md bg-white p-6 dark:bg-gray-900">
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-purple-500 opacity-10"></div>
        <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-indigo-500 opacity-10"></div>

        <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Left: Badge icon */}
          <div className="flex-shrink-0">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          {/* Middle: Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-1 inline-flex rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300">
              Exclusive Membership
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Join Our Loyalty Rewards Program
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Earn points with every purchase, get exclusive discounts, early
              access to sales, and personalized offers.
            </p>
          </div>

          {/* Right: Call to action */}
          <div className="flex-shrink-0">
            <button className="rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-5 py-2.5 font-medium text-white shadow-md transition-all hover:from-indigo-700 hover:to-purple-700">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner_04;
