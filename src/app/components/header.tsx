import Image from 'next/image'
import logoIcon from '../../../public/image/shared/desktop/logo.svg'
import HamburgerMenu from './hamburgerMenu';
import Link from 'next/link'
import Navlinks from './navLinks';
import { pathname } from '../utils/usePathname';


import CartIcon from './svg/cart';


export default function Header() {
    // const isActive = pathname.endsWith('/cart')
    // const newClassName = `${isActive ? "text-primaryDark" : ""}`
    return (
        <header className="bg-darkColor justify-items-center ... text-lightColor">
            <div className='flex justify-between ... items-center ... w-10/12 min-h-24'>

                {/* Hamburger Menu */}
                <div className='w-1/6 ... md:w-1/12 ... lg:hidden ...'>
                    <HamburgerMenu/>
                </div>

                {/* Brand Logo */}
                <div className='w-4/6 ... md:w-10/12 ... lg:w-3/12 ... justify-items-center md:justify-items-start'>
                    <Link href="/">
                        <Image
                            src={logoIcon}
                            alt="Audiophile"
                            className='max-w-36 max-h-6'
                        />
                    </Link>
                </div>

                {/* Desktop Menu Links */}
                <div className='hidden lg:block lg:w-6/12'>
                    <nav className='flex justify-around ... w-50vh'>
                        <Navlinks/>
                    </nav>
                </div>

                {/* Cart Icon */}
                <div className='w-1/6 ... md:w-1/12 ... lg:w-3/12 justify-items-end text-primaryDark'>
                    <Link href='/cart'>
                        <CartIcon className={`${pathname === '/cart' ? 'hidden' : 'fill-lightColor hover:fill-primaryDark'}`} />
                    </Link>
                </div>
            </div>
        </header>
    )
  }