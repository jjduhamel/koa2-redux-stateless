import React, { Component, PropTypes } from "react";
import { connectModal } from "redux-modal";

import { REGISTER_MODAL } from "../../constants/modals";

import TextButton from "../buttons/TextButton";
import RegisterForm from "../forms/RegisterForm";

class RegisterModal extends Component {
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
    let { submitRegister, handleHide } = this.props;
    submitRegister(form.username, form.password).then(handleHide);
  }

  render() {
    let { toggleLogin } = this.props;

    const LoginLink = (
      <TextButton onClick={ toggleLogin }>
        Log In Here
      </TextButton>
    );

    return (
      <div ref="container" className="register modal">
        <RegisterForm onSubmit={ this.handleSubmit } />
        {
          toggleLogin &&
            <div className="caption">
              Already have an account? Alright!&nbsp;{ LoginLink }.
            </div>
        }
      </div>
    );
  }
}

RegisterModal.propTypes = {
  submitRegister: PropTypes.func.isRequired
}

export default connectModal({ name: REGISTER_MODAL })(RegisterModal);
