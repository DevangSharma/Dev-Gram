import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import NetworkImage from "../../../common/NetworkImages";
import "./index.css";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
function ProfilePageHeader({ userData }: any) {
  return (
    <div className="pph219ProfilePageHeader">
      <div className="plh219ProfilePageLeftHeader">
        <div className="ppi219ProfilePageImage">
          <NetworkImage url={userData.profile_image.large} />
        </div>
      </div>

      <div className="plh219ProfilePageRightHeader">
        <h2>{userData.username}</h2>
        <div className="phf219ProfileHeaderFollowers">
          <p>
            <b>{userData.total_photos}</b> Posts
          </p>
          <p>
            <b>{userData.followers_count}</b> Followers
          </p>
          <p>
            <b>{userData.following_count}</b> Following
          </p>
        </div>

        <h3>{userData.first_name + " " + userData.last_name}</h3>

        <div className="phb219ProfileHeaderBio">
          <p>{userData.bio}</p>
          <p>
            <FontAwesomeIcon
              icon={faMapMarkerAlt}
              className="fal219FontAwesomeLocation"
            />
            {userData.location}
          </p>
          <p>
            <a href={userData.social.portfolio_url} target="_blank">
              {userData.social.portfolio_url}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePageHeader;
