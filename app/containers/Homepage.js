import React, { Component } from "react";
import { connect } from "react-redux";

import GuestHomepage from "./GuestHomepage";
import UserHomepage from "./UserHomepage";

class Homepage extends Component {
  render() {
    let { authed } = this.props;
    return (
      <div className="homepage">
        { !authed && <GuestHomepage /> }
        { authed && <UserHomepage /> }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authed } = state.session;
  return { authed };
}

export default connect(mapStateToProps)(Homepage)
