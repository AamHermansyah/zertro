export function smoothingPrice(prices, konstanta){
    let pricesSmothing = [];

    prices.forEach((price, index) => {
        if(index === 0){
            pricesSmothing.push(price);
            return;
        }

        const F = pricesSmothing[index - 1] + konstanta * ([prices[index - 1]] - pricesSmothing[index - 1]);
        pricesSmothing.push(+Number(F).toFixed(2));
    })

    return pricesSmothing
}