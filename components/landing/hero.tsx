"use client";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { GridPattern } from "../magicui/grid-pattern";
import { LineShadowText } from "../magicui/line-shadow-text";
import { Button } from "../ui/button";
import { TechStatck } from "./tech-stack";
import { Icons } from "../ui/icons";

const HeroTitle = () => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 hidden text-4xl leading-none font-semibold tracking-tighter text-balance sm:text-5xl md:block md:text-6xl lg:text-7xl">
          Build{" "}
          <span className="bg-gradient-to-r from-violet-500 to-teal-500 bg-clip-text text-transparent">
            commerce
          </span>{" "}
          sites and apps{" "}
          <LineShadowText className="italic" shadowColor={shadowColor}>
            faster
          </LineShadowText>
        </h1>

        <h1 className="mb-4 block text-6xl leading-none font-semibold tracking-tighter text-balance sm:text-5xl md:hidden md:text-6xl lg:text-7xl">
          Build{" "}
          <span className="bg-gradient-to-r from-violet-500 to-teal-500 bg-clip-text text-transparent">
            commerce
          </span>{" "}
          apps <span className="italic">faster</span>
        </h1>

        <p className="text-muted-foreground mb-8 text-2xl font-light text-balance md:text-xl">
          <span className="text-foreground font-normal">
            Copy-paste components{" "}
          </span>{" "}
          and blocks that you can use in your next{" "}
          <span className="text-foreground font-normal">
            e-commerce project
          </span>
          .
        </p>

        <div className="flex flex-row gap-4">
          <div className="hidden md:block">
            <Button
              className="group/arrow px-7 py-7 text-lg font-bold md:px-4 md:py-4 md:text-sm"
              asChild
              size="lg"
              variant="secondary"
            >
              <Link href="/docs/components/rating-star/basic">
                Get Started
                <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div>
            <Button
              className="group/arrow px-7 py-7 text-lg font-bold md:px-4 md:py-4 md:text-sm"
              asChild
              size="lg"
            >
              <Link href="/docs/components/rating-star/basic">
                Browse Components
                <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-6 w-full text-center">
          <p>
            100% free and <span className="font-semibold">Open Source</span>
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <TechStatck />
          <div className="mb-8 flex w-fit flex-row items-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/20 p-2 px-6 text-center text-sm font-normal tracking-wider uppercase shadow-md">
            <Icons.tailwind className="h-6 w-6" />
            <p>Tailwindcss v.4 ready</p>
          </div>
        </div>
      </div>
    </>
  );
};

export function HeroSection() {
  return (
    <section className="relative rounded-xl px-4 md:px-0">
      <div className="absolute hidden size-full h-[600px] w-full items-center justify-center overflow-hidden [mask-image:radial-gradient(circle,#000_10%,transparent_80%)] md:flex">
        <GridPattern
          width={20}
          height={20}
          x={-1}
          y={-1}
          opacity={0.6}
          className={cn(
            "[mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"
          )}
        />
      </div>
      <div className="mx-auto my-6 grid place-items-center gap-8 py-6 md:py-12">
        <div className="relative z-20 max-w-screen-md space-y-8 text-center">
          <HeroTitle />
        </div>
      </div>
    </section>
  );
}
