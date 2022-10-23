import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addGoldDataPrice, addGoldPriceCurrent, setLoadingFetchDataGoldPrice } from "./features/goldPrice/goldPriceSlice";
import formatDate from "../utils/formatDate";
import { CHP_IDEAL_FOR_BUY, CONFIG_DATE, SECRET_KEY, URL } from "../utils/config";
import convertGoldDataToArray from "../promises/convertGoldDataToArray";
import gold_price_one_year from "../constants/json/gold_price_one_year.json";
import { useEffect } from "react";
import { countLossAndProfit, getMaxLowNumber } from "../utils/utilsForNumber";
// import gold_price_annual from "../constants/json/gold_price_annual.json";
import getDataHistory from "../promises/getDataHistory";

export default function ProviderWraper({children}){
    const router = useRouter();
    const isLoading = useSelector(state => state.gold_price.loading);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if(router.pathname !== '/' && isLoading){
    //         const res = {
    //             "success": true,
    //             "base": "USD",
    //             "timestamp": 1625609377,
    //             "rates": {
    //                 "XAU": 0.00053853
    //             }
    //         }
    //         const today = formatDate(new Date());
    //         const data = {...gold_price_one_year.rates, [today]: { XAU: res.rates.XAU }};
    //         // handle current price
    //         convertGoldDataToArray(data)
    //         .then(res => {
    //             const oneWeek = res.oneWeek;
    //             const lastIndex = oneWeek.dates.length - 1;
    //             const price_today = oneWeek.prices[0][lastIndex];
    //             const price_yesterday = oneWeek.prices[0][lastIndex - 1];
    //             const price_two_day_ago = oneWeek.prices[0][lastIndex - 2];
    //             const ch_chp_today = countLossAndProfit([price_yesterday, price_today]);
    //             const ch_chp_yesterday = countLossAndProfit([price_two_day_ago, price_yesterday]);
    //             dispatch(addGoldPriceCurrent({
    //                 current: {
    //                     price: price_today,
    //                     ch: ch_chp_today.ch,
    //                     chp: ch_chp_today.chp,
    //                     indicator: ch_chp_today.ch >= 0 ? 1 : -1
    //                 },
    //                 yesterday: {
    //                     price: price_yesterday,
    //                     ch: ch_chp_yesterday.ch,
    //                     chp: ch_chp_yesterday.chp,
    //                     indicator: ch_chp_yesterday.ch >= 0 ? 1 : -1
    //                 }
    //             }));

    //             // handle data sixYear from json and API
    //             let oneYear = res.oneYear;
    //             const LONG_RANGE_YEAR_INDEX = 3;
    //             const lastYear = +oneYear.dates[0].split('-')[0];
    //             const toYear = lastYear - 1;
    //             const fromYear = toYear - LONG_RANGE_YEAR_INDEX;
    //             getDataHistory(gold_price_annual, {
    //                 from: fromYear + '-12',
    //                 to: toYear + '-12',
    //                 type: 'slice'
    //             })
    //             .then(({data}) => {
    //                 const today = 'sekarang';
    //                 let last_year_index = 0;
    //                 // filter last year from one year API
    //                 let last_year_date = [...oneYear.dates]
    //                     .reverse().find((date, index) => {
    //                         if(date.includes(lastYear)){
    //                             last_year_index = index;
    //                         }
    //                         return date.includes(lastYear);
    //                     })
    //                     .split('-');
    //                 last_year_date = last_year_date[0] + '-' + last_year_date[1];
    //                 let last_year_price = [...oneYear.prices[0]].reverse().find((prices, index) => index === last_year_index);
    //                 // end filter

    //                 data.dates = [...data.dates, last_year_date, today];
    //                 data.prices = [...data.prices[0], last_year_price, price_today];
    //                 // get high and low price
    //                 const {min, max} = getMaxLowNumber(data.prices);
    //                 // get ch and chp
    //                 const periode = data.prices.length;
    //                 const open_price = +data.prices[0];
    //                 const close_price = +data.prices[periode - 1];
    //                 const {ch, chp} = countLossAndProfit([open_price, close_price]);
    //                 dispatch(addGoldDataPrice({
    //                     sixYear: {
    //                         dates: data.dates,
    //                         prices: [data.prices],
    //                         high_price: max,
    //                         low_price: min,
    //                         ch,
    //                         chp,
    //                         buy_recommendation: chp <= CHP_IDEAL_FOR_BUY || chp > 0 ? 1 : -1
    //                     }
    //                 }))
    //             })
    //             .catch(err => {
    //                 alert(err);
    //             })

    //             // handle goldPrice
    //             dispatch(addGoldDataPrice(res));
    //         })
    //         .catch(err => {
    //             alert(err)
    //         })
    //         .finally(() => {
    //             dispatch(setLoadingFetchDataGoldPrice());
    //         })
    //     }
    // }, [router.pathname, isLoading]);

    useEffect(() => {
        if(router.pathname !== '/' && isLoading){
            let today = new Date();
            let oneYear = new Date(today);
            let yesterday = new Date(today);
            oneYear.setDate(today.getDate() - CONFIG_DATE.ONE_YEAR);
            yesterday.setDate(yesterday.getDate() - 1);
            yesterday = formatDate(yesterday);
            oneYear = formatDate(oneYear);

            const url_oneYearDataFetch = `${URL}/timeframe?${SECRET_KEY}&start_date=${oneYear}&end_date=${yesterday}&base=USD&currencies=XAU`;
            const url_live_price = `${URL}/latest?${SECRET_KEY}&base=USD&currencies=XAU`
            Promise.all([axios.get(url_oneYearDataFetch), axios.get(url_live_price)])
            .then(([oneYearData, livePrice]) => {
                if(oneYearData?.data?.success){
                    const data = {...oneYearData.data.rates, [formatDate(today)]: { XAU: livePrice.data.rates.XAU }};
                    // handle current price
                    convertGoldDataToArray(data)
                    .then(res => {
                        const oneWeek = res.oneWeek;
                        const lastIndex = oneWeek.dates.length - 1;
                        const price_today = oneWeek.prices[0][lastIndex];
                        const price_yesterday = oneWeek.prices[0][lastIndex - 1];
                        const price_two_day_ago = oneWeek.prices[0][lastIndex - 2];
                        const ch_chp_today = countLossAndProfit([price_yesterday, price_today]);
                        const ch_chp_yesterday = countLossAndProfit([price_two_day_ago, price_yesterday]);
                        dispatch(addGoldPriceCurrent({
                            current: {
                                price: price_today,
                                ch: ch_chp_today.ch,
                                chp: ch_chp_today.chp,
                                indicator: ch_chp_today.ch >= 0 ? 1 : -1
                            },
                            yesterday: {
                                price: price_yesterday,
                                ch: ch_chp_yesterday.ch,
                                chp: ch_chp_yesterday.chp,
                                indicator: ch_chp_yesterday.ch >= 0 ? 1 : -1
                            }
                        }));

                        // handle data sixYear from json and API
                        let oneYear = res.oneYear;
                        const LONG_RANGE_YEAR_INDEX = 3;
                        const lastYear = +oneYear.dates[0].split('-')[0];
                        const toYear = lastYear - 1;
                        const fromYear = toYear - LONG_RANGE_YEAR_INDEX;
                        getDataHistory(gold_price_annual, {
                            from: fromYear + '-12',
                            to: toYear + '-12',
                            type: 'slice'
                        })
                        .then(({data}) => {
                            const today = 'sekarang';
                            let last_year_index = 0;
                            // filter last year from one year API
                            let last_year_date = [...oneYear.dates]
                                .reverse().find((date, index) => {
                                    if(date.includes(lastYear)){
                                        last_year_index = index;
                                    }
                                    return date.includes(lastYear);
                                })
                                .split('-');
                            last_year_date = last_year_date[0] + '-' + last_year_date[1];
                            let last_year_price = [...oneYear.prices[0]].reverse().find((prices, index) => index === last_year_index);
                            // end filter

                            data.dates = [...data.dates, last_year_date, today];
                            data.prices = [...data.prices[0], last_year_price, price_today];
                            // get high and low price
                            const {min, max} = getMaxLowNumber(data.prices);
                            // get ch and chp
                            const periode = data.prices.length;
                            const open_price = +data.prices[0];
                            const close_price = +data.prices[periode - 1];
                            const {ch, chp} = countLossAndProfit([open_price, close_price]);
                            dispatch(addGoldDataPrice({
                                sixYear: {
                                    dates: data.dates,
                                    prices: [data.prices],
                                    high_price: max,
                                    low_price: min,
                                    ch,
                                    chp,
                                    buy_recommendation: chp <= CHP_IDEAL_FOR_BUY || chp > 0 ? 1 : -1
                                }
                            }))
                        })
                        .catch(err => {
                            alert(err);
                        })

                        // handle goldPrice
                        dispatch(addGoldDataPrice(res));
                    })
                    .catch(err => {
                        alert(err)
                    })
                } else {
                    alert('Terjadi error pada saat fetching data, silahkan coba lagi beberapa saat.');
                }
            })
            .catch(err => {
                alert(err);
            })
            .finally(() => {
                dispatch(setLoadingFetchDataGoldPrice());
            })
        }
    }, [router.pathname, isLoading]);

    return children
}