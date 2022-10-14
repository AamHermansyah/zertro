export const GET_GOLD_ACTION_TYPE = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCES: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_ERROR",
    FETCH_FINISH: "FETCH_FINISH",
    SET_ERROR: "SET_ERROR"
}

export const INITIAL_STATE = {
    loading: true,
    data: [],
    error: false
}

export const getGoldReducer = (state, action) => {
    switch(action.type){
        case GET_GOLD_ACTION_TYPE.FETCH_START:
            return {
                ...state,
                loading: true
            }
        case GET_GOLD_ACTION_TYPE.FETCH_SUCCES:
            return {
                ...state,
                data: action.payload
            }
        case GET_GOLD_ACTION_TYPE.FETCH_ERROR:
            return {
                ...state,
                error: true
            }
        case GET_GOLD_ACTION_TYPE.FETCH_FINISH:
            return {
                ...state,
                loading: false
            }
        case GET_GOLD_ACTION_TYPE.SET_ERROR:
            return {
                ...state,
                error: false
            }
    }
}