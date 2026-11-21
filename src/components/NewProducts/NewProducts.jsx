import './NewProducts.css';
/*----------------images-------------------*/
import Necklace from '../../assets/images/BS_necklace.jpg'
import Earrings from '../../assets/images/BS_earrings.jpg'
import Bracelet from '../../assets/images/BS_bracelet.webp'
import Ring from '../../assets/images/BS_ring.webp'
import Set from '../../assets/images/BS_set.jpg'
import Brooch from '../../assets/images/BS_brooch.webp'
/*----------------Hover images-------------------*/
import NecklaceHover from '../../assets/images/BS_necklace_2.webp'
import EarringsHover from '../../assets/images/BS_earrings_2.webp'
import BraceleteHover from '../../assets/images/BS_bracelet_2.webp'
import RingHover from '../../assets/images/BS_ring_2.webp'
import SetHover from '../../assets/images/BS_set_2.webp'
import BroochHover from '../../assets/images/BS_brooch_2.webp'

/*----------------component-------------------*/
import ProductCard from './ProductCard/ProductCard'
/*----------------Swiper-------------------*/
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
/*----------------Slider speed with Swiper button-------------------*/
import { useRef } from 'react'
/*----------------Products Array-------------------*/
const Products = [
    {
        id: 1,
        image: Earrings,
        hoverImage: EarringsHover,
        name: 'گوشواره طلا نگین',
        price: 35685000
    },
    {
        id: 2,
        image: Necklace,
        hoverImage: NecklaceHover,
        name: 'گردنبند طلا اشک',
        price: 71154000
    },
    {
        id: 3,
        image: Bracelet,
        hoverImage: BraceleteHover,
        name: 'دستبند طلا آفرینش',
        price: 49528000
    },
    {
        id: 4,
        image: Ring,
        hoverImage: RingHover,
        name: 'انگشتر طلا گیتی',
        price: 57398000
    },
    {
        id: 5,
        image: Set,
        hoverImage: SetHover,
        name: 'ست طلا پریان',
        price: 119589000
    },
    {
        id: 6,
        image: Brooch,
        hoverImage: BroochHover,
        name: 'سنجاق‌سینه طلا زنبق',
        price: 89357000
    },

]
function BestSellers() {
    {/*------------Slider speed with Swiper button-------------*/ }
    const swiperRef = useRef(null)
    return (
        <section className='px-5 sm:max-md:px-8 flex flex-col w-full lg:mt-20 md:mt-14 mt-13'>
            {/*------------title-------------*/}
            <div dir='rtl' className='w-full flex justify-between items-center'>
                <h2 className='text-gold font-bold text-[22px] md:text-[27px] xl:text-[30px]'>
                    جدیدترین محصولات
                </h2>
                <a href="#" className='group pl-2 gap-3 text-gold hover:text-[#84681F] transition-all duration-500 ease-in-out text-[13px] md:text-[15px] lg:text-[16px] flex justify-center items-center'>
                    <span>مشاهده بیشتر</span>
                    <svg className='transition-all duration-300 ease-in-out group-hover:-translate-x-1 shrink-0 w-3 h-2.5 md:w-3.5 md:h-3' viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='group-hover:stroke-[#84681F]' d="M7.66667 1L1 8L7.66667 15M1 8L17 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#B18B2A" />
                    </svg>
                </a>
            </div>
            {/*------------Products Slider-------------*/}
            <div className="relative md:mt-4 mt-3 w-full px-3">
                {/*--------button left--------*/}
                <button
                    onClick={() => swiperRef.current?.slidePrev(1000)}
                    type="button"
                    className="best-sellers-nav best-sellers-prev"
                    aria-label="Previous products"
                >
                    <span className="best-sellers-arrow best-sellers-arrow-prev" aria-hidden="true"></span>
                </button>
                {/*--------swiper--------*/}
                <Swiper
                    modules={[Autoplay]}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    slidesPerView={4}
                    loop={true}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    speed={3000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                >
                    {Products.map((product) => (
                        <SwiperSlide key={product.id} className="px-1 py-3">
                            <ProductCard
                                image={product.image}
                                hoverImage={product.hoverImage}
                                name={product.name}
                                price={product.price}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/*--------button right--------*/}
                <button
                    onClick={() => swiperRef.current?.slideNext(1000)}
                    type="button"
                    className="best-sellers-nav best-sellers-next"
                    aria-label="Next products"
                >
                    <span className="best-sellers-arrow best-sellers-arrow-next" aria-hidden="true"></span>
                </button>
            </div>
        </section>
    )
}
export default BestSellers