import ImageCarouselHorizontal from "@/components/commerce-ui/image-carousel/horizontal/image-carousel-horizontal";

const images = [
  "https://prd.place/3000/2500?id=37",
  "https://prd.place/400/600?id=38",
  "https://prd.place/400/600?id=39",
  "https://prd.place/800/1200?id=40",
  "https://prd.place/800/300?id=41",
];

export default function ImageCarousel_Horizontal_Ex_01() {
  return (
    <ImageCarouselHorizontal
      images={images}
      imageFit="contain"
      thumbPosition="right"
    />
  );
}
