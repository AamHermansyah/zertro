import { useSelector } from "react-redux";
import ChartGold from "../../../../components/ChartGold";
import MiniCard from "../../../../components/MiniCard";
import Navigation from "../../../../layouts/Navigation";
import ChartSkeleton from "../../../../layouts/ChartSKeleton";

const buttons = [
    {title: '7 Hari', value: 7},
    {title: '14 Hari', value: 14},
    {title: '30 Hari', value: 30},
    {title: '3 Bulan', value: 90},
    {title: '6 Bulan', value: 180},
    {title: '1 Tahun', value: 365},
    {title: 'All Years', value: 'all'},
]

export default function OneWeekChart(){
    const loading = useSelector(state => state.gold_price.loading)
    const data = useSelector(state => state.gold_price.oneWeek);
    
    return (
        <Navigation active="/dashboard/prediction">
            <section id="prediction_CAGR">
                <h1 className="text-2xl sm:text-3xl font-bold mt-8 mx-4 mb-4 text-gray-800">Prediksi Compound Average Growth Rate</h1>
                <div className="flex flex-col gap-2 bg-white text-white rounded-lg p-4 shadow text-sm mx-4">
                    <span className="flex items-center justify-center w-max bg-gray-700 rounded-full h-6 px-3 uppercase">
                    Note
                    </span>
                    <span className="inline-flex px-2 text-gray-700">
                    Compounded annual growth rate (CAGR) adalah tingkat pertumbuhan per tahun selama rentang periode waktu tertentu. Prediksi CAGR bagus digunakan jika harga pertumbuhan emas memiliki tingkat grafik naik yang stabil atau konsisten.
                    </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-semibold mt-8 mx-4 text-gray-800">Prediksi laba</h1>
                <div className="flex flex-wrap gap-6 mt-2 mb-6 px-4">
                    <MiniCard 
                    loading={loading}
                    title="7 Hari Kedepan"
                    data={`${data.low_price}%`}
                    />
                    <MiniCard 
                    loading={loading}
                    title="14 Hari Kedepan"
                    data={`${data.high_price}%`}
                    />
                    <MiniCard 
                    loading={loading}
                    title="30 Hari Kedepan"
                    data={`${data.ch}%`}
                    />
                    <MiniCard 
                    loading={loading}
                    title="3 Bulan Kedepan"
                    data={`${data.chp}%`}
                    />
                    <MiniCard 
                    loading={loading}
                    title="6 Bulan Kedepan"
                    data={`${data.chp}%`}
                    />
                    <MiniCard 
                    loading={loading}
                    title="1 Tahun Kedepan"
                    data={`${data.chp}%`}
                    />
                </div>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-2">
                    {buttons.map((button, index) => (
                        <button key={index} value={button.value}
                        className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white text-sm ss:text-base ss:font-semibold w-max transition ease-in duration-200 text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
                        {button.title}
                        </button>
                    ))}
                </div>
                {loading ?
                    <ChartSkeleton /> :
                    <ChartGold
                    title="Grafik 7 Hari Terakhir"
                    data={data}
                    />
                }
            </section>
        </Navigation>
    )
}