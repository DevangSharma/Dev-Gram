import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { stateType } from "../../../redux";
import * as actions from "../../../redux/actionCreators";
import "./index.css";
import PostView from "./PostView";

function TimelineView() {
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

  useEffect(() => {
    console.log(pageNumber);
    fetchPosts(pageNumber);
  }, [pageNumber]);

  return (
    <div className="tlc219TimelineContainer">
      <div>{state.isLoading && <h2>Data is Loading</h2>}</div>
      {state.postList.map((item: any, index: number) => {
        if (index === state.postList.length - 5) {
          return (
            <div ref={lastPostReached} key={item.id}>
              <PostView key={item.id} postData={item} />
            </div>
          );
        }

        return (
          <div key={item.id}>
            <PostView postData={item} />
          </div>
        );
      })}
    </div>
  );
}

export default TimelineView;
