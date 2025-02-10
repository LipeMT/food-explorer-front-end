import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Container } from './styles';

export const Slider = ({ children }) => {
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const [leftShadowVisible, setLeftShadowVisible] = useState(false);
  const [rightShadowVisible, setRightShadowVisible] = useState(true);

  
  const childrenArray = React.Children.toArray(children);
  
  const handleSlideChange = (swiper) => {
    setLeftShadowVisible(!swiper.isBeginning);
    setRightShadowVisible(!swiper.isEnd);
  };

  return (
    <Container
      $leftShadowVisible={leftShadowVisible}
      $rightShadowVisible={rightShadowVisible}
    >
      <div className="slider-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          onSlideChange={handleSlideChange}
          spaceBetween={30}
          slidesPerView="auto"
        >
          {childrenArray.map((child, index) => (
            <SwiperSlide key={index}>{child}</SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div ref={prevButtonRef} className="swiper-button-prev"></div>
      <div ref={nextButtonRef} className="swiper-button-next"></div>
    </Container>
  );
};

export default Slider;