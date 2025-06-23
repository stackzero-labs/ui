type SidebarBadge = {
  page: string;
  alpha?: boolean;
  isNew?: boolean;
  count?: number;
  upcoming?: boolean;
};

export const sidebarBadges: SidebarBadge[] = [
  {
    // isNew: true,
    page: "Address",
    upcoming: true,
  },
  {
    isNew: true,
    page: "MCP server",
  },
  {
    count: 12,
    page: "Banners",
  },
  {
    count: 12,
    page: "Product Card",
  },
  {
    count: 5,
    page: "Product Variants",
  },
  {
    count: 10,
    page: "Reviews",
  },
  {
    alpha: true,
    count: 1,
    page: "Carts",
  },
  {
    alpha: true,
    count: 1,
    page: "Product Pages",
  },
];
