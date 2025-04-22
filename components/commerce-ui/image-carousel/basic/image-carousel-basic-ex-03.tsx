import ImageCarouselBasic, {
  CarouselImages,
} from "@/components/commerce-ui/image-carousel/basic/image-carousel-basic";

const images: CarouselImages = [
  {
    title: "Headphone 1",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
  },
  {
    title: "Headphone 2",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-2.jpg",
  },
  {
    title: "Headphone 3",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-3.jpg",
  },
];

export default function ImageCarousel_Basic_Ex_03() {
  return (
    <ImageCarouselBasic images={images} imageFit="contain" showThumbs={false} />
  );
}
