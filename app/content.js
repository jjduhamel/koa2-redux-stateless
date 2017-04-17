import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from 'react-redux';

import AppFooter from "./containers/AppFooter";
import AppHeader from "./containers/AppHeader";
import AppWidgets from "./containers/AppWidgets";

class Content extends Component {
  render() {
    let { dispatch } = this.props;
    return (
      <div className="app">
        <AppHeader className="app-header" />
        <div className="app-body">
          { this.props.children }
        </div>
        <AppFooter className="app-footer" />
        <AppWidgets className="app-widgets" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Content);
