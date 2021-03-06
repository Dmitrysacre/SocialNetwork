import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import userPhoto from "../../assets/images/user.jpg";
import { getUserProfileThunkCreator, getStatusThunk, updateStatusThunk } from "../../redux/profileReducer";
import WithAuthRedicrect from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfileThunkCreator(userId);
    this.props.getStatusThunk(userId)
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          userPhoto={userPhoto}
          status={this.props.status}
          updateStatusThunk={this.props.updateStatusThunk}
        ></Profile>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    isAuth: state.auth.isAuth,
    status: state.profile.status
  };
};

export default compose(
  connect(mapStateToProps, {
    getUserProfileThunkCreator,
    getStatusThunk,
    updateStatusThunk
  }),
  withRouter,
  WithAuthRedicrect
)(ProfileContainer);
