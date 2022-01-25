import React from "react";

function PostHeader({ userData }: any) {
  return (
    <div>
      <h3>{userData.username}</h3>
    </div>
  );
}

export default PostHeader;
