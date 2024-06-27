'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ArticleCard from './ArticleCard';

export default function ClientSwiper({ feeds }) {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      direction="vertical"
      modules={[Navigation]}
    >
      {feeds.map((feed, index) => (
        <SwiperSlide key={index}>
          <ArticleCard article={feed} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
