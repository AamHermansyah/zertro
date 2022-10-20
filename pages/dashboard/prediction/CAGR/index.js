import { useDispatch, useSelector } from "react-redux";
import ChartGold from "../../../../components/ChartGold";
import MiniCard from "../../../../components/MiniCard";
import Navigation from "../../../../layouts/Navigation";
import ChartSkeleton from "../../../../layouts/ChartSKeleton";
import { CONFIG_DATE } from "../../../../utils/config";
import { useEffect } from "react";
import handleCAGRPrediction from "../../../../promises/handleCAGRPrediction";
import { setLoadingFetchDataPrediction } from "../../../../app/features/prediction/predictionSlice";

const buttons = [
    {title: '7 Hari', value: CONFIG_DATE.ONE_WEEK},
    {title: '14 Hari', value: CONFIG_DATE.TWO_WEEK},
    {title: '30 Hari', value: CONFIG_DATE.ONE_MONTH},
    {title: '3 Bulan', value: CONFIG_DATE.THREE_MONTH},
    {title: '6 Bulan', value: CONFIG_DATE.SIX_MONTH},
    {title: '1 Tahun', value: CONFIG_DATE.ONE_YEAR},
    {title: '6 Tahun', value: CONFIG_DATE.ONE_YEAR * 6},
]

export default function OneWeekChart(){
    const loading = useSelector(state => state.prediction_data.loading)
    const dataOneWeek = useSelector(state => state.gold_price.oneWeek);
    const prediction_data = useSelector(state => state.prediction_data.CAGR.oneWeek)
    const dispatch = useDispatch();

    useEffect(() => {
        if(dataOneWeek.prices.length > 0){
            handleCAGRPrediction(dataOneWeek.prices[0])
            .then(res => {
                console.log(res);
            })
            .finally(() => {
                dispatch(setLoadingFetchDataPrediction());
            })
        }
    }, [loading, dataOneWeek.prices]);
    
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
                    data={`${dataOneWeek.ch}%`}
                    indicator={dataOneWeek.ch >= 0 ? 1 : -1}
                    label={true}
                    />
                    <MiniCard 
                    loading={loading}
                    title="14 Hari Kedepan"
                    data={`${dataOneWeek.ch}%`}
                    indicator={dataOneWeek.ch >= 0 ? 1 : -1}
                    label={true}
                    />
                    <MiniCard 
                    loading={loading}
                    title="30 Hari Kedepan"
                    data={`${dataOneWeek.ch}%`}
                    indicator={dataOneWeek.ch >= 0 ? 1 : -1}
                    label={true}
                    />
                    <MiniCard 
                    loading={loading}
                    title="3 Bulan Kedepan"
                    data={`${dataOneWeek.chp}%`}
                    indicator={dataOneWeek.ch >= 0 ? 1 : -1}
                    label={true}
                    />
                    <MiniCard 
                    loading={loading}
                    title="6 Bulan Kedepan"
                    data={`${dataOneWeek.chp}%`}
                    indicator={dataOneWeek.ch >= 0 ? 1 : -1}
                    label={true}
                    />
                    <MiniCard 
                    loading={loading}
                    title="1 Tahun Kedepan"
                    data={`${dataOneWeek.chp}%`}
                    indicator={dataOneWeek.ch >= 0 ? 1 : -1}
                    label={true}
                    />
                    <MiniCard 
                    loading={loading}
                    title="3 Tahun Kedepan"
                    data={`${dataOneWeek.chp}%`}
                    indicator={dataOneWeek.ch >= 0 ? 1 : -1}
                    label={true}
                    />
                    <MiniCard 
                    loading={loading}
                    title="6 Tahun Kedepan"
                    data={`${dataOneWeek.chp}%`}
                    indicator={dataOneWeek.ch >= 0 ? 1 : -1}
                    label={true}
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
                    data={dataOneWeek}
                    />
                }
            </section>
        </Navigation>
    )
}