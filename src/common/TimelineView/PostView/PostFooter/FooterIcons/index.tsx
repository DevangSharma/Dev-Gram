import {
  faHeart,
  faComment,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./index.css";

function FooterIcons() {
  return (
    <div className="fid219FooterIconsDiv">
      <FontAwesomeIcon icon={faHeart} className="fid219FooterIcon" />
      <FontAwesomeIcon icon={faComment} className="fid219FooterIcon" />
      <FontAwesomeIcon
        icon={faBookmark}
        className="fid219FooterIcon fib219FooterIconBookmark"
      />
    </div>
  );
}

export default FooterIcons;
