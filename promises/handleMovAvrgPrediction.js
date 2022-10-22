export default function handleMovAvrgPrediction(data){
    return new Promise((resolve, reject) => {
        const periode = data.length;
        let code_x_initial_value = Math.floor(periode / 2) * -1;
        const sigma_price = data.reduce((acc, val) => acc + val, 0);
        const code_x = Array.from({length: periode})
            .map(() => {
                code_x_initial_value += 1;
                return code_x_initial_value - 1
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

        resolve({
            ch: 0,
            chp: 0,
            data: result,
            buy_recommendation: -1
        })
    })
}