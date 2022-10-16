import GoldCurrentPrice from "../../components/GoldCurrentPrice";
import Navigation from "../../layouts/Navigation";
import ChartGold from "../../components/ChartGold";

export default function Home(){
  return (
    <Navigation active="/dashboard">
      <GoldCurrentPrice />
      {/* <ChartGold /> */}
    </Navigation>
  )
}