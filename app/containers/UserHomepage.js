import React, { Component } from "react";
import { connect } from "react-redux";

import { getProfile, updateProfile } from "../actions/profile";

import ProfileForm from "../components/forms/ProfileForm";

class UserHomepage extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(getProfile())
    .then(profile => {
      this.setState({ loaded: true });
    });
    this.state = { loaded: false };
  }

  handleSubmit = form => {
    const { dispatch, profile } = this.props;
    const newProfile = _.pick(form, _.keys(profile));
    dispatch(updateProfile(newProfile));
  }

  render() {
    const { dispatch, profile } = this.props;
    const { loaded } = this.state;
    return (
      loaded &&
        <div className="homepage">
          <div className="panel">
            <div className="title">Welcome!</div>
            <ProfileForm initialValues={ profile } onSubmit={ this.handleSubmit } />
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
  const { profile } = state;
  return { profile };
}

export default connect(mapStateToProps)(UserHomepage)
