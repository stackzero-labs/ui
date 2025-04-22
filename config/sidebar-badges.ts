type SidebarBadge = {
  page: string;
  alpha?: boolean;
  isNew?: boolean;
  count?: number;
  upcoming?: boolean;
};

export const sidebarBadges: SidebarBadge[] = [
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
    count: 4,
    page: "Reviews",
  },
  {
    isNew: true,
    page: "Quantity Input",
  },
];
