import Link from "next/link";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Teams from "../components/Teams";
import AboutLearnGold from "../components/AboutLearnGold";
import FAQs from "../components/FAQs";
import CTA from "../components/CTA";

export default function Home(){
  return (
      <>
        <header>
          <div className="bg-white w-full h-16 flex justify-between items-center px-4 sm:px-12">
            <div className="p-4 text-center">
                <Link href="/">
                    <a className="flex-shrink-0 text-2xl text-primary font-semibold">LearnGold</a>
                </Link>
            </div>
            <nav>
              <Link href="/dashboard">
                <a type="button" className="py-2 px-4 bg-primary hover:bg-indigo-900 focus:ring-indigo-600 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-sm">
                  Dashboard
                </a>
              </Link>
            </nav>
          </div>
        </header>
        <div className="sm:p-4">
          <Hero />
          <section className="mt-6">
            <div className="text-right py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-800 dark:text-white">
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
          </section>
          <AboutLearnGold />
          <Features />
          <Teams />
          <CTA />
          <FAQs />
          <Footer />
        </div>
      </>   
  )
}