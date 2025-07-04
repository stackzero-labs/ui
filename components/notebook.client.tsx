"use client";
import { cn } from "../lib/cn";
import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { PageStyles, StylesProvider, useSidebar } from "fumadocs-ui/provider";
import { useNav } from "./layout/nav";
import { SidebarTrigger } from "fumadocs-core/sidebar";
import { buttonVariants } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useParams } from "next/navigation";

export function Navbar(props: HTMLAttributes<HTMLElement>) {
  const { collapsed, open } = useSidebar();
  const { isTransparent } = useNav();

  return (
    <header
      id="nd-subnav"
      {...props}
      className={cn(
        "fixed inset-x-0 top-[var(--fd-banner-height)] z-10 h-14 pe-[var(--fd-layout-offset)] backdrop-blur-lg transition-colors",
        (!isTransparent || open) && "bg-fd-background/80",
        props.className
      )}
      style={
        {
          paddingInlineStart: collapsed
            ? "calc(var(--fd-layout-offset))"
            : "calc(var(--fd-layout-offset) + var(--fd-sidebar-width))",
        } as object
      }
    >
      <div className="border-fd-foreground/10 mx-auto flex size-full flex-row items-center border-b px-4 md:gap-1.5">
        {props.children}
      </div>
    </header>
  );
}

export function NavbarSidebarTrigger(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { open } = useSidebar();

  return (
    <SidebarTrigger
      {...props}
      className={cn(
        buttonVariants({
          size: "icon",
          variant: "ghost",
        }),
        props.className
      )}
    >
      {open ? <X /> : <Menu />}
    </SidebarTrigger>
  );
}

export function Inset({ children }: { children: React.ReactNode }) {
  const params = useParams();

  const { slug } = params as { slug: string[] };

  const isBlock = slug?.includes("blocks");
  const isPage = slug?.includes("pages");

  // console.log("isBlock", isBlock);

  const pageStyles: PageStyles = {
    article: cn("w-full", isBlock || isPage ? "!max-w-[1450px]" : ""),
    page: cn("mt-[var(--fd-nav-height)]"),
    toc: cn("max-xl:hidden"),
    tocNav: cn("xl:hidden"),
  };

  return <StylesProvider {...pageStyles}>{children}</StylesProvider>;
}
