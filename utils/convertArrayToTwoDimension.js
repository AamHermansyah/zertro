export function convertArrayToTwoDimension(prices, length){
    let tempIndex = 0;
    let result = [];

    prices.forEach((price, index) => {
        if(index % (length - 1) === 0){
            result.push(prices.slice(tempIndex * length, length * (tempIndex + 1)));
            tempIndex++;
        }
    })

    result = result
        .filter(res => res.length > 0);

    return result
}