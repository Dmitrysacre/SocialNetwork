import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode() {
    this.setState({
      editMode: true,
    })
  }

  deActivateEditMode() {
    this.setState({
      editMode: false,
    });
    this.props.updateStatusThunk(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deActivateEditMode.bind(this)}
              value={this.state.status}
            ></input>
          </div>
        )}
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode.bind(this)}>
              {this.props.status || '____'}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
