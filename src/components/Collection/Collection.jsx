import Set from '../../assets/images/Collection-set.webp'
import Earrings from '../../assets/images/Collection-earring.webp'
import Bracelet from '../../assets/images/Collection-bracelet.webp'
import Brooch from '../../assets/images/Collection-brooch.webp'
import Ring from '../../assets/images/Collection-ring.webp'

function Collection() {
    return (
        <section className='px-5 sm:max-md:px-8 flex flex-col py-13 lg:mt-20 md:mt-14 mt-13 justify-center items-center bg-[#f0edec]'>
            <div className='grid grid-cols-1 lg:grid-cols-3 w-full '>
                {/*------------pictures-------------*/}
                <div dir='rtl' className='col-span-2'>
                    <div className='grid grid-cols-3 gap-2.5 w-full aspect-8/4'>
                        {/*----earrings----*/}
                        <div className='group cursor-pointer overflow-hidden rounded-sm min-h-0'>
                            <img src={Earrings} alt="Earrings" className='w-full h-full object-cover group-hover:scale-103 transition-all duration-800' />
                        </div>

                        {/*----ring & bracelet----*/}
                        <div className='grid grid-rows-[0.72fr_1fr] gap-2.5 min-h-0'>
                            {/*--ring--*/}
                            <div className='group cursor-pointer overflow-hidden rounded-sm min-h-0'>
                                <img src={Ring} alt="Ring" className='w-full h-full object-cover group-hover:scale-103 transition-all duration-800' />
                            </div>
                            {/*--Bracelet--*/}
                            <div className='group cursor-pointer overflow-hidden rounded-sm min-h-0'>
                                <img src={Bracelet} alt="Bracelet" className='w-full h-full object-cover group-hover:scale-103 transition-all duration-800' />
                            </div>
                        </div>
                        {/*----set & brooch----*/}
                        <div className='grid grid-rows-[1.73fr_1fr] gap-2.5 min-h-0'>
                            {/*--Set--*/}
                            <div className='group cursor-pointer overflow-hidden rounded-sm min-h-0'>
                                <img src={Set} alt="Set" className='w-full h-full object-cover object-[center_56%] group-hover:scale-103 transition-all duration-800' />
                            </div>
                            {/*--Brooch--*/}
                            <div className='group cursor-pointer overflow-hidden rounded-[3px] min-h-0'>
                                <img src={Brooch} alt="Brooch" className='w-full h-full object-cover group-hover:scale-103 transition-all duration-800' />
                            </div>
                        </div>
                    </div>
                </div>
                {/*------------title-------------*/}
                <div dir='rtl' className='flex flex-col justify-center'>
                    <h2 className='text-gold font-bold mt-5 lg:mt-0 text-[22px] md:text-[27px] xl:text-[30px]'>
                        <span> کالکشن ققنوس؛</span>
                        <br className='hidden lg:flex' />
                        <span> تجلی شکوه و درخشش </span>
                    </h2>
                    <p className='xl:w-100 lg:w-80 w-full text-txt md:mt-4 mt-3 text-[13px] lg:text-[15px] xl:text-[15px] sm:max-md:text-[13px] font-light leading-7'>
                        ققنوس، پرنده‌ای افسانه‌ای و نماد برخاستن دوباره است. این کالکشن، برداشتی امروزی از این اسطوره را در قالب جواهراتی با طراحی متمایز و درخشش چشم‌نواز طلا به تصویر می‌کشد.
                    </p>
                    <button className='flex flex-row items-center gap-3 w-35 md:w-37 lg:w-42 whitespace-nowrap md:text-[16px] sm:max-md:text-[14px] text-[13px] md:mt-6 mt-5 justify-center bg-primary hover:bg-hover-button active:bg-active-button transition-all duration-500 ease-in-out text-hero hover:text-white px-4 py-2.5 col-span-2 rounded-[5px] cursor-pointer'>
                        مشاهده کالکشن
                    </button>
                </div>
            </div>
        </section>
    )
}
export default Collection