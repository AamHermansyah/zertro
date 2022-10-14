import Link from "next/link";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Teams from "../components/Teams";

export default function Home(){
  return (
      <>
        <header>
          <div className="bg-white w-full h-16 flex justify-between items-center px-4 sm:px-12">
            <div className="p-4 text-center">
                <Link href="/">
                    <a className="flex-shrink-0 text-2xl text-primary font-semibold">Zetro</a>
                </Link>
            </div>
            <nav>
              <Link href="/dashboard">
                <a type="button" className="hidden sm:block py-2 px-4 bg-primary hover:bg-indigo-900 focus:ring-indigo-600 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-sm">
                  Mulai Gratis
                </a>
              </Link>
            </nav>
          </div>
        </header>
        <div className="sm:p-4">
          <Hero />
          <section className="mt-6">
            <div className="dark:bg-gray-800">
              <div className="text-right py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                  <span className="block">
                    Ingin berinvestasi {" "}
                    <br className="sm:hidden" />
                    dengan aman ?
                  </span>
                  <span className="block text-primary">
                    Sekarang atau tidak selamanya
                  </span>
                </h2>
              </div>
            </div>
          </section>
          <section>
            <div className="flex pt-6 px-6">
              <div className="flex-1">
                <h2 className="text-primary uppercase text-md">Zetro Development</h2>
                <h1 className="text-black text-3xl sm:text-5xl my-6 leading-[55px]">Sistem cerdas (Artificial Intellegence) untuk memprediksi harga emas</h1>
                <p className="text-gray-700 text-md sm:text-lg leading-[30px]">Zetro adalah sebuah website non profit yang berdiri pada tahun 2022 untuk mendukung masyarakat dalam berinvestasi emas serta mengurangi dampak resesi. Zetro menyediakan beberapa algoritma prediksi harga emas yang dapat kalian gunakan secara gratis. Orang orang yang berperan dalam berdirinya organisasi ini mengharapkan agar semua orang selalu pandai memanfaatkan waktu dalam berinvestasi</p>
              </div>
              <div className="hidden md:block flex-1"></div>
            </div>
            <div className="flex py-6 px-6">
              <div className="hidden md:block flex-1"></div>
              <div className="flex-1 text-right">
                <h1 className="text-black text-3xl sm:text-5xl my-6 leading-[55px]">Kenapa kami membuat ini?</h1>
                <p className="text-gray-700 text-md sm:text-lg leading-[30px]">Cara untuk menstabilkan ekonomi negara serta untuk mengurangi dampak resesi yang telah terjadi di Indonesia. Zetro adalah cara terbaik untuk anda dalam memastikan apakah ini adalah waktunya yang pas untuk anda membeli dan menjualnya kembali. Untuk contoh, jika kita memanfaatkan Zetro sebagai analisis dalam berinvestasi itu dapat meningkatkan nilai pasar harga emas dalam waktu kedepannya.</p>
              </div>
            </div>
          </section>
          <Features />
          <Teams />
          <Footer />
        </div>
      </>   
  )
}