import Girl from '../../assets/images/hero-girl.webp'
import FirstCard from '../../assets/images/p-1-Hero.webp'
import SecondeCard from '../../assets/images/p-2-Hero.webp'
import ThirdCard from '../../assets/images/p-3-Hero.webp'

import './Hero.css'

import HeroCard from './HeroCard/HeroCard'

/*----------------Slider speed with Swiper button-------------------*/
import { useRef } from 'react'

/*----------------Swiper-------------------*/
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

/*----------------cards Array-------------------*/
const HeroCardsArray = [
    {
        id: 1,
        image: FirstCard,
        name: 'گوشواره طلا زرین ',
        price: 64198000
    },
    {
        id: 2,
        image: SecondeCard,
        name: 'طوق طلا آوینا',
        price: 138579000
    },
    {
        id: 3,
        image: ThirdCard,
        name: 'انگشتر طلا ماهور',
        price: 32495000
    },
]

function Hero() {
    {/*------------Slider speed with Swiper button-------------*/}
    const swiperRef = useRef(null)

    return (
        <section className='overflow-hidden h-115 md:h-163 lg:h-147 xl:h-163 flex flex-col justify-center  pt-3 pb-0 background-hero'>


            <div className='grid relative px-5 sm:max-md:px-8 md:px-8 xl:px-10 h-full grid-cols-[42%_58%] md:grid-cols-2 items-center'>
                {/*------------image of girl-------------*/}
                <div className='absolute z-0 top-0 bottom-0 left-0
                w-[42%] 
                md:top-1 md:left-1/2
                md:-translate-x-1/2 md:w-183
                md:overflow-visible'>
                    <img src={Girl} alt="image of hero"
                        className='absolute bottom-0 left-[20%] sm:max-md:left-[60%] lg:left-1/2
               -translate-x-1/2 w-120 sm:max-md:w-130 md:w-183 lg:w-163 xl:w-183 max-w-none h-auto
               pointer-events-none '
                    />
                </div>
                {/*------------two cards-------------*/}
                <div className='hidden lg:flex md:col-start-1 md:row-start-1
                    flex-col w-62 xl:w-75 relative z-10'>
                    {/*----titr cards----*/}
                    <div dir='rtl' className='flex justify-between'>
                        <h2 className='font-medium text-[20px] text-txt' dir='rtl'>
                            منتخب آذین‌گلد 
                        </h2>
                        {/*----left and right arrow cards----*/}
                        <div className='flex gap-3'>
                            <button 
                            onClick={() => swiperRef.current?.slideNext(1000)}
                            className='group best-sellers-next cursor-pointer rounded-[3px] px-2 w-full h-full bg-[#F4F2F1] hover:bg-gold active:bg-[#CFA230] transition-all duration-500 ease-in-out'>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="group-hover:stroke-white transition-colors" d="M1 1L6 6L1 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#44133B" />
                                </svg>
                            </button>

                            <button 
                            onClick={() => swiperRef.current?.slideNext(1000)}
                            className='group best-sellers-prev cursor-pointer rounded-[3px] px-2 w-full h-full bg-[#F4F2F1] hover:bg-gold active:bg-[#CFA230] transition-all duration-500 ease-in-out'>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path className="group-hover:stroke-white transition-colors" d="M6 11L1 6L6 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#44133B" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className='w-full min-w-0'>
                        {/*--------swiper--------*/}
                        <Swiper
                            className='w-full'
                            modules={[Autoplay]}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper
                            }}
                            
                            slidesPerView={2}
                            loop={true}
                            slidesPerGroup={1}
                            spaceBetween={12}
                            speed={3000}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            navigation={{
                                prevEl: '.best-sellers-prev',
                                nextEl: '.best-sellers-next',
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 2,
                                    spaceBetween: 12,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 12,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 12,
                                },
                                1280: {
                                    slidesPerView: 2,
                                    spaceBetween: 12,
                                },
                            }}
                        >
                            {HeroCardsArray.map((card) => (
                                <SwiperSlide key={card.id} className="px-1 py-3">
                                    <HeroCard
                                        image={card.image}
                                        name={card.name}
                                        price={card.price}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/*------------txt & btn content-------------*/}
                <div className='col-start-2 row-start-1 relative z-10
                flex flex-col justify-center items-end'>
                    {/*----texts----*/}
                    <h1 dir='rtl'
                        className='text-primary text-[27px] sm:max-md:text-[30px] md:text-[37px] font-bold'
                    >
                        فراتر از زیـــور؛
                        <br></br>
                        روایتی از هنــــــــر
                    </h1>
                    <p dir='rtl'
                        className='xl:w-100 lg:w-70 sm:max-md:w-68 md:w-60 w-48 text-txt md:mt-4 mt-3 text-[12px] md:text-[14px] lg:text-[15px] xl:text-[17px] sm:max-md:text-[13px] font-light leading-7'>
                        در آذین‌گلد، هر اثر با نگاهی هنرمندانه شکل می‌گیرد؛ تلفیقی از ظرافت، اصالت و طراحی‌هایی که زیبایی را به شکلی متفاوت روایت می‌کنند.
                    </p>
                    {/*----button----*/}
                    <div dir='rtl' className='md:mt-6 mt-5 flex flex-col md:flex-row gap-4 justify-self-start items-start md:items-center xl:w-80 lg:w-70 sm:max-md:w-50 w-45 md:text-[17px] sm:max-md:text-[14px] text-[13px]'>

                        <button className='flex flex-row xl:w-40 shrink-0 justify-center gap-3 bg-primary hover:bg-hover-button active:bg-active-button transition-all duration-500 ease-in-out text-hero hover:text-white px-4 py-2.5 rounded-[5px] cursor-pointer whitespace-nowrap'>
                            <span>محصولات</span>
                            <svg className='mt-0.5 shrink-0 w-4.25 h-3.75 md:w-5 md:h-4.5' viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.2 6.28405C14.2 8.27227 12.5882 9.88405 10.6 9.88405C8.61177 9.88405 7 8.27227 7 6.28405M3.32727 18.884H17.8727C19.158 18.884 20.2 17.8615 20.2 16.6L18.7091 3.28402C18.7091 2.02259 17.6671 1 16.3818 1H4.52727C3.24196 1 2.2 2.02259 2.2 3.28402L1 16.6C1 17.8615 2.04196 18.884 3.32727 18.884Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#FBFBFB" />
                            </svg>
                        </button>
                        <a href="#" className='group flex pr-1 shrink-0 whitespace-nowrap justify-center items-center gap-3 hover:gap-4 hover:text-primary transition-all duration-300 ease-in-out text-center'>
                            <span>کالکشن‌ها</span>
                            <svg className='shrink-0 w-3.75 h-3.25 md:w-4.5 md:h-4' viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='group-hover:stroke-primary' d="M7.66667 1L1 8L7.66667 15M1 8L17 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#120F07" />
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Hero