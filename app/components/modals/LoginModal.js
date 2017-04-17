import React, { Component, PropTypes } from "react";
import { connectModal } from "redux-modal";

import { LOGIN_MODAL } from "../../constants/modals";

import LoginForm from "../forms/LoginForm";
import TextButton from "../buttons/TextButton";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClick);
  }

  handleClick(event) {
    const { container } = this.refs;
    const { handleHide } = this.props;
    const { target } = event;

    if (target !== container && !container.contains(target)) {
      handleHide();
    }
  }

  handleSubmit = form => {
    let { submitLogin, handleHide } = this.props;
    submitLogin(form.username, form.password).then(handleHide);
  }

  render() {
    let { toggleRegister } = this.props;

    const RegisterLink = (
      <TextButton onClick={ toggleRegister }>
        Register Here
      </TextButton>
    );

    return (
      <div ref="container" className="login modal">
        <LoginForm onSubmit={ this.handleSubmit } />
        {
          toggleRegister &&
            <div className="caption">
              Don't have an account? No problem.&nbsp;{ RegisterLink }!
            </div>
        }
      </div>
    );
  }
}

LoginModal.propTypes = {
  submitLogin: PropTypes.func.isRequired,
  hideModal: PropTypes.func,
  toggleRegister: PropTypes.func
}

export default connectModal({ name: LOGIN_MODAL })(LoginModal);
