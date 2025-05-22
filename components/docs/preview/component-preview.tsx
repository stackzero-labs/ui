"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CheckCheck, Ellipsis, Terminal } from "lucide-react";
import { useState } from "react";
import type { ComponentPreviewProps } from "types/component";
import { ComponentLoader } from "../component-loader";
import { ComponentCodePreview } from "./component-preview-code";

const prePath =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      siteConfig.url;

export function ComponentPreview({
  classNameComponentContainer,
  codeRendererFiles = [],
  displayExampleName, // When we need to display a different component in the preview, instead of the component that can be installed / copied (e.g.: to showcase state changes)
  hasReTrigger = false,
  name,
  source,
}: ComponentPreviewProps) {
  const [activeTab, setActiveTab] = useState("preview");
  const [selectedFile, setSelectedFile] = useState(
    codeRendererFiles.length > 0 ? codeRendererFiles[0] : ""
  );
  const [isTerminalCopied, setIsTerminalCopied] = useState(false);
  const [copiedCommand, setCopiedCommand] = useState("");

  const handleCopyCommand = (commandType: string) => {
    let command = "";
    if (commandType === "base") {
      command = `npx shadcn@latest add ${prePath}/r/${name}.json`;
    } else if (commandType === "example") {
      command = `npx shadcn@latest add ${prePath}/r/${displayExampleName}.json`;
    }

    navigator.clipboard.writeText(command);
    setCopiedCommand(commandType);
    setIsTerminalCopied(true);
    setTimeout(() => {
      setIsTerminalCopied(false);
      setCopiedCommand("");
    }, 1000);
  };

  const handleTerminalClick = () => {
    if (!displayExampleName) {
      const COPY = `npx shadcn@latest add ${prePath}/r/${name}.json`;
      navigator.clipboard.writeText(COPY);
      setIsTerminalCopied(true);
      setTimeout(() => {
        setIsTerminalCopied(false);
      }, 1000);
    }
  };

  let isMultipleFiles = false;
  if (codeRendererFiles?.length > 1) {
    isMultipleFiles = true;
  }

  const renderTerminalButton = () => {
    if (displayExampleName) {
      return (
        <DropdownMenu modal={false} open={isTerminalCopied ? false : undefined}>
          <DropdownMenuTrigger asChild>
            <Button size="sm" variant="outline" className="relative">
              {isTerminalCopied ? (
                <>
                  <CheckCheck className="h-3.5 w-3.5" />
                  <span className="motion-preset-expand bg-background motion-duration-[0.3s] absolute top-1/2 right-0 flex h-full -translate-y-1/2 transform items-center rounded-e-sm px-8 text-teal-400">
                    Copied!
                  </span>
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
              <span className="font-mono">npx shadcn add {name}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            <DropdownMenuItem
              onClick={() => handleCopyCommand("base")}
              className="flex flex-row items-start"
            >
              <div className="flex items-center gap-2">
                <Terminal className="mr-2 w-3.5" />
              </div>

              <div className="flex flex-col items-start">
                <p>
                  Install <span className="font-mono">{name}</span>
                </p>
                <span className="font-xs text-muted-foreground">
                  Install only the block{" "}
                </span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleCopyCommand("example")}
              className="flex flex-row items-start"
            >
              <div className="flex items-center gap-2">
                <Terminal className="mr-2 w-3.5" />
              </div>

              <div className="flex flex-col items-start">
                <p>
                  Install{" "}
                  <span className="font-mono">{displayExampleName}</span>
                </p>
                <span className="font-xs text-muted-foreground">
                  Install the block + example{" "}
                </span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Button
        size="sm"
        onClick={handleTerminalClick}
        variant="outline"
        className="relative"
      >
        {isTerminalCopied ? (
          <>
            <CheckCheck className="h-3.5 w-3.5" />
            <span className="motion-preset-expand bg-background motion-duration-[0.3s] absolute top-1/2 right-0 flex h-full -translate-y-1/2 transform items-center rounded-e-sm px-8 text-teal-400">
              Copied!
            </span>
          </>
        ) : (
          <>
            <Terminal
              className={cn(
                "h-3.5 w-3.5",
                "transition-all duration-200",
                "group-hover:rotate-12"
              )}
            />
          </>
        )}
        <span className="font-mono">npx shadcn add {name}</span>
      </Button>
    );
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
            className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
          >
            Code
          </TabsTrigger>

          <div className="grow"></div>

          <div className="align-center mb-2 hidden flex-row gap-2 lg:flex">
            {renderTerminalButton()}
            <Button size="sm" asChild variant="default">
              <a
                href={`${prePath}/preview/${displayExampleName ? displayExampleName : name}`}
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

          <div className="mb-2 block lg:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <Ellipsis />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-80 flex-col gap-2">
                {displayExampleName ? (
                  <>
                    <Button
                      size="sm"
                      onClick={() => handleCopyCommand("base")}
                      variant="outline"
                      className="relative"
                    >
                      {isTerminalCopied && copiedCommand === "base" ? (
                        <>
                          <CheckCheck className="h-3.5 w-3.5" />
                          <span className="motion-preset-expand bg-background motion-duration-[0.3s] absolute top-1/2 right-0 flex h-full -translate-y-1/2 transform items-center rounded-e-sm px-8 text-teal-400">
                            Copied!
                          </span>
                        </>
                      ) : (
                        <Terminal className="h-3.5 w-3.5" />
                      )}
                      <span className="font-mono">Install {name}</span>
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleCopyCommand("example")}
                      variant="outline"
                      className="relative"
                    >
                      {isTerminalCopied && copiedCommand === "example" ? (
                        <>
                          <CheckCheck className="h-3.5 w-3.5" />
                          <span className="motion-preset-expand bg-background motion-duration-[0.3s] absolute top-1/2 right-0 flex h-full -translate-y-1/2 transform items-center rounded-e-sm px-8 text-teal-400">
                            Copied!
                          </span>
                        </>
                      ) : (
                        <Terminal className="h-3.5 w-3.5" />
                      )}
                      <span className="font-mono">
                        Install {displayExampleName}
                      </span>
                    </Button>
                  </>
                ) : (
                  <Button
                    size="sm"
                    onClick={handleTerminalClick}
                    variant="outline"
                    className="relative"
                  >
                    {isTerminalCopied ? (
                      <>
                        <CheckCheck className="h-3.5 w-3.5" />
                        <span className="motion-preset-expand bg-background motion-duration-[0.3s] absolute top-1/2 right-0 flex h-full -translate-y-1/2 transform items-center rounded-e-sm px-8 text-teal-400">
                          Copied!
                        </span>
                      </>
                    ) : (
                      <>
                        <Terminal
                          className={cn(
                            "h-3.5 w-3.5",
                            "transition-all duration-200",
                            "group-hover:rotate-12"
                          )}
                        />
                      </>
                    )}
                    <span className="font-mono">Install with CLI</span>
                  </Button>
                )}
                <Button size="sm" asChild variant="default">
                  <a
                    href={`${prePath}/preview/${displayExampleName ? displayExampleName : name}`}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "group no-underline transition-all duration-200"
                    )}
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
              </PopoverContent>
            </Popover>
          </div>
        </TabsList>
        <TabsContent value="preview">
          <div className="preview flex min-h-[450px] w-full justify-center p-4">
            <ComponentLoader
              name={displayExampleName ? displayExampleName : name}
              hasReTrigger={hasReTrigger}
              classNameComponentContainer={classNameComponentContainer}
            />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="flex w-full flex-col gap-4">
            <ComponentCodePreview
              isMultipleFiles={isMultipleFiles}
              codeRendererFiles={codeRendererFiles}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              source={source}
              name={name}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
