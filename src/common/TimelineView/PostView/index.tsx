import React, { useState } from "react";
import NetworkImage from "../../NetworkImages";
import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import "./index.css";
import NetworkModal from "../../NetworkModal";

function PostView({ postData }: any) {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="pvc219PostViewContainer">
      <PostHeader userData={postData.user} />
      <div
        onClick={() => {
          setModalOpen(true);
        }}
      >
        <NetworkImage url={postData.urls.small} />
      </div>

      <NetworkModal
        isOpen={isModalOpen}
        toggleModal={setModalOpen}
        url={postData.urls.full}
      />
      <PostFooter postData={postData} />
    </div>
  );
}

export default PostView;
