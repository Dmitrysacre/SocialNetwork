import React from "react";
import Header from "./Header";
import * as axios from "axios";
import { connect } from "react-redux";

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        const { id, email, login } = response.data.data;
        this.props.setUserData(id, email, login);
      });
  }

  render() {
    return <Header {...this.props}></Header>;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (id, email, login) =>
      dispatch({ type: "SET_USER_DATA", data: { id, email, login } }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
