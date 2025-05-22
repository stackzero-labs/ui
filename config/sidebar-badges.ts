type SidebarBadge = {
  page: string;
  alpha?: boolean;
  isNew?: boolean;
  count?: number;
  upcoming?: boolean;
};

export const sidebarBadges: SidebarBadge[] = [
  {
    count: 12,
    page: "Banners",
  },
  {
    alpha: true,
    isNew: true,
    page: "Image Carousel",
  },
  {
    count: 12,
    isNew: true,
    page: "Product Card",
  },
  {
    alpha: true,
    count: 5,
    page: "Product Variants",
  },
  {
    count: 10,
    page: "Reviews",
  },
];
