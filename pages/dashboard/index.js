import GoldCurrentPrice from "../../components/GoldCurrentPrice";
import Navigation from "../../layouts/Navigation";
import { useEffect, useState } from "react";
import formatDate from "../../utils/formatDate";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import {SECRET_KEY, URL} from '../../utils/config';
import OneWeekChart from "../../components/OneWeekChart";

const ONE_YEAR = 365;

export default function Home(){
  const [isLoading, setIsLoading] = useState(true);
  // const gold_price = useSelector(state => state.gold_price);

  useEffect(() => {
    let now = new Date();
    let oneYear = new Date(now);
    oneYear.setDate(now.getDate() - ONE_YEAR);
    now = formatDate(now);
    oneYear = formatDate(oneYear);

    // const config = `${SECRET_KEY}&start_date=${oneYear}&end_date=${now}&base=USD&currencies=EUR,XAU,XAG`;
    // axios.get(`${URL}/timeframe?${config}`)
    // .then(res => {
    //   console.log(res.data);
    // })
    // .catch(err => {
    //   alert(err);
    // })
    // .finally(() => {
    //   setIsLoading(false);
    // })

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <Navigation active="/dashboard">
      <GoldCurrentPrice />
      <OneWeekChart isLoading={isLoading} />
    </Navigation>
  )
}