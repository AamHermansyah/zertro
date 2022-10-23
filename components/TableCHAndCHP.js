export default function TablePercentagePerYears(){
    
    return (
        <div className="flex flex-col items-center bg-white p-2 sm:p-4 rounded-sm sm:rounded-md" id="tabel-laba">
            <h2 className="text-lg ss:text-2xl font-semibold">Tabel laba</h2>
            <table className="table w-full max-w-4xl shadow rounded-lg">
                <thead>
                    <tr className="text-[.7rem] ss:text-base ss:font-semibold">
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-gray-900">Tahun</th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-gray-900">Laba</th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-gray-900">Harga Buka</th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-gray-900">Harga Tutup</th>
                    </tr>
                </thead>
                <tbody className="text-center text-[.7rem] ss:text-base font-thin ss:font-normal">
                    <tr className="text-gray-700 odd:bg-gray-200">
                        <td className="border-b-2 p-4 dark:border-dark-5">2022</td>
                        <td className="border-b-2 p-4 dark:border-dark-5">
                            <div className={`${true >= 0 ? "text-green-500" : "text-red-600"} flex justify-center items-center gap-x-`}>
                                <svg className={`${false < 0 ? 'rotate-180' : ''} w-2 h-2 ss:w-4 ss:h-4`} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                                    </path>
                                </svg>
                                <span>123%</span>
                            </div>
                        </td>
                        <td className="border-b-2 p-4 dark:border-dark-5">$123.45</td>
                        <td className="border-b-2 p-4 dark:border-dark-5">$543.21</td>
                    </tr>
                    <tr className="text-gray-700 odd:bg-gray-200">
                        <td className="border-b-2 p-4 dark:border-dark-5">2022</td>
                        <td className="border-b-2 p-4 dark:border-dark-5">
                            <div className={`${true >= 0 ? "text-green-500" : "text-red-600"} flex justify-center items-center gap-x-`}>
                                <svg className={`${false < 0 ? 'rotate-180' : ''} w-2 h-2 ss:w-4 ss:h-4`} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                                    </path>
                                </svg>
                                <span>123%</span>
                            </div>
                        </td>
                        <td className="border-b-2 p-4 dark:border-dark-5">$123.45</td>
                        <td className="border-b-2 p-4 dark:border-dark-5">$543.21</td>
                    </tr>
                </tbody>
            </table>   
            <div>
                <button
                type="button" 
                className="w-max mt-6 mx-auto py-0.5 px-3 text-[.7rem] ss:text-base ss:py-2 ss:px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                    Muat
                </button>
            </div>
        </div>    
    )
}