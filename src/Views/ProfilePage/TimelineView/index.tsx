import React, { useEffect } from "react";
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

  useEffect(() => {
    fetchPosts();
  }, []);

  if (state.isLoading) {
    return <h2>Data is Loading</h2>;
  }

  return (
    <div className="tlc219TimelineContainer">
      {state.postList.map((item: any) => (
        <PostView key={item.id} postData={item} />
      ))}
    </div>
  );
}

export default TimelineView;
