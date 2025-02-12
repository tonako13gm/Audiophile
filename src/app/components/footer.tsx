import Navlinks from "./navLinks";
import Image from 'next/image';
import logoIcon from '../../../public/image/shared/desktop/logo.svg'


export default function Footer() {
    return (
        <footer className="bg-darkColor">
            <div className="justify-items-center ... md:justify-items-start text-lightColor w-10/12 justify-self-center">
                <div className="h-5 w-1/3 md:w-2/12 lg:w-1/12 border-t-4 border-t-primaryDark pb-10"></div>

                <div className="flex flex-col md:w-full lg:flex-row">
                    <div className="pb-10 lg:w-1/2">
                        <Image
                            priority
                            src={logoIcon}
                            alt="Audiophile"
                            className='max-w-36 max-h-6'
                        />
                    </div>

                    <nav className="flex flex-col md:flex-row pb-10 h-52 md:h-0 justify-evenly items-center md:w-2/3 md:justify-between lg:w-1/2">
                        <Navlinks/>
                    </nav>
                </div>

                <div className="opacity-50 pb-20">
                    <h1 className="text-center md:text-start">
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                    </h1>
                </div>

                <div className="md:flex md:w-full">
                    <div className="opacity-50 pb-10 md:w-1/2">
                        <h1>
                            Copyright 2021. All Rights Reserved
                        </h1>
                    </div>

                    <div className="justify-self-center md:w-1/2 pb-10 md:flex md:justify-end">
                        <span>icon</span>
                        <span>icon</span>
                        <span>icon</span>
                    </div>
                </div>

            </div>
        </footer>
    );
  }