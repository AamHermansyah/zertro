export function getMaxLowNumber(arr){
    return {
        max: Math.max(...arr),
        min: Math.min(...arr)
    }
}

export function countLossAndProfit(arr){
    const open_price = arr[0];
    const close_price = arr[arr.length - 1]
    const ch = +Number(close_price - open_price).toFixed(2);
    let chp = +Number(ch / open_price * 100).toFixed(2);
    
    return {
      ch, chp
    }
}

export function countCAGR(open_price, close_price, periode){
    return +Number((Math.pow((close_price / open_price), 1 / periode) - 1) * 100).toFixed(2);
}