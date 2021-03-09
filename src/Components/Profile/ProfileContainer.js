import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import userPhoto from "../../assets/images/user.jpg";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} userPhoto={userPhoto}></Profile>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserProfile: (profile) =>
      dispatch({ type: "SET-USER-PROFILE", profile }),
  };
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithUrlDataContainerComponent);
