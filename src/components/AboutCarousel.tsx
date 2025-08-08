
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../assets/img/about-1.jpg';
import img2 from '../assets/img/about-2.jpg';
import img3 from '../assets/img/about-3.jpg';

const images = [img1, img2, img3, ];

const AboutCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-auto  sm:h-[500px] h-96 rounded-lg"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="mx-auto w-auto h-full object-contain  rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AboutCarousel;
