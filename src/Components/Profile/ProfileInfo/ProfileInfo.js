import React from "react";
import Loader from "../../common/Loader/Loader";

const ProfileInfo = (props) => {
  if (!props.profile) return <Loader></Loader>;

  return (
    <div>
      <h1>{props.profile.fullName}</h1>
      <img className="user_img"
        src={props.profile.photos.small != null ? props.profile.photos.small : props.userPhoto}
        alt="user_photo"
      ></img>
      <p>{props.profile.aboutMe}</p>
    </div>
  );
};

export default ProfileInfo;
