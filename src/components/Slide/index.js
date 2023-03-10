import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// If you want to use your own Selectors look up the Advancaed Story book examples
const Slide = ({ slides, h, w }) => {
  return (
    <Carousel infiniteLoop showIndicators={false} showStatus={false} >
      {slides.map((slide) => {
        return <Image src={slide.image} quality={100} height={h} width={w} borderRadius={20} />;
      })}
    </Carousel>
  );
};

export default Slide;