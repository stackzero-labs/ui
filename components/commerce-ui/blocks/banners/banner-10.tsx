"use client";
import React, { useState, useEffect } from "react";

function Banner_10() {
  // State to control banner visibility
  const [isVisible, setIsVisible] = useState(true);
  // State to handle animation entry
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Hide banner when user dismisses it
  const dismissBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 py-6 shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top right golden circle that rotates slowly */}
        <div className="absolute -top-16 -right-16 h-40 w-40 animate-[spin_15s_linear_infinite] rounded-full bg-gradient-to-br from-amber-400 to-amber-600 opacity-20 blur-md"></div>

        {/* Bottom left circle with scale effect */}
        <div className="absolute bottom-0 -left-20 h-48 w-48 animate-[ping_4s_ease-in-out_infinite] rounded-full bg-indigo-600 opacity-10 blur-lg"></div>

        {/* Center small stars twinkling */}
        <div className="absolute top-1/2 left-1/3 h-1 w-1 animate-[pulse_2s_ease-in-out_infinite] rounded-full bg-white"></div>
        <div className="absolute top-1/4 left-2/3 h-2 w-2 animate-[pulse_3s_ease-in-out_infinite] rounded-full bg-white"></div>
        <div className="absolute top-3/4 left-1/4 h-1.5 w-1.5 animate-[pulse_2.5s_ease-in-out_infinite] rounded-full bg-white"></div>

        {/* Multiple diagonal lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 h-full w-0.5 -rotate-45 bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
          <div className="absolute top-0 left-1/3 h-full w-0.5 -rotate-45 bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
          <div className="absolute top-0 left-2/3 h-full w-0.5 -rotate-45 bg-gradient-to-b from-transparent via-amber-400 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div
          className={`flex items-center gap-4 text-center transition-all duration-1000 md:text-left ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-1 animate-[spin_3s_linear_infinite] rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 opacity-70 blur-sm"></div>
              <div className="relative aspect-square rounded-full bg-slate-900 p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="space-y-1">
              <div className="flex items-center justify-center gap-2 md:justify-start">
                <span className="inline-flex rounded-md bg-amber-400/20 px-3 py-1 text-sm font-bold text-amber-400">
                  VIP ACCESS
                </span>
                <span className="inline-block h-1.5 w-1.5 animate-ping rounded-full bg-amber-400"></span>
              </div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">
                Premium Membership Launch
              </h3>
            </div>
            <p className="text-base font-medium text-slate-300">
              Introducing our exclusive{" "}
              <span className="text-amber-400">VIP Program</span> with priority
              access and unique benefits
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col items-center gap-3 transition-all delay-300 duration-1000 sm:flex-row ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <button className="group relative w-full overflow-hidden rounded-md bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl hover:shadow-amber-500/20 sm:w-auto">
            <span className="absolute inset-0 h-full w-1/3 -translate-x-full transform bg-white opacity-20 transition-transform duration-300 group-hover:translate-x-full"></span>
            Join Now
          </button>

          <button
            className="flex-shrink-0 text-white opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
            onClick={dismissBanner}
            aria-label="Dismiss"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner_10;
