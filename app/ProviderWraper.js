import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addGoldDataPrice, setLoadingFetchDataGoldPrice } from "./features/goldPrice/goldPriceSlice";
import formatDate from "../utils/formatDate";
import { SECRET_KEY, URL } from "../utils/config";
import convertGoldDataToArray from "../promises/convertGoldDataToArray";
import gold_price_one_year from "../constants/json/gold_price_one_year.json";
import { useEffect } from "react";

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
        if(router.pathname !== '/' && isLoading){
            convertGoldDataToArray(gold_price_one_year.rates)
            .then(res => {
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