"use client";
import { ChevronDown, ExternalLink, SidebarIcon } from "lucide-react";
import * as Base from "fumadocs-core/sidebar";
import { usePathname } from "next/navigation";
import React, {
  type ButtonHTMLAttributes,
  createContext,
  type HTMLAttributes,
  type PointerEventHandler,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import Link, { type LinkProps } from "fumadocs-core/link";
import { useOnChange } from "fumadocs-core/utils/use-on-change";
import { cn } from "../../lib/cn";
import { ScrollArea, ScrollViewport } from "../ui/scroll-area";
import { isActive } from "../../lib/is-active";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { type ScrollAreaProps } from "@radix-ui/react-scroll-area";
import { useSidebar } from "fumadocs-ui/provider";
import { buttonVariants } from "../ui/button";
import { cva } from "class-variance-authority";
import type {
  CollapsibleContentProps,
  CollapsibleTriggerProps,
} from "@radix-ui/react-collapsible";
import type { PageTree } from "fumadocs-core/server";
import { useTreeContext, useTreePath } from "fumadocs-ui/provider";
import type { SidebarComponents } from "./shared";
import { SIDEBAR_RENAMED_PAGES } from "@/config/sidebar-rename";
import { Badge } from "../ui/badge";
import { sidebarBadges } from "@/config/sidebar-badges";

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Open folders by default if their level is lower or equal to a specific level
   * (Starting from 1)
   *
   * @defaultValue 0
   */
  defaultOpenLevel?: number;

  /**
   * Prefetch links
   *
   * @defaultValue true
   */
  prefetch?: boolean;
}

interface InternalContext {
  defaultOpenLevel: number;
  prefetch: boolean;
  level: number;
}

const itemVariants = cva(
  "relative flex flex-row items-center gap-2 rounded-md p-2 text-start text-fd-muted-foreground [overflow-wrap:anywhere] md:py-1.5 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      active: {
        true: "bg-fd-primary/10 text-fd-primary",
        false:
          "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none",
      },
    },
  }
);

const Context = createContext<InternalContext | null>(null);
const FolderContext = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export function CollapsibleSidebar(props: SidebarProps) {
  const { collapsed } = useSidebar();
  const [hover, setHover] = useState(false);
  const timerRef = useRef(0);
  const closeTimeRef = useRef(0);

  useOnChange(collapsed, () => {
    setHover(false);
    closeTimeRef.current = Date.now() + 150;
  });

  const onEnter: PointerEventHandler = useCallback((e) => {
    if (e.pointerType === "touch" || closeTimeRef.current > Date.now()) return;
    window.clearTimeout(timerRef.current);
    setHover(true);
  }, []);

  const onLeave: PointerEventHandler = useCallback((e) => {
    if (e.pointerType === "touch") return;
    window.clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(
      () => {
        setHover(false);
        closeTimeRef.current = Date.now() + 150;
      },
      Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100 ? 0 : 500
    );
  }, []);

  return (
    <Sidebar
      {...props}
      onPointerEnter={collapsed ? onEnter : undefined}
      onPointerLeave={collapsed ? onLeave : undefined}
      data-collapsed={collapsed}
      className={cn(
        "md:transition-all",
        collapsed &&
          "md:-me-[var(--fd-sidebar-width)] md:translate-x-[calc(var(--fd-sidebar-offset)*-1)] rtl:md:translate-x-[var(--fd-sidebar-offset)]",
        collapsed && hover && "z-50 md:translate-x-0",
        collapsed && !hover && "md:opacity-0",
        props.className
      )}
      style={
        {
          "--fd-sidebar-offset": "calc(var(--fd-sidebar-width) - 20px)",
        } as object
      }
    />
  );
}

export function Sidebar({
  defaultOpenLevel = 0,
  prefetch = true,
  inner,
  ...props
}: SidebarProps & { inner?: HTMLAttributes<HTMLDivElement> }) {
  const context = useMemo<InternalContext>(() => {
    return {
      defaultOpenLevel,
      prefetch,
      level: 1,
    };
  }, [defaultOpenLevel, prefetch]);

  return (
    <Context.Provider value={context}>
      <Base.SidebarList
        id="nd-sidebar"
        blockScrollingWidth={768} // md
        {...props}
        className={cn(
          "bg-fd-card fixed top-[calc(var(--fd-banner-height)+var(--fd-nav-height))] z-30 text-sm md:sticky md:h-[var(--fd-sidebar-height)]",
          "max-md:bg-fd-background/80 max-md:inset-x-0 max-md:bottom-0 max-md:text-[15px] max-md:backdrop-blur-lg max-md:data-[open=false]:invisible",
          props.className
        )}
        style={
          {
            ...props.style,
            "--fd-sidebar-height":
              "calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))",
          } as object
        }
      >
        <div
          {...inner}
          className={cn(
            "flex size-full max-w-full flex-col pt-2 md:ms-auto md:w-[var(--fd-sidebar-width)] md:border-e md:pt-4",
            inner?.className
          )}
        >
          {props.children}
        </div>
      </Base.SidebarList>
    </Context.Provider>
  );
}

