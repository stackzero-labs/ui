"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import Link from "next/link";
import ComponentsShowcase from "./components-showcase";
import { LineShadowText } from "../magicui/line-shadow-text";
import { useTheme } from "next-themes";

const heroText = "Build commerce sites and apps faster than ever";
const heroSubText =
  "Copy-paste components, blocks and examples that you can use in your next e-commerce project.";

const HeroTitle = () => {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";

  const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
  const words = heroText.split(" ");
  const variants = {
    hidden: { filter: "blur(10px)", opacity: 0, transform: "translateY(20%)" },
    visible: { filter: "blur(0)", opacity: 1, transform: "translateY(0)" },
  };
  return (
    <>
      <div className="items-left flex flex-col">
        <div className="text-muted-foreground bg-background text-md mb-8 flex w-fit flex-row items-center gap-2 rounded-lg border p-2 text-center font-normal tracking-wider shadow-md shadow-cyan-500/20">
          <Icons.tailwind className="h-4 w-4" />
          <p>Tailwindcss v.4 ready</p>
        </div>

        <h1 className="mb-4 text-4xl leading-none font-semibold tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          Build{" "}
          <span className="bg-gradient-to-r from-violet-500 to-teal-500 bg-clip-text text-transparent">
            commerce
          </span>{" "}
          sites and apps
          <LineShadowText className="italic" shadowColor={shadowColor}>
            faster
          </LineShadowText>
        </h1>

        <p className="text-muted-foreground mb-8 text-xl font-light text-balance">
          Copy-paste components and blocks that you can use in your next
          e-commerce project.
        </p>
        <div className="items-left flex flex-wrap items-center justify-start gap-6 align-middle">
          <div>
            <Button variant="secondary" className="font-bold" asChild>
              <Link href="/docs"> Get started</Link>
            </Button>
          </div>
          <div>
            <Button className="group/arrow font-bold" asChild>
              <Link href="/docs/components/rating-star/basic">
                Browse Components
                <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div>
            <p>
              100% free and <span className="font-semibold">Open Source</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export function HeroSection() {
  return (
    // <div className="container mx-auto flex min-h-screen flex-col items-center justify-center gap-12 px-4 pt-16 sm:pt-24 lg:flex-row lg:pt-0">
    //   <div className="flex w-full flex-col items-start space-y-4 text-left sm:space-y-8 lg:w-1/2">
    //     <div className="max-w-2xl">
    //       <h1 className="text-4xl leading-[1.1] font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-100">
    //         Build <span>commerce sites</span> faster than ever <br />
    //       </h1>
    //       <p className="mt-4 mb-6 text-lg text-zinc-600 dark:text-zinc-400">
    //         A collection of reusable components that you can copy and paste into
    //         your web apps.
    //       </p>
    //     </div>
    //     <div className="flex flex-col justify-start">
    //       <span className="flex items-center gap-2 pb-2 text-start text-sm text-zinc-500 dark:text-zinc-300">
    //         Tailwind CSS 4.0 ready
    //       </span>

    //       <div className="flex flex-row gap-2">
    //         <Button size="lg" variant="outline" asChild>
    //           <Link href="/docs">Get Started</Link>
    //         </Button>
    //         <Button size="lg" asChild>
    //           <Link href="/docs/components/variant-selector/basic">
    //             Browse Components
    //           </Link>
    //         </Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <section className="relative rounded-xl px-4 md:px-0">
        <div className="absolute top-0 right-0 bottom-0 left-0 rounded-xl bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="place-items-left mx-auto my-6 grid gap-8 py-6 md:py-12">
          <div className="relative z-20 max-w-screen-md space-y-8 text-left">
            <HeroTitle />
          </div>
        </div>

        <ComponentsShowcase />
      </section>
    </>
  );
}
