import axios from "axios";
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
                className="btn-primary"
                onClick={() => {
                  axios
                    .delete(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "3c65e3c0-b6b0-4117-8ec8-35b3d5a20261",
                        },
                      }
                    )
                    .then((response) => {
                      console.log(response.data)
                      if (response.data.resultCode === 0) {
                        props.unFollow(user.id);
                      }
                    });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className="btn-primary"
                onClick={() => {
                  axios
                    .post(
                      `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                      {
                        withCredentials: true,
                        headers: {
                          "API-KEY": "3c65e3c0-b6b0-4117-8ec8-35b3d5a20261",
                        },
                      }
                    )
                    .then((response) => {
                      if (response.data.resultCode === 0) {
                        props.follow(user.id);
                      }
                    });
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
