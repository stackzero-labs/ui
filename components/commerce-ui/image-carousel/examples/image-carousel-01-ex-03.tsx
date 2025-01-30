import ImageCarousel01 from "@/components/commerce-ui/image-carousel/image-carousel-01";

const images = [
  "https://prd.place/400/600?id=37",
  "https://prd.place/400/600?id=38",
  "https://prd.place/400/600?id=39",
  "https://prd.place/800/1200?id=40",
  "https://prd.place/800/300?id=41",
];

export default function ImageCarousel01Example03() {
  return (
    <ImageCarousel01 images={images} imageFit="contain" showThumbs={false} />
  );
}
