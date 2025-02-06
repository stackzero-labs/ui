import { cn } from "@/lib/utils";
import { RootProvider } from "fumadocs-ui/provider";
import { GeistSans } from "geist/font/sans";
import { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import "./global.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          GeistSans.variable,
          geistSans.className,
          "bg-background relative flex min-h-screen flex-col antialiased"
        )}
      >
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
  description:
    "The Commerce UI is a set of components and hooks that can be used to build a custom storefront for your commerce site.",
  metadataBase: new URL("https://ui.stackzero.co"),
  title: "Commerce UI",
};
