import { useEffect, useRef, useState } from "react";
import ChartGold from "../../../../components/ChartGold";
import Navigation from "../../../../layouts/Navigation";
import getDataHistory from "../../../../promises/getDataHistory";
import gold_price_annual from "../../../../constants/json/gold_price_annual.json";
import { useRouter } from "next/router";
import ChartSkeleton from "../../../../layouts/ChartSKeleton";
import Link from "next/link";

export default function History(){
    const router = useRouter();
    const [data, setData] = useState(null);
    const [inputFilter, setInputFilter] = useState({
        from: [],
        to: []
    });

    const inputStartRef = useRef();
    const inputToRef = useRef();

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
        if(inputToRef.current.value === 'to') return;
        const config = {
            from: inputStartRef.current.value,
            to: inputToRef.current.value.split('-')[0]
        }
        getDataHistory(gold_price_annual, config)
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            alert(err);
            router.push('/dashboard');
        })
    }

    useEffect(() => {
        getDataHistory(gold_price_annual)
            .then(res => {
                setTimeout(() => {
                    setData(res.data);
                    setInputFilter({
                        from: res.data.dates,
                        to: res.data.dates.filter((date, index) => index !== 0)
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
        <Navigation active="/dashboard/history">
            <form className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Filter
                </label>
                <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center justify-center mt-1 relative rounded-md shadow-sm py-2 w-full xs:w-[300px] bg-white">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <label htmlFor="years_from" className="sr-only">
                            Start
                            </label>
                            <select id="years_from" name="years_from" className="focus:ring-indigo-500 py-2 px-4 border-t border-l border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-l-md" onChange={handleInputFilter} ref={inputStartRef} defaultValue="">
                                {!isLoading ? inputFilter.from.map((year, index) => (
                                    <option key={index} value={index}>
                                        {year}
                                    </option>
                                )) :
                                <option>
                                    Loading...
                                </option>
                                }
                            </select>
                        </div>
                        <span className="w-full text-center hidden xxs:block">Sampai</span>
                        <span className="h-6 block xs:hidden" />
                        <div className="absolute inset-y-0 right-0 flex items-center">
                            <label htmlFor="years_to" className="sr-only">
                            To
                            </label>
                            <select id="years_to" name="years_to" className="focus:ring-indigo-500 py-2 px-4 border-t border-r border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-r-md" ref={inputToRef} defaultValue="">
                                {inputFilter.to.length > 0 && 
                                    <option disabled selected>
                                        to
                                    </option>}
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
                    <button onClick={handleFilterButton}
                    className="py-2 px-4 w-max bg-primary hover:bg-indigo-900 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md">
                    Filter
                    </button>
                </div>
            </form>
            {isLoading ?
                <ChartSkeleton /> :
                <div>
                    <ChartGold 
                    data={data}
                    title="Histori harga emas pertahun (1950 - 2021)" 
                    label="Harga Emas" />
                    <div className="flex font-thin text-md p-2">
                        <span className="mr-2">Source:</span>
                        <Link href="https://github.com/datasets/gold-prices/blob/master/data/annual.csv">
                            <a className="underline" target="_blank" rel="noopener noreferrer">https://github.com/datasets/gold-prices/</a>
                        </Link>
                    </div>
                </div>
            }
        </Navigation>
    )
}