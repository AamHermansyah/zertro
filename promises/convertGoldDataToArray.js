import { CONFIG_DATE } from "../utils/config";

export default function convertGoldDataToArray(data) {
    return new Promise((resolve, reject) => {
        const res = Object.entries(data).reverse()
        let oneWeek = {dates: [], prices: []};
        let twoWeek = {dates: [], prices: []};
        let oneMonth = {dates: [], prices: []};
        let threeMonth = {dates: [], prices: []};
        let sixMonth = {dates: [], prices: []};
        let oneYear = {dates: [], prices: []};

        for(let index in res){
            const [date, prices] = res[index];
            const price = Number(1 / prices.XAU).toFixed(2);
            if( index < CONFIG_DATE.ONE_WEEK ) {
                oneWeek.dates.unshift(date);
                oneWeek.prices.unshift(price);
            }
            if( index < CONFIG_DATE.TWO_WEEK ) {
                twoWeek.dates.unshift(date);
                twoWeek.prices.unshift(price);
            }
            if( index < CONFIG_DATE.ONE_MONTH ) {
                oneMonth.dates.unshift(date);
                oneMonth.prices.unshift(price);
            };
            if( index < CONFIG_DATE.THREE_MONTH ) {
                threeMonth.dates.unshift(date);
                threeMonth.prices.unshift(price);
            }
            if( index < CONFIG_DATE.SIX_MONTH ) {
                sixMonth.dates.unshift(date);
                sixMonth.prices.unshift(price);
            }

            oneYear.dates.unshift(date);
            oneYear.prices.unshift(price);
        }
        
        resolve({
            oneWeek: {...oneWeek, prices: [oneWeek.prices]},
            twoWeek: {...twoWeek, prices: [twoWeek.prices]},
            oneMonth: {...oneMonth, prices: [oneMonth.prices]},
            threeMonth: {...threeMonth, prices: [threeMonth.prices]},
            sixMonth: {...sixMonth, prices: [sixMonth.prices]},
            oneYear: {...oneYear, prices: [oneYear.prices]}
        })
    })
}