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
    isNew: true,
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
    count: 2,
    page: "Product Variants",
  },
  {
    alpha: true,
    page: "Product Variants Carousel",
  },
  {
    count: 4,
    page: "Reviews",
  },
];
