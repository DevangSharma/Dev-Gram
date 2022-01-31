import { FETCH_POSTS, SET_POSTS } from "./PostActionTypes"

type stateType = {
    isLoading:boolean,
    postList: {}[],
}
const initState : stateType = {
    isLoading: true,
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
                ...state,
                isLoading: false,
                postList: [...state.postList,...action.payload]
            }

        default :
            return state;
    }
}