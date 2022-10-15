import Card from "./Card";
import { teams } from '../../constants'

export default function Teams(){
    return (
        <section id="team" className="mt-8">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
                <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">Our Team</p>
                <blockquote className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200 italic">"Hal besar dimulai dari kecil"</blockquote>
                <div className="flex items-center flex-col flex-wrap sm:flex-row justify-evenly">
                    {teams.map((data, index) => (
                        <Card data={data} key={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}