import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router";
import userPhoto from "../../assets/images/user.jpg";
import { setUserProfile } from "../../redux/profileReducer";
import {getUserProfileThunkCreator} from '../../redux/profileReducer'

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfileThunkCreator(userId)
  }

  render() {
    if (!this.props.isAuth) return <Redirect to="/login"></Redirect>;
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          userPhoto={userPhoto}
        ></Profile>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
    isAuth: state.auth.isAuth,
  };
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile, getUserProfileThunkCreator })(
  WithUrlDataContainerComponent
);
