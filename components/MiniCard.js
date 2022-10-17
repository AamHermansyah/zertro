export default function MiniCard({loading, title, data}){
    return (
        <div className="flex justify-center items-center gap-y-2 flex-col shadow-lg rounded-2xl h-32 w-40 sm:w-44 p-4 bg-white">
            {loading ?
            <div className="h-full w-full rounded-md bg-gray-300 animate-pulse"></div> :
            <>
                <p className="text-md text-gray-700 dark:text-gray-50">{title}</p>
                <p className="text-gray-800 text-2xl ss:text-3xl text-left dark:text-white font-bold">{data}</p>
            </>
            }
        </div>
    )
}