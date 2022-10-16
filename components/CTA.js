import Link from "next/link";

export default function CTA(){
    return (
        <section id="cta" className="mt-24">
            <div className="bg-gradient-to-tr from-purple-500 to-primary">
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">
                            Apakah kamu siap ?
                        </span>
                        <span className="block text-black">
                            Ini adalah kesempatan anda
                        </span>
                    </h2>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <Link href="/dashboard">
                                <a type="button" className="py-4 px-6  bg-indigo-800 hover:bg-indigo-900 focus:ring-indigo-700 focus:ring-offset-indigo-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Get started
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}