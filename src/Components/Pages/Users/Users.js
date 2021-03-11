import React from "react";
import { NavLink } from "react-router-dom";
import Loader from "../../common/Loader/Loader";

const Users = (props) => {
  return (
    <div>
      {props.onLoading && <Loader></Loader>}
      <div>
        {props.pages.map((p) => {
          return (
            <span
              onClick={() => props.onChangeHandler(p)}
              key={p}
              className={props.currentPage === p ? "font-weight-bold" : ""}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          {user.name}
          <div>
            <NavLink to={"/profile/" + user.id}>
              <img
                src={
                  user.photos.small != null
                    ? user.photos.small
                    : props.userPhoto
                }
                alt="user_photo"
                className="user_img"
              ></img>
            </NavLink>
          </div>
          <div>
            {user.followed ? (
              <button
                disabled={props.followingInProgress.some(
                  (id) => user.id === id
                )}
                className="btn-primary"
                onClick={() => props.unfollowThunkCreator(user.id)}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                className="btn-primary"
                onClick={() => {
                  props.followThunkCreator(user.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
