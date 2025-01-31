import ImageCarouselHorizontal from "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal";

const images = [
  "https://prd.place/400/600?id=30",
  "https://prd.place/400/600?id=31",
  "https://prd.place/400/600?id=32",
  "https://prd.place/400/600?id=33",
  "https://prd.place/400/600?id=34",
  "https://prd.place/400/600?id=35",
  "https://prd.place/400/600?id=36",
];

export default function ImageCarousel_Horizontal_Ex_02() {
  return (
    <ImageCarouselHorizontal
      images={images}
      imageFit="contain"
      thumbPosition="bottom"
    />
  );
}
