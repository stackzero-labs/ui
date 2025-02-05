import { HeroSection } from "@/components/landing/hero";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container flex max-w-[1080px] flex-1 flex-col justify-center border border-1 border-zinc-800 p-0 text-center">
      <HeroSection />
    </main>
  );
}
