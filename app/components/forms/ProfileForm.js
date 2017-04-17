import React, { Component, PropTypes } from "react";
import { Field, reduxForm } from "redux-form";
import classNames from "classnames";

import { PROFILE_FORM } from "../../constants/forms";

import { TextInput } from "../inputs/TextInput";
import { PasswordInput } from "../inputs/PasswordInput";

import { validatePassword } from "../../helpers/validate";

function validate(fields) {
  let errors = {};
  let { username, email, firstName, lastName, phoneNumber } = fields;
  return errors;
}

class ProfileForm extends Component {
  render() {
    const { handleSubmit, className, pristine, submitting } = this.props;
    return (
      <form className={ classNames(className, "profile form") } onSubmit={ handleSubmit }>
        <div className="title">Profile</div>
        <TextInput model="username" placeholder="Username" />
        <TextInput model="email" placeholder="Email" />
        <TextInput model="firstName" placeholder="First Name" />
        <TextInput model="lastName" placeholder="Last Name" />
        <TextInput model="phoneNumber" placeholder="Phone Number" />
        <div>
          <button type="submit" disabled={ pristine || submitting }>Update</button>
        </div>
      </form>
    );
  }
}

ProfileForm = reduxForm({
  form: PROFILE_FORM,
  validate
})(ProfileForm);

ProfileForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default ProfileForm;
