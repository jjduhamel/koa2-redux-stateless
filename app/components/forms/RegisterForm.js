import React, { Component, PropTypes } from "react";
import { Field, reduxForm } from "redux-form";
import classNames from "classnames";

import { REGISTER_FORM } from "../../constants/forms";

import { TextInput } from "../inputs/TextInput";
import { PasswordInput } from "../inputs/PasswordInput";

import { validatePassword } from "../../helpers/validate";
import { NO_CONFIRM, PASSWORD_OK } from "../../constants/password";

function validate(fields) {
  let errors = {};
  let { password, confirmPassword } = fields;
  let status = validatePassword(password);
  if (PASSWORD_OK !== status) errors.password = status;
  if (password !== confirmPassword) errors.confirmPassword = NO_CONFIRM;
  return errors;
}

class RegisterForm extends Component {
  render() {
    const { handleSubmit, className, pristine, submitting } = this.props;
    return (
      <form className={ classNames(className, "login form") } onSubmit={ handleSubmit }>
        <div className="title">Register</div>
        <TextInput model="username" placeholder="Username" />
        <PasswordInput model="password" placeholder="Password" />
        <PasswordInput model="confirmPassword" placeholder="Confirm Password" />
        <div>
          <button type="submit" disabled={ pristine || submitting }>Register</button>
        </div>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: REGISTER_FORM,
  validate
})(RegisterForm);

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default RegisterForm;
