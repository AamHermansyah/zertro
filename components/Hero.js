import Image from "next/image";
import heroBg from '../public/hero.jpg';

export default function Hero(){
    return (
        <section id="hero">
            <div className="bg-gradient-to-tr from-yellow-500 to-pink-500 rounded-3xl dark:bg-gray-800 relative">
                <div className="absolute inset-0 z-[1] opacity-20">
                    <Image src={heroBg} alt="Hero background" objectFit="cover" layout="fill" />
                </div>
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-[2] relative">
                    <h2 className="font-extrabold text-white dark:text-white">
                        <span className="text-2xl sm:text-4xl block">
                            Masih bingung dalam berinvestasi emas ?
                        </span>
                        <span className="block text-black text-xl sm:text-3xl p-2 w-max mt-4 mx-auto bg-white">
                            Kamu beruntung sekali
                        </span>
                    </h2>
                    <p className="text-lg sm:text-xl mt-4 max-w-lg mx-auto text-white">
                        <span className="bg-white px-1 text-xl sm:text-3xl text-primary font-semibold">Zetro</span> dapat membantu anda dalam melakukan investasi emas dan memprediksi waktu yang tepat ketika anda membeli dan menjualnya kembali.
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-6 ms:mt-12 inline-flex rounded-md shadow">
                            <button type="button" className="py-4 px-6  bg-primary hover:bg-indigo-900 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Mulai analisis
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}