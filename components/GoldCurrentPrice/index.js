import Image from "next/image";
import { useEffect, useReducer } from "react";
import axios from "axios";
import CardSkeleton from "../../layouts/CardSkeleton";
import MiniCard from "../MiniCard";
import { gold as goldIcon } from '../../public';
import { getGoldReducer, INITIAL_STATE, GET_GOLD_ACTION_TYPE } from "./reducer/getGoldReducer";

export default function GoldCurrentPrice(){
    const [state, dispatch] = useReducer(getGoldReducer, INITIAL_STATE);
    const {data, loading, error} = state;

    useEffect(() => {
        // dispatch({ type: GET_GOLD_ACTION_TYPE.FETCH_START });
        // axios.get("https://www.goldapi.io/api/XAU/USD", {
        //   headers: {
        //     "x-access-token": "goldapi-jn6outl95fowif-io",
        //     "Content-Type": "application/json"
        //   }
        // })
        // .then(res => {
        //   dispatch({
        //     type: GET_GOLD_ACTION_TYPE.FETCH_SUCCES,
        //     payload: res.data
        //   })
        // })
        // .catch(err => {
        //   dispatch({ type: GET_GOLD_ACTION_TYPE.FETCH_ERROR });
        //   alert(err);
        // })
        // .finally(() => {
        //   dispatch({ type: GET_GOLD_ACTION_TYPE.FETCH_FINISH });
        // })

        dispatch({ type: GET_GOLD_ACTION_TYPE.FETCH_START });

        setTimeout(() => {
            dispatch({
            type: GET_GOLD_ACTION_TYPE.FETCH_SUCCES,
            payload: {
                metal: "XAU",
                ch: -5.7,
                chp: -1.2,
                price: 1667.46
            }
            });
            dispatch({ type: GET_GOLD_ACTION_TYPE.FETCH_FINISH });
        }, 2000);
    }, []);

    
    return (
        <section id="harga-emas" className="sm:p-4 mb-4">
          <div className="flex flex-wrap gap-4 md:gap-6 items-end">
            {loading ? 
              <CardSkeleton /> :
              <div className="bg-white px-6 sm:w-[300px] shadow-lg rounded-2xl py-4">
                <h4 className="mb-4 font-semibold text-xl">Harga emas saat ini</h4>
                <div className="flex items-center">
                  <span className="rounded-xl w-8 h-8 relative p-4 bg-purple-200 overflow-hidden">
                    <Image src={goldIcon} alt="gold icon" objectFit="cover" layout="fill" />
                  </span>
                  <p className="text-md text-black dark:text-white ml-2">Gold {`(${data.metal})`}</p>
                  <div className={`${data.chp >= 0 ? 'text-green-500' : 'text-red-600'} flex items-center text-sm ml-3`}>
                    <svg className={data.chp >= 0 ? '' : 'rotate-180'} width={20} height={20} fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z">
                      </path>
                    </svg>
                    <span>{data.chp}% {`(${data.ch})`}</span>
                  </div>
                </div>
                <div className="flex flex-col justify-start">
                  <p className="text-gray-700 dark:text-gray-100 text-4xl text-left font-bold my-4">
                    {data.price}
                    <span className="text-sm">$</span>
                  </p>
                </div>
              </div>
            }
            <MiniCard 
            loading={loading}
            title="Harga Kemarin"
            data="$1546.09"
            />
            <MiniCard 
            loading={loading}
            title="Laba 1 Hari (USD)"
            data="$1.2"
            />
            <MiniCard 
            loading={loading}
            title="Laba 1 Hari (%)"
            data="0.21%"
            />
          </div>
          <div>
          <h1 className="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-gray-800">Prediksi satu tahun kedepan</h1>
            <div className="flex flex-wrap gap-4 md:gap-6">
              <MiniCard 
                loading={loading}
                title="Prediksi CAGR"
                data="12.4%"
                />
                <MiniCard 
                loading={loading}
                title="Prediksi MA"
                data="1.3%"
                />
                <MiniCard 
                loading={loading}
                title="Prediksi LSTM"
                data="6.5%"
                />
            </div>
          </div>
        </section>
    )
}