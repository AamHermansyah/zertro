import { Chart } from "react-chartjs-2";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const COLORS = ['rgb(55, 48, 163)', '#EB1D36', '#EAE509'];
const LABELS = ['XAU', 'EUR', 'XAG'];

export default function ChartGold({data, label, title, color, type, background}){
    const { width } = useWindowDimensions();
    const config = {
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
            yAxis: {
                display: true,
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
    }
    
    return (
        <section className="bg-white sm:p-4 pb-12 rounded-md" id="gold_price_history">
            <Chart
                type={type ? type : 'line'} 
                data={{
                    labels: data.dates,
                    datasets: data.prices.map((price, index) => ({
                        label: label ? label : LABELS[index],
                        data: price,
                        borderColor: color ? color : COLORS[index],
                        backgroundColor: type && type !== 'line' ? color[index] : 'transparent',
                        tension: 0.5,
                    }))
                }}
                options={config}
            />
        </section>
    )
}