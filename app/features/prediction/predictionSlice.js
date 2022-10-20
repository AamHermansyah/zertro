import { createSlice } from "@reduxjs/toolkit";

const state = {
    loading: true,
    CAGR: {
        oneWeek: {
            ch: 0,
            chp: 0,
            data: []
        },
        twoWeek: {
            ch: 0,
            chp: 0,
            data: []
        },
        oneMonth: {
            ch: 0,
            chp: 0,
            data: []
        },
        threeMonth: {
            ch: 0,
            chp: 0,
            data: []
        },
        sixMonth: {
            ch: 0,
            chp: 0,
            data: []
        },
        oneYear: {
            ch: 0,
            chp: 0,
            data: []
        },
        sixYear: {
            ch: 0,
            chp: 0,
            data: []
        },
    }
}

export const predictionSlice = createSlice({
    name: "prediction_data",
    initialState: state,
    reducers: {
        addCAGRPrediction: (state, action) => {
            return {...state, ...action.payload}
        },
        setLoadingFetchDataPrediction: (state, action) => {
            return {...state, loading: false}
        }
    }
})

export const {addCAGRPrediction, setLoadingFetchDataPrediction} = predictionSlice.actions;

export default predictionSlice.reducer;