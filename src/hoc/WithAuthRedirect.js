import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const WithAuthRedicrect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login"></Redirect>;
      return <Component {...this.props}></Component>;
    }
  }
  return connect(mapStateToProps)(RedirectComponent);
};

export default WithAuthRedicrect;
