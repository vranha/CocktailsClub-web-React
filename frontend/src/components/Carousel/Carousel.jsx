
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';


import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Carousel.module.scss';

import { useState } from "react";

export default function Carousel() {

    return (
        <Swiper
            className={styles.swiper}
            modules={[Autoplay]}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.linkDiv}>
                    <Link to="/menu" className={styles.link}>
                        Carta
                    </Link>
                </div>
                <img
                    className={styles.slideImg}
                    src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                    alt=""
                />
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.linkDiv}>
                    <Link to="/contact" className={styles.link}>
                        Contactanos
                    </Link>
                </div>
                <img
                    className={styles.slideImg}
                    src="https://images.unsplash.com/photo-1617524455617-ce1e266aa810?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                    alt=""
                />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.linkDiv}>
                    <Link to="/about" className={styles.link}>
                        Conocenos
                    </Link>
                </div>
                <img
                    className={styles.slideImg}
                    src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2029&q=80"
                    alt=""
                />
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <div className={styles.linkDiv}>
                    <Link to="/locate" className={styles.link}>
                        Encuentranos
                    </Link>
                </div>
                <img
                    className={styles.slideImg}
                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                />
            </SwiperSlide>
        </Swiper>
    );

}
