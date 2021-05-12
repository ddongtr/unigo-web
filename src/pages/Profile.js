import React from "react";
import GeneralInfo from "../components/Profile/GeneralInfo";
import DetailInfo from "../components/Profile/DetailInfo";

const Profile = () => {
  return (
    <div className="profile-wrapper">
      <GeneralInfo />

      <DetailInfo />
    </div>
  );
};

export default Profile;
