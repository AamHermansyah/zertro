import { useEffect, useState } from 'react';
import { Chart } from 'react-chartjs-2';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import gold_price_monthly_json from './json/gold_price_monthly.json';
import gold_price_annual_json from './json/gold_price_annual.json';
import { getPriceHistoryPromise } from './promises/goldPriceHistoryPromise';
import TablePercentagePerYears from './TablePercentagePerYears';

export default  function GoldPriceHistory(){
    const [dataMonthlyLabels, setDataMonthlyLabels] = useState(null);
    const [dataMonthlyPrices, setDataMonthlyPrices] = useState(null);
    const [dataAnnualLabels, setDataAnnualLabels] = useState(null);
    const [dataAnnualPrices, setDataAnnualPrices] = useState(null);
    const [dataTable, setDataTable] = useState(null);

    const [isLoading, setIsLoading] = useState(true);
    const {width} = useWindowDimensions();

    useEffect(() => {
        const configAnnualFetch = {
            takeDataForTable: true
        }

        Promise.all([getPriceHistoryPromise(gold_price_monthly_json), getPriceHistoryPromise(gold_price_annual_json, configAnnualFetch)])
            .then(([monthly, annual]) => {
                setDataMonthlyLabels(monthly.date);
                setDataMonthlyPrices(monthly.price);
                setDataAnnualLabels(annual.date);
                setDataAnnualPrices(annual.price);
                setDataTable(annual.dataForTable);
            });

        setIsLoading(false);
    }, []);

    return (
        <section className="mt-12 bg-white p-4 pb-12 rounded-md" id="gold_price_history">
            {!isLoading &&
                <div className="flex flex-col gap-12 items-center">
                    <Chart
                    type='line' 
                    data={{
                        labels: dataMonthlyLabels,
                        datasets: [{
                            label: 'Harga emas',
                            data: dataMonthlyPrices,
                            borderColor: 'rgb(55, 48, 163)',
                            backgroundColor: 'transparent',
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
                            text: 'Harga emas perbulan dari tahun 1950 - 2018'
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
                        }
                    }}
                    />

                    <Chart
                    type='line' 
                    data={{
                        labels: dataAnnualLabels,
                        datasets: [{
                            label: 'Harga emas',
                            data: dataAnnualPrices,
                            borderColor: '#EB1D36',
                            backgroundColor: 'transparent',
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
                            text: 'Harga emas pertahun (1950 - 2017)'
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
                        }
                    }}
                    />

                    <TablePercentagePerYears data={dataTable} />
                </div>
            }
        </section>
    )
}