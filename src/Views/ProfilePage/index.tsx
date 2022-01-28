import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import Navbar from "../../common/Navbar";
import TimelineView from "./TimelineView";
import * as actions from "../../redux/actionCreators";
import { stateType } from "../../redux";
import ProfilePageHeader from "./ProfilePageHeader";
import "./index.css";

function ProfilePage() {
  const dispatch = useDispatch();
  const { getUserData } = bindActionCreators(actions, dispatch);
  const state = useSelector((state: stateType) => state.userData);
  useEffect(() => {
    getUserData("nublson");
  }, []);

  if (state.isLoading) {
    return <h2>Data is loading</h2>;
  }
  return (
    <div>
      <Navbar />
      <div className="ppc219ProfilePageContainer">
        <ProfilePageHeader userData={state.userData} />

        <TimelineView />
      </div>
    </div>
  );
}

export default ProfilePage;
