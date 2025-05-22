"use client";

// Example usage of ProductVariant_01 component

import { useState } from "react";
import ProductVariant_01, {
  VariantItem,
  VariantSelectionPayload,
} from "./product-variants-01";

const EXAMPLE_VARIANTS: VariantItem[] = [
  {
    id: "variant-sport",
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
    label: "Sport",
    price: 109.99,
    value: "variant-sport",
  },
  {
    id: "variant-prosound",
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-2.jpg",
    label: "ProSound",
    price: 99.99,
    salePrice: 89.99,
    value: "variant-prosound",
  },
  {
    id: "variant-ultraquite",
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-3.jpg",
    label: "UltraQuite™",
    price: 89.99,
    value: "variant-ultraquite",
  },
  {
    id: "variant-extremesilence",
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-4.jpg",
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

  const handleAddToCart = (payload: VariantSelectionPayload) => {
    window.alert(
      `Added ${payload.quantity} ${payload.variantLabel} to cart at $${payload.price} each.`
    );
  };

  const handleBuyNow = (payload: VariantSelectionPayload) => {
    window.alert(
      `Buying ${payload.quantity} ${payload.variantLabel} at $${payload.price} each.`
    );
  };

  return (
    <div className="container mx-auto p-4">
      <ProductVariant_01
        title="Premium Noise-Cancelling Headphones"
        description="Experience exceptional sound quality with our top-of-the-line noise-cancelling headphones, perfect for music lovers and professionals alike."
        badge="Sale"
        variants={EXAMPLE_VARIANTS}
        variantLabel="Color"
        shippingInfo="Free 2-day shipping"
        selectedVariant={selectedVariant}
        onVariantChange={setSelectedVariant}
        quantity={quantity}
        onQuantityChange={setQuantity}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        isInStock={true}
        availableQuantity={10}
      />
    </div>
  );
}
