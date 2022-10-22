import { createSlice } from "@reduxjs/toolkit";

const state = {
    loading: true,
    CAGR: {
        oneWeek: {
            ch: 0,
            chp: 0,
            data: [],
            buy_recommendation: -1
        },
        twoWeek: {
            ch: 0,
            chp: 0,
            data: [],
            buy_recommendation: -1
        },
        oneMonth: {
            ch: 0,
            chp: 0,
            data: [],
            buy_recommendation: -1
        },
        threeMonth: {
            ch: 0,
            chp: 0,
            data: [],
            buy_recommendation: -1
        },
        sixMonth: {
            ch: 0,
            chp: 0,
            data: [],
            buy_recommendation: -1
        },
        oneYear: {
            ch: 0,
            chp: 0,
            data: [],
            buy_recommendation: -1
        },
        sixYear: {
            ch: 0,
            chp: 0,
            data: [],
            buy_recommendation: -1
        },
    }
}

export const predictionSlice = createSlice({
    name: "prediction_data",
    initialState: state,
    reducers: {
        addCAGRPrediction: (state, action) => {
            return {
                ...state,
                CAGR: {
                    ...state.CAGR,
                    ...action.payload
                }
            }
        },
        setLoadingFetchDataPrediction: (state, action) => {
            return {...state, loading: false}
        }
    }
})

export const {addCAGRPrediction, setLoadingFetchDataPrediction} = predictionSlice.actions;

export default predictionSlice.reducer;