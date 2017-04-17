import React, { Component, PropTypes } from "react";
import classNames from "classnames";

export class TextButton extends Component {
  render() {
    let { label, className, ...props } = this.props;
    if (!label) label = this.props.children;
    return (
      <a className={ classNames(className, "text button") } { ...props }>
        { label }
      </a>
    );
  }
}

TextButton.propTypes = {
  label: PropTypes.string,
  //onClick: PropTypes.method.isRequired
}

export default TextButton;
