import { useSelector } from "react-redux";
import ChartSkeleton from "../layouts/ChartSKeleton";
import ChartGold from "./ChartGold";
import MiniCard from "./MiniCard";

export default function OneWeekChart({loading}){
    const data = useSelector(state => state.gold_price.oneWeek);
    
    return (
        <section id="one_week_chart">
            <h1 className="text-2xl sm:text-3xl font-bold mt-8 mx-4 mb-4 text-gray-800">7 Hari Terakhir</h1>
            {loading ?
                <ChartSkeleton /> :
                <div>
                    <div className="flex flex-wrap gap-6 my-6 px-4">
                        <MiniCard 
                        loading={loading}
                        title="Harga Tertinggi"
                        data={1234.56}
                        />
                        <MiniCard 
                        loading={loading}
                        title="Laba 7 Hari (USD)"
                        data="$1.2"
                        />
                        <MiniCard 
                        loading={loading}
                        title="Laba 7 Hari (%)"
                        data="0.21%"
                        />
                    </div>
                    <ChartGold
                    title="Harga 7 Hari Terakhir"
                    data={data}
                    />
                </div>
            }
        </section>
    )
}