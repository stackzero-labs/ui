import React from "react";

function Banner_03() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 text-white shadow-xl md:flex-row md:items-center md:justify-between">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="z-10 space-y-3 md:w-3/5">
        <div className="inline-block rounded-lg bg-blue-500 px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase">
          New in Stock
        </div>
        <h2 className="text-3xl leading-tight font-bold tracking-tight md:text-4xl lg:text-5xl">
          SoundWave Pro X7 <span className="text-blue-400">Headphones</span>
        </h2>
        <p className="max-w-xl text-sm text-gray-300 md:text-base">
          Experience unrivaled sound quality with our premium noise-cancelling
          headphones. Featuring 40-hour battery life and high-resolution audio
          for the ultimate listening experience.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <button className="rounded-md bg-blue-500 px-6 py-2 font-medium transition-all hover:bg-blue-600">
            Shop Now
          </button>
          <button className="rounded-md border border-white/30 bg-transparent px-6 py-2 font-medium transition-all hover:bg-white/10">
            View Specs
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="relative z-10 mt-6 h-60 w-full md:mt-0 md:h-80 md:w-2/5">
        <div className="absolute -top-4 -right-4 h-60 w-60 rounded-full bg-blue-500/30 blur-xl"></div>
        <div className="relative h-full w-full">
          <img
            src="https://placehold.co/400x400/0077ff/ffffff?text=SoundWave+Pro+X7"
            alt="SoundWave Pro X7 Headphones"
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner_03;
