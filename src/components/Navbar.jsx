import Link from 'next/link';

const textStyle = "text-blue-900 text-lg font-medium"

const Navbar = () => {
    return (
        <nav className=" py-4 px-[10%]">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link href="/">
                        <p className="">Logo</p>
                    </Link>
                </div>
                <div className="flex space-x-9">
                    <Link href="/">
                        <p className={textStyle}>Home</p>
                    </Link>
                    <Link href="/about">
                        <p className={textStyle}>About</p>
                    </Link>
                    <Link href="/analysis">
                        <p className={textStyle}>Analysis</p>
                    </Link>
                    <Link href="/contact">
                        <p className={textStyle}>Contact</p>
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
