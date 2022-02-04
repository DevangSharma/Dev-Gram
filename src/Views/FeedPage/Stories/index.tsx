import React from "react";
import { useNavigate } from "react-router-dom";
import NetworkImage from "../../../common/NetworkImages";
import "./Stories.css";

function Stories({ postData }: any) {
  const { postList } = postData;

  const navigate = useNavigate();

  const onUserClicked = (username: string) => {
    navigate(`/user/${username}`);
  };
  return (
    <div className="fsd219FeedStoriesDiv">
      {postList.map((item: any, index: number) => {
        return (
          <div
            key={item.id}
            onClick={() => {
              onUserClicked(item.user.username);
            }}
          >
            <img
              className="spi219StoryProfileImage"
              src={item.user.profile_image.medium}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
