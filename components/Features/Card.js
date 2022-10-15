export default function Card({title, description, count}){
    return (
        <div className="w-[250px] px-4 py-4 bg-white mt-6 shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center mx-auto h-14 w-14 rounded-md bg-primary text-white">
                    <span className="font-extrabold text-2xl">
                        {count}
                    </span>
                </div>
            </div>
            <h3 className="text-xl sm:text-2xl text-gray-700 font-semibold dark:text-white py-4">
                {title}
            </h3>
            <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                {description}
            </p>
        </div>       
    )
}