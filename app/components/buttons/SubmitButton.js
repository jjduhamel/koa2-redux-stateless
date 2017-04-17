import React, { Component, PropTypes } from "react";
import { Control } from "react-redux-form";
import classNames from "classnames";

export class SubmitButton extends Component {
  render() {
    let { label, model, className, ...props } = this.props;
    return (
      <div className={ classNames(className, "submit button") }>
        <Control.button className="control" model={ model } { ...props }>
          { label }
        </Control.button>
      </div>
    );
  }
}

SubmitButton.propTypes = {
  label: PropTypes.string,
  model: PropTypes.string.isRequired
}

SubmitButton.defaultProps = {
  label: "Submit"
}

export default SubmitButton;
