import Link from "next/link";
import { footer } from "../constants";

export default function Footer(){
    return (
        <footer className="bg-white dark:bg-gray-800 w-full pt-6 pb-4 mt-10">
            <h2 className="text-center text-xl font-semibold">Navigasi</h2>
            <div className="max-w-screen-xl mx-auto px-4">
                <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-center gap-x-8">
                    {footer.navigation.listItem.map(nav => (
                        <li className="my-2" key={nav.id}>
                            <Link href={nav.href}>
                                <a className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-white transition-colors duration-200">
                                    {nav.content}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="pt-8 flex max-w-xs mx-auto items-center justify-evenly">
                    {footer.socialMedia.listItem.map(social => (
                        <Link href={social.href} key={social.id}>
                            <a className="text-gray-600 hover:text-primary dark:hover:text-white transition-colors duration-200">
                                {social.icon}
                            </a>
                        </Link>
                    ))}
                </div>
                <div className="text-center text-gray-500 dark:text-gray-200 pt-8 font-light flex items-center justify-center">
                    <span className="font-semibold mr-2 text-primary">Zetro</span>2022 | All Reversed
                </div>
            </div>
        </footer>
    )
}