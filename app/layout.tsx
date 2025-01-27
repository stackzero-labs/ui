import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { fontRedaction } from "@/lib/fonts";
import { cn } from "@/lib/utils";
const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        fontRedaction.variable
      )}
    >
      <body className="relative flex min-h-screen flex-col bg-background font-sans antialiased">
        <RootProvider
          search={{
            options: {
              type: "static",
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Commerce UI",
  description:
    "The Commerce UI is a set of components and hooks that can be used to build a custom storefront for your commerce site.",
  metadataBase: new URL("https://ui.stackzero.co"),
};
