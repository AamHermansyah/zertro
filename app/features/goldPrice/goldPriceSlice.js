import { createSlice } from "@reduxjs/toolkit";

export const goldPriceSlice = createSlice({
    name: "gold_price",
    initialState: {
        price_current: {},
        oneWeek: { dates: [], prices: [] },
        twoWeek: { dates: [], prices: [] },
        oneMonth: { dates: [], prices: [] },
        threeMonth: { dates: [], prices: [] },
        sixMonth: { dates: [], prices: [] },
        oneYear: { dates: [], prices: [] }
    },
    reducers: {
        addGoldPriceCurrent: (state, action) => {
            return {...state, price_current: action.payload}
        },
        addGoldDataPrice: (state, action) => {
            return {...state, ...action.payload};
        }
    }
});

export const { addPriceCurrent, addGoldDataPrice } = goldPriceSlice.actions;

export default goldPriceSlice.reducer;