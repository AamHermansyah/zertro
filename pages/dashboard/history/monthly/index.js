import { useEffect, useRef, useState } from "react";
import ChartGold from "../../../../components/ChartGold";
import Navigation from "../../../../layouts/Navigation";
import getDataHistory from "../../../../promises/getDataHistory";
import gold_price_monthly from "../../../../constants/json/gold_price_monthly.json";
import { useRouter } from "next/router";
import ChartSkeleton from "../../../../layouts/ChartSKeleton";
import Link from "next/link";

export default function History(){
    const router = useRouter();
    const [data, setData] = useState(null);
    const [inputFilter, setInputFilter] = useState({
        fromYear: [],
        fromMonth: [],
        toYear: [],
        toMonth: []
    });

    const [isLoading, setIsLoading] = useState(true);

    const inputFromYearRef = useRef();
    const inputFromMonthRef = useRef();
    const inputToYearRef = useRef();
    const inputToMonthRef = useRef();

    const handleInputFilter = event => {
        let isLastMonth = false;
        const isSameYear = inputFromYearRef.current.value === inputToYearRef.current.value;

        if(event.target.name === 'years_to'){
            if(isSameYear){
                setInputFilter(prev => ({
                    ...prev,
                    toMonth: prev.fromMonth.filter(value => value > inputFromMonthRef.current.value)
                }))
            } else {
                setInputFilter(prev => ({
                    ...prev,
                    toMonth: prev.fromMonth
                }))
            }
            return
        }

        if(event.target.name === 'month_from'){
            const month_from = +inputFromMonthRef.current.value;
            isLastMonth = month_from === 12 ? true : false;
            setInputFilter(prev => ({
                ...prev,
                toMonth: month_from === 12 ? prev.fromMonth : isSameYear ? prev.fromMonth.filter(value => +value > month_from) : prev.fromMonth
            }));
        }

        const value = inputFromYearRef.current.value;
        const isSameMonth = inputFromMonthRef.current.value === inputToMonthRef.current.value;
        
        setInputFilter(prev => ({
            ...prev,
            toYear: prev.fromYear.filter((data) => isLastMonth ? data > value : data >= value),
        }))
    }

    const handleFilterButton = event => {
        event.preventDefault();
        const fromYear = inputFromYearRef.current.value;
        let fromMonth = +inputFromMonthRef.current.value;
        fromMonth = fromMonth < 10 ? '0' + fromMonth : fromMonth;
        const toYear = inputToYearRef.current.value;
        let toMonth = +inputToMonthRef.current.value;
        toMonth = toMonth < 10 ? '0' + toMonth : toMonth;

        const config = {
            from: fromYear + '-' + fromMonth,
            to: toYear + '-' + toMonth,
            type: 'slice'
        }

        getDataHistory(gold_price_monthly, config)
        .then(res => {
            setData(res.data);
        })
        .catch(err => {
            alert(err);
            router.push('/dashboard');
        })
    }

    useEffect(() => {
        const config = {
            filterYears: true
        }

        getDataHistory(gold_price_monthly, config)
            .then(res => {
                setTimeout(() => {
                    setData(res.data);
                    setInputFilter(prev => ({
                        ...prev,
                        fromYear: res.data.filterYears,
                        fromMonth: Array.from({length: 12}).map((arr, index) => index + 1),
                        toYear: res.data.filterYears,
                        toMonth: Array.from({length: 12}).map((arr, index) => index + 1),
                    }));
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
            <section id="history_monthly">
                <form className="mb-4 flex flex-wrap gap-4">
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                        dari tahun
                        </label>
                        <div className="flex flex-wrap items-center gap-4">
                            <div className="flex items-center justify-center mt-1 relative rounded-md shadow-sm py-2 w-[87vw] xs:w-[300px] bg-white">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="years_from" className="sr-only">
                                    dari tahun
                                    </label>
                                    <select 
                                    id="years_from" 
                                    name="years_from" 
                                    className="focus:ring-indigo-500 py-2 px-4 border-t border-l border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-l-md" 
                                    onChange={handleInputFilter} 
                                    defaultValue=""
                                    ref={inputFromYearRef}>
                                        {!isLoading ? inputFilter.fromYear.map((year, index) => (
                                            <option key={index} value={year}>
                                                {year}
                                            </option>
                                        )) :
                                        <option disabled selected>
                                            Loading...
                                        </option>
                                        }
                                    </select>
                                </div>
                                <span className="w-full text-center hidden xxs:block">Bulan</span>
                                <span className="h-6 block xs:hidden" />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <label htmlFor="month_from" className="sr-only">
                                    bulan ke
                                    </label>
                                    <select 
                                    id="month_from" 
                                    name="month_from" 
                                    className="focus:ring-indigo-500 py-2 px-4 border-t border-r border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-r-md" 
                                    defaultValue=""
                                    onChange={handleInputFilter}
                                    ref={inputFromMonthRef}>
                                        {inputFilter.fromMonth.length > 0 ?
                                            inputFilter.fromMonth.map((month, index) =>(
                                                <option key={index} value={month}>
                                                    {month}
                                                </option>
                                            )) :
                                            <option disabled selected>
                                                from
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
                            <div className="flex items-center justify-center mt-1 relative rounded-md shadow-sm py-2 w-[87vw] xs:w-[300px] bg-white">
                                <div className="absolute inset-y-0 left-0 flex items-center">
                                    <label htmlFor="years_to" className="sr-only">
                                    sampai tahun
                                    </label>
                                    <select 
                                    id="years_to" 
                                    name="years_to" 
                                    className="focus:ring-indigo-500 py-2 px-4 border-t border-l border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-l-md" 
                                    defaultValue=""
                                    ref={inputToYearRef}
                                    onChange={handleInputFilter}>
                                        {inputFilter.toYear.length > 0 ? 
                                        inputFilter.toYear.map((year, index) => (
                                            <option key={index} value={year}>
                                                {year}
                                            </option>
                                        )) :
                                        <option selected>
                                            to
                                        </option>
                                        }
                                    </select>
                                </div>
                                <span className="w-full text-center hidden xxs:block">Sampai</span>
                                <span className="h-6 block xs:hidden" />
                                <div className="absolute inset-y-0 right-0 flex items-center">
                                    <label htmlFor="month_to" className="sr-only">
                                    bulan ke
                                    </label>
                                    <select 
                                    id="month_to" 
                                    name="month_to" 
                                    className="focus:ring-indigo-500 py-2 px-4 border-t border-r border-gray-300 border-b bo focus:border-indigo-500 h-full pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-r-md" 
                                    defaultValue=""
                                    ref={inputToMonthRef}>
                                        {inputFilter.toMonth.length > 0 ?
                                            inputFilter.toMonth.map((month, index) =>(
                                                <option key={index} value={month}>
                                                    {month}
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
                    </div>
                </form>
                {isLoading ?
                    <ChartSkeleton /> :
                    <div>
                        <ChartGold 
                        data={data}
                        title="Histori harga emas perbulan (1950 - 2021) per Kg"
                        color="#EB1D36"
                        label="Harga Emas" />
                        <div className="flex font-thin text-md p-2">
                            <span className="mr-2">Source:</span>
                            <Link href="https://github.com/datasets/gold-prices/blob/master/data/monthly.csv">
                                <a className="underline" target="_blank" rel="noopener noreferrer">https://github.com/datasets/gold-prices/</a>
                            </Link>
                        </div>
                    </div>
                }
            </section>
        </Navigation>
    )
}