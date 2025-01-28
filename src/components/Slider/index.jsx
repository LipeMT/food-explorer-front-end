import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';

export function Slider({ children }) {

    const childrenArray = React.Children.toArray(children);

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={16}
            slidesPerView={1.7}
            navigation
            pagination={{ clickable: true }}
            className="dishes"
        >
            {
                childrenArray.map(slide => <SwiperSlide>{slide}</SwiperSlide>)
            }
        </Swiper>
    );
};