import Link from "next/link";
import Footer from "../components/Footer";

export default function Navigation({children}){

    return (
        <>
            <div className="px-4 sm:py-2 sm:px-12">
                <nav className="bg-white dark:bg-gray-800">
                    <div className="flex items-center justify-between h-16">
                        <div className=" flex items-center">
                            <a className="flex-shrink-0 text-2xl text-primary font-semibold" href="/">Zetro</a>
                        </div>
                        <div className="flex ml-4 items-center md:ml-6">
                            <Link href="#donate">
                                <a className="text-gray-800 block px-3 py-2 rounded-md text-base font-medium" href="/#">
                                    Donasi
                                </a>
                            </Link>
                            <Link href="#contact">
                                <a className="ml-4 text-gray-800 block px-3 py-2 rounded-md text-base font-medium" href="/#">
                                    Contact
                                </a>
                            </Link>
                        </div>
                    </div>
                </nav>
                {children}
            </div>
            <Footer />
        </>
    )
}