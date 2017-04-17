import classNames from "classnames";
import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from 'react-redux';

class Content extends Component {
  render() {
    let { className, dispatch, session } = this.props;
    return (
      <div className={ classNames("footer", className) }>
        <Link to="/contact">Contact</Link>
        <Link to="/bug-bounty">Bug Bounty</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {} = state;
  return {};
};

export default connect(mapStateToProps)(Content);
