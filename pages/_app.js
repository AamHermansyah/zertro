import Head from 'next/head'
import '../styles/globals.css'
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
import ContextProvider from '../context/ContextProvider';

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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Sistem AI berbasis website untuk prediksi harga emas"/>
        <meta name="keywords" content="Emas, Harga, Zetro, Prediksi" />
        <meta name="author" content="Zetro Development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Zetro - AI Prediksi Harga Emas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp