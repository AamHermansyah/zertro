import Image from "next/image";
import CardSkeleton from "../../layouts/CardSkeleton";
import MiniCard from "../MiniCard";
import { gold as goldIcon } from '../../public';
import { useDispatch, useSelector } from "react-redux";
import { addCAGRPrediction, addMovingAverageDataPrediction, setLoadingCAGRDataPrediction } from "../../app/features/prediction/predictionSlice";
import handleCAGRPrediction from "../../promises/handleCAGRPrediction";
import handleMovAvrgPrediction from "../../promises/handleMovAvrgPrediction";
import { useEffect } from "react";

export default function GoldCurrentPrice(){
    const loading = useSelector(state => state.gold_price.loading);
    const {current, yesterday} = useSelector(state => state.gold_price.today);
    const oneYearDataPrice = useSelector(state => state.gold_price.oneYear.prices);
    const cagr_one_year = useSelector(state => state.prediction_data.CAGR.oneYear);
    const mov_avrg_one_year = useSelector(state => state.prediction_data.moving_average.oneYear);
    const dispatch = useDispatch();

    useEffect(() => {
      if(oneYearDataPrice.length > 0){
        const data = oneYearDataPrice[0];
        Promise.all([handleCAGRPrediction(data), handleMovAvrgPrediction(data)])
          .then(([cagr, ma]) => {
            dispatch(addCAGRPrediction({
              oneYear: cagr
            }));
            dispatch(addMovingAverageDataPrediction({
              oneYear: ma
            }));
          })
          .catch(err => {
            alert(err);
          })
          .finally(() => {
            dispatch(setLoadingCAGRDataPrediction());
        })
      }
    }, [loading, oneYearDataPrice,]);
    
    return (
        <section id="harga-emas" className="sm:p-4 mb-4">
          <div className="flex flex-wrap gap-4 md:gap-6 items-end">
            {loading ? 
              <CardSkeleton /> :
              <div className="bg-white px-6 sm:w-[300px] shadow-sm rounded-2xl py-4">
                <h4 className="mb-4 font-semibold text-xl">Harga emas saat ini</h4>
                <div className="flex items-center">
                  <span className="rounded-xl w-8 h-8 relative p-4 bg-purple-200 overflow-hidden">
                    <Image src={goldIcon} alt="gold icon" objectFit="cover" layout="fill" />
                  </span>
                  <p className="text-md text-black dark:text-white ml-2">Gold (XAU)</p>
                  <div className={`${current.chp >= 0 ? 'text-green-500' : 'text-red-600'} flex items-center text-sm ml-3`}>
                    <svg className={current.chp >= 0 ? '' : 'rotate-180'} width={20} height={20} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                      </path>
                    </svg>
                    <span>{current.chp}% {`(${current.ch})`}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                    {current.price}
                    <span className="text-sm">$</span>
                  </p>
                </div>
              </div>
            }
            <MiniCard 
            loading={loading}
            title="Harga Kemarin"
            data={`$${yesterday.price}`}
            />
            <MiniCard 
            loading={loading}
            title="Laba Kemarin"
            data={`$${yesterday.ch}`}
            indicator={yesterday.indicator}
            />
            <MiniCard 
            loading={loading}
            title="Laba Kemarin (%)"
            data={`${yesterday.chp}%`}
            indicator={yesterday.indicator}
            />
          </div>
          <div>
          <h1 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-gray-800">Prediksi laba satu tahun kedepan</h1>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <MiniCard 
                loading={loading}
                title="CAGR (USD)"
                data={`$${cagr_one_year.ch}`}
                indicator={cagr_one_year.chp >= 0 ? 1 : -1}
                />
              <MiniCard 
                loading={loading}
                title="CAGR (%)"
                data={`${cagr_one_year.chp}%`}
                indicator={cagr_one_year.chp >= 0 ? 1 : -1}
                />
              <MiniCard 
                loading={loading}
                title="Moving Average (USD)"
                data={`$${mov_avrg_one_year.ch}`}
                indicator={mov_avrg_one_year.chp >= 0 ? 1 : -1}
                />
              <MiniCard 
                loading={loading}
                title="Moving Average (%)"
                data={`${mov_avrg_one_year.chp}%`}
                indicator={mov_avrg_one_year.chp >= 0 ? 1 : -1}
                />
            </div>
          </div>
        </section>
    )
}