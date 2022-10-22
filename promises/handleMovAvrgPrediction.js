export default function handleMovAvrgPrediction(data){
    return new Promise((resolve, reject) => {
        const periode = data.length;
        let code_x_initial_value = Math.floor(periode / 2) * -1;
        const sigma_price = data.reduce((acc, val) => acc + val, 0);
        const code_x = Array.from({length: periode})
            .map(() => {
                const result = code_x_initial_value;
                const isMiddle = periode % 2 === 0 && code_x_initial_value === -1;
                code_x_initial_value = isMiddle ? code_x_initial_value + 2 : code_x_initial_value + 1;
                return result
            });
        const sigma_price_and_code_x = code_x.reduce((acc, val, index) => acc + (val * data[index]), 0);
        const sigma_code_x_square = code_x.map(num => Math.pow(num, 2)).reduce((acc, val) => acc + val, 0);

        // result = variable A + variable Bx
        const result = [];
        const variable_A = sigma_price / periode;
        const variable_B = sigma_price_and_code_x / sigma_code_x_square;
        code_x.forEach(num => {
            result.push(+Number(variable_A + variable_B * num).toFixed(2))
        })

        // count change and change persentage
        let ch = [];
        let chp = [];
        const indexLength = result.length - 1;
        for(let i = indexLength; i >= 0; i--){
            if(i === 0){
                ch = +Number(ch.reduce((acc, val) => acc + val, 0) / indexLength).toFixed(2);
                chp = +Number(chp.reduce((acc, val) => acc + val, 0) / indexLength).toFixed(2);
            } else {
                const change = result[i] - result[i - 1];
                chp.push(change / result[i] * 100)
                ch.push(change);
            }
        }

        resolve({
            ch: ch,
            chp: chp,
            data: result,
            buy_recommendation: chp >= 0 ? 1 : -1
        })
    })
}