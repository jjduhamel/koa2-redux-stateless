import classNames from "classnames";
import React, { Component } from "react";
import { connect } from "react-redux";
import { show as showModal, hide as hideModal } from "redux-modal";

import { LOGIN_MODAL, REGISTER_MODAL } from "../constants/modals";

import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";

import { login, register } from "../actions/auth";

class AuthWidget extends Component {
  toggleLogin = () => {
    let { dispatch } = this.props;
    dispatch(hideModal(REGISTER_MODAL));
    dispatch(showModal(LOGIN_MODAL));
  }

  toggleRegister = () => {
    let { dispatch } = this.props;
    dispatch(hideModal(LOGIN_MODAL));
    dispatch(showModal(REGISTER_MODAL));
  }

  render() {
    let { dispatch, visible } = this.props;
    return (
      <div className={ classNames("auth-widget", { visible }) }>
        <LoginModal
          submitLogin={ (u, p) => dispatch(login(u, p)) }
          toggleRegister={ this.toggleRegister }
          />
        <RegisterModal
          submitRegister={ (u, p) => dispatch(register(u, p)) }
          toggleLogin={ this.toggleLogin }
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { authed } = state.session
  const modals = _.pick(state.modal, [ LOGIN_MODAL, REGISTER_MODAL ]);
  const visible = !authed && _.find(modals, { show: true });
  return { visible };
}

export default connect(mapStateToProps)(AuthWidget)
