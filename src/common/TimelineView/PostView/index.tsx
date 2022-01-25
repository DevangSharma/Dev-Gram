import React from "react";
import NetworkImage from "../../NetworkImages";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import "./index.css";
function PostView({ postData }: any) {
  return (
    <div className="pvc219PostViewContainer">
      <PostHeader userData={postData.user} />
      <NetworkImage url={postData.urls.small} />
      <PostFooter likes={postData.likes} />
    </div>
  );
}

export default PostView;
