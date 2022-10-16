export default function getDataHistory(json, config) {
    return new Promise((resolve, reject) => {
            const prices = [];
            const dates = [];
            const filterYears = [];
            if(config?.from && config?.to){
                json = json.filter((res, index) => {
                    res = +res.Date.split('-')[0];
                    return index >= +config.from && res <= +config.to
                })
            }

            if(config?.filterYears){
                json.forEach(res => {
                    res = +res.Date.split('-')[0];
                    !filterYears.includes(res) && filterYears.push(res);
                })
            }

            json.forEach((res) => {
                dates.push(res.Date);
                prices.push(res.Price);
            });
            if(!prices || !dates) reject('Data tidak ada atau kosong');
            resolve({
                data: { 
                    prices, 
                    dates, 
                    filterYears: config?.filterYears ? filterYears : null
                }
            });
        }
    )
}