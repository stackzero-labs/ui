import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    href: "/docs",
    title: "Overview",
  },
  {
    href: "/docs/installation",
    title: "Installation",
  },
  {
    href: "/docs/components/rating-star/basic",
    title: "Components",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-muted grow" />
      <footer>
        <div className="mx-auto max-w-screen-xl">
          <div className="flex flex-col items-center justify-start py-12">
            {/* Logo */}
            <div className="relative flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="logo"
                width={24}
                height={24}
                className="block"
              />
              <div className="text-sm font-semibold text-nowrap sm:inline-block">
                {siteConfig.name}
              </div>
              <span className="bg-secondary text-foreground ml-0.5 hidden rounded-full px-1.5 py-px text-[10px] font-medium select-none md:block">
                beta
              </span>
            </div>

            <ul className="mt-6 flex flex-wrap items-center gap-4">
              {footerLinks.map(({ href, title }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground font-medium"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                commerce-ui
              </Link>
              . All rights reserved.
            </span>

            <div className="text-muted-foreground flex items-center gap-5">
              <Link
                href="https://github.com/stackzero-labs/ui"
                target="_blank"
                className="flex flex-row gap-2"
              >
                Source code
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
