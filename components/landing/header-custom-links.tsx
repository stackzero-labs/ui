import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export async function HeaderCustomLinks() {
  return (
    <div className="flex flex-1 items-center justify-end gap-1">
      <div className="flex flex-1 items-center justify-start gap-1 md:justify-end">
        <Link
          href="https://stackzero.co"
          target="_blank"
          className="flex items-center justify-end gap-2 px-3 py-1.5 text-sm font-medium text-zinc-800 dark:text-zinc-200"
        >
          <span className="hidden items-center gap-2 md:flex">
            <span className="bg-linear-to-r from-teal-500 to-purple-500 bg-clip-text font-semibold text-transparent">
              Go full-stack
            </span>
          </span>

          <div className="group relative inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-1 text-sm transition-colors dark:bg-zinc-100">
            <div className="absolute inset-0 rounded-lg bg-linear-to-r from-indigo-500 via-purple-500 to-teal-500 opacity-60 blur-sm transition-opacity duration-500 group-hover:opacity-80" />
            <div className="relative">
              <span className="text-nowrap text-white dark:text-zinc-900">
                Commerce API
              </span>
            </div>
            <ArrowUpRight className="relative h-3.5 w-3.5 text-white/90 dark:text-zinc-900/90" />
          </div>
        </Link>
      </div>
    </div>
  );
}
