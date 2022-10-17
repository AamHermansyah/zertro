import GoldCurrentPrice from "../../components/GoldCurrentPrice";
import Navigation from "../../layouts/Navigation";
import ChartGold from "../../components/ChartGold";
import ChartSkeleton from "../../layouts/ChartSKeleton";
import { useEffect, useState } from "react";
import formatDate from "../../utils/formatDate";
import axios from "axios";

const ONE_WEEK = 7;

export default function Home(){
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let now = new Date();
    let oneWeek = new Date(now);
    oneWeek.setDate(now.getDate() - ONE_WEEK);
    now = formatDate(now);
    oneWeek = formatDate(oneWeek);

    const config = `api_key=998308cc9dbce1efbdd6bdf4eb2fe1ff&start_date=${oneWeek}&end_date=${now}&base=USD&currencies=XAU`;
    // axios.get(`https://api.metalpriceapi.com/v1/timeframe?${config}`)
    // .then(res => {
    //   setData(res.data);
    //   console.log(res.data);
    // })
    // .catch(err => {
    //   alert(err);
    // })
    // .finally(() => {
    //   setIsLoading(false);
    // })

    const res = {
      "2022-10-10": {XAU: 0.00059902},
      "2022-10-11": {XAU: 0.00060055},
      "2022-10-12": {XAU: 0.00059719},
      "2022-10-13": {XAU: 0.00060086},
      "2022-10-14": {XAU: 0.00060839},
      "2022-10-15": {XAU: 0.00060831},
      "2022-10-16": {XAU: 0.00060731},
      }

    const dates = [];
    const prices = [];

    for(let i in res){
      dates.push(i.split('-')[2]);
      prices.push(1/res[i].XAU)
    }
    setData({dates, prices: [prices, [1674, 1656, 1632, 1654, 1611, 1666, 1643]]});
    setIsLoading(false);
  }, []);

  return (
    <Navigation active="/dashboard">
      <GoldCurrentPrice />
      {isLoading ?
        <ChartSkeleton /> :
        <ChartGold
        title="Harga 7 Hari Terakhir (XAU)"
        label="Harga Emas"
        data={data}
        />
      }
    </Navigation>
  )
}