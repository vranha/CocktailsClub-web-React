import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./Carousel.module.scss";

export default function Carousel() {
  return (
    <Swiper className={styles.swiper} pagination={true} modules={[Pagination]}>
      <SwiperSlide className={styles.swiperSlide}>Slide 1</SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>Slide 2</SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>Slide 3</SwiperSlide>
    </Swiper>
  );
}
