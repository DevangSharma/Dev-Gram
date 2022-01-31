import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { stateType } from "../../../redux";
import * as actions from "../../../redux/actionCreators";
 
 function useFetchPosts(){

    const dispatch = useDispatch();
    const { fetchPosts } = bindActionCreators(actions, dispatch);
    const state = useSelector((state: stateType) => state.posts);
  
    const [pageNumber, setPageNumber] = useState(1);
  
    const observer: any = useRef();
  
    const lastPostReached = useCallback(
      (node) => {
        if (state.isLoading) return;
  
        if (observer.current) observer.current.disconnect();
  
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setPageNumber((previousNumber) => previousNumber + 1);
          }
        });
  
        if (node) observer.current.observe(node);
      },
  
      [state.isLoading]
    );

    return {
        pageNumber: pageNumber,
        fetchPosts: fetchPosts,
        isLoading: state.isLoading,
        postList: state.postList,
        lastPostReached: lastPostReached,
    }
}

export default useFetchPosts;