import Link from "next/link";
import { useState } from "react";
import Footer from "../components/Footer";
import { navbar } from "../constants";

export default function Navigation({children}){
    const [navlinkId, setNavlinkId] = useState('navbar-1');

    const handleNavLink = event => {
        event.preventDefault();
        setNavlinkId(event.target.id)
    }

    return (
        <>
            <div className="pt-6 md:pl-[250px] mt-16 md:mt-0">
                <div className="md:hidden fixed top-0 left-0 bg-white w-full h-16 flex justify-between px-4 z-[999]">
                    <div className="p-4 text-center">
                        <Link href="/">
                            <a className="flex-shrink-0 text-2xl text-primary font-semibold">Zetro</a>
                        </Link>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button className="text-gray-800 dark:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg width={20} height={20} fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <nav className="hidden md:flex flex-col bg-white fixed w-[250px] h-screen top-0 left-0 z-[999] dark:bg-gray-800 ">
                    <div className="p-4 text-center">
                        <Link href="/">
                            <a className="flex-shrink-0 text-2xl text-primary font-semibold">Zetro</a>
                        </Link>
                    </div>
                    <div className="flex flex-col py-4 px-2">
                        <h3 className="text-xl font-semibold px-4 mb-4">Dashboard</h3>
                        <div className="relative">
                            {navbar.map(list => (
                                <Link href={list.href} key={list.id}>
                                    <a id={list.id}
                                    onClick={handleNavLink}
                                    className={`${list.id === navlinkId ? 'bg-primary text-white pl-10' : 'text-gray-800'} block px-6 py-3 mb-2 text-base font-medium duration-200 rounded-l-full`}>
                                        {list.title}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>
                <div className="px-4 w-full">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}