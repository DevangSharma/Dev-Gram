import { AnyAction } from "redux";
import { FETCH_POSTS, SET_POSTS } from "./actionTypes";
import { ThunkDispatch } from "redux-thunk";
import { fetchPostData } from "../../utils/api/fetchPostData";

export const getPosts = (pageNumber: number) => {
  return async (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch({
      type: FETCH_POSTS,
    });

    const postData = await fetchPostData(pageNumber);

    console.log(postData);

    dispatch(setPosts(postData));
  };
};

export const setPosts = (data: {}) => {
  return (dispatch: ThunkDispatch<{}, void, AnyAction>) => {
    dispatch({
      type: SET_POSTS,
      payload: data,
    });
  };
};
