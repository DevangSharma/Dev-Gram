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
  
    const {username} = useParams();    
  
    const lastPostReached = useCallback(
      (node) => {
        if (state.isLoadingImages) return 

        if(state.userImages.length === state.userData.total_photos) return "You are all caught up";
    
       const observer =  new IntersectionObserver((entries,observe) => {
          if (entries[0].isIntersecting) {
            setPageNumber((previousNumber) => previousNumber + 1);
            observe.unobserve(entries[0].target)
          }
        });
  
        if (node) 
        {
          observer.observe(node);
        }
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