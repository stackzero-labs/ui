"use client";

import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface StoreHeaderProps {
  storeName?: string;
  logoUrl?: string;
  searchPlaceholder?: string;
  className?: string;
  navigationItems?: { label: string; url: string }[];
  cartItemCount?: number;
  showUserAccount?: boolean;
  showMobileMenu?: boolean;
}

const DEFAULT_LOGO =
  "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/logo-01.png";

export function StoreHeader({
  cartItemCount = 0,
  className = "",
  logoUrl = DEFAULT_LOGO,
  navigationItems = [
    { label: "Home", url: "#" },
    { label: "Categories", url: "#" },
    { label: "Deals", url: "#" },
    { label: "About", url: "#" },
  ],
  searchPlaceholder = "Search products...",
  showMobileMenu = true,
  showUserAccount = true,
  storeName = "TechGadgets Store",
}: StoreHeaderProps) {
  return (
    <header
      className={`w-full border-b border-gray-200 shadow-sm dark:border-gray-800 ${className} bg-background`}
    >
      <div className="mx-auto w-full">
        <div className="flex h-16 items-center justify-between">
          {/* Store Logo and Name */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-100 p-1 dark:bg-gray-800">
              <img
                src={logoUrl}
                alt={`${storeName} logo`}
                width={40}
                height={40}
                className="h-full w-full object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">
              {storeName}
            </h1>
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.url}
                className="text-sm text-gray-700 uppercase transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side: Search + Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="hidden w-64 sm:block">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="w-full border-gray-300 pr-4 pl-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                />
              </div>
            </div>

            {/* Mobile Search Button */}
            <Button variant="ghost" size="sm" className="sm:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cartItemCount > 9 ? "9+" : cartItemCount}
                </span>
              )}
            </Button>

            {/* User Account */}
            {showUserAccount && (
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
            )}

            {/* Mobile Menu */}
            {showMobileMenu && (
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default StoreHeader;
