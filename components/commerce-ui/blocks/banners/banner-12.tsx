"use client";
import React, { useState, useEffect } from "react";

function Banner_12() {
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
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-950 to-zinc-900 px-6 py-6 shadow-2xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top right circle with slow rotation */}
        <div className="absolute -top-20 -right-20 h-48 w-48 animate-[spin_20s_linear_infinite] rounded-full bg-gradient-to-br from-teal-400 to-teal-600 opacity-10 blur-xl"></div>

        {/* Bottom left circle */}
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-teal-600 opacity-10 blur-xl"></div>

        {/* Multiple diagonal lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 h-full w-px rotate-45 bg-gradient-to-b from-transparent via-teal-400 to-transparent"></div>
          <div className="absolute top-0 left-2/3 h-full w-px rotate-45 bg-gradient-to-b from-transparent via-teal-400 to-transparent"></div>
          <div className="absolute top-0 left-1/2 h-full w-px rotate-45 bg-gradient-to-b from-transparent via-teal-400 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <div
          className={`flex items-center gap-4 transition-all duration-700 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-1 animate-[spin_4s_linear_infinite] rounded-full bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400 opacity-70 blur-sm"></div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-teal-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <span className="inline-flex rounded-md bg-teal-400/20 px-3 py-1 text-sm font-bold text-teal-400">
                90 DAYS
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white md:text-3xl">
              Free Returns on All Products
            </h3>
            <p className="text-base font-medium text-slate-300">
              Shop with complete{" "}
              <span className="text-teal-400">confidence</span> — no questions
              asked return policy
            </p>
          </div>
        </div>

        <div
          className={`flex flex-col items-center gap-3 transition-all delay-300 duration-700 sm:flex-row ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
        >
          <button className="group relative w-full overflow-hidden rounded-md bg-gradient-to-r from-teal-500 to-emerald-600 px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl hover:shadow-teal-500/20 sm:w-auto">
            <span className="absolute inset-0 h-full w-1/3 -translate-x-full transform bg-white opacity-20 transition-transform duration-300 group-hover:translate-x-full"></span>
            Learn More
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

      {/* Policy highlights */}
      <div
        className={`relative z-10 mt-6 grid grid-cols-2 gap-4 border-t border-slate-700/50 pt-5 transition-all delay-500 duration-700 sm:grid-cols-4 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-2 rounded-full bg-teal-400/10 p-2">
            <svg
              className="h-5 w-5 text-teal-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <span className="text-sm font-bold text-white">90 Day Window</span>
          <span className="text-xs text-slate-400">Extended Period</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-2 rounded-full bg-teal-400/10 p-2">
            <svg
              className="h-5 w-5 text-teal-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </div>
          <span className="text-sm font-bold text-white">All Products</span>
          <span className="text-xs text-slate-400">Store-wide</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-2 rounded-full bg-teal-400/10 p-2">
            <svg
              className="h-5 w-5 text-teal-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <span className="text-sm font-bold text-white">Full Refund</span>
          <span className="text-xs text-slate-400">Money Back</span>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="mb-2 rounded-full bg-teal-400/10 p-2">
            <svg
              className="h-5 w-5 text-teal-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <span className="text-sm font-bold text-white">Free Shipping</span>
          <span className="text-xs text-slate-400">No Extra Cost</span>
        </div>
      </div>
    </div>
  );
}

export default Banner_12;
