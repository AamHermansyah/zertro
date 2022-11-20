import Head from 'next/head'
import '../styles/globals.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineController
} from 'chart.js';
import ContextProvider from '../context/ContextProvider';
import { Provider } from 'react-redux';
import store from '../app/store';
import ProviderWraper from '../app/ProviderWraper';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  LineController,
  BarController,
  BarElement
)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="description" content="Sistem AI berbasis website untuk prediksi harga emas"/>
        <meta name="keywords" content="Emas, Harga, LearnGold, Prediksi" />
        <meta name="author" content="LearnGold Development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>LearnGold - Belajar Prediksi Harga Emas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <ContextProvider>
          <ProviderWraper>
            <Component {...pageProps} />
          </ProviderWraper>
        </ContextProvider>
      </Provider>
    </>
  )
}

export default MyApp