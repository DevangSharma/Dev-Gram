import { DARK, LIGHT } from "./themeActionTypes";

const initState = LIGHT;

type actionType = {
    type:string
}

export const themeReducer = (state = initState, action:actionType) => {

    switch(action.type) {
        case LIGHT :
            return  LIGHT
        case DARK :
            return  DARK
        default :
            return state;
    }
}