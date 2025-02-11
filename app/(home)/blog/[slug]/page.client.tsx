"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// import { TextMorph } from "@/stackzero-ui/elements/texts/text-morph";

import { ArrowLeft, Check, ChevronUp, Share } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  useHeadroom,
  useIntersection,
  useInViewport,
  useWindowScroll,
} from "@mantine/hooks";
import { motion } from "motion/react";
import { useIsMobile } from "@/hooks/use-mobile";
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
  title,
  description,
}: {
  title: string;
  description: string | undefined;
}) {
  const pinned = useHeadroom({ fixedAt: 120 });
  const [scroll, scrollTo] = useWindowScroll();

  const { ref, inViewport } = useInViewport();
  const isMobile = useIsMobile();
  return (
    <>
      {/* <div
        ref={ref}
        className="container rounded-xl border py-12 md:px-8"
        style={{
          backgroundBlendMode: "difference, difference, normal",
          backgroundColor: "black",
          backgroundImage: [
            "linear-gradient(140deg, hsla(274,94%,54%,0.3), transparent 50%)",
            "linear-gradient(to left top, hsla(260,90%,50%,0.8), transparent 50%)",
            "radial-gradient(circle at 100% 100%, hsla(240,100%,82%,1), hsla(240,40%,40%,1) 17%, hsla(240,40%,40%,0.5) 20%, transparent)",
          ].join(", "),
        }}
      >
        <h1 className="mb-2 text-3xl font-bold text-white">{title}</h1>
        <p className="mb-4 text-white/80">{description}</p>
        <Link
          href="/blog"
          className={buttonVariants({ size: "sm", variant: "secondary" })}
        >
          Back
        </Link>
        <h2>{`Header inside viewport ${inView}.`}</h2>
      </div> */}
      <>
        {/* <div
          className={`container flex flex-row items-center gap-2 border md:rounded-xl ${inView ? "py-12 md:px-8" : "fixed top-[56px] z-100 container w-screen py-3 md:px-4"}`}
          style={{
            backgroundBlendMode: "difference, difference, normal",
            backgroundColor: "black",
            backgroundImage: [
              "linear-gradient(to right, #6b11cb78 0%, #12f7be73 100%)",
            ].join(", "),
          }}
        >
          <Link
            href="/blog"
            className={buttonVariants({ size: "sm", variant: "secondary" })}
          >
            Back
          </Link>
          <div>
            {" "}
            <h1 className="text-md mb-2 font-bold text-white md:text-xl">
              {title}
            </h1>
            <p className="hidden text-white/80 md:text-base">{description}</p>
          </div>
        </div> */}

        <motion.div
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
          className={`container flex w-screen flex-row items-center gap-2 border py-3 md:rounded-xl md:px-4`}
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
              // animate={{
              //   fontSize: !inViewport
              //     ? "1.125rem"
              //     : isMobile
              //       ? "1.5rem"
              //       : "2rem",
              //   marginBottom: !inViewport ? "0.0rem" : "1rem",
              // }}
              // transition={{ duration: 0.4 }}
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
        </motion.div>

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
