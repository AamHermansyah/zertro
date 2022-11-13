import { Chart } from "react-chartjs-2";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const COLORS = ['rgb(55, 48, 163)', 'yellow' ,'green'];

export default function ChartGold({data, label, title, type, backgroundColor}){
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
                        label: !label ? 'XAU' : Array.isArray(label) ? label[index] : label,
                        data: price,
                        borderColor: index === 2 ? backgroundColor[index] : COLORS[index],
                        backgroundColor: 'transparent',
                        tension: 0.5,
                        type: 'line'
                    }))
                }}
                options={config}
            />
        </section>
    )
}