import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./Carousel.module.scss";

export default function Carousel() {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <img
          className={styles.slide1Img}
          src="https://images.unsplash.com/photo-1572116469696-31de0f17cc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img
          className={styles.slide1Img}
          src="https://mldallasmagazine.com/get/files/image/galleries/cocktails-m-s-meeuwesen-unsplash.jpg"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
    </Swiper>
  );
}
