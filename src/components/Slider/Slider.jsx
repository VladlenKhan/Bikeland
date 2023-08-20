import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slider.module.scss";
import Card from '../Card/Card'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Keyboard,   Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
      <Swiper
        slidesPerView={2}
        spaceBetween={109}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard,  Navigation]}
        className={styles.mySwiper}
      >
      
        <SwiperSlide className={styles.wrapper__block}><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
        <SwiperSlide><Card/></SwiperSlide>
 
       
      </Swiper>
      </div>
    </div>
  );
}