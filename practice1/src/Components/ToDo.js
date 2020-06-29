/** @format */

import React, { Component } from "react";

class ToDo extends Component {
  render() {
    console.log(this.props);

    return (
      <study>
        <h2>{this.props.title}</h2>
        <h3>{this.props.what}</h3>
        <h4>{this.props.why}</h4>
      </study>
    );
  }
}

export default ToDo;
