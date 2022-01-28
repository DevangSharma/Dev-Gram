import { Action } from "redux";
import { FETCH_USER, SET_USER } from "./userActionTypes";


const initialState = {
    isLoading : true,
    userData: {}
}

type userActionType = {
    type:string,
    payload: {}
}

export const userReducer = (state = initialState, action:userActionType) => {

    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                isLoading:true,
            }

        case SET_USER:            
            return {
                isLoading:false,
                userData: action.payload,
            }
    
        default:
            return state;
    }
}