"use client";

import React, { useState, useEffect } from "react";

function Banner_02() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 p-6 shadow-lg">
      {/* Enhanced background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-8 -left-8 h-32 w-32 animate-pulse rounded-full bg-amber-500"></div>
        <div className="absolute right-0 bottom-0 h-40 w-40 rounded-full bg-amber-600 blur-md"></div>
        <div className="absolute bottom-12 left-1/3 h-24 w-24 rounded-full bg-amber-400 blur-sm"></div>
        <div className="absolute top-1/2 right-1/4 h-16 w-16 rounded-full bg-amber-600"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_70%,rgba(251,191,36,0.1),transparent)]"></div>
      </div>

      {/* Banner content with animations */}
      <div className="relative z-10 flex flex-col items-center space-y-5 text-center md:flex-row md:justify-between md:space-y-0 md:text-left">
        <div
          className={`space-y-3 transition-all duration-700 md:max-w-2xl ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <div className="flex items-center justify-center md:justify-start">
            <span className="relative inline-block rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-3 py-1.5 text-xs font-semibold text-white">
              NEW ARRIVAL
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-amber-500"></span>
              </span>
            </span>
          </div>
          <h2 className="text-2xl font-bold text-amber-900 md:text-3xl lg:text-4xl">
            Introducing the{" "}
            <span className="relative">
              Autumn Essentials
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-amber-600"></span>
            </span>{" "}
            Collection
          </h2>
          <p className="max-w-lg text-amber-700">
            Our latest seasonal collection is now available. Discover premium
            quality pieces designed for comfort and style that embrace the warm
            colors of fall.
          </p>
        </div>
        <div
          className={`flex space-x-3 transition-all delay-200 duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <button className="group relative overflow-hidden rounded-md bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-3 font-medium text-white shadow-md transition-all hover:shadow-lg">
            <span className="absolute inset-0 h-full w-1/3 -translate-x-full transform bg-white opacity-20 transition-transform duration-300 group-hover:translate-x-full"></span>
            Shop Now
          </button>
          <button className="relative rounded-md border-2 border-amber-600 px-6 py-2.5 font-medium text-amber-700 transition-all hover:bg-amber-50 hover:shadow-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner_02;
