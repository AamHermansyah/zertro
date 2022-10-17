import { useEffect, useState } from "react"
import { resolve } from "styled-jsx/css";
import ChartSkeleton from "../layouts/ChartSKeleton";
import ChartGold from "./ChartGold";
import MiniCard from "./MiniCard";

export default function OneWeekChart({loading}){
    const [data, setData] = useState({dates: [], prices: []});

    useEffect(() => {
        const res = {
            "2022-10-10": {XAU: 0.00059902},
            "2022-10-11": {XAU: 0.00060055},
            "2022-10-12": {XAU: 0.00059719},
            "2022-10-13": {XAU: 0.00060086},
            "2022-10-14": {XAU: 0.00060839},
            "2022-10-15": {XAU: 0.00060831},
            "2022-10-16": {XAU: 0.00060731},
            }
      
          const promise = new Promise((resolve, reject) => {
                const dates = [];
                const prices = [];
            
                for(let i in res){
                    dates.push(i.split('-')[2]);
                    prices.push(1/res[i].XAU)
                }
                resolve({dates, prices: [prices, [1674, 1656, 1632, 1654, 1611, 1666, 1643], [1644, 1616, 1642, 1601, 1615, 1616, 1663]]});
            })

            promise.then(res => {
                setData(res);
            })
    }, []);

    return (
        <section id="one_week_chart">
            <h1 className="text-2xl sm:text-3xl font-bold mt-8 mx-4 mb-4 text-gray-800">7 Hari Terakhir</h1>
            {loading && data.length > 0 ?
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