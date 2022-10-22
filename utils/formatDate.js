import { DAYS } from "./config";

export default function formatDate(date, config){
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    let yyyy = date.getFullYear();
    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;
    if((config?.year && config?.month && config?.day) || config?.getDay || !config){
        return config?.getDay ? `${DAYS[date.getDay()]}, ${dd}-${mm}-${yyyy}` : `${yyyy}-${mm}-${dd}`;
    }
    
    if(config?.year) date = yyyy;
    if(config?.month) date = config?.year ? `${yyyy}-${mm}` : mm;
    if(config?.day) date = config?.month ? `${mm}-${dd}` : dd;
    if(config?.getDay){
        date = `${DAYS[date.getDay()]}, ${date}`;
    }
    
    return date
 }