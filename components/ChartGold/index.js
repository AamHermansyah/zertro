import { Chart } from "react-chartjs-2";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function ChartGold({data, label, title, color}){
    const { width } = useWindowDimensions();
    return (
        <section className="bg-white sm:p-4 pb-12 rounded-md" id="gold_price_history">
            <Chart
                type='line' 
                data={{
                    labels: data.dates,
                    datasets: [{
                        label,
                        data: data.prices,
                        borderColor: color,
                        backgroundColor: 'transparent',
                        tension: 0.5
                    }]
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
                            radius: 0
                        }
                    }
                }}
            />
        </section>
    )
}