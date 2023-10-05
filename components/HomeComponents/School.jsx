"use client";
import "swiper/css";
import 'swiper/css/scrollbar';

import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { tinaField, useTina } from "tinacms/dist/react";

function School(props) {
  const { data } = useTina(props);
  console.log(data);
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
      <div className="container">
        {data?.home?.blocks?.map((block, i) => {
          switch (block.__typename) {
            case "HomeBlocksSlider":
              return (
                <React.Fragment key={block.__typename}>
                  <div data-tina-field={tinaField(data.home, `blocks[${i}]`)}>
                    <div className="home__school-heading">
                      <h3>{block.sliderTitle}</h3>
                      <p>{block.sliderDescription}</p>
                    </div>
                    <div className="home__school-slider">
                      {block?.sliderList?.length && (
                        <>
                          <Swiper
                            pagination={{
                              type: "progressbar",
                            }}
                            modules={[Scrollbar]}
                            breakpoints={{
                              991: {
                                slidesPerView: "auto",
                              },
                              767: {
                                width: 767,
                                slidesPerView: 2,
                              },
                              // when window width is >= 768px
                              479: {
                                width: 469,
                                slidesPerView: 1,
                              },
                            }}
                            spaceBetween={20}
                            className="home__school-swiper"
                            onSwiper={(swiper) => {
                              swiperRef.current = swiper;
                            }}
                          >
                            {block.sliderList.map((slide, idx) => (
                              <React.Fragment key={idx}>
                                {slide?.title &&
                                  slide?.image &&
                                  slide?.description && (
                                    <SwiperSlide>
                                      <div className="slide__item">
                                        <Image
                                          src={slide.image}
                                          className="slide__image"
                                          width={755}
                                          height={483}
                                          alt="slide image"
                                        />
                                        <h4 className="slide__title">
                                          {slide.title}
                                        </h4>
                                        <p className="slide__details">
                                          {slide.description}
                                        </p>
                                      </div>
                                    </SwiperSlide>
                                  )}
                              </React.Fragment>
                            ))}
                          </Swiper>
                          <div className="container">
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
                        </>
                      )}
                    </div>
                  </div>
                </React.Fragment>
              );
            default:
              return <></>;
          }
        })}
      </div>
    </section>
  );
}

export default School;
