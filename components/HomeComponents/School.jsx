"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderList = [
  {
    _id: 1,
    image: "/slide-1.jpg",
    title: "KG Library",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    _id: 2,
    image: "/slide-2.jpg",
    title: "KG Classroom",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    _id: 3,
    image: "/slide-3.jpg",
    title: "KG Entrance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    _id: 4,
    image: "/slide-3.jpg",
    title: "KG Entrance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function School() {
  const swiperRef = useRef(null);

  const goToPreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className="home__school">
      <div className="home__school-in">
        <div>
          <div className="home__school-heading">
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco{" "}
            </p>
          </div>
          <div className="home__school-slider">
            {sliderList?.length && (
              <>
                <Swiper
                  modules={[Scrollbar]}
                  scrollbar={{
                    draggable: true,
                    el: ".swiper-scrollbar",
                    hide: false,
                  }}
                  breakpoints={{
                    991: {
                      // slidesPerView: "auto",
                      slidesPerView: 3,
                    },
                    767: {
                      // width: 767,
                      slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    479: {
                      // width: 469,
                      slidesPerView: 1,
                    },
                  }}
                  spaceBetween={20}
                  className="home__school-swiper"
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                >
                  {sliderList.map((slide, idx) => (
                    <React.Fragment key={idx}>
                      {slide?.title && slide?.image && slide?.description && (
                        <SwiperSlide>
                          <div className="slide__item">
                            <Image
                              src={slide.image}
                              className="slide__image"
                              width={755}
                              height={483}
                              alt="slide image"
                            />
                            <h4 className="slide__title">{slide.title}</h4>
                            <p className="slide__details">
                              {slide.description}
                            </p>
                          </div>
                        </SwiperSlide>
                      )}
                    </React.Fragment>
                  ))}
                </Swiper>
                <div className="slider">
                  <div className="slider__controls-wrapper">
                    <div className="swiper-scrollbar"></div>
                    <div className="school_slider-controls">
                      <button
                        onClick={goToPreviousSlide}
                        className="slider__controls-button"
                      >
                        <ChevronLeft />
                      </button>
                      <button
                        onClick={goToNextSlide}
                        className="slider__controls-button"
                      >
                        <ChevronRight />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default School;
