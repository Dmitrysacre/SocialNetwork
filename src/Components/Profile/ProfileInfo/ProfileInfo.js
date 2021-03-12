import React from "react";
import Loader from "../../common/Loader/Loader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) return <Loader></Loader>;

  return (
    <div>
      <h1>{props.profile.fullName}</h1>
      <img className="user_img"
        src={props.profile.photos.small != null ? props.profile.photos.small : props.userPhoto}
        alt="user_photo"
      ></img>
      <ProfileStatus status={props.status} updateStatusThunk={props.updateStatusThunk}></ProfileStatus>
      <p>{props.profile.aboutMe}</p>
    </div>
  );
};

export default ProfileInfo;
