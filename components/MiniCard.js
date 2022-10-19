export default function MiniCard({loading, title, data}){
    return (
        <div className="flex justify-center items-center gap-y-2 flex-col shadow-sm rounded-2xl h-28 sm:h-32 w-32 xs:w-36 sm:w-48 p-2 sm:p-4 bg-white">
            {loading ?
            <div className="h-full w-full rounded-md bg-gray-300 animate-pulse"></div> :
            <>
                <p className="text-sm ss:text-md text-gray-700 dark:text-gray-50 text-center">{title}</p>
                <p className="text-gray-800 text-xl xs:text-2xl sm:text-3xl text-left dark:text-white font-bold">{data}</p>
            </>
            }
        </div>
    )
}