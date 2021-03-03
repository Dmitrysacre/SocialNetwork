import React from "react";

const Users = (props) => {
  return (
    <div>
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
            <img
              src={user.photos.small != null ? user.photos.small : props.userPhoto}
              alt="user_photo"
              className="user_img"
            ></img>
          </div>
          <div>
            {user.followed ? (
              <button
                className="btn-primary"
                onClick={() => props.unFollow(user.id)}
              >
                Unfollow
              </button>
            ) : (
              <button
                className="btn-primary"
                onClick={() => props.follow(user.id)}
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
