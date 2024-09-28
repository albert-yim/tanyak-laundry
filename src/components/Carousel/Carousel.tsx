import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type CarouselTypes = {
  contents: JSX.Element[];
};

export default function Carousel({ contents }: CarouselTypes) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return <Slider {...settings}>{contents.map((element) => element)}</Slider>;
}

export function CarouselTest() {
  const FirstPage = (
    <div
      style={{
        height: 300,
        width: 400,
        backgroundColor: "blue",
      }}
    >
      First Page
    </div>
  );

  const SecondPage = (
    <div
      style={{
        height: 300,
        width: 400,
        backgroundColor: "red",
      }}
    >
      Second Page
    </div>
  );

  const PAGES = [FirstPage, SecondPage];

  return (
    <>
      <Carousel contents={PAGES} />
    </>
  );
}
