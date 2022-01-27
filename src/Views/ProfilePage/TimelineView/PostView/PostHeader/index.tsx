import React from "react";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PostHeader({ userData }: any) {
  return (
    <div className="pvh219PostViewHeader">
      <div className="pug219PostViewUserGroup">
        <img
          className="pvi219PostViewProfileImage"
          src={userData.profile_image.small}
        ></img>
        <h3 className="pvu219PostViewUsername">{userData.username}</h3>
      </div>
      <FontAwesomeIcon className="pvu219PostViewMenu" icon={faEllipsisH} />
    </div>
  );
}

export default PostHeader;
