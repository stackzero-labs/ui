import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import Footer from "@/components/landing/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-screen">
        <HomeLayout {...baseOptions}>{children}</HomeLayout>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
