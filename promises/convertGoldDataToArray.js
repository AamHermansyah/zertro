import { CHP_IDEAL_FOR_BUY, CONFIG_DATE } from "../utils/config";
import { countLossAndProfit, getMaxLowNumber } from "../utils/utilsForNumber";

const handleGetGoldDataDetail = res => {
    const data = {...res};

    const {min, max} = getMaxLowNumber(data.prices);
    const {ch, chp} = countLossAndProfit(data.prices);

    return {
        ...data,
        high_price: max,
        low_price: min,
        ch,
        chp,
        buy_recommendation: chp <= CHP_IDEAL_FOR_BUY || chp > 0 ? 1 : -1
    }
}

export default function convertGoldDataToArray(data) {
    return new Promise((resolve, reject) => {
        const res = Object.entries(data).reverse()
        let oneWeek = { dates: [], prices: [], high_price: 0, low_price: 0, ch: 0, chp: 0 };
        let twoWeek = { dates: [], prices: [], high_price: 0, low_price: 0, ch: 0, chp: 0 };
        let oneMonth = { dates: [], prices: [], high_price: 0, low_price: 0, ch: 0, chp: 0 };
        let threeMonth = { dates: [], prices: [], high_price: 0, low_price: 0, ch: 0, chp: 0 };
        let sixMonth = { dates: [], prices: [], high_price: 0, low_price: 0, ch: 0, chp: 0 };
        let oneYear = { dates: [], prices: [], high_price: 0, low_price: 0, ch: 0, chp: 0 };

        for(let index in res){
            const [date, prices] = res[index];
            const price = Number(1 / prices.XAU).toFixed(2);
            if( index < CONFIG_DATE.ONE_WEEK ) {
                oneWeek.dates.unshift(date);
                oneWeek.prices.unshift(+price);
            }
            if( index < CONFIG_DATE.TWO_WEEK ) {
                twoWeek.dates.unshift(date);
                twoWeek.prices.unshift(+price);
            }
            if( index < CONFIG_DATE.ONE_MONTH ) {
                oneMonth.dates.unshift(date);
                oneMonth.prices.unshift(+price);
            };
            if( index < CONFIG_DATE.THREE_MONTH ) {
                threeMonth.dates.unshift(date);
                threeMonth.prices.unshift(+price);
            }
            if( index < CONFIG_DATE.SIX_MONTH ) {
                sixMonth.dates.unshift(date);
                sixMonth.prices.unshift(+price);
            }

            oneYear.dates.unshift(date);
            oneYear.prices.unshift(+price);
        }

        oneWeek = handleGetGoldDataDetail(oneWeek);
        twoWeek = handleGetGoldDataDetail(twoWeek);
        oneMonth = handleGetGoldDataDetail(oneMonth);
        threeMonth = handleGetGoldDataDetail(threeMonth);
        sixMonth = handleGetGoldDataDetail(sixMonth);
        oneYear = handleGetGoldDataDetail(oneYear);
        
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