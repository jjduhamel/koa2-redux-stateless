import React, { Component } from "react";
import { connect } from "react-redux";

import { getProfile } from "../actions/profile";

import Caption from "../../lib/HarrisonBergeron.md";

class GuestHomepage extends Component {
  render() {
    let { dispatch } = this.props;

    return (
      <div className="homepage">
        <div className="panel">
          <div dangerouslySetInnerHTML={{ __html: Caption }} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(GuestHomepage)
