"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { siteConfig } from "@/config/site";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Tabs as FumadocsTabs, Tab } from "fumadocs-ui/components/tabs";
import { useState } from "react";

const prePath =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_URL ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      siteConfig.url;

function ComponentInstall({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState("cli");

  return (
    <div className="not-prose relative z-0 flex items-center justify-between pb-4">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="relative mr-auto w-full"
      >
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="cli"
            className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
          >
            CLI
          </TabsTrigger>
          <TabsTrigger
            value="manual"
            className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
          >
            Manual
          </TabsTrigger>
        </TabsList>

        {children}
      </Tabs>
    </div>
  );
}

const CLIInstall = ({ name }: { name: string }) => {
  const handleCodeToCopy = (value: "npx" | "pnpm" | "bun") => {
    switch (value) {
      case "npx":
        return `npx shadcn@latest add ${prePath}/r/${name}.json`;
      case "pnpm":
        return `pnpm dlx shadcn@latest add ${prePath}/r/${name}.json`;
      case "bun":
        return `bunx shadcn@latest add ${prePath}/r/${name}.json`;
    }
  };

  return (
    <TabsContent value="cli" className="w-full border-0 p-0">
      <FumadocsTabs items={["npx", "pnpm", "bun"]}>
        <Tab value="npx">
          <DynamicCodeBlock lang="bash" code={handleCodeToCopy("npx")} />
        </Tab>
        <Tab value="pnpm">
          <DynamicCodeBlock lang="bash" code={handleCodeToCopy("pnpm")} />
        </Tab>
        <Tab value="bun">
          <DynamicCodeBlock lang="bash" code={handleCodeToCopy("bun")} />
        </Tab>
      </FumadocsTabs>
    </TabsContent>
  );
};

const ManualInstall = ({ children }: { children: React.ReactNode }) => {
  return (
    <TabsContent value="manual" className="w-full border-0 py-3">
      {children}
    </TabsContent>
  );
};

export { CLIInstall, ComponentInstall, ManualInstall };
