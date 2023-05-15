import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import "./styles.css";

import styles from "./Slider.module.scss";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
import Image from "next/image";

export default function Slider() {
  return (
    <section>
      <Swiper
        effect={"fade"}
        speed={3000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        loopAdditionalSlides={1}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper swiper"
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideImg}>
            <Image
              // src="/images/mainbg01.png"
              src="/images/ryokan01.jpg"
              alt="ロゴ"
              width={1920}
              height={1320}
              priority={true}
              placeholder="blur"
              blurDataURL={"/images/mainbg01.png"}
              className={styles.img}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideImg}>
            <Image
              // src="/images/mainbg02.jpg"
              src="/images/ryokan02.jpg"
              alt="ロゴ"
              width={1920}
              height={1320}
              priority={true}
              placeholder="blur"
              blurDataURL={"/images/mainbg02.jpg"}
              className={styles.img}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div className={styles.slideImg}>
            <Image
              // src="/images/mainbg03.jpg"
              src="/images/ryokan03.jpg"
              alt="ロゴ"
              width={1920}
              height={1320}
              priority={true}
              placeholder="blur"
              blurDataURL={"/images/mainbg03.jpg"}
              className={styles.img}
            />
          </div>
        </SwiperSlide>
        <div className={styles.title}>
          頑張る人の
          <br />
          頑張らない時間
        </div>
      </Swiper>
    </section>
  );
}
