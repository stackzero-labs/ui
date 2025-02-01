"use client";

import { cn } from "@/lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { type Transition, motion, useAnimation } from "motion/react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  componentSource: string;
}

const defaultTransition: Transition = {
  damping: 17,
  mass: 1,
  stiffness: 160,
  type: "spring",
};

function CopyIcon() {
  const controls = useAnimation();

  return (
    <div
      className="flex cursor-pointer select-none items-center justify-center rounded-md p-2 transition-colors duration-200 hover:bg-accent"
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.rect
          width="14"
          height="14"
          x="8"
          y="8"
          rx="2"
          ry="2"
          variants={{
            animate: { translateX: -3, translateY: -3 },
            normal: { translateX: 0, translateY: 0 },
          }}
          animate={controls}
          transition={defaultTransition}
        />
        <motion.path
          d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
          variants={{
            animate: { x: 3, y: 3 },
            normal: { x: 0, y: 0 },
          }}
          transition={defaultTransition}
          animate={controls}
        />
      </svg>
    </div>
  );
}

const CopyButton: React.FC<CopyButtonProps> = ({ componentSource }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(componentSource);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // Reset copied state after 1.5 seconds
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div
      className={cn(
        "absolute right-2 top-2 z-10 transition-opacity",
        !copied &&
          "lg:opacity-0 lg:group-focus-within/item:opacity-100 lg:group-hover/item:opacity-100"
      )}
    >
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground/80 hover:bg-transparent hover:text-foreground disabled:opacity-100"
              onClick={handleCopy}
              aria-label={copied ? "Copied" : "Copy component source"}
              disabled={copied}
            >
              {copied ? (
                <svg
                  className="scale-100 opacity-100 transition-all"
                  data-testid="geist-icon"
                  height="14"
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width="14"
                  style={{ color: "currentColor" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z"
                    fill="currentColor"
                  ></path>
                </svg>
              ) : (
                <CopyIcon />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent className="bg-muted px-2 py-1 text-xs text-muted-foreground">
            {copied ? "Copied!" : "Copy"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default CopyButton;
