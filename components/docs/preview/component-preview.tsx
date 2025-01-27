"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import type { ComponentPreviewProps } from "types/component";
import { CodeRenderer } from "../code-renderer";
import { ComponentLoader } from "../component-loader";
import { ArrowUpRight, CheckCheck, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

const prePath =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      siteConfig.url;

export function ComponentPreview({
  name,
  code,
  highlightedCode,
  hasReTrigger = false,
  classNameComponentContainer,
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState("preview");
  const [isTerminalCopied, setIsTerminalCopied] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleTerminalClick = () => {
    // const [folder, filename] = link.split("/");
    // const COPY = `bunx shadcn@latest add ${prePath}/r/${
    //     filename ? filename : folder
    // }.json`;

    const COPY = `npx shadcn@latest add ${prePath}/r/${name}.json`;
    navigator.clipboard.writeText(COPY);
    setIsTerminalCopied(true);
    setTimeout(() => {
      setIsTerminalCopied(false);
    }, 1000);
  };

  return (
    <div className="not-prose relative z-0 flex items-center justify-between pb-4">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="relative mr-auto w-full"
      >
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="preview"
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Code
          </TabsTrigger>

          <div className="flex-grow"></div>

          <div className="align-center mb-2 flex flex-row gap-2">
            <Button size="sm" onClick={handleTerminalClick} variant="ghost">
              {isTerminalCopied ? (
                <>
                  <CheckCheck className="h-3.5 w-3.5 text-white dark:text-black" />
                </>
              ) : (
                <Terminal
                  className={cn(
                    "h-3.5 w-3.5",
                    "transition-all duration-200",
                    "group-hover:rotate-12"
                  )}
                />
              )}
              <span>npx shadcn add {name}</span>{" "}
            </Button>
            <Button size="sm" asChild variant="default">
              <a
                href={`${prePath}/preview/${name}`}
                target="_blank"
                rel="noreferrer"
                className={cn("group no-underline transition-all duration-200")}
              >
                Live Preview
                <ArrowUpRight
                  className={cn(
                    "h-4 w-4",
                    "transition-transform duration-200 group-hover:rotate-45"
                  )}
                />
              </a>
            </Button>
          </div>

          {/* <a
            href={`${prePath}/preview/${name}`}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "flex h-9 items-center gap-2 px-4 pb-3 pt-2",
              "text-sm font-medium",
              "text-zinc-800 dark:text-zinc-200",
              "hover:text-zinc-600 dark:hover:text-zinc-400",
              "group no-underline transition-all duration-200"
            )}
          >
            Live Preview
            <ArrowUpRight
              className={cn(
                "h-4 w-4",
                "transition-transform duration-200 group-hover:rotate-12"
              )}
            />
          </a> */}
        </TabsList>
        <TabsContent value="preview">
          <div className="preview flex min-h-[450px] w-full justify-center p-4">
            <ComponentLoader
              name={name}
              hasReTrigger={hasReTrigger}
              classNameComponentContainer={classNameComponentContainer}
            />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <CodeRenderer code={code} highlightedCode={highlightedCode} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
