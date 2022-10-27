import { countLossAndProfit } from "../utils/utilsForNumber";

export default function handleCHTableHistory(data){
    return new Promise((resolve, reject) => {
        data = data
        .map((res, index, arr) => {
            const close_price = res.price;
            const open_price = index === 0 ? res.price : arr[index - 1].price;
            const {ch, chp} = countLossAndProfit([open_price, close_price]);
            return {
                date: res.date,
                close_price,
                open_price,
                ch,
                chp,
            }
        });

        resolve(data);
    })
}