import React from "react";
import { connect } from "react-redux";
import Users from "./Users";
import userPhoto from "../../../assets/images/user.jpg";
import {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleOnLoading,
} from "../../../redux/usersReducer";
import {getUsers} from "../../../api/api";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.toggleOnLoading(true);
      getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
        this.props.toggleOnLoading(false);
      });
  }

  onChangeHandler = (p) => {
    this.props.toggleOnLoading(true);
    this.props.setCurrentPage(p);
    getUsers(this.props.currentPage, this.props.pageSize)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.toggleOnLoading(false);
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
        onLoading={this.props.onLoading}
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
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleOnLoading,
})(UsersAPIComponent);

export default UsersContainer;