export function SidebarHeader(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn("flex flex-col gap-2 px-4 empty:hidden", props.className)}
    >
      {props.children}
    </div>
  );
}

export function SidebarFooter(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "flex flex-col border-t px-4 py-3 empty:hidden",
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export function SidebarViewport(props: ScrollAreaProps) {
  return (
    <ScrollArea {...props} className={cn("h-full", props.className)}>
      <ScrollViewport
        className="p-4"
        style={{
          maskImage: "linear-gradient(to bottom, transparent 2px, white 16px)",
        }}
      >
        {props.children}
      </ScrollViewport>
    </ScrollArea>
  );
}

export function SidebarSeparator(props: HTMLAttributes<HTMLParagraphElement>) {
  const { level } = useInternalContext();

  return (
    <p
      {...props}
      className={cn("mb-2 px-2 text-sm font-medium", props.className)}
      style={{
        paddingInlineStart: getOffset(level),
        ...props.style,
      }}
    >
      {props.children}
    </p>
  );
}

export function SidebarItem({
  icon,
  ...props
}: LinkProps & {
  icon?: ReactNode;
}) {
  const pathname = usePathname();
  const active =
    props.href !== undefined && isActive(props.href, pathname, false);
  const { prefetch, level } = useInternalContext();

  return (
    <Link
      {...props}
      data-active={active}
      className={cn(itemVariants({ active }), props.className)}
      prefetch={prefetch}
      style={{
        paddingInlineStart: getOffset(level),
        ...props.style,
      }}
    >
      <Border level={level} active={active} />
      {icon ?? (props.external ? <ExternalLink /> : null)}
      {props.children}
    </Link>
  );
}

export function SidebarFolder({
  defaultOpen = false,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  useOnChange(defaultOpen, (v) => {
    if (v) setOpen(v);
  });

  return (
    <Collapsible open={open} onOpenChange={setOpen} {...props}>
      <FolderContext.Provider
        value={useMemo(() => ({ open, setOpen }), [open])}
      >
        {props.children}
      </FolderContext.Provider>
    </Collapsible>
  );
}

export function SidebarFolderTrigger({
  children,
  ...props
}: CollapsibleTriggerProps & { children: ReactNode }) {
  const { level } = useInternalContext();
  const { open } = useFolderContext();
  const childrenArray = React.Children.toArray(children);
  const name = childrenArray[1]?.toString();

  return (
    <CollapsibleTrigger
      {...props}
      className={cn(itemVariants({ active: false }), "w-full cursor-pointer")}
      style={{
        paddingInlineStart: getOffset(level),
        ...props.style,
      }}
    >
      <Border level={level} />
      {children}

      <div className="grow"></div>

      {sidebarBadges.find((badge) => badge.page === name)?.isNew && (
        <div className="ms-auto flex items-center gap-2">
          <Badge
            variant="outline"
            className="rounded-sm border-teal-500/50 px-[0.3rem] text-sm"
          >
            <p className="text-xs text-teal-500">New</p>
          </Badge>
        </div>
      )}
      <ChevronDown
        data-icon
        className={cn("ms-auto transition-transform", !open && "-rotate-90")}
      />
    </CollapsibleTrigger>
  );
}

export function SidebarFolderLink(props: LinkProps) {
  const { open, setOpen } = useFolderContext();
  const { prefetch, level } = useInternalContext();

  const pathname = usePathname();
  const active =
    props.href !== undefined && isActive(props.href, pathname, false);

  return (
    <Link
      {...props}
      data-active={active}
      className={cn(itemVariants({ active }), "w-full", props.className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).hasAttribute("data-icon")) {
          setOpen((prev) => !prev);
          e.preventDefault();
        } else {
          setOpen((prev) => !active || !prev);
        }
      }}
      prefetch={prefetch}
      style={{
        paddingInlineStart: getOffset(level),
        ...props.style,
      }}
    >
      <Border level={level} active={active} />
      {props.children}
      <ChevronDown
        data-icon
        className={cn("ms-auto transition-transform", !open && "-rotate-90")}
      />
    </Link>
  );
}

