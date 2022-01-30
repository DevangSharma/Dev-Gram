import React from "react";
import NetworkImage from "../../../common/NetworkImages";
import "./index.css";
function GridView({ imageList }: any) {
  return (
    <div className="gvc219GridViewContainer">
      {imageList.map((item: any) => (
        <NetworkImage key={item.id} url={item.urls.regular} />
      ))}
    </div>
  );
}

export default GridView;
