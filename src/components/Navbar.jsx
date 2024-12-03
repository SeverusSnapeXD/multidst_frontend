"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing icons for menu toggle

const textStyle = "text-blue-900 text-lg font-medium";
const activeTextStyle = "text-blue-900 text-lg font-medium underline underline-offset-4";

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <nav className="py-2 px-[10%]">
            {/* Desktop View */}
            <div className="hidden md:flex container mx-auto justify-between items-center">
                <div>
                    <Link href="/">
                        <h1 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-blue-900 font-serif">
                            Multi
                            <span className='text-green-600'>
                                DST
                            </span>
                        </h1>
                    </Link>
                </div>
                <div className="flex space-x-9">
                    <Link href="/">
                        <p className={pathname === '/' ? activeTextStyle : textStyle}>Home</p>
                    </Link>
                    <Link href="/about">
                        <p className={pathname === '/about' ? activeTextStyle : textStyle}>About</p>
                    </Link>
                    <Link href="/how-it-works">
                        <p className={pathname === '/how-it-works' ? activeTextStyle : textStyle}>How it works</p>
                    </Link>
                    <Link href="/analysis">
                        <p className={pathname === '/analysis' ? activeTextStyle : textStyle}>Analysis</p>
                    </Link>
                    <Link href="/contact">
                        <p className={pathname === '/contact' ? activeTextStyle : textStyle}>Contact</p>
                    </Link>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex justify-between items-center">
                <div>
                    <Link href="/">
                        <h1 className="text-2xl font-semibold text-blue-900 font-serif">
                            Multi
                            <span className='text-green-600'>
                                DST
                            </span>
                        </h1>
                    </Link>
                </div>
                <button
                    onClick={toggleMenu}
                    className="text-blue-900 text-2xl focus:outline-none"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="flex flex-col space-y-4 mt-4 px-4 bg-white rounded-lg">
                    <Link href="/">
                        <p
                            className={pathname === '/' ? activeTextStyle : textStyle}
                            onClick={toggleMenu} // Close menu on link click
                        >
                            Home
                        </p>
                    </Link>
                    <Link href="/about">
                        <p
                            className={pathname === '/about' ? activeTextStyle : textStyle}
                            onClick={toggleMenu}
                        >
                            About
                        </p>
                    </Link>
                    <Link href="/how-it-works">
                        <p
                            className={pathname === '/how-it-works' ? activeTextStyle : textStyle}
                            onClick={toggleMenu}
                        >
                            How it works
                        </p>
                    </Link>
                    <Link href="/analysis">
                        <p
                            className={pathname === '/analysis' ? activeTextStyle : textStyle}
                            onClick={toggleMenu}
                        >
                            Analysis
                        </p>
                    </Link>
                    <Link href="/contact">
                        <p
                            className={pathname === '/contact' ? activeTextStyle : textStyle}
                            onClick={toggleMenu}
                        >
                            Contact
                        </p>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
