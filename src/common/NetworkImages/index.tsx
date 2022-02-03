import React from "react";
import "./NetworkImage.css";
function NetworkImage(props: any) {
  return (
    <div className="nid219NetworkDiv">
      <img className="nii219NetworkImage" src={props.url} />
    </div>
  );
}

export default NetworkImage;
