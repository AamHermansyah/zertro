import { useEffect, useState } from "react";

const LIMIT_PAGINATION = 5;

export default function TablePercentagePerYears(props){
    const [data, setData] = useState([]);
    const [limitPagination, setLimitPagination] = useState(LIMIT_PAGINATION);
    const [isSortTypeInc, setIsSortTypeInc] = useState(true);

    const handlePagination = (action) => {
        if(action?.type === "previous") {
            setLimitPagination(prev => {
                return prev - LIMIT_PAGINATION < LIMIT_PAGINATION ? prev : prev - LIMIT_PAGINATION
            });
            return
        }

        setLimitPagination(prev => {
            return limitPagination >= props.data.length ? prev : prev + LIMIT_PAGINATION
        })
    }

    useEffect(() => {
        setData(props.data);
    }, []);

    useEffect(() => {
        setData(props.data.reverse());
        setLimitPagination(LIMIT_PAGINATION);
    }, [isSortTypeInc]);

    return (
        <div className="flex flex-col items-center" id="tabel-laba">
            <h2 className="text-2xl font-semibold">Tabel laba (1950 - 2017)</h2>
            <div className="mt-6 self-end">
                <button onClick={() => setIsSortTypeInc(prev => !prev)}
                className="ml-4 underline text-indigo-600">Terbaru</button>
            </div>
            <table className="table sm:w-[620px] shadow rounded-lg">
                <thead>
                    <tr className="font-semibold">
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-gray-900">Tahun</th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-gray-900">Laba</th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-gray-900">Buka</th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-gray-900">Tutup</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {data && data
                    .filter((res, index) => index < limitPagination)
                    .map((res, index) => (
                        <tr className="text-gray-700 odd:bg-gray-200" key={index}>
                            <td className="border-b-2 p-4 dark:border-dark-5">{res.year}</td>
                            <td className="border-b-2 p-4 dark:border-dark-5">
                                <div className={`${+res.percentage >= 0 ? "text-green-500" : "text-red-600"} flex justify-center items-center gap-x-`}>
                                    <svg className={+res.percentage < 0 ? 'rotate-180' : ''} width={20} height={20} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                                        </path>
                                    </svg>
                                    <span>{res.percentage}%</span>
                                </div>
                            </td>
                            <td className="border-b-2 p-4 dark:border-dark-5">${res.open_price}</td>
                            <td className="border-b-2 p-4 dark:border-dark-5">${res.close_price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>   
            <div>
                {limitPagination > LIMIT_PAGINATION &&
                    <button onClick={() => handlePagination({type: "previous"})}
                    type="button" 
                    className="w-max mt-6 mx-auto py-2 px-4 mr-4 bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm">
                        mundur
                    </button>
                }
                {limitPagination < props.data.length && 
                    <button onClick={handlePagination}
                    type="button" 
                    className="w-max mt-6 mx-auto py-2 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-sm">
                        muat
                    </button>
                }
            </div>
        </div>    
    )
}