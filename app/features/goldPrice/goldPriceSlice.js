import { createSlice } from "@reduxjs/toolkit";

export const goldPriceSlice = createSlice({
    name: "gold_price",
    initialState: {
        price_current: {},
        oneWeek: { dates: [], prices: [] },
        oneMonth: { dates: [], prices: [] },
        threeMonth: { dates: [], prices: [] },
        sixMonth: { dates: [], prices: [] },
        oneYear: { dates: [], prices: [] }
    },
    reducers: {
        addPriceCurrent: (state, action) => {
            return {...state, price_current: action.payload}
        }
    }
});

export const { addPriceCurrent } = goldPriceSlice.actions;

export default goldPriceSlice.reducer;