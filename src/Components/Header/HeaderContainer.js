import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { setUserData, authMeThunkCreator } from "../../redux/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.authMeThunkCreator();
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

export default connect(mapStateToProps, { setUserData, authMeThunkCreator })(
  HeaderContainer
);
