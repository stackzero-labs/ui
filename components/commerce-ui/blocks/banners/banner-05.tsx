import React from "react";

function Banner_05() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500">
      {/* Summer themed background patterns */}
      <div className="absolute inset-0">
        <svg
          className="absolute top-0 left-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          <circle cx="80%" cy="60%" r="100" fill="white" fillOpacity="0.1" />
          <circle cx="50%" cy="20%" r="40" fill="white" fillOpacity="0.1" />
          <path
            d="M0 20 L40 0 L40 40 Z"
            fill="white"
            fillOpacity="0.1"
            transform="translate(20, 40)"
          />
          <path
            d="M0 20 L40 0 L40 40 Z"
            fill="white"
            fillOpacity="0.1"
            transform="translate(460, 140) rotate(180)"
          />
        </svg>
      </div>

      <div className="relative z-10 px-6 py-8 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-2 flex items-center justify-center">
            <div className="bg-opacity-20 rounded-full bg-white px-4 py-1 text-sm font-medium tracking-wider text-black uppercase backdrop-blur-sm">
              Limited Time Offer
            </div>
          </div>

          <h2 className="mb-3 text-center text-3xl font-extrabold tracking-wide text-white uppercase md:text-4xl lg:text-5xl">
            Summer Sale
          </h2>

          <div className="mb-4 flex justify-center">
            <div className="relative">
              <div className="text-center text-5xl font-bold text-white md:text-6xl">
                20% OFF
              </div>
              <div className="bg-opacity-20 absolute -top-1 -right-6 rotate-12 rounded-md border-2 border-green-600 bg-green-500 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                EXCLUSIVE
              </div>
            </div>
          </div>

          <p className="text-opacity-90 mb-6 text-center text-lg text-white">
            Refresh your wardrobe with our latest summer collection. All items
            included in this special seasonal promotion!
          </p>

          <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            <button className="hover:bg-opacity-90 rounded-md bg-white px-6 py-3 font-medium text-orange-500 transition-all">
              Shop Summer Collection
            </button>
            <button className="border-opacity-40 hover:bg-opacity-10 rounded-md border border-white bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white">
              View All Deals
            </button>
          </div>

          <div className="text-opacity-80 mt-4 text-center text-sm text-white">
            * Offer valid until August 31st. Cannot be combined with other
            promotions.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner_05;
