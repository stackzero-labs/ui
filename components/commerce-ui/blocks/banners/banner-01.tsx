"use client";

import React, { useState, useEffect } from "react";

function Banner_01() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 p-8 text-white shadow-xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-16 h-32 w-32 animate-pulse rounded-full bg-white opacity-10"></div>
        <div className="absolute top-5 right-10 h-12 w-12 rounded-full bg-white opacity-10"></div>
        <div className="absolute -right-8 -bottom-8 h-32 w-32 animate-pulse rounded-full bg-blue-400 opacity-20 delay-300"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
        <div
          className={`transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <p className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-semibold tracking-wider backdrop-blur-sm">
            JUST RELEASED
          </p>
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            New Collection <span className="text-blue-200">Launch</span>
          </h1>
          <p className="mt-3 max-w-md text-sm text-blue-100 md:text-base">
            Exclusive designs at special introductory prices. Limited time offer
            ending soon. Don&apos;t miss out.
          </p>
        </div>

        <div
          className={`transition-all delay-300 duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <button className="group relative overflow-hidden rounded-full bg-white px-8 py-3 font-medium text-blue-600 shadow-md transition-all hover:shadow-lg">
            <span className="absolute inset-0 h-full w-1/2 -translate-x-full transform bg-gradient-to-r from-blue-400/20 via-transparent to-transparent transition-transform duration-300 group-hover:translate-x-full"></span>
            Shop Now
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner_01;
