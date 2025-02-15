"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import {
  useHeadroom,
  useInViewport,
  useScrollSpy,
  useWindowScroll,
} from "@mantine/hooks";
import { ArrowLeft, Check, ChevronUp, Share } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export function Control({ url }: { url: string }): React.ReactElement {
  const [text, setText] = useState("Share Post");

  const onClick = async (): Promise<void> => {
    await navigator.clipboard.writeText(`${window.location.origin}${url}`);
    setText("Copied");

    // Reset after 2 seconds
    setTimeout(() => {
      setText("Share Post");
    }, 2000);
  };

  return (
    <button
      className={cn(
        buttonVariants({ className: "gap-2", variant: "secondary" })
      )}
      onClick={onClick}
    >
      {text === "Share Post" ? (
        <Share className="size-4" />
      ) : (
        <Check className="size-4" />
      )}
      <p>{text}</p>
    </button>
  );
}

export function BlogTitle({
  author,
  date,
  description,
  name,
  title,
}: {
  title: string;
  description: string | undefined;
  author: string | undefined;
  date: string | Date | undefined;
  name: string;
}) {
  const pinned = useHeadroom({ fixedAt: 120 });
  const [_scroll, scrollTo] = useWindowScroll();

  const { inViewport, ref } = useInViewport();
  const isMobile = useIsMobile();
  return (
    <>
      <>
        <motion.div
          style={{
            height: "fit-content",
            left: 0,
            padding: isMobile ? "1rem" : "3rem",
            position: "relative",
            right: 0,
            top: isMobile ? 56 : 66,
            zIndex: 2,
          }}
          className={`container flex w-full flex-row items-center gap-2 border bg-linear-to-r from-violet-800 to-teal-700 py-3 md:rounded-xl md:px-4`}
        >
          <div>
            {" "}
            <Button
              asChild
              variant="link"
              size="sm"
              className="text-text pl-0 text-white underline"
            >
              <Link href="/blog">
                <ArrowLeft /> Back to Blog
              </Link>
            </Button>
            <h1
              className={`text-md mb-2 text-xl font-bold text-white md:text-3xl`}
            >
              {title}
            </h1>
            <motion.p
              className="mb-2 text-white md:text-xl"
              animate={{
                height: "auto",
                opacity: 1,
              }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>
            <Separator className="bg-muted-foreground/50 my-4" />
            <div className="flex flex-row items-center gap-4 text-sm text-white">
              <div className="flex gap-2">
                <p className="mb-1">Written by:</p>
                <p className="font-medium">{author}</p>
              </div>
              <div className="flex gap-2">
                <p className="mb-1">At:</p>
                <p className="font-medium">
                  {new Date(date ?? name).toDateString()}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          style={{
            height: "fit-content",
            left: 0,
            padding: isMobile ? "0.7rem" : "1rem",
            position: "sticky",
            right: 0,
            top: isMobile ? 56 : 66,
            transform: `translate3d(0, ${pinned ? 0 : "-160px"}, 0)`,
            transition: "transform 400ms ease",
            zIndex: 2,
          }}
          className={`container flex w-full flex-row items-center gap-2 border py-3 md:rounded-xl md:px-4 ${inViewport ? "opacity-0" : "opacity-100"} bg-linear-to-r from-violet-800 to-teal-700`}
        >
          <div>
            {" "}
            <Button
              asChild
              variant="link"
              size="sm"
              className="text-text pl-0 text-white underline"
            >
              <Link href="/blog">
                <ArrowLeft /> Back to Blog
              </Link>
            </Button>
            <h1
              className={`text-md text-md md:text-md mb-0 font-semibold text-white`}
            >
              {title}
            </h1>
            <motion.p
              className="text-white md:text-base"
              animate={{
                height: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>
          </div>
        </motion.div>

        {/* <motion.div
          style={{
            position: "sticky",
            top: isMobile ? 56 : 66,
            left: 0,
            right: 0,
            padding: inViewport ? "3rem" : "1rem",
            height: 60,
            zIndex: 2,
            transform: `translate3d(0, ${pinned ? 0 : "-150px"}, 0)`,
            transition: "transform 400ms ease",
            backgroundBlendMode: "difference, difference, normal",
            backgroundColor: "black",
            backgroundImage: [
              "linear-gradient(to right, #6b11cb78 0%, #12f7be73 100%)",
            ].join(", "),
          }}
          className={`container flex w-full flex-row items-center gap-2 border py-3 md:rounded-xl md:px-4`}
          animate={{
            padding: !inViewport ? "0.75rem 1rem" : "3rem 1rem",
            height: !inViewport ? "90px" : "260px",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <div>
            {" "}
            <Button
              asChild
              variant="link"
              size="sm"
              className="text-text pl-0 underline"
            >
              <Link href="/blog">
                <ArrowLeft /> Back to Blog
              </Link>
            </Button>
            <h1
              className={`text-md mb-0 text-white ${inViewport ? "text-xl font-bold md:text-3xl" : "text-md md:text-md font-semibold"}`}
            >
              {title}
            </h1>
            <motion.p
              className="text-white/80 md:text-base"
              animate={{
                opacity: !inViewport ? 0 : 1,
                height: !inViewport ? 0 : "auto",
              }}
              transition={{ duration: 0.3 }}
            >
              {description}
            </motion.p>
          </div>
        </motion.div> */}
        <motion.div ref={ref}></motion.div>
        {!inViewport && (
          <div className="fixed right-10 bottom-5 z-50">
            <Button variant="outline" onClick={() => scrollTo({ y: 0 })}>
              <ChevronUp /> Back to top
            </Button>
          </div>
        )}
      </>
    </>
  );
}

export const BlogTOC = () => {
  const { active, data } = useScrollSpy({
    selector: "h2, h3, h4, h5, h6",
  });

  const headings = data.map((heading, index) => (
    <div key={heading.id} className="relative hidden lg:block">
      <div
        className={`bg-primary absolute h-full w-[2px] transition-all duration-500 ${index === active ? "opacity-100" : "opacity-0"}`}
      ></div>
      <div
        style={{
          listStylePosition: "inside",
          paddingInlineStart: heading.depth * 10,
          // background: index === spy.active ? "blue" : undefined,
        }}
        className={`cursor-pointer border-l py-1 text-sm ${index === active ? "text-primary" : "text-muted-foreground"} transition-all duration-300`}
      >
        <a className="" onClick={() => heading.getNode().scrollIntoView()}>
          {heading.value}
        </a>
      </div>
    </div>
  ));

  return (
    <div>
      <div style={{ margin: 0, padding: 0 }}>{headings}</div>
    </div>
  );
};
