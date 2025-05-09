import ImageCarouselBasic, {
  CarouselImages,
} from "@/components/commerce-ui/image-carousel/basic/image-carousel-basic";

const images: CarouselImages = [
  {
    title: "Speaker 1",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-02.jpg",
  },
  {
    title: "Headphone 2",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-03.jpg",
  },
  {
    title: "Headphone 3",
    url: "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-04.jpg",
  },
];

export default function ImageCarousel_Basic_Ex_01() {
  return <ImageCarouselBasic images={images} imageFit="contain" />;
}
