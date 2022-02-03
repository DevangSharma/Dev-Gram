import React, { useEffect, useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faSun, faMoon, faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import growwLogo from "../../assets/images/growwLogo.png";

import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import getTheme, { toggleTheme } from "../../utils/getTheme";
import { fetchPosts } from "../../store/actionCreators";
import { useDispatch } from "react-redux";
import { clearCachedPosts } from "../../utils/apiHelper";
import { LIGHT } from "../../constants/localStorage";
function Navbar() {
  const navigate = useNavigate();

  const [theme, updateTheme] = useState(getTheme());

  const onLogoClicked = () => {
    navigate("/");
  };

  const hardReload = () => {
    clearCachedPosts();
    window.location.reload();
  };

  return (
    <div className="nvc219NavbarContainer">
      <div className="nvi219NavbarItems">
        <img
          src={growwLogo}
          onClick={onLogoClicked}
          className="img219LogoImage"
        />
        <h3 className="nav219NavbarHeading" onClick={onLogoClicked}>
          Growwgram
        </h3>

        <div className="upi219UserProfileIconGroup">
          <div className="upt219UserProfileReload" onClick={hardReload}>
            <FontAwesomeIcon icon={faRedoAlt} />
          </div>

          <div
            className="upt219UserProfileTheme"
            onClick={() => {
              toggleTheme();
              updateTheme(getTheme());
            }}
          >
            {theme === LIGHT ? (
              <FontAwesomeIcon icon={faSun} />
            ) : (
              <FontAwesomeIcon icon={faMoon} />
            )}
          </div>
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
