import React, { Component, PropTypes } from "react";
import { Field, reduxForm } from "redux-form";
import classNames from "classnames";

import { LOGIN_FORM } from "../../constants/forms";

import { TextInput } from "../inputs/TextInput";
import { PasswordInput } from "../inputs/PasswordInput";

import { validatePassword } from "../../helpers/validate";
import { PASSWORD_OK } from "../../constants/password";

function validate(fields) {
  let errors = {};
  let { password } = fields;
  let status = validatePassword(password);
  if (PASSWORD_OK !== status) errors.password = status;
  return errors;
}

class LoginForm extends Component {
  render() {
    const { handleSubmit, className, pristine, submitting } = this.props;
    return (
      <form className={ classNames(className, "login form") } onSubmit={ handleSubmit }>
        <div className="title">Login</div>
        <TextInput model="username" placeholder="Username" />
        <PasswordInput model="password" placeholder="Password" />
        <div>
          <button type="submit" disabled={ pristine || submitting }>Log In</button>
        </div>
      </form>
    );
  }
}

LoginForm = reduxForm({
  form: LOGIN_FORM,
  validate
})(LoginForm);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default LoginForm;
