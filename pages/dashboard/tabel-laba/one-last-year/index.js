import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { convertAndFilterToMonthString, convertMonthStringToNumber } from "../../../../utils/formatDate";
import Navigation from "../../../../layouts/Navigation";
import TableCHAndCHP from "../../../../components/TableCHAndCHP";
import handleCHTableHistory from "../../../../promises/handleCHTableHistory";

export default function PriceChangeTableOneLastYear(){
    const [data, setData] = useState([]);
    const [months, setMonths] = useState([]);
    const [currentIndexFilter, setCurrentIndexFilter] = useState(0);
    const [fetchStatusFilter, setFetchStatusFilter] = useState(true);
    const {dates: oneYearDates, prices: oneYearPrice} = useSelector(state => state.gold_price.oneYear);

    const selectFromInputRef = useRef();

    const handleFilterSelect = event => {
        setCurrentIndexFilter(+event.target.value)
    }

    const handleFilterButton = (event) => {
        event.preventDefault();
        setFetchStatusFilter(true);
    }

    useEffect(() => {
        setMonths(convertAndFilterToMonthString(oneYearDates));
    }, [oneYearDates]);

    useEffect(() => {
        if(months.length > 0 && fetchStatusFilter){
            // get start date and end date
            let startDate = currentIndexFilter || months[0].id;
            let endDate = data.length > 0 ? +selectFromInputRef.current.value : months[months.length - 1].id;
            let startDateIndex;
            let endDateIndex;

            // map data gold price one year
            let goldPriceOneYear = oneYearDates
                .map((date, index) => ({date, price: oneYearPrice[0][index]}));

            months
                .filter(month => month.id === startDate || month.id === endDate)
                .map(month => month.value)
                .forEach((month, index) => index === 0 ? startDate = month : endDate = month );

            startDate = convertMonthStringToNumber(startDate)
            endDate = currentIndexFilter === endDate ? startDate : convertMonthStringToNumber(endDate);

            // if start date and end date is same
            if(startDate !== endDate){
                 // get date index
                goldPriceOneYear.forEach((dataGoldPrice, index) => {
                    const date = dataGoldPrice.date.split('-').slice(0,2).join('-');
                    if(date === startDate && startDateIndex === undefined) startDateIndex = index;
                    if(date === endDate) endDateIndex = index;
                });

                // filter data gold price one year
                goldPriceOneYear = goldPriceOneYear.slice(startDateIndex, endDateIndex + 1);
            } else goldPriceOneYear = goldPriceOneYear.filter(({date}) => date.split('-').slice(0,2).join('-') === endDate);

            handleCHTableHistory(goldPriceOneYear)
                .then(res => {
                    setData(res);
                })

            setFetchStatusFilter(false);
        }
    }, [months, fetchStatusFilter]);
    
    return (
        <Navigation active="/dashboard/tabel-laba">
            <div className="bg-white max-w-4xl p-4 sm:p-8 shadow-md rounded-md mx-auto" id="tabel-laba">
                <h2 className="text-lg ss:text-2xl font-semibold mb-4 text-center">Tabel laba perhari (1 Tahun)</h2>
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
                headLabel={['Tanggal', 'Laba', 'Harga Buka', 'Harga Tutup']}
                />
            </div>
        </Navigation>
    )
}