import { FETCH_POSTS } from "./PostActionTypes"

const initState = {
    nums: 10,
}

type actionType = {
    type:string
}
export const postReducer = (state = initState, action:actionType) => {

    switch(action.type) {
        case FETCH_POSTS :
            return  {
                nums: state.nums - 1,
            }

        default :
            return state;
    }
}