import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <div className="col">
      <ProfileInfo
        profile={props.profile}
        userPhoto={props.userPhoto}
        status={props.status}
        updateStatusThunk={props.updateStatusThunk}
      ></ProfileInfo>
      <MyPostsContainer></MyPostsContainer>
    </div>
  );
};

export default Profile;
