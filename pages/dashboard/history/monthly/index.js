import { useEffect, useRef, useState } from "react";
import ChartGold from "../../../../components/ChartGold";
import Navigation from "../../../../layouts/Navigation";
import getDataHistory from "../../../../promises/getDataHistory";
import gold_price_monthly from "../../../../constants/json/gold_price_monthly.json";
import { useRouter } from "next/router";
import ChartSkeleton from "../../../../layouts/ChartSKeleton";

export default function History(){
    const router = useRouter();
    const [data, setData] = useState(null);
    const [inputFilter, setInputFilter] = useState({
        from: [],
        to: []
    });

    const [isLoading, setIsLoading] = useState(true);

    const handleInputFilter = event => {
        const value = event.target.value;
        setInputFilter(prev => ({
            ...prev,
            to: prev.from.filter((data, index) => index > value)
        }))
    }

    const handleFilterButton = event => {
        event.preventDefault();
    }

    useEffect(() => {
        const config = {
            filterYears: true
        }

        getDataHistory(gold_price_monthly, config)
            .then(res => {
                setTimeout(() => {
                    console.log(res.data);
                    setData(res.data);
                    setInputFilter({
                        from: res.data.filterYears,
                        to: Array.from({length: 12}).map((arr, index) => index + 1)
                    });
                    setIsLoading(false);
                }, 3000);
            })
            .catch(err => {
                alert(err);
                router.push('/dashboard');
            })
    }, []);

    return (
        <Navigation active="/dashboard/history/annual">
            <form className="mb-4 flex flex-wrap gap-4">
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    dari tahun
                    </label>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="mt-1 relative rounded-md shadow-sm py-2 w-[300px] bg-white">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <label htmlFor="currency" className="sr-only">
                                Start
                                </label>
                                <select id="years" name="years" className="focus:ring-indigo-500 py-2 px-4 border-t border-l border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-l-md" onChange={handleInputFilter} defaultValue="">
                                    {!isLoading ? inputFilter.from.map((year, index) => (
                                        <option key={index} value={index}>
                                            {year}
                                        </option>
                                    )) :
                                    <option disabled selected>
                                        Loading...
                                    </option>
                                    }
                                </select>
                            </div>
                            <span className="w-full text-center block">Bulan</span>
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="years" className="sr-only">
                                To
                                </label>
                                <select id="years" name="years" className="focus:ring-indigo-500 py-2 px-4 border-t border-r border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-r-md" defaultValue="">
                                    {inputFilter.to.length > 0 ?
                                        inputFilter.to.map((year, index) =>(
                                            <option key={index} value={year}>
                                                {year}
                                            </option>
                                        )) :
                                        <option disabled selected>
                                            to
                                        </option>
                                    } 
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    sampai tahun
                    </label>
                    <div className="flex flex-wrap items-center gap-4">
                        <div className="mt-1 relative rounded-md shadow-sm py-2 w-[300px] bg-white">
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <label htmlFor="currency" className="sr-only">
                                Start
                                </label>
                                <select id="years" name="years" className="focus:ring-indigo-500 py-2 px-4 border-t border-l border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-l-md" defaultValue="">
                                    <option>
                                        Loading...
                                    </option>
                                </select>
                            </div>
                            <span className="w-full text-center block">Bulan</span>
                            <div className="absolute inset-y-0 right-0 flex items-center">
                                <label htmlFor="years" className="sr-only">
                                To
                                </label>
                                <select id="years" name="years" className="focus:ring-indigo-500 py-2 px-4 border-t border-r border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-r-md" defaultValue="">
                                        <option disabled selected>
                                            to
                                        </option>
                                </select>
                            </div>
                        </div>
                        <button onClick={handleFilterButton}
                        className="py-2 px-4 w-max bg-primary hover:bg-indigo-900 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                        Filter
                        </button>
                    </div>
                </div>
            </form>
            {isLoading ?
                <ChartSkeleton /> :
                <ChartGold 
                data={data}
                title="Histori harga emas perbulan (1950 - 2018)" 
                color="#FB2576"
                label="Harga Emas" />
            }
        </Navigation>
    )
}