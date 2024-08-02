"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const textStyle = "text-blue-900 text-lg font-medium";
const activeTextStyle = "text-blue-900 text-lg font-medium underline underline-offset-4";

const Navbar = () => {
    const pathaname = usePathname();

    console.log('path ',pathaname)

    return (
        <nav className="py-2 px-[10%]">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link href="/">
                <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-blue-900 font-serif">
                    Multi
                    <span className='text-green-600'>
                        DST
                        </span>
                    </h1>
                        {/* <img src="/logo.png" alt="logo" className='w-32' /> */}
                    </Link>
                </div>
                <div className="flex space-x-9">
                    <Link href="/">
                        <p className={pathaname === '/' ? activeTextStyle : textStyle}>Home  
                        </p>
                    </Link>
                    <Link href="/about">
                        <p className={pathaname === '/about' ? activeTextStyle : textStyle}>About</p>
                    </Link>
                    <Link href="/analysis">
                        <p className={pathaname === '/analysis' ? activeTextStyle : textStyle}>Analysis</p>
                    </Link>
                    <Link href="/contact">
                        <p className={pathaname === '/contact' ? activeTextStyle : textStyle}>Contact</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
