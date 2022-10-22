import { createSlice } from "@reduxjs/toolkit";

const state = {
    CAGR: {
        loading: true,
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
    },
    moving_average: {
        loading: true,
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
        setLoadingCAGRDataPrediction: (state, action) => {
            return {...state, CAGR: {...state.CAGR, loading: false}}
        },
        addMovingAverageDataPrediction: (state, action) => {
            return {
                ...state,
                moving_average: {
                    ...state.moving_average,
                    ...action.payload
                }
            }
        },
        setLoadingMovingAverageDataPrediction: (state, action) => {
            return {...state, moving_average: {...state.moving_average, loading: false}}
        }
    }
})

export const { 
    addCAGRPrediction, 
    setLoadingCAGRDataPrediction, 
    addMovingAverageDataPrediction, 
    setLoadingMovingAverageDataPrediction } = predictionSlice.actions;

export default predictionSlice.reducer;