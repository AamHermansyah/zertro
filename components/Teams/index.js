import Card from "./Card";

export default function Teams(){
    return (
        <section id="team" className="mt-8">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow">
                <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">Our Team</p>
                <p className="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">Tim terbaik dari yang terbaik</p>
                <div className="flex items-center flex-col md:flex-row justify-evenly">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}