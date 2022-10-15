import { features } from "../../constants";
import Card from "./Card";

export default function Features(){
    return (
        <section id="features" className="py-6">
            <div className="mb-2">
                <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800">Fitur</h1>
            </div>
            <div className="flex flex-wrap justify-center items-center text-center gap-8">
                {features.map((feature, index) => (
                    <Card title={feature.title} count={index + 1} description={feature.description} key={index} />
                ))}
            </div>
        </section>
    )
}