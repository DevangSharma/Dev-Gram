import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { stateType } from "../../../redux";
import * as actions from "../../../redux/actionCreators";
import "./index.css";
import PostView from "./PostView";

function TimelineView({ imageList }: any) {
  return (
    <div className="tlc219TimelineContainer">
      {imageList.map((item: any) => (
        <PostView key={item.id} postData={item} />
      ))}
    </div>
  );
}

export default TimelineView;
