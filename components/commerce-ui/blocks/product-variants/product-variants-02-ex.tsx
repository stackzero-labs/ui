"use client";

// Example usage of ProductVariant_02 component

import { useState } from "react";
import ProductVariant_02, {
  VariantItem,
  VariantSelectionPayload,
} from "./product-variants-02";

const EXAMPLE_VARIANTS: VariantItem[] = [
  {
    availableQuantity: 5,
    id: "variant-sport",
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
    isInStock: true,
    label: "Sport",
    price: 109.99,
    value: "variant-sport",
  },
  {
    availableQuantity: 10,
    id: "variant-prosound",
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-2.jpg",
    isInStock: true,
    label: "ProSound",
    price: 99.99,
    salePrice: 89.99,
    value: "variant-prosound",
  },
  {
    availableQuantity: 0,
    id: "variant-ultraquite",
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-3.jpg",
    isInStock: false,
    label: "UltraQuite™",
    price: 89.99,
    value: "variant-ultraquite",
  },
  {
    availableQuantity: 2,
    id: "variant-extremesilence",
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-4.jpg",
    isInStock: true,
    label: "ExtremeSilence™",
    price: 119.99,
    salePrice: 99.99,
    value: "variant-extremesilence",
  },
];

export default function ProductVariantExample() {
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
      `Added ${payload.quantity} ${payload.variantLabel} to cart at $${payload.price} each.\nStock Status: ${stockStatus}`
    );
  };

  const handleBuyNow = (payload: VariantSelectionPayload) => {
    const variant = EXAMPLE_VARIANTS.find((v) => v.value === payload.variantId);
    const stockStatus = variant?.isInStock ? "In Stock" : "Out of Stock";
    window.alert(
      `Buying ${payload.quantity} ${payload.variantLabel} at $${payload.price} each.\nStock Status: ${stockStatus}`
    );
  };

  return (
    <div className="container mx-auto p-4">
      <ProductVariant_02
        title="Premium Noise-Cancelling Headphones"
        description="Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers, gamers, and professionals."
        badge="Flash Sale"
        variants={EXAMPLE_VARIANTS}
        variantLabel="Model"
        shippingInfo="Free 2-day shipping"
        selectedVariant={selectedVariant}
        onVariantChange={handleVariantChange}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        sellerName="Soundbeast Engineering"
        marketplaceName="Xeon Marketplace"
        returnPolicyUrl="/"
      />
    </div>
  );
}
