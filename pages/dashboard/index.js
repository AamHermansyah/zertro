import { useEffect, useState } from "react";
import formatDate from "../../utils/formatDate";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import OneWeekChart from "../../components/OneWeekChart";
import GoldCurrentPrice from "../../components/GoldCurrentPrice";
import Navigation from "../../layouts/Navigation";
import {CONFIG_DATE, SECRET_KEY, URL} from "../../utils/config";
import gold_price_one_year from '../../constants/json/gold_price_one_year.json';
import { addGoldDataPrice } from "../../app/features/goldPrice/goldPriceSlice";
import convertGoldDataToArray from "../../promises/convertGoldDataToArray";
import OneMonthChart from "../../components/OneMonthChart";
import ThreeMonthChart from "../../components/ThreeMonthChart";
import SixMonthChart from "../../components/SixMonthChart";
import OneYearChart from "../../components/OneYearChart";
import TwoWeekChart from "../../components/TwoWeekChart";

export default function Home(){
  const [isLoading, setIsLoading] = useState(true);
  const gold_price = useSelector(state => state.gold_price);
  const dispatch = useDispatch();
  // console.log(gold_price);

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
  //     setIsLoading(false);
  //   })
  // }, []);

  useEffect(() => {
    convertGoldDataToArray(gold_price_one_year.rates)
    .then(res => {
      dispatch(addGoldDataPrice(res));
    })
    .catch(err => {
      alert(err)
    })
    .finally(() => {
      setIsLoading(false);
    })
  }, []);

  return (
    <Navigation active="/dashboard">
      <GoldCurrentPrice />
      <OneWeekChart loading={isLoading} />
      <TwoWeekChart loading={isLoading} />
      <OneMonthChart loading={isLoading} />
      <ThreeMonthChart loading={isLoading} />
      <SixMonthChart loading={isLoading} />
      <OneYearChart loading={isLoading} />
    </Navigation>
  )
}