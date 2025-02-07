import { HeroSection } from "@/components/landing/hero";

export default function HomePage() {
  return (
    <main className="container flex max-w-[1080px] flex-1 flex-col justify-center border border-zinc-800 p-0 text-center">
      <HeroSection />
    </main>
  );
}
