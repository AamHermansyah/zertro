import Image from "next/image";
import Link from "next/link";
import { hero } from '../public'

export default function Hero(){
    return (
        <section id="home">
            <div className="mt-6 md:mt-0 h-[500px] bg-gradient-to-tr from-primary to-pink-500 rounded-md sm:rounded-3xl dark:bg-gray-800 relative">
                <div className="absolute inset-0 z-[1] opacity-20">
                    <Image src={hero} alt="Hero background" objectFit="cover" layout="fill" priority />
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-24 h-full z-[2] relative">
                    <h2 className="font-extrabold text-white dark:text-white">
                        <span className="text-2xl sm:text-5xl block">
                            Masih bingung dalam
                            <br/>
                            berinvestasi emas ?
                        </span>
                        <span className="block text-black text-xl sm:text-3xl p-2 w-max mt-4 bg-white">
                            Kamu beruntung sekali
                        </span>
                    </h2>
                    <p className="text-md sm:text-xl mt-4 max-w-lg text-white">
                        <span className="bg-white px-1 text-xl sm:text-3xl text-primary font-semibold">LearnGold</span> dapat membantu anda dalam melakukan investasi emas dan memprediksi waktu yang tepat ketika anda membeli dan menjualnya kembali.
                    </p>
                    <div className="mt-6 ms:mt-12 inline-flex rounded-md shadow">
                        <Link href="/dashboard">
                            <a className="py-4 px-6 w-max bg-primary hover:bg-indigo-900 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                            Mulai analisis
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}