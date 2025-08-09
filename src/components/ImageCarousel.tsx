// components/ImageCarousel.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../assets/img/carousel-1.jpg';
import img2 from '../assets/img/carousel-2.png';
import img3 from '../assets/img/carousel-3.jpg';
import img5 from '../assets/img/carousel-5.png';
import img6 from '../assets/img/carousel-6.jpg';

const images = [img1, img2, img3, img5, img6];

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full sm:h-96 h-56 rounded-lg"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-full select-none  sm:object-cover object-contain rounded-lg"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
