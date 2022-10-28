export default function getDataHistory(json, config) {
    return new Promise((resolve, reject) => {
            const prices = [];
            const dates = [];
            const filterYears = [];
            if(config?.from && config?.to){
                if(config?.type === 'slice'){
                    const startIndex = json.findIndex(data => data.Date === config.from);
                    let endIndex = json.findIndex(data => data.Date === config.to);
                    endIndex = endIndex === -1 ? json.length - 1 : endIndex;
                    json = json.slice(startIndex, endIndex + 1);
                } else {
                    json = json.filter((res, index) => {
                        res = +res.Date.split('-')[0];
                        return index >= +config.from && res <= +config.to
                    })
                }
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
                    prices: [prices], 
                    dates, 
                    filterYears: config?.filterYears ? filterYears : null
                }
            });
        }
    )
}