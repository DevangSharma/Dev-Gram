import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "../../common/Navbar";
import TimelineView from "./TimelineView";
import * as actions from "../../redux/actionCreators";
import { stateType } from "../../redux";
import ProfilePageHeader from "./ProfilePageHeader";

function ProfilePage() {
  const dispatch = useDispatch();
  const { getUserData } = bindActionCreators(actions, dispatch);
  const state = useSelector((state: stateType) => state.userData);
  return (
    <div>
      <Navbar />
      <TimelineView />
      <ProfilePageHeader />
    </div>
  );
}

export default ProfilePage;
