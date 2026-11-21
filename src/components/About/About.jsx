import LeftImg from '../../assets/images/About-left.webp'
import RightImg from '../../assets/images/About-right.webp'

function About (){
    return(
        <section className='bg-[#f0edec] h-120 md:h-full py-13 px-5 sm:max-md:px-8 lg:mt-20 md:mt-14 mt-13 overflow-hidden flex flex-col justify-center items-center'>
            <div className='grid grid-cols-2 gap-8 md:gap-0 md:grid-cols-3 grid-rows-1 w-full h-130'>
                {/*------------left picture-------------*/}
                <div className='h-full w-full md:flex hidden rounded-[3px] overflow-hidden'>
                    <img src={LeftImg} alt="LeftImg" className='w-full h-full object-cover' />
                </div>
                {/*------------content-------------*/}
                <div dir='rtl' className='flex flex-col w-full justify-center items-start md:items-center text-start md:text-center'>
                    <h2 className='text-gold font-bold mt-5 lg:mt-0 text-[22px] md:text-[27px] xl:text-[30px]'>
                        گالری آذین‌گلد
                    </h2>
                    <p className='xl:w-90 lg:w-70 md:w-50 text-txt md:mt-4 mt-3 text-[13px] lg:text-[15px] xl:text-[15px] sm:max-md:text-[13px] font-light leading-7'>
                        در آذین گلد، طلا تنها به ارزش و درخشش آن محدود نمی‌شود. آنچه برای ما اهمیت دارد، تناسب میان فرم، جزئیات و زیبایی هر قطعه است. ما به دنیای طلا و جواهر نگاهی فراتر از معیارهای همیشگی داریم؛ نگاهی که در انتخاب‌ها، ترکیب‌ها و سبک آثار این مجموعه دیده می‌شود.
                    </p>
                    <button className='flex flex-row w-30 xl:w-40 md:text-[16px] sm:max-md:text-[14px] text-[13px] md:mt-6 mt-5 justify-center gap-3 bg-primary hover:bg-hover-button active:bg-active-button transition-all duration-500 ease-in-out text-hero hover:text-white px-4 py-2.5 col-span-2 rounded-[5px] cursor-pointer'>
                        داستان ما
                    </button>
                </div>
                {/*------------right picture-------------*/}
                <div className='h-full w-full overflow-hidden rounded-[3px]'>
                    <img src={RightImg} alt="RightImg" className='w-full h-full object-cover object-[90%_center]' />
                </div>
            </div>
        </section>
    )
}
export default About