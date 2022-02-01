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
    
    const lastPostReached = useCallback(
      (node) => {
        if (state.isLoading) return;
    
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setPageNumber((previousNumber) => previousNumber + 1);
            observer.unobserve(entries[0].target)
          }
        });
  
        if (node) 
        {
          observer.observe(node);
        }
      },
  
      [state.postList]
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