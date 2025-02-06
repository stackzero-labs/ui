import { Fragment, type HTMLAttributes, type ReactNode } from "react";
import { type BaseLayoutProps, getLinks, type SharedNavProps } from "./shared";
import {
  CollapsibleSidebar,
  Sidebar,
  SidebarCollapseTrigger,
  SidebarFooter,
  SidebarHeader,
  SidebarViewport,
  SidebarPageTree,
} from "./docs/sidebar";
import { RootToggle } from "./layout/root-toggle";
import { TreeContextProvider } from "fumadocs-ui/provider";
import { NavProvider, Title } from "./layout/nav";
import { LargeSearchToggle, SearchToggle } from "./layout/search-toggle";
import { cn } from "../lib/cn";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ChevronDown, Languages } from "lucide-react";
import { BaseLinkItem, type LinkItemType } from "./links";
import { LanguageToggle } from "./layout/language-toggle";
import { ThemeToggle } from "./layout/theme-toggle";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  checkPageTree,
  getSidebarTabsFromOptions,
  layoutVariables,
  SidebarLinkItem,
  type SidebarOptions,
} from "./docs/shared";
import type { PageTree } from "fumadocs-core/server";
import { Navbar, NavbarSidebarTrigger } from "./notebook.client";
import { type PageStyles, StylesProvider } from "fumadocs-ui/provider";

export interface DocsLayoutProps extends BaseLayoutProps {
  tree: PageTree.Root;

  sidebar?: Omit<Partial<SidebarOptions>, "component" | "enabled">;

  containerProps?: HTMLAttributes<HTMLDivElement>;
}

export function DocsLayout({
  i18n = false,
  nav: { transparentMode, ...nav } = {},
  sidebar: {
    banner: sidebarBanner,
    collapsible: sidebarCollapsible = true,
    components: sidebarComponents,
    footer: sidebarFooter,
    tabs: tabOptions,
    ...sidebar
  } = {},
  ...props
}: DocsLayoutProps): ReactNode {
  checkPageTree(props.tree);
  const links = getLinks(props.links ?? [], props.githubUrl);
  const Aside = sidebarCollapsible ? CollapsibleSidebar : Sidebar;

  const tabs = getSidebarTabsFromOptions(tabOptions, props.tree) ?? [];
  const variables = cn(
    "[--fd-nav-height:3.5rem] [--fd-tocnav-height:36px] md:[--fd-sidebar-width:300px] xl:[--fd-toc-width:268px] xl:[--fd-tocnav-height:0px]"
  );

  const pageStyles: PageStyles = {
    page: cn("mt-[var(--fd-nav-height)]"),
    toc: cn("max-xl:hidden"),
    tocNav: cn("xl:hidden"),
  };

  return (
    <TreeContextProvider tree={props.tree}>
      <NavProvider transparentMode={transparentMode}>
        <main
          id="nd-docs-layout"
          {...props.containerProps}
          className={cn(
            "flex w-full flex-1 flex-row pe-[var(--fd-layout-offset)]",
            variables,
            props.containerProps?.className
          )}
          style={{
            ...layoutVariables,
            ...props.containerProps?.style,
          }}
        >
          <Aside
            {...sidebar}
            className={cn(
              "md:ps-[var(--fd-layout-offset)] md:[--fd-nav-height:0px]",
              sidebar.className
            )}
          >
            <SidebarHeader>
              <SidebarHeaderItems nav={nav} links={links}>
                {nav.children}
                {sidebarCollapsible ? (
                  <SidebarCollapseTrigger className="text-fd-muted-foreground ms-auto" />
                ) : null}
              </SidebarHeaderItems>
              {sidebarBanner}
              {tabs.length > 0 ? (
                <RootToggle options={tabs} className="-mx-2" />
              ) : null}
            </SidebarHeader>
            <SidebarViewport>
              <div className="mb-4 empty:hidden lg:hidden">
                {links.map((item, i) => (
                  <SidebarLinkItem key={i} item={item} />
                ))}
              </div>
              <SidebarPageTree components={sidebarComponents} />
            </SidebarViewport>
            <SidebarFooter className={cn(!sidebarFooter && "md:hidden")}>
              {!props.disableThemeSwitch ? (
                <ThemeToggle className="w-fit md:hidden" />
              ) : null}
              {sidebarFooter}
            </SidebarFooter>
          </Aside>
          <DocsNavbar
            nav={nav}
            links={links}
            i18n={i18n}
            sidebarCollapsible={sidebarCollapsible}
          />
          <StylesProvider {...pageStyles}>{props.children}</StylesProvider>
        </main>
      </NavProvider>
    </TreeContextProvider>
  );
}

