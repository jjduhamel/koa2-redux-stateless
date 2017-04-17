import React, { Component } from "react";

import TextInput from "./TextInput";

export class EmailInput extends Component {
  render() {
    let { ...props } = this.props;
    return (
      <TextInput { ...props } />
    );
  }
}

export default EmailInput;
