import ComponentsShowcase from "@/components/landing/components-showcase";
import { HeroSection } from "@/components/landing/hero";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container flex flex-1 flex-col justify-center p-0 text-center">
      <HeroSection />

      <ComponentsShowcase />

      <div className="px-4">
        <div className="from-background relative container flex flex-row flex-wrap items-center justify-around gap-6 rounded-lg border px-4 py-12">
          <GridPattern
            width={20}
            height={20}
            opacity={0.5}
            x={-1}
            y={-1}
            className={cn(
              "[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]"
            )}
          />
          <h1 className="text-2xl font-semibold tracking-tighter md:text-5xl">
            And many more
          </h1>

          <div>
            <Button
              className="group/arrow text-sm font-bold md:px-4 md:py-4"
              asChild
              size="lg"
            >
              <Link href="/docs/components/rating-star/basic">
                Browse All Components
                <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
              </Link>
            </Button>
            <div className="mt-4 w-full text-center">
              <p>
                100% free and <span className="font-semibold">Open Source</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
