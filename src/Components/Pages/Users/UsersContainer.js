import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import userPhoto from "../../../assets/images/user.jpg";
import {
  followUser,
  unFollowUser,
  toggleIsFollowingProgress,
  getUsersThunkCreateor,
  unfollowThunkCreator,
  followThunkCreator,
} from "../../../redux/usersReducer";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreateor(
      this.props.currentPage,
      this.props.pageSize
    );
  }

  onChangeHandler = (p) => {
    this.props.getUsersThunkCreateor(p, this.props.pageSize);
  };

  render() {
    const pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return (
      <Users
        users={this.props.users}
        pages={pages}
        onChangeHandler={this.onChangeHandler}
        currentPage={this.props.currentPage}
        follow={this.props.follow}
        unFollow={this.props.unFollow}
        userPhoto={userPhoto}
        onLoading={this.props.onLoading}
        toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
        followingInProgress={this.props.followingInProgress}
        unfollowThunkCreator={this.props.unfollowThunkCreator}
        followThunkCreator={this.props.followThunkCreator}
      ></Users>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
    onLoading: state.users.onLoading,
    followingInProgress: state.users.followingInProgress,
  };
};

const UsersContainer = connect(mapStateToProps, {
  followUser,
  unFollowUser,
  toggleIsFollowingProgress,
  getUsersThunkCreateor,
  unfollowThunkCreator,
  followThunkCreator,
})(UsersAPIComponent);

export default UsersContainer;
