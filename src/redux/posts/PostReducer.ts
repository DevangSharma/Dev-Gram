import { FETCH_POSTS, SET_POSTS } from "./PostActionTypes"

const initState = {
    isLoading: false,
    postList: [],
}

type actionType = {
    type:string
    payload: []
}
export const postReducer = (state = initState, action:actionType) => {

    switch(action.type) {
        case FETCH_POSTS :
            return  {
                ...state,
                isLoading: true,
            }

        case SET_POSTS :
            return  {
             
                isLoading: false,
                postList: action.payload
            }

        default :
            return state;
    }
}