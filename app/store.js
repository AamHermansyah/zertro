import { configureStore } from "@reduxjs/toolkit";
import goldPriceReducer from "./features/goldPrice/goldPriceSlice";

export default configureStore({
    reducer: {
        gold_price: goldPriceReducer
    }
})