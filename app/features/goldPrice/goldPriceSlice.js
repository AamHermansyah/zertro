import { createSlice } from "@reduxjs/toolkit";

const state = {
    loading: true,
    today: {
        current: {
            price: 0,
            ch: 0,
            chp: 0,
            indicator: 1
        },
        yesterday: {
            ch: 0,
            chp: 0,
            indicator: 1
        }
    },
    oneWeek: { 
        dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0,
        buy_recommendation: 0
    },
    twoWeek: { 
        dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0,
        buy_recommendation: 0
    },
    oneMonth: { 
        dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0,
        buy_recommendation: 0
    },
    threeMonth: { 
        dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0,
        buy_recommendation: 0
    },
    sixMonth: { 
        dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0,
        buy_recommendation: 0
    },
    oneYear: { 
        dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0,
        buy_recommendation: 0
    },
    sixYear: {
        dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0,
        buy_recommendation: 0
    }
}

export const goldPriceSlice = createSlice({
    name: "gold_price",
    initialState: state,
    reducers: {
        addGoldPriceCurrent: (state, action) => {
            return {...state, today: action.payload}
        },
        addGoldDataPrice: (state, action) => {
            return {...state, ...action.payload};
        },
        setLoadingFetchDataGoldPrice: (state, action) => {
            return {...state, loading: false};
        }
    }
});

export const { addGoldPriceCurrent, addGoldDataPrice, setLoadingFetchDataGoldPrice } = goldPriceSlice.actions;

export default goldPriceSlice.reducer;