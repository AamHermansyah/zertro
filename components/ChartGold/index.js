import { Chart } from "react-chartjs-2";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const colors = ['#FB2576', 'rgb(55, 48, 163)']

export default function ChartGold({data, label, title, color, type}){
    const { width } = useWindowDimensions();
    console.log(data)
    return (
        <section className="bg-white sm:p-4 pb-12 rounded-md" id="gold_price_history">
            <Chart
                type={type ? type : 'line'} 
                data={{
                    labels: data.dates,
                    datasets: data.prices.map((price, index) => ({
                        label,
                        data: price,
                        borderColor: color ? color : colors[index],
                        backgroundColor: type && type !== 'line' ? color[index] : 'transparent',
                        tension: 0.5
                    }))
                }}
                options={{
                    responsive: true,
                    plugins: {
                    legend: {
                        position: 'top',
                        display: true,
                    },
                    title: {
                        display: true,
                        text: title
                        }
                    },
                    aspectRatio: width > 768 ? 2 : 1,
                    scales: {
                        y: {
                            ticks: {
                                callback: function(value, index, ticks) {
                                    return '$' + value;
                                }
                            }
                        }
                    },
                    elements: {
                        point:{
                            radius: data.dates.length <= 50 ? 3 : 0
                        }
                    }
                }}
            />
        </section>
    )
}