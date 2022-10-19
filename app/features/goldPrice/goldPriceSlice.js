import { createSlice } from "@reduxjs/toolkit";

const state = {
    loading: true,
    price_current: {},
    oneWeek: { dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0
    },
    twoWeek: { dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0
    },
    oneMonth: { dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0
    },
    threeMonth: { dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0
    },
    sixMonth: { dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0
    },
    oneYear: { dates: [], 
        prices: [], 
        high_price: 0, 
        low_price: 0, 
        ch: 0, 
        chp: 0
    }
}

export const goldPriceSlice = createSlice({
    name: "gold_price",
    initialState: state,
    reducers: {
        addGoldPriceCurrent: (state, action) => {
            return {...state, price_current: action.payload}
        },
        addGoldDataPrice: (state, action) => {
            return {...state, ...action.payload};
        },
        setLoadingFetchDataGoldPrice: (state, action) => {
            return {...state, loading: false};
        }
    }
});

export const { addPriceCurrent, addGoldDataPrice, setLoadingFetchDataGoldPrice } = goldPriceSlice.actions;

export default goldPriceSlice.reducer;