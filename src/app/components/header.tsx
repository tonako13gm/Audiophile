import Image from 'next/image';
import logoIcon from '../../../public/image/shared/desktop/logo.svg'
import cartIcon from '../../../public/image/shared/desktop/icon-cart.svg'
import HamburgerMenu from './hamburgerMenu';
import Navlinks from './navLinks';

export default function Header() {
    return (
        <header className="bg-darkColor justify-items-center ... text-lightColor">
            <div className='flex justify-between ... items-center ... w-10/12 min-h-24'>

                {/* Hamburger Menu */}
                <div className='w-1/6 ... md:w-1/12 ... lg:hidden ...'>
                    <HamburgerMenu/>
                </div>

                {/* Brand Logo */}
                <div className='w-4/6 ... md:w-10/12 ... lg:w-3/12 ... justify-items-center md:justify-items-start'>
                    <Image
                        priority
                        src={logoIcon}
                        alt="Audiophile"
                        className='max-w-36 max-h-6'
                    />
                </div>

                {/* Desktop Menu Links */}
                <div className='hidden lg:block lg:w-6/12'>
                    <nav className='flex justify-around ... w-50vh'>
                        <Navlinks/>
                    </nav>
                </div>

                {/* Cart Icon */}
                <div className='w-1/6 ... md:w-1/12 ... lg:w-3/12 justify-items-end'>
                    <Image
                        priority
                        src={cartIcon}
                        alt="Add to cart"
                        className='max-w-5 max-h-5'
                    />
                </div>
            </div>
        </header>
    );
  }