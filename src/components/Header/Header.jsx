import Logo from '../../assets/images/logohero.png'
import MobileMenu from './MobileMenu/MobileMenu'
import { useState } from 'react'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <header className='px-5 sm:max-md:px-8 md:px-8 xl:px-10 pt-2 sticky top-0 z-80 pb-2 bg-[#E8E5E3]'>
            {/*--------------------------MOBILE---------------------*/}
            <div className='flex items-center justify-between md:hidden'>
                {/*----basket icon----*/}
                <button className='basket cursor-pointer'>
                    <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V1V0ZM3.29254 1L4.25776 0.738585C4.13971 0.302682 3.74414 0 3.29254 0V1ZM7.01791 14.7552L6.05268 15.0166C6.18295 15.4976 6.64747 15.8093 7.14194 15.7475L7.01791 14.7552ZM18.4806 13.3224L18.6046 14.3147C19.0293 14.2616 19.3731 13.9441 19.4599 13.525L18.4806 13.3224ZM20.2 5.01194L21.1793 5.21455C21.2402 4.92003 21.1653 4.61373 20.9754 4.38052C20.7855 4.1473 20.5007 4.01194 20.2 4.01194V5.01194ZM4.3791 5.01194L3.41388 5.27336V5.27336L4.3791 5.01194ZM1 1V2H3.29254V1V0H1V1ZM7.01791 14.7552L7.14194 15.7475L18.6046 14.3147L18.4806 13.3224L18.3566 12.3301L6.89387 13.7629L7.01791 14.7552ZM18.4806 13.3224L19.4599 13.525L21.1793 5.21455L20.2 5.01194L19.2207 4.80934L17.5013 13.1198L18.4806 13.3224ZM3.29254 1L2.32731 1.26142L3.41388 5.27336L4.3791 5.01194L5.34433 4.75053L4.25776 0.738585L3.29254 1ZM4.3791 5.01194L3.41388 5.27336L6.05268 15.0166L7.01791 14.7552L7.98314 14.4938L5.34433 4.75053L4.3791 5.01194ZM20.2 5.01194V4.01194H4.3791V5.01194V6.01194H20.2V5.01194ZM10.6 18.5073H9.6C9.6 18.7834 9.37614 19.0073 9.1 19.0073V20.0073V21.0073C10.4807 21.0073 11.6 19.888 11.6 18.5073H10.6ZM9.1 20.0073V19.0073C8.82386 19.0073 8.6 18.7834 8.6 18.5073H7.6H6.6C6.6 19.888 7.71929 21.0073 9.1 21.0073V20.0073ZM7.6 18.5073H8.6C8.6 18.2311 8.82386 18.0073 9.1 18.0073V17.0073V16.0073C7.71929 16.0073 6.6 17.1266 6.6 18.5073H7.6ZM9.1 17.0073V18.0073C9.37614 18.0073 9.6 18.2311 9.6 18.5073H10.6H11.6C11.6 17.1266 10.4807 16.0073 9.1 16.0073V17.0073ZM18.6 18.5073H17.6C17.6 18.7834 17.3761 19.0073 17.1 19.0073V20.0073V21.0073C18.4807 21.0073 19.6 19.888 19.6 18.5073H18.6ZM17.1 20.0073V19.0073C16.8239 19.0073 16.6 18.7834 16.6 18.5073H15.6H14.6C14.6 19.888 15.7193 21.0073 17.1 21.0073V20.0073ZM15.6 18.5073H16.6C16.6 18.2311 16.8239 18.0073 17.1 18.0073V17.0073V16.0073C15.7193 16.0073 14.6 17.1266 14.6 18.5073H15.6ZM17.1 17.0073V18.0073C17.3761 18.0073 17.6 18.2311 17.6 18.5073H18.6H19.6C19.6 17.1266 18.4807 16.0073 17.1 16.0073V17.0073Z" fill="#120F07" />
                    </svg>
                </button>
                {/*----logo----*/}
                <div className='flex items-center justify-end'>
                    <div dir='rtl' className='flex items-center'>
                        <img src={Logo} alt="Logo" className='w-10 h-auto' />
                        <h3 className='font-Donia text-gold text-[23px]'>آذین‌گلد</h3>
                    </div>
                </div>
                {/*----hamburger icon----*/}
                <button className="cursor-pointer"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label='باز کردن منو'
                    aria-expanded={isMenuOpen}
                >
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 13H1M17 7H1M17 1H1" strokeWidth="2" strokeLinecap="round" stroke="#120F07" />
                    </svg>
                </button>
            </div>
            {/*--------------------------MOBILE MENU---------------------*/}
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={()=>setIsMenuOpen(false)}
            />
            {/*--------------------------DESKTOP---------------------*/}
            <div className='hidden md:grid grid-cols-[1fr_auto_1fr] w-full items-center'>
                {/*------------icon left-------------*/}
                <div className='flex flex-row items-center justify-start gap-6'>
                    {/*----search icon----*/}
                    <button className='group search cursor-pointer'>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path 
                            className='group-hover:stroke-gold transition-all duration-300 ease-in-out'
                            d="M14.3269 14.44L17.8 17.8M16.68 8.84C16.68 13.1699 13.1699 16.68 8.84 16.68C4.51009 16.68 1 13.1699 1 8.84C1 4.51009 4.51009 1 8.84 1C13.1699 1 16.68 4.51009 16.68 8.84Z" strokeWidth="2" strokeLinecap="round" stroke="#120F07" />
                        </svg>
                    </button>
                    {/*----user icon-----*/}
                    <button className='group user cursor-pointer'>
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path 
                            className='group-hover:stroke-gold transition-all duration-300 ease-in-out'
                            d="M1.97882 20.2H19.2212C19.7618 20.2 20.2 19.7131 20.2 19.1124C20.2 15.3369 17.0457 12.2762 10.6 12.2762C4.15429 12.2762 1 15.3369 1 19.1124C1 19.7131 1.43823 20.2 1.97882 20.2ZM14.2 4.6C14.2 6.58822 12.5882 8.2 10.6 8.2C8.61177 8.2 7 6.58822 7 4.6C7 2.61177 8.61177 1 10.6 1C12.5882 1 14.2 2.61177 14.2 4.6Z" strokeWidth="2" stroke="#120F07" />
                        </svg>
                    </button>
                    {/*----basket icon-----*/}
                    <button className='group basket cursor-pointer'>
                        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path 
                            className='group-hover:fill-gold transition-all duration-300 ease-in-out'
                            d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2V1V0ZM3.29254 1L4.25776 0.738585C4.13971 0.302682 3.74414 0 3.29254 0V1ZM7.01791 14.7552L6.05268 15.0166C6.18295 15.4976 6.64747 15.8093 7.14194 15.7475L7.01791 14.7552ZM18.4806 13.3224L18.6046 14.3147C19.0293 14.2616 19.3731 13.9441 19.4599 13.525L18.4806 13.3224ZM20.2 5.01194L21.1793 5.21455C21.2402 4.92003 21.1653 4.61373 20.9754 4.38052C20.7855 4.1473 20.5007 4.01194 20.2 4.01194V5.01194ZM4.3791 5.01194L3.41388 5.27336V5.27336L4.3791 5.01194ZM1 1V2H3.29254V1V0H1V1ZM7.01791 14.7552L7.14194 15.7475L18.6046 14.3147L18.4806 13.3224L18.3566 12.3301L6.89387 13.7629L7.01791 14.7552ZM18.4806 13.3224L19.4599 13.525L21.1793 5.21455L20.2 5.01194L19.2207 4.80934L17.5013 13.1198L18.4806 13.3224ZM3.29254 1L2.32731 1.26142L3.41388 5.27336L4.3791 5.01194L5.34433 4.75053L4.25776 0.738585L3.29254 1ZM4.3791 5.01194L3.41388 5.27336L6.05268 15.0166L7.01791 14.7552L7.98314 14.4938L5.34433 4.75053L4.3791 5.01194ZM20.2 5.01194V4.01194H4.3791V5.01194V6.01194H20.2V5.01194ZM10.6 18.5073H9.6C9.6 18.7834 9.37614 19.0073 9.1 19.0073V20.0073V21.0073C10.4807 21.0073 11.6 19.888 11.6 18.5073H10.6ZM9.1 20.0073V19.0073C8.82386 19.0073 8.6 18.7834 8.6 18.5073H7.6H6.6C6.6 19.888 7.71929 21.0073 9.1 21.0073V20.0073ZM7.6 18.5073H8.6C8.6 18.2311 8.82386 18.0073 9.1 18.0073V17.0073V16.0073C7.71929 16.0073 6.6 17.1266 6.6 18.5073H7.6ZM9.1 17.0073V18.0073C9.37614 18.0073 9.6 18.2311 9.6 18.5073H10.6H11.6C11.6 17.1266 10.4807 16.0073 9.1 16.0073V17.0073ZM18.6 18.5073H17.6C17.6 18.7834 17.3761 19.0073 17.1 19.0073V20.0073V21.0073C18.4807 21.0073 19.6 19.888 19.6 18.5073H18.6ZM17.1 20.0073V19.0073C16.8239 19.0073 16.6 18.7834 16.6 18.5073H15.6H14.6C14.6 19.888 15.7193 21.0073 17.1 21.0073V20.0073ZM15.6 18.5073H16.6C16.6 18.2311 16.8239 18.0073 17.1 18.0073V17.0073V16.0073C15.7193 16.0073 14.6 17.1266 14.6 18.5073H15.6ZM17.1 17.0073V18.0073C17.3761 18.0073 17.6 18.2311 17.6 18.5073H18.6H19.6C19.6 17.1266 18.4807 16.0073 17.1 16.0073V17.0073Z" fill="#120F07" />
                        </svg>
                    </button>
                </div>

                {/*------------links-------------*/}
                <div className='flex items-center justify-center'>
                    <ul dir="rtl" className='flex flex-row gap-4 text-[14px] lg:text-[17px] lg:gap-11 whitespace-nowrap items-center '>
                        <li><a href="#" className='font-semibold hover:text-gold transition-all duration-300 ease-in-out'>صفحه اصلی</a></li>
                        <li><a href="#" className='hover:text-gold transition-all duration-300 ease-in-out'>محصولات</a></li>
                        <li><a href="#" className='hover:text-gold transition-all duration-300 ease-in-out'>درباره ما</a></li>
                        <li><a href="#" className='hover:text-gold transition-all duration-300 ease-in-out'>تماس با ما</a></li>
                    </ul>
                </div>
                {/*------------logo-------------*/}
                <div className='flex items-center justify-end'>
                    <div dir='rtl' className='flex items-center cursor-default'>
                        <img src={Logo} alt="Logo" className='w-10 h-auto ' />
                        <h3 className='font-Donia text-gold text-[21px] lg:text-[26px]'>آذین‌گلد</h3>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header