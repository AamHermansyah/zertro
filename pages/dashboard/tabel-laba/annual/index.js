import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Navigation from "../../../../layouts/Navigation";
import TableCHAndCHP from "../../../../components/TableCHAndCHP";
import handleCHTableHistory from "../../../../promises/handleCHTableHistory";
import gold_price_annual from "../../../../constants/json/gold_price_annual.json";

export default function PriceChangeTablePerYear(){
    const [data, setData] = useState([]);
    const [months, setMonths] = useState([]);
    const [currentIndexFilter, setCurrentIndexFilter] = useState(0);
    const [fetchStatusFilter, setFetchStatusFilter] = useState(true);
    const allYearDates = gold_price_annual.map((res, index) => ({id: index, value: res.Date}));
    const allYearPrices = gold_price_annual.map(res => res.Price);

    const selectFromInputRef = useRef();

    const handleFilterSelect = event => {
        setCurrentIndexFilter(+event.target.value)
    }

    const handleFilterButton = (event) => {
        event.preventDefault();
        setFetchStatusFilter(true);
    }

    useEffect(() => {
        setMonths(allYearDates);
    }, []);

    useEffect(() => {
        if(months.length > 0 && fetchStatusFilter){
            let startDateIndex = currentIndexFilter || months[0].id;
            let endDateIndex = data.length > 0 ? +selectFromInputRef.current.value : months[months.length - 1].id;

            let goldPriceAllYear = allYearDates.map((date, index) => ({date: date.value, price: allYearPrices[index]}));

            if(startDateIndex === endDateIndex){
                goldPriceAllYear = goldPriceAllYear.filter((data, index) => index === startDateIndex);
            } else goldPriceAllYear = goldPriceAllYear.slice(startDateIndex, endDateIndex);

            handleCHTableHistory(goldPriceAllYear)
                .then(res => {
                    setData(res);
                })

            setFetchStatusFilter(false);
        }
    }, [fetchStatusFilter, months]);
    
    return (
        <Navigation active="/dashboard/tabel-laba">
            <div className="bg-white max-w-4xl p-4 sm:p-8 shadow-md rounded-md mx-auto" id="tabel-laba">
                <h2 className="text-lg ss:text-2xl font-semibold mb-4 text-center">Tabel laba pertahun</h2>
                <form className="flex flex-wrap gap-2 mb-2">
                    <label className="text-gray-700" htmlFor="animals">
                        Dari
                        <select onChange={handleFilterSelect}
                        id="animals"
                        className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                            {months.length > 0 ? months.map((month) => (
                                <option key={month.id} value={month.id}>
                                    {month.value}
                                </option>
                                )) :
                                <option>
                                    From
                                </option>
                            }
                        </select>
                    </label>
                    <label className="text-gray-700" htmlFor="animals">
                        Sampai
                        <select id="animals" className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals" ref={selectFromInputRef}>
                            {months.length > 0 ? months
                            .filter((month) => month.id >= currentIndexFilter)
                            .map((month) => (
                                <option key={month.id} value={month.id}>
                                    {month.value}
                                </option>
                                )) :
                                <option>
                                    To
                                </option>
                            }
                        </select>
                    </label>
                    <div className="self-end">
                        <button onClick={handleFilterButton}
                        className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white text-sm ss:text-base ss:font-semibold w-max transition ease-in duration-200 text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                            Filter
                        </button>
                    </div>
                </form>
                <TableCHAndCHP 
                loading={fetchStatusFilter}
                data={data}
                headLabel={['Tahun', 'Laba', 'Harga Buka', 'Harga Tutup']}
                />
            </div>
        </Navigation>
    )
}