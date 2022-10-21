import { Chart } from "react-chartjs-2";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const COLORS = ['rgb(55, 48, 163)', '#EB1D36', '#EAE509'];
const LABELS = ['XAU', 'Growth', 'growth'];

export default function ChartGold({data, label, title, color, type, backgroundColor}){
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
                },
                beginAtZero: false
            },
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
                        backgroundColor: backgroundColor ? backgroundColor[index] : 'transparent',
                        tension: 0.5,
                        type: index === 0 ? 'line' : 'bar'
                    }))
                }}
                options={config}
            />
        </section>
    )
}