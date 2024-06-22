import React, { useEffect, useRef } from "react";
import SingleCarouselCard from "../ui/SingleCarouselCard";
import gsap from "gsap";

function Carousel() {
  const dummyArr = [1, 2, 3, 4, 5, 6, 7, 8];
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const totalWidth = carousel.scrollWidth - carousel.clientWidth;

    gsap.to(carousel, {
      x: -totalWidth,
      duration: 10,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div className="mt-40 overflow-hidden">
      <div ref={carouselRef} className="flex space-x-6 carouselContainer">
        {dummyArr.map((item, index) => (
          <SingleCarouselCard key={index} className="carousel-item" />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
