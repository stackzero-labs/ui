import { Button } from "@/components/ui/button";
import { Banner } from "fumadocs-ui/components/banner";
import Link from "next/link";

export const DocsBanners = () => {
  return (
    <>
      <Banner id="new-product-cards">
        <span className="relative mr-3 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-500"></span>
        </span>
        <p>+13 New Product Cards Released!</p>
        <Button asChild variant="link" className="text-violet-300">
          <Link href="/docs/blocks/product-card">Browse Product Cards</Link>
        </Button>
      </Banner>
    </>
  );
};
