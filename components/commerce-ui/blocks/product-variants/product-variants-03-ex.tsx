"use client";

// Example usage of ProductVariant_03 component

import { useState } from "react";
import ProductVariant_03, {
  VariantItem,
  VariantSelectionPayload,
} from "./product-variants-03";

const EXAMPLE_VARIANTS: VariantItem[] = [
  {
    availableQuantity: 32,
    features: [
      "360° Immersive Sound",
      "Waterproof Design",
      "10-hour Battery Life",
      "Bluetooth 5.0",
    ],
    id: "model-standard",
    images: [
      {
        title: "Standard Speaker",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-02.jpg",
      },
      {
        title: "Standard Speaker",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-02.jpg",
      },
    ],
    isInStock: true,
    label: "Standard",
    price: 199.99,
    value: "model-standard",
  },
  {
    availableQuantity: 15,
    features: [
      "360° Immersive Sound",
      "Waterproof Design",
      "15-hour Battery Life",
      "Bluetooth 5.1",
      "Voice Assistant",
    ],
    id: "model-pro",
    images: [
      {
        title: "Pro Speaker",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-03.jpg",
      },
      {
        title: "Pro Speaker",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-03.jpg",
      },
    ],
    isInStock: true,
    label: "Pro",
    price: 249.99,
    salePrice: 229.99,
    value: "model-pro",
  },
  {
    availableQuantity: 8,
    features: [
      "360° Immersive Sound",
      "Waterproof Design",
      "20-hour Battery Life",
      "Bluetooth 5.2",
      "Voice Assistant",
      "Multi-room Sync",
    ],
    id: "model-ultra",
    images: [
      {
        title: "Ultra Speaker",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-04.jpg",
      },
      {
        title: "Ultra Speaker",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-04.jpg",
      },
    ],
    isInStock: true,
    label: "Ultra",
    price: 299.99,
    value: "model-ultra",
  },
  {
    availableQuantity: 0,
    features: [
      "360° Immersive Sound",
      "Waterproof Design",
      "24-hour Battery Life",
      "Bluetooth 5.2",
      "Voice Assistant",
      "Multi-room Sync",
      "Exclusive Design",
    ],
    id: "model-limited",
    images: [
      {
        title: "Limited Edition Speaker",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
      },
      {
        title: "Limited Edition Speaker",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
      },
      {
        title: "Limited Edition Speaker",
        url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
      },
    ],
    isInStock: false,
    label: "Limited Edition",
    price: 349.99,
    value: "model-limited",
  },
];

export default function ProductVariant03Example() {
  const [selectedVariant, setSelectedVariant] = useState<string>(
    EXAMPLE_VARIANTS[0].value
  );
  const [quantity, setQuantity] = useState<number>(1);

  // Adjust quantity if it exceeds available stock when variant changes
  const handleVariantChange = (value: string) => {
    setSelectedVariant(value);
    const newVariant = EXAMPLE_VARIANTS.find((v) => v.value === value);
    if (
      newVariant &&
      newVariant.isInStock &&
      newVariant.availableQuantity !== undefined &&
      newVariant.availableQuantity !== null &&
      quantity > newVariant.availableQuantity
    ) {
      setQuantity(Math.max(1, newVariant.availableQuantity));
    }
  };

  const handleAddToCart = (payload: VariantSelectionPayload) => {
    const variant = EXAMPLE_VARIANTS.find((v) => v.value === payload.variantId);
    const stockStatus = variant?.isInStock ? "In Stock" : "Out of Stock";
    window.alert(
      `Added ${payload.quantity} ${payload.variantLabel} SoundSphere to cart for a total of $${payload.totalPrice.toFixed(2)}.\nStock Status: ${stockStatus}`
    );
  };

  const handleBuyNow = (payload: VariantSelectionPayload) => {
    const variant = EXAMPLE_VARIANTS.find((v) => v.value === payload.variantId);
    const stockStatus = variant?.isInStock ? "In Stock" : "Out of Stock";
    window.alert(
      `Buying ${payload.quantity} ${payload.variantLabel} SoundSphere for a total of $${payload.totalPrice.toFixed(2)}.\nStock Status: ${stockStatus}`
    );
  };

  return (
    <div className="container mx-auto p-4">
      <ProductVariant_03
        title="SoundSphere Ultra Wireless Speaker"
        description="Next-generation portable speaker with 360° spatial audio and immersive sound experience. Perfect for home, travel, and outdoor adventures."
        badge="Just Released"
        variants={EXAMPLE_VARIANTS}
        selectedVariant={selectedVariant}
        onVariantChange={handleVariantChange}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        releaseDate="August 15, 2023"
        currencyPrefix="$"
      />
    </div>
  );
}
