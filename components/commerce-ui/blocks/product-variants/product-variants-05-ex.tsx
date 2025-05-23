"use client";

// Example usage of ProductVariant_05 component

import { useState } from "react";
import ProductVariant_05, {
  AccessoryVariant,
  ServiceVariant,
  VariantSelectionPayload,
} from "@/components/commerce-ui/blocks/product-variants/product-variants-05";

// Example accessory variants
const EXAMPLE_ACCESSORY_VARIANTS: AccessoryVariant[] = [
  {
    availableQuantity: 15,
    id: "acc-pitcher",
    isInStock: true,
    label: "Milk Pitcher",
    price: 24.99,
    value: "acc-pitcher",
  },
  {
    availableQuantity: 32,
    id: "acc-descaler",
    isInStock: true,
    label: "Descaling Kit",
    price: 19.99,
    value: "acc-descaler",
  },
  {
    availableQuantity: 8,
    id: "acc-filter",
    isInStock: true,
    label: "Water Filter Pack",
    price: 29.99,
    value: "acc-filter",
  },
  {
    availableQuantity: 0,
    id: "acc-cups",
    isInStock: false,
    label: "Espresso Cup Set",
    price: 39.99,
    value: "acc-cups",
  },
  {
    availableQuantity: 5,
    id: "acc-tamper",
    isInStock: true,
    label: "Premium Tamper",
    price: 44.99,
    value: "acc-tamper",
  },
];

// Example service variants
const EXAMPLE_SERVICE_VARIANTS: ServiceVariant[] = [
  {
    id: "serv-extended",
    label: "Extended Warranty (+2 Years)",
    price: 99.99,
    value: "serv-extended",
  },
  {
    id: "serv-installation",
    label: "Professional Installation",
    price: 79.99,
    value: "serv-installation",
  },
  {
    id: "serv-maintenance",
    label: "Annual Maintenance Plan",
    price: 149.99,
    value: "serv-maintenance",
  },
];

// Example product images
const EXAMPLE_PRODUCT_IMAGES = [
  {
    title: "Coffee Machine Front View",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-machine-01.jpg",
  },
  {
    title: "Coffee Machine Side View",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-machine-02.jpg",
  },
  {
    title: "Coffee Machine Cups",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-cups-01.jpg",
  },
  {
    title: "Coffee Filters",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-filter-01.jpg",
  },
];

export default function ProductVariant05Example() {
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([
    "acc-descaler",
    "acc-filter",
  ]);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "serv-extended",
  ]);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = (payload: VariantSelectionPayload) => {
    // Format the accessories and services for the alert message
    const accessoriesMessage =
      payload.accessoryIds.length > 0
        ? `\nSelected Accessories: ${payload.accessoryLabels.join(", ")} for $${payload.accessoriesPrice.toFixed(2)}`
        : "\nNo accessories selected";

    const servicesMessage =
      payload.serviceIds.length > 0
        ? `\nSelected Services: ${payload.serviceLabels.join(", ")} for $${payload.servicesPrice.toFixed(2)}`
        : "\nNo services selected";

    window.alert(
      `Added ${payload.quantity} BrewMaster Pro Coffee Machine to cart for a total of $${payload.totalPrice.toFixed(2)}
Base Price: $${payload.productPrice.toFixed(2)}${accessoriesMessage}${servicesMessage}`
    );
  };

  const handleBuyNow = (payload: VariantSelectionPayload) => {
    // Format the accessories and services for the alert message
    const accessoriesMessage =
      payload.accessoryIds.length > 0
        ? `\nSelected Accessories: ${payload.accessoryLabels.join(", ")} for $${payload.accessoriesPrice.toFixed(2)}`
        : "\nNo accessories selected";

    const servicesMessage =
      payload.serviceIds.length > 0
        ? `\nSelected Services: ${payload.serviceLabels.join(", ")} for $${payload.servicesPrice.toFixed(2)}`
        : "\nNo services selected";

    window.alert(
      `Buying ${payload.quantity} BrewMaster Pro Coffee Machine for a total of $${payload.totalPrice.toFixed(2)}
Base Price: $${payload.productPrice.toFixed(2)}${accessoriesMessage}${servicesMessage}`
    );
  };

  return (
    <div className="container mx-auto p-4">
      <ProductVariant_05
        title="BrewMaster Pro Coffee Machine"
        description="Professional-grade espresso machine with 15-bar pressure, built-in grinder and milk frother for café-quality coffee at home. Features programmable settings and a compact design."
        price={399.99}
        badge="Barista Choice"
        rating={4.8}
        reviewCount={256}
        warranty="2 Year"
        images={EXAMPLE_PRODUCT_IMAGES}
        accessoryVariants={EXAMPLE_ACCESSORY_VARIANTS}
        serviceVariants={EXAMPLE_SERVICE_VARIANTS}
        selectedAccessories={selectedAccessories}
        onAccessoriesChange={setSelectedAccessories}
        selectedServices={selectedServices}
        onServicesChange={setSelectedServices}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        currencyPrefix="$"
        benefits={[
          {
            description: "Ready in under 30 seconds",
            icon: (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            ),
            title: "Fast Brewing",
          },
          {
            description: "Self-cleaning function",
            icon: (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            ),
            title: "Easy Cleaning",
          },
          {
            description: "Multiple brewing options",
            icon: (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            ),
            title: "Customizable",
          },
        ]}
        featuredReview={{
          avatarUrl:
            "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-04.jpg",
          rating: 5,
          reviewDate: "Mar 15, 2024",
          reviewerName: "Sarah Johnson",
          reviewerTitle: "Coffee Enthusiast",
          reviewText:
            "This espresso machine changed my mornings completely. The milk frother creates the perfect foam for my lattes and the coffee quality is indistinguishable from my local café.",
        }}
      />
    </div>
  );
}
