import React, { Component, PropTypes } from "react";
import { Field } from "redux-form";
import classNames from "classnames";

export class PasswordInput extends Component {
  render() {
    let { label, model, className, ...props } = this.props;
    return (
      <div className={ classNames(className, "password input") }>
        { label && <label htmlFor={ model }>{ label }</label> }
        <Field name={ model } component="input" type="password" { ...props } />
      </div>
    );
  }
}

PasswordInput.propTypes = {
  label: PropTypes.string,
  model: PropTypes.string.isRequired
}

export default PasswordInput;