export function SidebarFolderContent(props: CollapsibleContentProps) {
  const ctx = useInternalContext();

  return (
    <CollapsibleContent
      {...props}
      className={cn("relative", props.className, "ml-2")}
    >
      <Context
        value={useMemo(
          () => ({
            ...ctx,
            level: ctx.level + 1,
          }),
          [ctx]
        )}
      >
        <div className="bg-fd-border absolute inset-y-0 start-3 w-px" />
        {props.children}
      </Context>
    </CollapsibleContent>
  );
}

export function SidebarCollapseTrigger(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { collapsed, setCollapsed } = useSidebar();

  return (
    <button
      type="button"
      aria-label="Collapse Sidebar"
      data-collapsed={collapsed}
      {...props}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: "icon",
        }),
        props.className
      )}
      onClick={() => {
        setCollapsed((prev) => !prev);
      }}
    >
      {props.children ?? <SidebarIcon />}
    </button>
  );
}

function useFolderContext() {
  const ctx = useContext(FolderContext);

  if (!ctx) throw new Error("Missing sidebar folder");
  return ctx;
}

function useInternalContext(): InternalContext {
  const ctx = useContext(Context);
  if (!ctx) throw new Error("<Sidebar /> component required.");

  return ctx;
}

/**
 * Render sidebar items from page tree
 */
export function SidebarPageTree(props: {
  components?: Partial<SidebarComponents>;
}) {
  const { root } = useTreeContext();

  console.log("root", root);

  return useMemo(() => {
    const { Separator, Item, Folder } = props.components ?? {};

    function renderSidebarList(
      items: PageTree.Node[],
      level: number
    ): ReactNode[] {
      return items.map((item, i) => {
        const id = `${item.type}_${i}`;

        if (item.type === "separator") {
          if (Separator) return <Separator key={id} item={item} />;
          return (
            <SidebarSeparator key={id} className={cn(i !== 0 && "mt-8")}>
              {item.name}
            </SidebarSeparator>
          );
        }

        if (item.type === "folder") {
          const children = renderSidebarList(item.children, level + 1);

          if (Folder)
            return (
              <Folder key={id} item={item} level={level}>
                {children}
              </Folder>
            );
          return (
            <PageTreeFolder key={id} item={item}>
              {children}
            </PageTreeFolder>
          );
        }

        if (Item) return <Item key={item.url} item={item} />;
        return (
          <SidebarItem
            key={item.url}
            href={item.url}
            external={item.external}
            icon={item.icon}
          >
            {/* {item.name} */}

            <span className="pl-[11px]">
              {SIDEBAR_RENAMED_PAGES.find((page) => page.pageName === item.name)
                ?.newPageName || item.name}
            </span>
          </SidebarItem>
        );
      });
    }

    return renderSidebarList(root.children, 1);
  }, [root, props.components]);
}

function PageTreeFolder({
  item,
  ...props
}: HTMLAttributes<HTMLElement> & {
  item: PageTree.Folder;
}) {
  const { defaultOpenLevel, level } = useInternalContext();
  const path = useTreePath();

  return (
    <SidebarFolder
      defaultOpen={
        (item.defaultOpen ?? defaultOpenLevel >= level) || path.includes(item)
      }
    >
      {item.index ? (
        <SidebarFolderLink
          href={item.index.url}
          external={item.index.external}
          {...props}
        >
          {item.icon}
          {item.name}
        </SidebarFolderLink>
      ) : (
        <SidebarFolderTrigger {...props}>
          {item.icon}
          {item.name}
        </SidebarFolderTrigger>
      )}
      <SidebarFolderContent>{props.children}</SidebarFolderContent>
    </SidebarFolder>
  );
}

function getOffset(level: number) {
  return `calc(var(--spacing) * ${(level > 1 ? level : 0) * 2 + 2})`;
}

function Border({ level, active }: { level: number; active?: boolean }) {
  if (level <= 1) return null;

  return (
    <div
      className={cn(
        "absolute inset-y-2 start-3 z-[2] w-px",
        active && "bg-fd-primary"
      )}
    />
  );
}
