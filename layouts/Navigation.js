import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { navbar } from "../constants";
import { Context } from "../context/ContextProvider";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function Navigation({children, active}){
    const context = useContext(Context);
    const {data, setData} = context;
    const [navChild, setNavChild] = useState({
        display: false,
        id: ''
    });

    const {width} = useWindowDimensions();
    const style = {
        navigation: {
            display: width < 1060 ? 'hidden' : 'flex',
            shadow: width < 1060 ? 'shadow-2xl' : ''
        }
    }

    const handleNavbar = () => {
        setData(prev => ({
            ...prev,
            navigationDisplay: !prev.navigationDisplay
        }))
    }

    const handleNavChildDisplay = (navId) => {
        setNavChild(prev => ({
            display: prev.id !== navId ? true : !prev.display,
            id: navId
        }))
    }

    useEffect(() => {
        document.addEventListener('click', event => {
            const target = event.target;
            if (target.closest('#sideNav') === null && target.closest('#navHamb') === null && data.navigationDisplay) {
                setData(prev => ({
                    ...prev,
                    navigationDisplay: false
                }))
            }
          });
    }, [])

    return (
        <>
            <div className="md:pl-[250px] mt-16 md:mt-0">
                <div className="md:hidden fixed top-0 left-0 bg-white w-full h-16 flex justify-between px-4 z-[999]">
                    <div className="p-4 text-center">
                        <Link href="/">
                            <a className="flex-shrink-0 text-2xl text-primary font-semibold">Zetro</a>
                        </Link>
                    </div>
                    <div id="navHamb" className={`-mr-2 flex md:hidden`} onClick={handleNavbar}>
                        <button
                        className="text-gray-800 dark:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                            <svg width={20} height={20} fill="currentColor" className="h-8 w-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <nav id="sideNav" className={`${data.navigationDisplay ? 'flex' : style.navigation.display} ${style.navigation.shadow} flex-col bg-white fixed w-[250px] h-screen top-0 left-0 z-[999] dark:bg-gray-800 duration-200 transition-all`}>
                    <div className="p-4 text-center">
                        <Link href="/">
                            <a className="flex-shrink-0 text-2xl text-primary font-semibold">Zetro</a>
                        </Link>
                    </div>
                    <div className="flex flex-col px-2">
                        <h3 className="text-xl font-semibold px-4 mb-4">Dashboard</h3>
                        <div className="relative">
                            {navbar.map(list => {
                                if(list?.icon){
                                    return (
                                        <div className="text-base font-medium text-gray-800" key={list.id}>
                                            <div onClick={() => handleNavChildDisplay(list.id)}
                                            className={`${list.href === active ? 'bg-primary text-white' : ''} flex items-center justify-between pr-4 rounded-l-full`}>
                                                <Link href={list.href}>
                                                    <a id={list.id}
                                                    onClick={e => e.preventDefault()}
                                                    className={`px-6 py-2 block duration-200`}>
                                                        {list.title}
                                                    </a>
                                                </Link>
                                                {list.icon}
                                            </div>
                                            <div className={`${navChild.id === list.id && navChild.display ? 'flex' : 'hidden'} flex-col gap-y-2 pl-12 mt-2`}>
                                                {list.child.map((child, index) => (
                                                    <Link href={child.link} key={index}>
                                                        <a onClick={handleNavbar}>{child.title}</a>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                }
                                return (
                                    <Link href={list.href} key={list.id}>
                                        <a id={list.id}
                                        onClick={handleNavbar}
                                        className={`${list.href === active ? 'bg-primary text-white' : 'text-gray-800'} block px-6 py-2 mb-2 text-base font-medium duration-200 rounded-l-full`}>
                                            {list.title}
                                        </a>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </nav>
                <div className="px-4 py-12 md:pt-8 w-full">
                    {children}
                </div>
            </div>
        </>
    )
}