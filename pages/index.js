import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController
)


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