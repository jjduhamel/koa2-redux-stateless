import classNames from "classnames";
import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from 'react-redux';

import AuthWidget from "../containers/AuthWidget";

class AppWidgets extends Component {
  render() {
    let { className, dispatch, session } = this.props;
    return (
      <div className={ classNames("dimmer", className) }>
        <AuthWidget />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {} = state;
  return {};
};

export default connect(mapStateToProps)(AppWidgets);
