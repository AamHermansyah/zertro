export default function Card({title, description}){
    return (
        <div className="w-full sm:w-[250px] px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
                <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-primary text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
            </div>
            <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold dark:text-white py-4">
                {title}
            </h3>
            <p className="text-md  text-gray-500 dark:text-gray-300 py-4">
                {description}
            </p>
        </div>       
    )
}