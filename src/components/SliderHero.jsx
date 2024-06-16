import react from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import slide_image_1 from "../assets/startUp.jpeg";
import slide_image_2 from "../assets/startUp.jpeg";
import slide_image_3 from "../assets/startUp.jpeg";

import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function SliderHero() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 4.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img src={slide_image_1} alt="Slide Image 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="Slide Image 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide_image_1} alt="Slide Image 1" />
                </SwiperSlide>
                

                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <ArrowLeftIcon className="arrowLeft" aria-hidden="true" />
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <ArrowRightIcon className="arrowRight" aria-hidden="true" />
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Swiper>
        </>
    )
}