import { useDispatch, useSelector } from "react-redux";
import ChartGold from "../../../../components/ChartGold";
import MiniCard from "../../../../components/MiniCard";
import Navigation from "../../../../layouts/Navigation";
import ChartSkeleton from "../../../../layouts/ChartSKeleton";
import { CHP_IDEAL_FOR_BUY, CONFIG_DATE } from "../../../../utils/config";
import { useEffect, useState } from "react";
import handleCAGRPrediction from "../../../../promises/handleCAGRPrediction";
import { addCAGRPrediction, setLoadingFetchDataPrediction } from "../../../../app/features/prediction/predictionSlice";
import NotePrediction from "../../../../components/NotePrediction";
import formatDate from "../../../../utils/formatDate";

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
    const [typeTimeData, setTypeTimeData] = useState('oneWeek');
    const [timeTitle, setTimeTitle] = useState({
        title: '7 Hari',
        endDatePrediction: null
    });
    const loading = useSelector(state => state.prediction_data.loading);
    const dataGoldPrice = useSelector(state => state.gold_price);
    const prediction_data = useSelector(state => state.prediction_data.CAGR);
    const dispatch = useDispatch();

    const chpGoldPrice = dataGoldPrice[typeTimeData].chp;
    const labelPredictionDisplay = prediction_data[typeTimeData].buy_recommendation;
    const labelCHGoldPriceDisplay = chpGoldPrice <= CHP_IDEAL_FOR_BUY || chpGoldPrice > 0 ? 1 : -1;

    useEffect(() => {
        if(dataGoldPrice[typeTimeData].prices.length > 0){
            handleCAGRPrediction(dataGoldPrice[typeTimeData].prices[0])
            .then(res => {
                dispatch(addCAGRPrediction({
                    [typeTimeData]: res
                }));
            })
            .finally(() => {
                dispatch(setLoadingFetchDataPrediction());
            })
        }
    }, [loading, dataGoldPrice[typeTimeData].prices, typeTimeData]);

    useEffect(() => {
        const today = new Date();
        let endDatePredictionOneWeek = new Date(today);
        endDatePredictionOneWeek.setDate(today.getDate() - CONFIG_DATE.ONE_WEEK);
        setTimeTitle(prev => ({
            ...prev,
            endDatePrediction: formatDate(endDatePredictionOneWeek)
        }))
    }, []);

    const handleButtonFilter = (event) => {
        event.preventDefault();
        switch(+event.target.value){
            case CONFIG_DATE.ONE_WEEK:
                setTypeTimeData('oneWeek');
                setTimeTitle({ title: '7 Hari' })
                break;
            case CONFIG_DATE.TWO_WEEK:
                setTypeTimeData('twoWeek');
                setTimeTitle({ title: '14 Hari' })
                break;
            case CONFIG_DATE.ONE_MONTH:
                setTypeTimeData('oneMonth');
                setTimeTitle({ title: '30 Hari' })
                break;
            case CONFIG_DATE.THREE_MONTH:
                setTypeTimeData('threeMonth');
                setTimeTitle({ title: '3 Bulan' })
                break;
            case CONFIG_DATE.SIX_MONTH:
                setTypeTimeData('sixMonth');
                setTimeTitle({ title: '6 Bulan' })
                break;
            case CONFIG_DATE.ONE_YEAR:
                setTypeTimeData('oneYear');
                setTimeTitle({ title: '1 Tahun' })
                break;
            default:
                setTypeTimeData('sixYear');
                setTimeTitle({ title: '6 Tahun' })
                break;
        }
    }
    
    return (
        <Navigation active="/dashboard/prediction">
            <section id="prediction_CAGR">
                <NotePrediction title="Prediksi Compound Average Growth Rate">
                    Compounded annual growth rate (CAGR) adalah tingkat pertumbuhan per tahun selama rentang periode waktu tertentu. Prediksi CAGR bagus digunakan jika harga pertumbuhan emas memiliki tingkat grafik naik yang stabil atau konsisten. Prediksi CAGR ini juga bisa digunakan untuk melihat tren grafik yang sedang terjadi.
                </NotePrediction>
                <h1 className="text-xl sm:text-2xl font-semibold mt-8 mx-4 text-gray-800">Prediksi laba</h1>
                <div className="flex flex-wrap justify-between mt-2 mb-6 px-4">
                    <div className="flex flex-col gap-2 mt-4">
                       <h1 className="text-md sm:text-xl">{timeTitle.title} Kedepan (Sampai {timeTitle.endDatePrediction})</h1>
                       <div className="flex flex-wrap gap-4">
                            <MiniCard 
                            loading={loading}
                            title="Prediksi (USD)"
                            data={`$${prediction_data[typeTimeData].ch}`}
                            indicator={prediction_data[typeTimeData].ch >= 0 ? 1 : -1}
                            label={labelPredictionDisplay}
                            />
                            <MiniCard 
                            loading={loading}
                            title="Prediksi (%)"
                            data={`${prediction_data[typeTimeData].chp}%`}
                            indicator={prediction_data[typeTimeData].ch >= 0 ? 1 : -1}
                            label={labelPredictionDisplay}
                            />
                       </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                       <h1 className="text-md sm:text-xl">{timeTitle.title} Terakhir</h1>
                       <div className="flex flex-wrap gap-4">
                            <MiniCard 
                            loading={loading}
                            title="Laba (USD)"
                            data={`$${dataGoldPrice[typeTimeData].ch}`}
                            indicator={dataGoldPrice[typeTimeData].ch > 0 ? 1 : -1}
                            label={labelCHGoldPriceDisplay}
                            />
                            <MiniCard 
                            loading={loading}
                            title="Laba (%)"
                            data={`${dataGoldPrice[typeTimeData].chp}%`}
                            indicator={dataGoldPrice[typeTimeData].ch > 0 ? 1 : -1}
                            label={labelCHGoldPriceDisplay}
                            />
                       </div>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-2">
                    {buttons.map((button, index) => (
                        <button onClick={handleButtonFilter}
                        key={index} 
                        value={button.value}
                        className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white text-sm ss:text-base ss:font-semibold w-max transition ease-in duration-200 text-center shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg">
                        {button.title}
                        </button>
                    ))}
                </div>
                {loading ?
                    <ChartSkeleton /> :
                    <ChartGold
                    type="bar"
                    title={`Grafik ${timeTitle.title} Terakhir (Kg)`}
                    backgroundColor={['transparent', prediction_data[typeTimeData].ch >= 0 ? '#38E54D' : '#F96666']}
                    data={{
                        ...dataGoldPrice[typeTimeData],
                        prices: [dataGoldPrice[typeTimeData].prices[0], prediction_data[typeTimeData].data]
                    }}
                    />
                }
            </section>
        </Navigation>
    )
}