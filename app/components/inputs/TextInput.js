import React, { Component, PropTypes } from "react";
import { Field } from "redux-form";
import classNames from "classnames";

export class TextInput extends Component {
  render() {
    let { label, model, className, ...props } = this.props;
    return (
      <div className={ classNames(className, "text input") }>
        { label && <label htmlFor={ model }>{ label }</label> }
        <Field name={ model } component="input" type="text" { ...props } />
      </div>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string,
  model: PropTypes.string.isRequired
}

export default TextInput;
