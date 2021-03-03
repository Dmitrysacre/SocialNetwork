import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import userPhoto from "../../../assets/images/user.jpg";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  onChangeHandler = (p) => {
    this.props.setCurrentPage(p);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => dispatch({ type: "FOLLOW", userID }),
    unFollow: (userID) => dispatch({ type: "UNFOLLOW", userID }),
    setUsers: (users) => dispatch({ type: "SET-USERS", users }),
    setCurrentPage: (currentPage) => dispatch({ type: "SET-CURRENT-PAGE", currentPage }),
    setTotalUsersCount: (totalUsersCount) => dispatch({ type: "SET-TOTAL-USERS-COUNT", totalUsersCount }),
  };
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
