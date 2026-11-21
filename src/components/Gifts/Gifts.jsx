import GiftsImg1 from '../../assets/images/gift2.webp'
import GiftsImg2 from '../../assets/images/gift1.webp'

function Gifts() {
    return (
        <section className='px-5 sm:max-md:px-8 lg:mt-20 md:mt-14 mt-13 overflow-hidden flex flex-col justify-center items-center'>
            <div dir='rtl' className='grid grid-cols-1 lg:grid-cols-[1.8fr_3fr]'>
                {/*------------content-------------*/}
                <div dir='rtl' className='flex flex-col w-full justify-center order-2 lg:order-1'>
                    <h2 className='text-gold font-bold mt-5 lg:mt-0 text-[22px] md:text-[27px] xl:text-[30px]'>
                        هدیه‌ای ماندگار
                    </h2>
                    <p className='xl:w-110 lg:w-80 w-full text-txt md:mt-4 mt-3 text-[13px] lg:text-[15px] xl:text-[15px] sm:max-md:text-[13px] font-light leading-7'>
                        در آذین گلد می‌توانید طرح دلخواه خود را برای ساخت هدیه‌ای اختصاصی انتخاب کنید؛ اثری منحصربه‌فرد که با ظرافت و سلیقه‌ی شما شکل می‌گیرد و لحظه‌های ارزشمند زندگی عزیزانتان را ماندگارتر می‌کند.
                    </p>
                    <button className='flex flex-row items-center w-35 md:w-42 whitespace-nowrap md:text-[16px] sm:max-md:text-[14px] text-[13px] md:mt-6 mt-5 justify-center gap-3 bg-primary hover:bg-hover-button active:bg-active-button transition-all duration-500 ease-in-out text-hero hover:text-white px-4 py-2.5 col-span-2 rounded-[5px] cursor-pointer'>
                         سفارش اختصاصی
                    </button>
                </div>
                {/*------------pictures-------------*/}
                <div className='order-1 lg:order-2'>
                    <div className='grid grid-cols-[0.55fr_1fr] gap-2.5 min-h-0'>
                        <div className='overflow-hidden rounded-[3px] min-h-0'>
                            <img src={GiftsImg1} alt="GiftsImg1" className='w-full h-full object-cover scale-110 object-[65%_center] '/>
                        </div>

                        <div className='overflow-hidden rounded-[3px] min-h-0'>
                            <img src={GiftsImg2} alt="GiftsImg2" className='w-full h-full object-cover scale-140 -translate-x-4 translate-y-2'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Gifts