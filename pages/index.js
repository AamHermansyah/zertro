import GoldCurrentPrice from "../components/GoldCurrentPrice";
import GoldPriceHistory from "../components/GoldPriceHistory";
import Hero from "../components/Hero";
import Navigation from "../layouts/Navigation";

export default function Home(){
  return (
    <Navigation>
      <Hero />
      <GoldCurrentPrice />
      <GoldPriceHistory />
    </Navigation>
  )
}