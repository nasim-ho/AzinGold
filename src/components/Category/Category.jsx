import Set from '../../assets/images/Category-half_set.webp'
import SetHover from '../../assets/images/Category-half_set-1.webp'

import Necklace from '../../assets/images/Category-necklace.webp'
import NecklaceHover from '../../assets/images/Category-necklace-2.webp'

import Earrings from '../../assets/images/Category-earrings.webp'
import EarringsHover from '../../assets/images/Category-earrings-2.webp'

import Bracelet from '../../assets/images/Category-bracelet.webp'
import BraceletHover from '../../assets/images/Category-bracelet-2.webp'

import Brooch from '../../assets/images/Category-brooch.webp'
import BroochHover from '../../assets/images/Category-brooch-2.webp'

import Ring from '../../assets/images/Category-ring.webp'
import RingHover from '../../assets/images/Category-ring-2.webp'

import Arrow from '../../assets/images/arrow.png'

function Category() {
    return (
        <section className='px-5 sm:max-md:px-8 flex flex-col justify-center items-center'>
            {/*------------title-------------*/}
            <div className='lg:pt-17 md:pt-14 pt-9 flex justify-center items-center'>
                <img src={Arrow} alt="Arrow" className='w-15 md:w-27 lg:w-35 xl:w-50 mr-3' />
                <h2 className='text-gold font-bold text-[22px] md:text-[27px] xl:text-[30px]'>
                    دسته‌بندی‌های آذین‌گلد
                </h2>
                <img src={Arrow} alt="Arrow" className='scale-x-[-1] w-15 md:w-27 lg:w-35 xl:w-50 ml-3' />
            </div>
            
            {/*------------category-------------*/}
            <div className='grid grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-6 w-full justify-between pt-8 '>
                {/*----set----*/}
                <div className='group flex flex-col w-fit shrink-0 justify-center items-center cursor-pointer'>
                    {/*----set image----*/}
                    <div className='relative overflow-hidden rounded-[3px]'>
                        <img src={Set} alt="set" className='block w-full h-auto object-contain transition-opacity duration-400 group-hover:opacity-0' />
                        {/*----image hover----*/}
                        <img src={SetHover} alt="set" className='absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                    </div>
                    {/*----name----*/}
                    <h3 className='text-[17px] md:text-[19px] xl:text-[20px] mt-2 group-hover:text-gold transition-all duration-500'>
                        ست
                    </h3>
                </div>

                {/*----Necklace----*/}
                <div className='group flex flex-col w-fit shrink-0 justify-center items-center cursor-pointer'>
                    {/*----Necklace image----*/}
                    <div className='relative overflow-hidden rounded-[3px]'>
                        <img src={Necklace} alt="Necklace" className='block w-full h-auto object-contain transition-opacity duration-400 group-hover:opacity-0' />
                        {/*----image hover----*/}
                        <img src={NecklaceHover} alt="Necklace" className='absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                    </div>
                    {/*----name----*/}
                    <h3 className='text-[17px] md:text-[19px] xl:text-[20px] mt-2 group-hover:text-gold transition-all duration-500'>
                        گردنبد
                    </h3>
                </div>

                {/*----Bracelet----*/}
                <div className='group flex flex-col justify-center w-fit shrink-0 items-center cursor-pointer'>
                    {/*----Bracelet image----*/}
                    <div className='relative overflow-hidden rounded-[3px]'>
                        <img src={Bracelet} alt="Bracelet" className='block w-full h-auto object-contain transition-opacity duration-400 group-hover:opacity-0' />
                        {/*----image hover----*/}
                        <img src={BraceletHover} alt="Bracelet" className='absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                    </div>
                    {/*----name----*/}
                    <h3 className='text-[17px] md:text-[19px] xl:text-[20px] mt-2 group-hover:text-gold transition-all duration-500'>
                        دستبند
                    </h3>
                </div>

                {/*----Earrings----*/}
                <div className='group flex flex-col justify-center w-fit shrink-0 items-center cursor-pointer'>
                    {/*----Earrings image----*/}
                    <div className='relative overflow-hidden rounded-[3px]'>
                        <img src={Earrings} alt="Earrings" className='block w-full h-auto object-contain transition-opacity duration-400 group-hover:opacity-0' />
                        {/*----image hover----*/}
                        <img src={EarringsHover} alt="Earrings" className='absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                    </div>
                    {/*----name----*/}
                    <h3 className='text-[17px] md:text-[19px] xl:text-[20px] mt-2 group-hover:text-gold transition-all duration-500'>
                        گوشواره
                    </h3>
                </div>
                
                {/*----Ring----*/}
                <div className='group flex flex-col justify-center w-fit shrink-0 items-center cursor-pointer'>
                    {/*----Ring image----*/}
                    <div className='relative overflow-hidden rounded-[3px]'>
                        <img src={Ring} alt="Ring" className='block w-full h-auto object-contain transition-opacity duration-400 group-hover:opacity-0' />
                        {/*----image hover----*/}
                        <img src={RingHover} alt="Ring" className='absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                    </div>
                    {/*----name----*/}
                    <h3 className='text-[17px] md:text-[19px] xl:text-[20px] mt-2 group-hover:text-gold transition-all duration-500'>
                        انگشتر
                    </h3>
                </div>

                {/*----Brooch----*/}
                <div className='group flex flex-col justify-center w-fit shrink-0 items-center cursor-pointer'>
                    {/*----Brooch image----*/}
                    <div className='relative overflow-hidden rounded-[3px]'>
                        <img src={Brooch} alt="Brooch" className='block w-full h-auto object-contain transition-opacity duration-400 group-hover:opacity-0' />
                        {/*----image hover----*/}
                        <img src={BroochHover} alt="Brooch" className='absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
                    </div>
                    {/*----name----*/}
                    <h3 className='text-[17px] md:text-[19px] xl:text-[20px] mt-2 group-hover:text-gold transition-all duration-500'>
                        سنجاق‌ سینه
                    </h3>
                </div>
                
            </div>
        </section>
    )
}
export default Category