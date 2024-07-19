import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-blue-900 py-4 px-[10%]">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link href="/">
                        <p className="text-white text-lg font-medium">Logo</p>
                    </Link>
                </div>
                <div className="flex space-x-4">
                    <Link href="/">
                        <p className="text-white text-lg font-medium">Home</p>
                    </Link>
                    <Link href="/about">
                        <p className="text-white text-lg font-medium">About</p>
                    </Link>
                    <Link href="/analysis">
                        <p className="text-white text-lg font-medium">Analysis</p>
                    </Link>
                    <Link href="/contact">
                        <p className="text-white text-lg font-medium">Contact</p>
                    </Link>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
