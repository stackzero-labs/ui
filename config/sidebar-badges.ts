type SidebarBadge = {
  page: string;
  alpha?: boolean;
  isNew?: boolean;
  count?: number;
  upcoming?: boolean;
};

export const sidebarBadges: SidebarBadge[] = [
  {
    isNew: true,
    page: "Banners",
  },
  {
    alpha: true,
    isNew: true,
    page: "Image Carousel",
  },
  {
    count: 3,
    page: "Product Cards",
  },
  {
    count: 2,
    isNew: true,
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
