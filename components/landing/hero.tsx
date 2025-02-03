"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-4 pt-16 sm:pt-24 lg:flex-row lg:pt-0">
      <div className="flex w-full flex-col items-start space-y-4 text-left sm:space-y-8 lg:w-1/2">
        <div className="max-w-2xl">
          <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-100">
            Build <span>commerce sites</span> faster than ever <br />
          </h1>
          <p className="mt-4 mb-6 text-lg text-zinc-600 dark:text-zinc-400">
            A collection of reusable components that you can copy and paste into
            your web apps.
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <span className="flex items-center gap-2 pb-2 text-start text-sm text-zinc-500 dark:text-zinc-300">
            Tailwind CSS 4.0 ready
          </span>

          <div className="flex flex-row gap-2">
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button size="lg" asChild>
              <Link href="/docs/components/variant-selector/basic">
                Browse Components
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
