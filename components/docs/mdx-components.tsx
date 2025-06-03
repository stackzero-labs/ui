import { Reference, References } from "@/components/ui/references";
import {
  extractMultipleSourceCodes,
  extractSourceCode,
  extractPageSourceCodes,
} from "@/lib/code";
import { createTypeTable } from "fumadocs-typescript/ui";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Callout } from "fumadocs-ui/components/callout";
import { Card, Cards } from "fumadocs-ui/components/card";
import { CodeBlock, Pre } from "fumadocs-ui/components/codeblock";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import defaultComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";
import { ComponentLoader } from "./component-loader";
import { ComponentPropsTable } from "./component-props-table";
import { ComponentPreview } from "./preview/component-preview";
import { ComponentSource } from "./preview/component-source";
import {
  CLIInstall,
  ComponentInstall,
  ManualInstall,
} from "./preview/components-install";
import { PagePreview } from "./preview/page-preview";
const { AutoTypeTable } = createTypeTable();

export function getMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Accordion,
    Accordions,
    AutoTypeTable,
    blockquote: (props) => <Callout>{props.children}</Callout>,
    Callout,
    Card,
    Cards,
    CLIInstall,
    ComponentInstall,
    ComponentPreview: async ({
      codeRendererFiles,
      name,
      ...props
    }: {
      name: string;
      codeRendererFiles: string[];
      isPage?: boolean;
    }) => {
      const sourceCodes = await extractMultipleSourceCodes(
        codeRendererFiles || [name]
      );
      return (
        <ComponentPreview
          name={name}
          source={sourceCodes}
          codeRendererFiles={codeRendererFiles}
          {...props}
        />
      );
    },

    PagePreview: async ({
      name,
      ...props
    }: {
      name: string;
      codeRendererFiles: string[];
    }) => {
      const sourceCodes = await extractPageSourceCodes(name);
      return <PagePreview name={name} source={sourceCodes} {...props} />;
    },
    ComponentPropsTable,
    ComponentSource: async ({ name, ...props }: { name: string }) => {
      const { code, highlightedCode } = await extractSourceCode(name);
      return (
        <ComponentSource
          code={code}
          highlightedCode={highlightedCode}
          {...props}
        />
      );
    },
    PageSource: async ({ name, ...props }: { name: string }) => {
      const sourceCodes = await extractPageSourceCodes(name);
      return <ComponentPreview name={name} source={sourceCodes} {...props} />;
    },
    File,
    Files,
    Folder,
    ImageZoom,

    InstallTabs: ({
      children,
      items,
    }: {
      items: string[];
      children: ReactNode;
    }) => (
      <Tabs items={items} id="package-manager" className="cursor-pointer">
        {children}
      </Tabs>
    ),
    ManualInstall,
    pre: ({ ...props }) => (
      <CodeBlock {...props}>
        <Pre>{props.children}</Pre>
      </CodeBlock>
    ),
    Reference,
    References,
    Step,
    Steps,
    Tab,
    Tabs,
    TypeTable,
    ...components,
  };
}

export function getBlogMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    Accordion,
    Accordions,
    ComponentLoader,
    ImageZoom,
    ...components,
  };
}
