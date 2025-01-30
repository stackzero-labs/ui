import ImageCarousel01 from "@/components/commerce-ui/image-carousel/image-carousel-01";

const images = [
  "https://prd.place/400/600?id=30",
  "https://prd.place/400/600?id=31",
  "https://prd.place/400/600?id=32",
  "https://prd.place/400/600?id=33",
  "https://prd.place/400/600?id=34",
  "https://prd.place/400/600?id=35",
  "https://prd.place/400/600?id=36",
];

export default function ImageCarousel01Example02() {
  return (
    <ImageCarousel01
      images={images}
      imageFit="contain"
      thumbPosition="bottom"
    />
  );
}
