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
import { SourceCodes } from "@/types/component";

export function PageCodePreview({
  name,
  selectedFile,
  setSelectedFile,
  source,
}: {
  selectedFile: string;
  setSelectedFile: (file: string) => void;
  source: SourceCodes;
  name: string;
}) {
  console.log("PageCodePreview source", source);
  console.log("PageCodePreview file", source[selectedFile]);
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
              {Object.values(source).map((file) => (
                <button
                  key={file.fileName}
                  onClick={() =>
                    setSelectedFile(
                      Object.keys(source).find((key) => source[key] === file) ||
                        ""
                    )
                  }
                  className={cn(
                    "hover:bg-accent cursor-pointer rounded-md px-4 py-2 text-left font-mono text-sm transition-colors",
                    selectedFile ===
                      Object.keys(source).find((key) => source[key] === file)
                      ? "bg-accent text-accent-foreground font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  <File className="mr-2 inline h-4 w-4" />
                  {file.fileName || "untitled"}
                </button>
              ))}
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="w-full pt-2">
            <p className="mb-2 pl-2 font-mono text-xs">
              {source[selectedFile].fileName}
            </p>
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
