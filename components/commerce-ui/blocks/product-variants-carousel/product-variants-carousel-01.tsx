"use client";

import ImageCarouselBasic, {
  CarouselImage,
} from "@/components/commerce-ui/image-carousel/basic/image-carousel-basic";
import PriceFormat from "@/components/commerce-ui/price-format/basic/price-format-basic";
import QuantityInputBasic from "@/components/commerce-ui/quantity-input/basic/quantity-input-basic";
import VariantSelectorBasic, {
  VariantItem,
} from "@/components/commerce-ui/variant-selector/basic/variant-selector-basic";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState, useMemo } from "react";

// Default data
const DEFAULT_COLOR_VARIANTS: VariantItem[] = [
  { id: "color-black", label: "Black", value: "color-black" },
  { id: "color-white", label: "White", value: "color-white" },
  { id: "color-pink", label: "Pink", value: "color-pink" },
];

// Default images for each color variant
const DEFAULT_COLOR_IMAGES: Record<string, CarouselImage[]> = {
  "color-black": [
    {
      title: "Black Headphones - Front View",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
    },
    {
      title: "Black Headphones - Side View",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
    },
    {
      title: "Black Headphones - Closeup",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
    },
  ],
  "color-pink": [
    {
      title: "Pink Headphones - Front View",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-2.jpg",
    },
    {
      title: "Pink Headphones - Side View",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-2.jpg",
    },
    {
      title: "Pink Headphones - Closeup",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-2.jpg",
    },
  ],
  "color-white": [
    {
      title: "White Headphones - Front View",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-3.jpg",
    },
    {
      title: "White Headphones - Side View",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-3.jpg",
    },
    {
      title: "White Headphones - Closeup",
      url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-3.jpg",
    },
  ],
};

export interface ProductVariantCarousel01Props {
  title?: string;
  description?: string;
  badge?: string | null;
  price?: number;
  shippingInfo?: string;
  colorVariants?: VariantItem[];
  colorImages?: Record<string, CarouselImage[]>;
  initialColor?: string;
  onAddToCart?: () => void;
  onBuyNow?: () => void;
  aspectRatio?: "square" | "video" | "wide" | "auto";
  showThumbs?: boolean;
  thumbPosition?: "bottom" | "top" | "left" | "right";
}

function ProductVariantsCarousel01({
  aspectRatio = "wide",
  badge = "New Arrival",
  colorImages = DEFAULT_COLOR_IMAGES,
  colorVariants = DEFAULT_COLOR_VARIANTS,
  description = "Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers, gamers, and professionals.",
  initialColor = "color-black",
  onAddToCart = () => {},
  onBuyNow = () => {},
  price = 99.99,
  shippingInfo = "Free shipping on all orders",
  showThumbs = true,
  thumbPosition = "bottom",
  title = "Premium Wireless Headphones",
}: ProductVariantCarousel01Props) {
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Get current images based on selected color
  const currentImages = useMemo(() => {
    return (
      colorImages[selectedColor] ||
      colorImages[Object.keys(colorImages)[0]] ||
      []
    );
  }, [selectedColor, colorImages]);

  // Handle color change
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    setSelectedImageIndex(0); // Reset to first image when color changes
  };

  return (
    <div className="my-6 grid max-w-screen-lg grid-cols-1 gap-12 rounded-lg md:grid-cols-2">
      <div className="relative w-full">
        {badge && (
          <Badge className="bg-primary absolute top-4 left-4 z-10">
            {badge}
          </Badge>
        )}
        <ImageCarouselBasic
          images={currentImages}
          selectedIndex={selectedImageIndex}
          onSlideChange={setSelectedImageIndex}
          aspectRatio={aspectRatio}
          showThumbs={showThumbs}
          thumbPosition={thumbPosition}
          showCarouselControls={true}
          showImageControls={true}
        />
      </div>

      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
          <p className="text-muted-foreground mt-2">{description}</p>
        </div>

        <div>
          <PriceFormat
            prefix="$"
            value={price}
            className="text-3xl font-semibold"
          />
          {shippingInfo && (
            <p className="text-muted-foreground mt-1 text-sm">{shippingInfo}</p>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Color</label>
            <VariantSelectorBasic
              value={selectedColor}
              onValueChange={handleColorChange}
              variants={colorVariants}
              className="grid-cols-3 sm:grid-cols-3"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">Quantity</label>
          <QuantityInputBasic
            quantity={quantity}
            onChange={setQuantity}
            max={10}
          />
        </div>

        <div className="mt-2 flex flex-row gap-4">
          <Button variant="outline" className="w-1/2" onClick={onAddToCart}>
            Add to Cart
          </Button>
          <Button className="w-1/2" onClick={onBuyNow}>
            Buy Now
          </Button>
        </div>

        <div className="mt-4">
          <p className="text-sm font-medium">Selected Configuration:</p>
          <p className="text-muted-foreground text-sm">
            {colorVariants.find((v) => v.value === selectedColor)?.label} - $
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductVariantsCarousel01;
