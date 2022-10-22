import { useDispatch, useSelector } from "react-redux";
import ChartGold from "../../../../components/ChartGold";
import MiniCard from "../../../../components/MiniCard";
import Navigation from "../../../../layouts/Navigation";
import ChartSkeleton from "../../../../layouts/ChartSKeleton";
import { CHP_IDEAL_FOR_BUY, CONFIG_DATE } from "../../../../utils/config";
import { useEffect, useState } from "react";
import handleCAGRPrediction from "../../../../promises/handleCAGRPrediction";
import { addCAGRPrediction, setLoadingCAGRDataPrediction } from "../../../../app/features/prediction/predictionSlice";
import NotePrediction from "../../../../components/NotePrediction";
import formatDate from "../../../../utils/formatDate";
import { buttons_prediction as buttons } from "../../../../constants";

export default function OneWeekChart(){
    const [typeTimeData, setTypeTimeData] = useState('oneWeek');
    const [timeTitle, setTimeTitle] = useState({
        title: '7 Hari',
        endDatePrediction: null
    });

    const dataGoldPrice = useSelector(state => state.gold_price);
    const prediction_data = useSelector(state => state.prediction_data.CAGR);
    const loading = prediction_data.loading;
    const dispatch = useDispatch();

    const isSameLabel = prediction_data[typeTimeData].buy_recommendation === dataGoldPrice[typeTimeData].buy_recommendation;
    const labelPredictionDisplay = prediction_data[typeTimeData].buy_recommendation;
    const labelChpGoldPriceDisplay = dataGoldPrice[typeTimeData].buy_recommendation;

    const today = new Date();

    useEffect(() => {
        if(dataGoldPrice[typeTimeData].prices.length > 0){
            handleCAGRPrediction(dataGoldPrice[typeTimeData].prices[0])
            .then(res => {
                dispatch(addCAGRPrediction({
                    [typeTimeData]: res
                }));
            })
            .catch(err => {
                alert(err);
            })
            .finally(() => {
                dispatch(setLoadingCAGRDataPrediction());
            })
        }
    }, [loading, dataGoldPrice[typeTimeData].prices, typeTimeData]);

    useEffect(() => {
        let endDatePredictionOneWeek = new Date(today);
        endDatePredictionOneWeek.setDate(today.getDate() + CONFIG_DATE.ONE_WEEK);
        setTimeTitle(prev => ({
            ...prev,
            endDatePrediction: formatDate(endDatePredictionOneWeek, {getDay: true})
        }))
    }, []);

    const handleButtonFilter = (event) => {
        event.preventDefault();
        const date = new Date(today);
        switch(+event.target.value){
            case CONFIG_DATE.ONE_WEEK:
                setTypeTimeData('oneWeek');
                date.setDate(today.getDate() + CONFIG_DATE.ONE_WEEK);
                setTimeTitle({ 
                    title: '7 Hari',
                    endDatePrediction: formatDate(date, {getDay: true})
                })
                break;
            case CONFIG_DATE.TWO_WEEK:
                setTypeTimeData('twoWeek');
                date.setDate(today.getDate() + CONFIG_DATE.TWO_WEEK);
                setTimeTitle({ 
                    title: '14 Hari',
                    endDatePrediction: formatDate(date, {getDay: true})
                })
                break;
            case CONFIG_DATE.ONE_MONTH:
                setTypeTimeData('oneMonth');
                date.setDate(today.getDate() + CONFIG_DATE.ONE_MONTH);
                setTimeTitle({ 
                    title: '30 Hari',
                    endDatePrediction: formatDate(date, {getDay: true})
                })
                break;
            case CONFIG_DATE.THREE_MONTH:
                setTypeTimeData('threeMonth');
                date.setDate(today.getDate() + CONFIG_DATE.THREE_MONTH);
                setTimeTitle({ 
                    title: '3 Bulan',
                    endDatePrediction: formatDate(date, {getDay: true})
                })
                break;
            case CONFIG_DATE.SIX_MONTH:
                setTypeTimeData('sixMonth');
                date.setDate(today.getDate() + CONFIG_DATE.SIX_MONTH);
                setTimeTitle({ 
                    title: '6 Bulan',
                    endDatePrediction: formatDate(date, {getDay: true})
                })
                break;
            case CONFIG_DATE.ONE_YEAR:
                setTypeTimeData('oneYear');
                date.setDate(today.getDate() + CONFIG_DATE.ONE_YEAR);
                setTimeTitle({ 
                    title: '1 Tahun',
                    endDatePrediction: formatDate(date, {getDay: true})
                })
                break;
            default:
                setTypeTimeData('sixYear');
                date.setDate(today.getDate() + CONFIG_DATE.ONE_YEAR * 6);
                setTimeTitle({ 
                    title: '6 Tahun',
                    endDatePrediction: formatDate(date, {getDay: true})
                })
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
                        <h3 className="text-md sm:text-xl">
                            {timeTitle.title} Kedepan (Sampai <span className="font-bold">{timeTitle.endDatePrediction})</span>
                        </h3>
                       <div className="flex flex-wrap gap-4">
                            <MiniCard 
                            loading={loading}
                            title="Prediksi (USD)"
                            data={`$${prediction_data[typeTimeData].ch}`}
                            indicator={prediction_data[typeTimeData].ch >= 0 ? 1 : -1}
                            label={labelPredictionDisplay}
                            isSameLabel={isSameLabel}
                            />
                            <MiniCard 
                            loading={loading}
                            title="Prediksi (%)"
                            data={`${prediction_data[typeTimeData].chp}%`}
                            indicator={prediction_data[typeTimeData].ch >= 0 ? 1 : -1}
                            label={labelPredictionDisplay}
                            isSameLabel={isSameLabel}
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
                            label={labelChpGoldPriceDisplay}
                            isSameLabel={isSameLabel}
                            />
                            <MiniCard 
                            loading={loading}
                            title="Laba (%)"
                            data={`${dataGoldPrice[typeTimeData].chp}%`}
                            indicator={dataGoldPrice[typeTimeData].ch > 0 ? 1 : -1}
                            label={labelChpGoldPriceDisplay}
                            isSameLabel={isSameLabel}
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
                    backgroundColor={['transparent', 'transparent', prediction_data[typeTimeData].ch >= 0 ? '#38E54D' : '#F96666']}
                    data={{
                        ...dataGoldPrice[typeTimeData],
                        prices: [dataGoldPrice[typeTimeData].prices[0], prediction_data[typeTimeData].data, prediction_data[typeTimeData].data]
                    }}
                    />
                }
            </section>
        </Navigation>
    )
}