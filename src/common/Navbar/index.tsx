import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import GrowwLogo from "../../assets/images/GrowwLogo.png";

import "./index.css";
function Navbar() {
  return (
    <div className="nvc219NavbarContainer">
      <div className="nvi219NavbarItems">
        <img src={GrowwLogo} className="img219LogoImage" />
        <h3 className="nav219NavbarHeading">Growwgram</h3>

        <FontAwesomeIcon
          className="upi219UserProfileIcon"
          icon={faUserCircle}
          size="2x"
        />
      </div>
    </div>
  );
}

export default Navbar;
