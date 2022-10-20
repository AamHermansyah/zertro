import {countCAGR} from "../utils/utilsForNumber";

export default function handleCAGRPrediction(data){
    return new Promise((resolve, reject) => {
        const periode = data.length;
        const open_price = +data[0];
        const close_price = +data[periode - 1];
        const average = countCAGR(open_price, close_price, periode);
        // const result = [open_price];
        // for(let index = 0; index < periode; index++){
        //     const change = result[index] * average;
        //     result.push(result[index] + change)
        // }
        const result = [2];
        for(let index = 0; index < periode; index++){
            const change = result[index] * average;
            result.push(result[index] + change)
        }
        resolve(result);
    })
}