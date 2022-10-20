import { configureStore } from "@reduxjs/toolkit";
import goldPriceReducer from "./features/goldPrice/goldPriceSlice";
import predictionSlice from "./features/prediction/predictionSlice";

export default configureStore({
    reducer: {
        gold_price: goldPriceReducer,
        prediction_data: predictionSlice
    }
})