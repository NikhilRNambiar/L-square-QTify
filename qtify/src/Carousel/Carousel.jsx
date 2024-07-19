import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Carousel.module.css';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';
import { Navigation } from 'swiper/modules';

const Carousel = ({ data, renderItem }) => {
    return (
        <div className={styles.carouselContainer}>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                modules={[Navigation]}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 7 },
                }}
                navigation={{
                    nextEl: `.${styles.swiperButtonNext}`,
                    prevEl: `.${styles.swiperButtonPrev}`,
                }}
                className={styles.swiperContainer}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        {renderItem(item)}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.swiperButtonPrev}><LeftArrow /></div>
            <div className={styles.swiperButtonNext}><RightArrow /></div>
        </div>
    );
};

export default Carousel;
