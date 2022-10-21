export default function MiniCard({loading, title, data, indicator, label}){
    return (
        <div className="flex justify-center items-center gap-y-2 flex-col shadow-sm rounded-xl h-28 sm:h-32 w-32 xs:w-36 sm:w-48 p-2 sm:p-4 bg-white relative">
            <span className={`${!loading && label ===  1 ? 'bg-green-500' : 'hidden'} absolute top-0 left-0 text-[.6rem] py-0.5 px-1 rounded-sm text-white`}>{label ===  1 && 'Beli'}</span>
            {loading ?
            <div className="h-full w-full rounded-md bg-gray-300 animate-pulse"></div> :
            <>
                <p className="text-sm ss:text-md text-gray-700 text-center">{title}</p>
                <div className="relative font-bold">
                    <p className="text-gray-800 text-xl xs:text-2xl sm:text-3xl text-left">{data}</p>
                    {indicator &&
                        <svg className={`${indicator && indicator === 1 ? 'text-green-500' : 'text-red-600 rotate-180'} absolute top-0 -right-3`} width={15} height={15} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                            </path>
                        </svg>
                    }
                </div>
            </>
            }
        </div>
    )
}