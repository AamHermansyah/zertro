import { convertArrayToTwoDimension } from "../utils/convertArrayToTwoDimension";
import { smoothingPrice } from "../utils/smoothingPrice";
import {countCAGR} from "../utils/utilsForNumber";

function CAGRPrediction(data){
    const periode = data.length;
    const open_price = +data[0];
    const close_price = +data[periode - 1];
    const chp_growth = countCAGR(open_price, close_price, periode);
    const buy_recommendation = chp_growth >= 0 ? 1 : -1;
    let change;

    const result = [open_price];
    for(let index = 0; index < periode; index++){
        if(index > 0){
            change = result[index - 1] * chp_growth / 100;
            const result_growth = +Number(result[index - 1] + change).toFixed(2);
            result.push(result_growth);
        }
    }

    return {result, buy_recommendation, change, chp_growth}
}

export default function handleCAGRPrediction(data){
    return new Promise((resolve, reject) => {
        const KONSTANTA = 0.3;
        const { result, buy_recommendation, change, chp_growth } = CAGRPrediction(data);

        let CAGRPredictionFiveDaysPeriode = convertArrayToTwoDimension(data, 5);
        CAGRPredictionFiveDaysPeriode = CAGRPredictionFiveDaysPeriode
            .map(res => CAGRPrediction(res).result).flat();

        const CAGRSmoothinPrediction = smoothingPrice(CAGRPredictionFiveDaysPeriode, KONSTANTA);

        resolve({
             ch: +Number(change).toFixed(2), 
             chp: chp_growth, 
             data: [result, CAGRSmoothinPrediction],
             buy_recommendation });
    })
}