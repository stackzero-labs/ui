"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { getComponentByName } from "@/registry";
import { RotateCw } from "lucide-react";
import React, { useEffect, useState } from "react";
import type { ComponentDisplayProps } from "types/component";

type ComponentLoaderProps = {
  name: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
  isPreview?: boolean;
};

export function ComponentLoader({
  classNameComponentContainer,
  hasReTrigger = false,
  isPreview = false,
  name,
}: ComponentLoaderProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now());

  useEffect(() => {
    const component = getComponentByName(name)?.component;
    if (component) {
      setComponent(() => component);
    }
  }, [name]);

  const reTrigger = () => {
    setReTriggerKey(Date.now());
  };

  if (!Component) {
    return (
      <div className="text-muted-foreground flex items-center justify-center text-sm">
        <RotateCw className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </div>
    );
  }

  return (
    <ComponentDisplay
      component={<Component />}
      hasReTrigger={hasReTrigger}
      className={classNameComponentContainer}
      reTriggerKey={reTriggerKey}
      reTrigger={reTrigger}
      isPreview={isPreview}
    />
  );
}

function ComponentDisplay({
  className,
  component,
  hasReTrigger,
  isPreview,
  reTrigger,
  reTriggerKey,
}: ComponentDisplayProps) {
  return (
    <>
      <div
        className={cn(
          "relative flex min-h-[350px] w-full flex-col items-center justify-center rounded-md",
          className
        )}
      >
        {hasReTrigger && (
          <div
            className={cn(
              isPreview ? "relative mb-4" : "absolute top-2 right-2"
            )}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {" "}
                  <Button
                    variant="outline"
                    size="icon"
                    className="text-muted-foreground/80 hover:text-foreground cursor-pointer hover:bg-transparent"
                    onClick={reTrigger}
                    aria-label="Refresh component"
                  >
                    <RotateCw className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Reload component</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
        {hasReTrigger
          ? React.cloneElement(component, { key: reTriggerKey })
          : component}
      </div>
    </>
  );
}
