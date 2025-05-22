"use client";

// Example usage of ProductVariant_01 component

import { useState } from "react";
import ProductVariant_01, {
  VariantItem,
  VariantSelectionPayload,
} from "./product-variants-01";

// Example product data with sale prices
const EXAMPLE_VARIANTS: VariantItem[] = [
  {
    id: "color-red",
    label: "Ruby Red",
    value: "color-red",
    price: 249.99,
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-red.jpg",
  },
  {
    id: "color-black",
    label: "Stealth Black",
    value: "color-black",
    price: 229.99,
    salePrice: 199.99, // On sale!
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-black.jpg",
  },
  {
    id: "color-blue",
    label: "Ocean Blue",
    value: "color-blue",
    price: 239.99,
    salePrice: 209.99, // On sale!
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-blue.jpg",
  },
];

export default function ProductVariantExample() {
  // State for controlled usage
  const [selectedVariant, setSelectedVariant] = useState<string>(
    EXAMPLE_VARIANTS[0].value
  );
  const [quantity, setQuantity] = useState<number>(1);

  // Handlers for adding to cart and buying
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
      {/* ProductVariant_01 Component with Controlled Props */}
      <ProductVariant_01
        title="Premium Noise-Cancelling Headphones"
        description="Experience exceptional sound quality with our top-of-the-line noise-cancelling headphones, perfect for music lovers and professionals alike."
        badge="Sale"
        variants={EXAMPLE_VARIANTS}
        variantLabel="Color"
        shippingInfo="Free 2-day shipping"
        // Controlled state
        selectedVariant={selectedVariant}
        onVariantChange={setSelectedVariant}
        quantity={quantity}
        onQuantityChange={setQuantity}
        // Callbacks
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
        // Availability
        isInStock={true}
        availableQuantity={20}
      />
    </div>
  );
}
