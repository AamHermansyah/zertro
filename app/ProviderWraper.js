import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addGoldDataPrice, addGoldPriceCurrent, setLoadingFetchDataGoldPrice } from "./features/goldPrice/goldPriceSlice";
import formatDate from "../utils/formatDate";
import { SECRET_KEY, URL } from "../utils/config";
import convertGoldDataToArray from "../promises/convertGoldDataToArray";
import gold_price_one_year from "../constants/json/gold_price_one_year.json";
import { useEffect } from "react";
import { countLossAndProfit } from "../utils/utilsForNumber";

export default function ProviderWraper({children}){
    const router = useRouter();
    const isLoading = useSelector(state => state.gold_price.loading);
    const dispatch = useDispatch();

    // useEffect(() => {
    //   let now = new Date();
    //   let oneYear = new Date(now);
    //   let yesterday = new Date(now);
    //   oneYear.setDate(now.getDate() - 5);
    //   yesterday.setDate(yesterday.getDate() - 1);
    //   yesterday = formatDate(yesterday);
    //   oneYear = formatDate(oneYear);

    //   const config = `${SECRET_KEY}&start_date=${oneYear}&end_date=${yesterday}&base=USD&currencies=XAU`;
    //   axios.get(`${URL}/timeframe?${config}`)
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(err => {
    //     alert(err);
    //   })
    //   .finally(() => {
    //     dispatch(setLoadingFetchDataGoldPrice());
    //   })
    // }, []);

    useEffect(() => {
        const res = {
            "success": true,
            "base": "USD",
            "timestamp": 1625609377,
            "rates": {
                "XAU": 0.00053853
            }
        }
        const today = formatDate(new Date());
        const data = {...gold_price_one_year.rates, [today]: { XAU: res.rates.XAU }};

        if(router.pathname !== '/' && isLoading){
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
                dispatch(addGoldDataPrice(res));
            })
            .catch(err => {
                alert(err)
            })
            .finally(() => {
                dispatch(setLoadingFetchDataGoldPrice());
            })
        }
    }, [router.pathname, isLoading]);

    return children
}