function DocsNavbar({
  i18n,
  links,
  nav = {},
  sidebarCollapsible,
}: {
  nav: DocsLayoutProps["nav"];
  sidebarCollapsible: boolean;
  i18n: boolean;
  links: LinkItemType[];
}) {
  return (
    <Navbar>
      {sidebarCollapsible ? (
        <SidebarCollapseTrigger className="text-fd-muted-foreground -ms-1.5 data-[collapsed=false]:hidden max-md:hidden" />
      ) : null}
      <LargeSearchToggle
        hideIfDisabled
        className="w-full max-w-[240px] rounded-lg max-md:hidden"
      />
      <Title url={nav.url} title={nav.title} className="md:hidden" />
      <div className="flex flex-1 flex-row items-center gap-6 px-2">
        {links
          .filter((item) => item.type !== "icon")
          .map((item, i) => (
            <NavbarLinkItem
              key={i}
              item={item}
              className="text-fd-muted-foreground hover:text-fd-accent-foreground text-sm transition-colors max-lg:hidden"
            />
          ))}
        {nav.children}
      </div>
      <SearchToggle hideIfDisabled className="md:hidden" />
      <NavbarSidebarTrigger className="-me-1.5 md:hidden" />
      <div className="flex flex-row items-center empty:hidden max-lg:hidden">
        {links
          .filter((item) => item.type === "icon")
          .map((item, i) => (
            <BaseLinkItem
              key={i}
              item={item}
              className={cn(
                buttonVariants({ size: "icon", variant: "ghost" }),
                "text-fd-muted-foreground"
              )}
              aria-label={item.label}
            >
              {item.icon}
            </BaseLinkItem>
          ))}
      </div>
      {i18n ? (
        <LanguageToggle>
          <Languages className="size-5" />
        </LanguageToggle>
      ) : null}
      <ThemeToggle className="max-md:hidden" mode="light-dark-system" />
    </Navbar>
  );
}

function NavbarLinkItem({
  item,
  ...props
}: { item: LinkItemType } & HTMLAttributes<HTMLElement>) {
  if (item.type === "menu") {
    return (
      <Popover>
        <PopoverTrigger
          {...props}
          className={cn("inline-flex items-center gap-1.5", props.className)}
        >
          {item.text}
          <ChevronDown className="size-3" />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col">
          {item.items.map((child, i) => {
            if (child.type === "custom")
              return <Fragment key={i}>{child.children}</Fragment>;

            return (
              <BaseLinkItem
                key={i}
                item={child}
                className="hover:bg-fd-accent hover:text-fd-accent-foreground data-[active=true]:text-fd-primary inline-flex items-center gap-2 rounded-md p-2 text-start [&_svg]:size-4"
              >
                {child.icon}
                {child.text}
              </BaseLinkItem>
            );
          })}
        </PopoverContent>
      </Popover>
    );
  }

  if (item.type === "custom") return item.children;

  return (
    <BaseLinkItem item={item} {...props}>
      {item.text}
    </BaseLinkItem>
  );
}

function SidebarHeaderItems({
  children,
  links,
  nav = {},
}: SharedNavProps & {
  nav: DocsLayoutProps["nav"];
  links: LinkItemType[];
  children: ReactNode;
}) {
  const isEmpty = !nav.title && !nav.children && links.length === 0;
  if (isEmpty) return null;

  return (
    <div className="flex flex-row items-center max-md:hidden">
      {nav.title ? (
        <Link
          href={nav.url ?? "/"}
          className="inline-flex items-center gap-2.5 py-1 font-medium md:px-2"
        >
          {nav.title}
        </Link>
      ) : null}
      {children}
    </div>
  );
}
