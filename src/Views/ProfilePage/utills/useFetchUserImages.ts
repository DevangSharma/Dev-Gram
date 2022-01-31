import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { stateType } from "../../../redux";
import * as actions from "../../../redux/actionCreators";
 
 function useFetchUserImages(){

    const dispatch = useDispatch();
    const { getUserImages } = bindActionCreators(actions, dispatch);
    const state = useSelector((state: stateType) => state.userData);
  
    const [pageNumber, setPageNumber] = useState(1);
  
    const observer: any = useRef();

    const {username} = useParams();

    console.log(username);
    
  
    const lastPostReached = useCallback(
      (node) => {
        if (state.isLoadingImages) return;
  
        if (observer.current) observer.current.disconnect();
  
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setPageNumber((previousNumber) => previousNumber + 1);
          }
        });
  
        if (node) observer.current.observe(node);
      },
  
      [state.isLoadingImages]
    );

    return {
        pageNumber: pageNumber,
        fetchPosts: getUserImages.bind(null,username!),
        isLoading: state.isLoadingImages,
        postList: state.userImages,
        lastPostReached: lastPostReached,
    }
}

export default useFetchUserImages;