import React from "react";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "./PostHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function PostHeader({ userData }: any) {
  const navigate = useNavigate();

  const onUserClicked = () => {
    navigate(`/user/${userData.username}`);
  };
  return (
    <div className="pvh219PostViewHeader">
      <div className="pug219PostViewUserGroup" onClick={onUserClicked}>
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
