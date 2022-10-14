export const getPriceHistoryPromise = (data, config) => new Promise(
    (resolve, reject) => {
        const date = [];
        const price = [];
        const dataForTable = [];
        data.forEach((res, index) => {
            if(config?.takeDataForTable && index !== 0){
                dataForTable.push({
                    year: res.Date.split('-')[0],
                    percentage: Number((+res.Price - (+data[index - 1].Price)) / (+data[index - 1].Price) * 100).toFixed(2),
                    open_price: data[index - 1].Price,
                    close_price: res.Price
                })
            }
            price.push(res.Price);
            date.push(res.Date);
        });

        resolve({
            date, 
            price,
            dataForTable: dataForTable.length > 0 ? dataForTable : null
        });
    }
)