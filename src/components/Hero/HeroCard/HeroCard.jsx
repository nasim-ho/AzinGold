function HeroCard({image, name, price}) {
    return (
        <div className='group cursor-pointer'>
            <div className='flex border border-gold/20 hover:border-gold/35 rounded-[3px] lg:w-28 lg:h-31 xl:w-34 xl:h-37 bg-hero/40 group-hover:bg-white/40 transition-all duration-500 justify-center items-center px-4 py-5'>
                <img src={image} alt="image of card"
                    className='w-23 group-hover:scale-102 transition-all duration-800'
                />
            </div>
            <a href="#" dir='rtl' className='flex flex-col mt-2'>
                <h3 className='font-normal lg:text-[13px] xl:text-[15px] group-hover:text-gold transition-all duration-500'>
                    {name}
                </h3>
                <p className='text-[14px] font-light mt-1.5 lg:text-[12px] xl:text-[14px] group-hover:text-gold transition-all duration-500'>
                    {price.toLocaleString('fa-IR')}
                </p>
            </a>
        </div>
    )
}

export default HeroCard