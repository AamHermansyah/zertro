import { useSelector } from "react-redux";
import ChartSkeleton from "../layouts/ChartSKeleton";
import ChartGold from "./ChartGold";
import MiniCard from "./MiniCard";

export default function OneMonthChart({loading}){
    const data = useSelector(state => state.gold_price.oneMonth);
    
    return (
        <section id="one_week_chart">
            <h1 className="text-2xl sm:text-3xl font-bold mt-8 mx-4 mb-4 text-gray-800">30 Hari Terakhir</h1>
            {loading ?
                <ChartSkeleton /> :
                <div>
                    <div className="flex flex-wrap gap-6 my-6 px-4">
                    <MiniCard 
                        loading={loading}
                        title="Harga Terendah"
                        data={`$${data.low_price}`}
                        />
                        <MiniCard 
                        loading={loading}
                        title="Harga Tertinggi"
                        data={`$${data.high_price}`}
                        />
                        <MiniCard 
                        loading={loading}
                        title="Laba 30 Hari (USD)"
                        data={`$${data.ch}`}
                        />
                        <MiniCard 
                        loading={loading}
                        title="Laba 30 Hari (%)"
                        data={`${data.chp}%`}
                        />
                    </div>
                    <ChartGold
                    title="Harga 30 Hari Terakhir"
                    data={data}
                    />
                </div>
            }
        </section>
    )
}