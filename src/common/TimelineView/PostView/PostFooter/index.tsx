import React from "react";
import FooterIcons from "./FooterIcons";
import "./index.css";

function PostFooter({ postData }: any) {
  return (
    <div className="pfd219PostFooterDiv">
      <FooterIcons />

      <div className="pld219PostLikesDiv">
        <h3>{postData.likes} Likes</h3>
        <p>{Math.floor(Math.random() * 100) + 1} Days Ago</p>
      </div>

      <div className="pdd219PostDescriptionDiv">
        <p>{postData.description}</p>
      </div>
      <input
        className="pci219PostCommentInput"
        placeholder="Add Comment"
      ></input>
    </div>
  );
}

export default PostFooter;
