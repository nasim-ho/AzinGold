
function MobileMenu({isOpen, onClose}){
    return(
        <>
        {/*--------------------------MOBILE MENU---------------------*/}
            {/*----dark overly----*/}
            <button
                type='button'
                aria-label='صفحه تیره و بستن منو'
                tabIndex={isOpen ? 0 : -1}
                onClick={onClose}
                className={`
                    fixed inset-0 z-40 bg-black/40
                    transition-opacity duration-300 md:hidden
                    ${isOpen
                        ? 'opacity-100'
                        : 'opacity-0 pointer-events-none'
                    /*وقتی دکمه همبرگری زده میشه ایزمنواوپن مقدار ترو میگیره و صفحه سایت تیره میشه*/
                    }
                    `
                }/*className={`کلاس‌های ثابت ${عبارت متغیر}`} */
            ></button>
            {/*----menu----*/}
            <nav
                dir='rtl'
                aria-label='منو کشویی'
                aria-hidden={!isOpen}
                inert={!isOpen}
                className={`
                    fixed right-0 top-0 z-50
                    h-dvh w-[70%] max-w-sm
                    bg-hero shadow-xl
                    transition-transform duration-300 ease-in-out
                    md:hidden
                    ${isOpen
                        ? 'translate-x-0' : 'translate-x-full'
                    }
                    `}
            >
                <div className="flex items-center justify-between p-5 border-b border-gold/20">

                    <h3 className="font-Donia text-gold text-xl">
                        آذین‌گلد
                    </h3>

                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="بستن منو"
                        className="cursor-pointer"
                    >
                        {/*----close icon----*/}
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M18 6L6 18M6 6L18 18" />
                        </svg>
                    </button>

                </div>
                {/*----search box----*/}
                <div dir='rtl' className='px-5 pt-5'>
                    <label className='flex items-center gap-3 rounded-lg border border-gold/40 px-4 py-3'>
                        {/*----search icon----*/}
                        <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M14.3269 14.44L17.8 17.8M16.68 8.84C16.68 13.1699 13.1699 16.68 8.84 16.68C4.51009 16.68 1 13.1699 1 8.84C1 4.51009 4.51009 1 8.84 1C13.1699 1 16.68 4.51009 16.68 8.84Z"
                                stroke="#B18B2A"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                        {/*----search input----*/}
                        <input type="search"
                            id='search'
                            placeholder='جستجو ...'
                            aria-label='جستجو در آذین گلد'
                            className='min-w-0 flex-1 bg-transparent outline-none text-[15px] text-txt placeholder:text-txt/30'
                        />
                    </label>
                </div>

                {/*----menu links----*/}
                <ul className="flex flex-col gap-6 p-6">

                    <li>
                        <a href="#">صفحه اصلی</a>
                    </li>

                    <li>
                        <a href="#">محصولات</a>
                    </li>

                    <li>
                        <a href="#">درباره ما</a>
                    </li>

                    <li>
                        <a href="#">تماس با ما</a>
                    </li>

                </ul>
                {/*----login / register----*/}
                <div className="mx-6 mt-2 border-t border-gold/20 pt-5">

                    <a
                        href="#"
                        className="flex items-center gap-3 text-txt"
                    >
                        {/*----user icon----*/}
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                d="M1.97882 20.2H19.2212C19.7618 20.2 20.2 19.7131 20.2 19.1124C20.2 15.3369 17.0457 12.2762 10.6 12.2762C4.15429 12.2762 1 15.3369 1 19.1124C1 19.7131 1.43823 20.2 1.97882 20.2ZM14.2 4.6C14.2 6.58822 12.5882 8.2 10.6 8.2C8.61177 8.2 7 6.58822 7 4.6C7 2.61177 8.61177 1 10.6 1C12.5882 1 14.2 2.61177 14.2 4.6Z"
                                stroke="#B18B2A"
                                strokeWidth="1.5"
                            />
                        </svg>

                        <span>ورود / ثبت‌نام</span>
                    </a>

                </div>
            </nav>
        </>
    )
}
export default MobileMenu