import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sliderImage1 from "@/assets/keyboard-1.jpg";
import sliderImage2 from "@/assets/keyboard-2.jpg";
import sliderImage3 from "@/assets/keyboard-3.jpg";
import sliderImage4 from "@/assets/keyboard-4.jpg";
import sliderImage5 from "@/assets/keyboard-5.jpg";
import sliderImage6 from "@/assets/keyboard-6.jpg";
import sliderImage7 from "@/assets/keyboard-7.jpg";
import sliderImage8 from "@/assets/keyboard-8.jpg";
import sliderImage9 from "@/assets/keyboard-9.jpg";
import sliderImage10 from "@/assets/keyboard-10.jpg";
import Container from "../Container";

export function HeroSection() {
  const sliderData = [
    {
      id: 1,
      image: sliderImage1,
    },
    {
      id: 2,
      image: sliderImage2,
    },
    {
      id: 3,
      image: sliderImage3,
    },
    {
      id: 4,
      image: sliderImage4,
    },
    {
      id: 5,
      image: sliderImage5,
    },
    {
      id: 6,
      image: sliderImage6,
    },
    {
      id: 7,
      image: sliderImage7,
    },
    {
      id: 8,
      image: sliderImage8,
    },
    {
      id: 9,
      image: sliderImage9,
    },
    {
      id: 10,
      image: sliderImage10,
    },
  ];

  return (
    <Container>
      <div className="relative w-full h-[500px] mt-6">
        <Carousel
          className=" overflow-hidden rounded-lg shadow-lg"
          plugins={[
            Autoplay({
              delay: 6000,
            }),
          ]}
        >
          <CarouselContent className="flex">
            {sliderData.map((slider) => (
              <CarouselItem key={slider.id} className="min-w-full">
                <Card className="bg-transparent">
                  <CardContent className="flex items-center justify-center h-[500px] p-0">
                    <img
                      src={slider?.image}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      alt=""
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
            &#9664;
          </CarouselPrevious>
          <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-75 transition-opacity duration-300">
            &#9654;
          </CarouselNext>
        </Carousel>
      </div>
    </Container>
  );
}
