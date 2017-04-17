import classNames from "classnames";
import React, { Component } from "react";
import { Link } from "react-router";
import { show as showModal } from "redux-modal";
import { connect } from "react-redux";

import { LOGIN_MODAL } from "../constants/modals";
import { logout } from "../actions/auth";

import TextButton from "../components/buttons/TextButton";

class AppHeader extends Component {
  render() {
    let { className, dispatch, session } = this.props;
    return (
      <div className={ classNames("banner", className) }>
        <div className="header-left">
          <Link to="/">Koa2 Redux</Link>
        </div>

        <div className="header-right">
          { (false === session.authed) &&
              <TextButton
                onClick={ () => dispatch(showModal(LOGIN_MODAL)) }
                >
                Login
              </TextButton>
          }
          { (true === session.authed) &&
              <TextButton
                onClick={ () => dispatch(logout()) }
                >
                Logout
              </TextButton>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { session } = state;
  return { session };
};

export default connect(mapStateToProps)(AppHeader);
