import OneWeekChart from "../../components/OneWeekChart";
import GoldCurrentPrice from "../../components/GoldCurrentPrice";
import Navigation from "../../layouts/Navigation";
import OneMonthChart from "../../components/OneMonthChart";
import ThreeMonthChart from "../../components/ThreeMonthChart";
import SixMonthChart from "../../components/SixMonthChart";
import OneYearChart from "../../components/OneYearChart";
import TwoWeekChart from "../../components/TwoWeekChart";
import { useSelector } from "react-redux";

export default function Home(){
  const isLoading = useSelector(state => state.gold_price.loading);

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