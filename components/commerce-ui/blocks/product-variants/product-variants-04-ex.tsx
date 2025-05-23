"use client";

// Example usage of ProductVariant_04 component

import { useState } from "react";
import ProductVariant_04, {
  AccessoryVariant,
  StorageVariant,
  Testimonial,
  VariantSelectionPayload,
} from "@/components/commerce-ui/blocks/product-variants/product-variants-04";

// Storage variants with prices and stock information
const EXAMPLE_STORAGE_VARIANTS: StorageVariant[] = [
  {
    availableQuantity: 15,
    id: "storage-64",
    isInStock: true,
    label: "64GB",
    price: 1299.99,
    value: "storage-64",
  },
  {
    availableQuantity: 8,
    id: "storage-128",
    isInStock: true,
    label: "128GB",
    price: 1399.99,
    value: "storage-128",
  },
  {
    availableQuantity: 3,
    id: "storage-256",
    isInStock: true,
    label: "256GB",
    price: 1499.99,
    value: "storage-256",
  },
  {
    availableQuantity: 0,
    id: "storage-512",
    isInStock: false,
    label: "512GB",
    price: 1699.99,
    value: "storage-512",
  },
];

// Accessory options with prices
const EXAMPLE_ACCESSORY_VARIANTS: AccessoryVariant[] = [
  {
    id: "acc-sd",
    label: "SD Card (64GB)",
    price: 29.99,
    value: "acc-sd",
  },
  {
    id: "acc-tripod",
    label: "Mini Tripod",
    price: 49.99,
    value: "acc-tripod",
  },
  {
    id: "acc-bag",
    label: "Camera Bag",
    price: 79.99,
    value: "acc-bag",
  },
  {
    id: "acc-lens",
    label: "Extra Lens",
    price: 249.99,
    value: "acc-lens",
  },
  {
    id: "acc-batt",
    label: "Battery Pack",
    price: 59.99,
    value: "acc-batt",
  },
];

// Example testimonials
const EXAMPLE_TESTIMONIALS: Testimonial[] = [
  {
    date: "3 weeks ago",
    name: "Michael Roberts",
    rating: 5,
    role: "Professional Photographer",
    text: "The image quality is exceptional. I've switched from my DSLR and haven't looked back.",
  },
  {
    date: "1 month ago",
    name: "Sarah Chen",
    rating: 4,
    role: "Content Creator",
    text: "Perfect for my YouTube videos. The autofocus is lightning fast!",
  },
  {
    date: "2 months ago",
    name: "Alex Johnson",
    rating: 5,
    text: "Worth every penny. The low light performance is incredible.",
  },
];

export default function ProductVariant04Example() {
  const [selectedStorage, setSelectedStorage] = useState<string>(
    EXAMPLE_STORAGE_VARIANTS[0].value
  );
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([
    "acc-sd",
    "acc-tripod",
  ]);
  const [quantity, setQuantity] = useState<number>(1);

  // Adjust quantity if it exceeds available stock when storage changes
  const handleStorageChange = (value: string) => {
    setSelectedStorage(value);
    const newStorageVariant = EXAMPLE_STORAGE_VARIANTS.find(
      (v) => v.value === value
    );
    if (
      newStorageVariant &&
      newStorageVariant.isInStock &&
      newStorageVariant.availableQuantity !== undefined &&
      newStorageVariant.availableQuantity !== null &&
      quantity > newStorageVariant.availableQuantity
    ) {
      setQuantity(Math.max(1, newStorageVariant.availableQuantity));
    }
  };

  const handleAddToCart = (payload: VariantSelectionPayload) => {
    const storageVariant = EXAMPLE_STORAGE_VARIANTS.find(
      (v) => v.value === payload.storageVariantId
    );
    const stockStatus = storageVariant?.isInStock ? "In Stock" : "Out of Stock";

    const accessoryLabels = payload.accessoryLabels.join(", ");
    const accessoriesMessage =
      payload.accessoryIds.length > 0
        ? `\nSelected Accessories: ${accessoryLabels} for $${payload.accessoriesPrice.toFixed(2)}`
        : "\nNo accessories selected";

    window.alert(
      `Added ${payload.quantity} ${payload.storageVariantLabel} ProCapture X3 to cart for a total of $${payload.totalPrice.toFixed(2)}
Storage Price: $${payload.storagePrice.toFixed(2)}${accessoriesMessage}
Stock Status: ${stockStatus}`
    );
  };

  const handleBuyNow = (payload: VariantSelectionPayload) => {
    const storageVariant = EXAMPLE_STORAGE_VARIANTS.find(
      (v) => v.value === payload.storageVariantId
    );
    const stockStatus = storageVariant?.isInStock ? "In Stock" : "Out of Stock";

    const accessoryLabels = payload.accessoryLabels.join(", ");
    const accessoriesMessage =
      payload.accessoryIds.length > 0
        ? `\nSelected Accessories: ${accessoryLabels} for $${payload.accessoriesPrice.toFixed(2)}`
        : "\nNo accessories selected";

    window.alert(
      `Buying ${payload.quantity} ${payload.storageVariantLabel} ProCapture X3 for a total of $${payload.totalPrice.toFixed(2)}
Storage Price: $${payload.storagePrice.toFixed(2)}${accessoriesMessage}
Stock Status: ${stockStatus}`
    );
  };

  return (
    <div className="container mx-auto p-4">
      <ProductVariant_04
        title="ProCapture X3 Digital Camera"
        description="Professional-grade mirrorless camera with 32MP sensor, 4K video recording, and advanced stabilization. Perfect for professionals and enthusiasts alike."
        badge="New Release"
        imageUrl="https://images.pexels.com/photos/6883802/pexels-photo-6883802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        features={[
          "32 Megapixel Sensor",
          "4K Video Recording",
          "5-Axis Stabilization",
          "Weather-Sealed Body",
          "Bluetooth & Wi-Fi",
          "1200+ Shots Per Charge",
        ]}
        storageVariants={EXAMPLE_STORAGE_VARIANTS}
        accessoryVariants={EXAMPLE_ACCESSORY_VARIANTS}
        testimonials={EXAMPLE_TESTIMONIALS}
        selectedStorage={selectedStorage}
        onStorageChange={handleStorageChange}
        selectedAccessories={selectedAccessories}
        onAccessoriesChange={setSelectedAccessories}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        currencyPrefix="$"
      />
    </div>
  );
}
