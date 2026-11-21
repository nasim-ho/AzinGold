
function ProductCard({ image, hoverImage, name, price }) {
    return (
        <article className="group flex flex-col h-full justify-center cursor-pointer ">
            <div className="relative flex rounded-[3px] aspect-square overflow-hidden justify-center items-center">
                <img src={image} alt={name} className='absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0' />

                <img src={hoverImage} alt={name} className='absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
            </div>
            <div dir="rtl" className="flex flex-col gap-2 pt-3">
                <h2 className="font-bold text-[15px] md:text-[16px] lg:text-[17px] w-full group-hover:text-gold transition-all duration-500">
                    {name}
                </h2>
                <div className="flex gap-1 w-full items-center group-hover:text-gold transition-all duration-500">
                    <h3 className="font-medium text-[14px] md:text-[15px] lg:text-[16px] ">{price.toLocaleString('fa-IR')}</h3>
                    <h3 className="font-light text-[12px] md:text-[13px] lg:text-[14px]">تومان</h3>
                </div>
            </div>
        </article>
    )
}
export default ProductCard