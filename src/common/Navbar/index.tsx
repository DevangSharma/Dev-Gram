import React from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import GrowwLogo from "../../assets/images/GrowwLogo.png";

import "./index.css";
import { useNavigate } from "react-router-dom";
import useTheme from "../../utils/getTheme";
import { LIGHT } from "../../redux/theme/themeActionTypes";
import { toggleTheme } from "../../redux/actionCreators";
function Navbar() {
  const navigate = useNavigate();

  const theme = useTheme();

  const onLogoClicked = () => {
    navigate("/");
  };

  return (
    <div className="nvc219NavbarContainer">
      <div className="nvi219NavbarItems">
        <img
          src={GrowwLogo}
          onClick={onLogoClicked}
          className="img219LogoImage"
        />
        <h3 className="nav219NavbarHeading" onClick={onLogoClicked}>
          Growwgram
        </h3>

        <div
          className="upi219UserProfileIconGroup"
          onClick={() => {
            console.log("button");

            toggleTheme(theme);
          }}
        >
          {theme === LIGHT ? (
            <FontAwesomeIcon
              className="upt219UserProfileTheme"
              icon={faSun}
              size="2x"
            />
          ) : (
            <FontAwesomeIcon
              className="upi219UserProfileTheme"
              icon={faMoon}
              size="2x"
            />
          )}
          <FontAwesomeIcon
            className="upi219UserProfileIcon"
            icon={faUserCircle}
            size="2x"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
