import {countCAGR} from "../utils/utilsForNumber";

export default function handleCAGRPrediction(data){
    return new Promise((resolve, reject) => {
        const periode = data.length;
        const open_price = +data[0];
        const close_price = +data[periode - 1];
        const chp_growth = countCAGR(open_price, close_price, periode);
        const buy_recommendation = chp_growth >= 0 ? 1 : -1;
        let change;

        const result = [open_price];
        for(let index = 0; index < periode; index++){
            change = result[index] * chp_growth / 100;
            const result_growth = +Number(result[index] + change).toFixed(2);
            result.push(result_growth);
        }

        resolve({ ch: +Number(change).toFixed(2), chp: chp_growth, data: result, buy_recommendation });
    })
}