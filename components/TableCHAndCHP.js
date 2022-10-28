import { useEffect, useState } from "react";

const LIMIT_PAGINATION_INIT = 10;

export default function TablePercentagePerYears({data, loading, headLabel}){
    const [limitPagination, setLimitPagination] = useState(LIMIT_PAGINATION_INIT);
    const [isSortTypeIncrement, setIsSortTypeIncrement] = useState(true);

    useEffect(() => {
        setLimitPagination(LIMIT_PAGINATION_INIT);
        setIsSortTypeIncrement(true);
    }, [data])

    if(loading) return (
        <div className="p-6 text-center my-4">
            <p className="text-md text-gray-900">Loading...</p>
        </div>
    )

    const handlePaginationButton = () => {
        setLimitPagination(prev => prev + LIMIT_PAGINATION_INIT);
    }

    const handleSortFilter = () => {
        data = data.reverse();
        setIsSortTypeIncrement(prev => !prev);
    }

    return (
        <>
            <div className="w-full overflow-x-scroll scrollbar-hide">
                <table className="table w-full max-w-4xl shadow rounded-lg mx-auto">
                    <thead>
                        <tr className="text-sm ss:text-base ss:font-semibold">
                            {headLabel.map((label, index) => {
                                return label === 'Tahun' || label === 'Tanggal' ?
                                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-primary" key={index}>
                                    <div className="flex justify-center items-center gap-2">
                                        <button onClick={handleSortFilter}>
                                            <svg className="w-4 h-4 ss:w-5 ss:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg>
                                        </button>
                                        <span className="text-gray-900">{label}</span>
                                    </div>
                                </th>
                                :
                                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-gray-900" key={index}>{label}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody className="text-center text-sm ss:text-base">
                        {data
                        .filter((res, index) => index <= limitPagination)
                        .map((res, index, arr) => (
                            <tr className="text-gray-900 odd:bg-gray-200" key={index}>
                                <td className="border-b-2 p-4 dark:border-dark-5">{res.date}</td>
                                <td className="border-b-2 p-4 dark:border-dark-5">
                                    <div className={`${res.chp >= 0 ? "text-green-500" : "text-red-600"} flex justify-center items-center gap-x-`}>
                                        <svg className={`${res.chp < 0 ? 'rotate-180' : ''} w-2 h-2 ss:w-4 ss:h-4`} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                                            </path>
                                        </svg>
                                        <span>{res.chp}%<sup>({res.ch})</sup></span>
                                    </div>
                                </td>
                                <td className="border-b-2 p-4 dark:border-dark-5">
                                    {index === 0 && isSortTypeIncrement ? '-' : index === arr.length - 1 && !isSortTypeIncrement ? '-' : `$${res.open_price}`}
                                </td>
                                <td className="border-b-2 p-4 dark:border-dark-5">${res.close_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-center w-full">
                {!loading && data.length > LIMIT_PAGINATION_INIT &&
                    <button onClick={handlePaginationButton}
                    type="button" 
                    className={`${limitPagination >= data.length ? 'hidden' : ''} w-max mt-6 py-2 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md`}>
                        Muat
                    </button>
                }
            </div>
        </>
    )
}