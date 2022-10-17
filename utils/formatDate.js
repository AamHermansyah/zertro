export default function formatDate(date, config){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;
    if((config?.year && config?.month && config?.day) || !config){
        return `${yyyy}-${mm}-${dd}`;
    }
    
    if(config?.year) date = yyyy;
    if(config?.month) date = config?.year ? `${yyyy}-${mm}` : mm;
    if(config?.day) date = config?.month ? `${mm}-${dd}` : dd;
    
    return date
 }