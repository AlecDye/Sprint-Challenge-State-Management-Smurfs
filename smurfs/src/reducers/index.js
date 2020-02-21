import { FETCH_DATA, UPDATE_SMURF } from "../actions";

const initialState = {
    smurfList: [],
    isFetchingData: false
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true
            }
        case UPDATE_SMURF:
            return {
                ...state,
                smurfList: action.payload,
                isFetchingData: true
            }
        default:
            return state;
    }
}