"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { File } from "lucide-react";
import { CodeRenderer } from "../code-renderer";

export function ComponentCodePreview({
  codeRendererFiles,
  isMultipleFiles,
  name,
  selectedFile,
  setSelectedFile,
  source,
}: {
  isMultipleFiles: boolean;
  codeRendererFiles: string[];
  selectedFile: string;
  setSelectedFile: (file: string) => void;
  source: Record<string, { code: string; highlightedCode: string }>;
  name: string;
}) {
  if (isMultipleFiles) {
    return (
      <>
        <ResizablePanelGroup
          direction="horizontal"
          className="min-h-[200px] w-full rounded-md"
        >
          <ResizablePanel defaultSize={25} className="bg-fd-card">
            <div className="w-full">
              <p className="mb-2 pt-2 pl-2 text-xs uppercase">Files</p>
              <Separator className="mb-2" />
              <div className="flex flex-col gap-2 p-2">
                {codeRendererFiles.map((file) => (
                  <button
                    key={file}
                    onClick={() => setSelectedFile(file)}
                    className={cn(
                      "hover:bg-accent cursor-pointer rounded-md px-4 py-2 text-left font-mono text-sm transition-colors",
                      selectedFile === file
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground"
                    )}
                  >
                    <File className="mr-2 inline h-4 w-4" />
                    {file}
                  </button>
                ))}
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="w-full pt-2">
              <p className="mb-2 pl-2 font-mono text-xs">{selectedFile}</p>
              <Separator className="mb-2" />
              {selectedFile && source[selectedFile] && (
                <CodeRenderer
                  code={source[selectedFile].code}
                  highlightedCode={source[selectedFile].highlightedCode}
                />
              )}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </>
    );
  }

  return (
    <CodeRenderer
      code={source[name].code}
      highlightedCode={source[name].highlightedCode}
    />
  );
}
