import React, { Component } from "react";

class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="/create"
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangeMode("create");
            }}
          >
            Create
          </a>
        </li>
        <li>
          <a
            href="/update"
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangeMode("update");
            }}
          >
            Update
          </a>
        </li>
        <li>
          <button
            value="delete"
            onClick={(e) => {
              e.preventDefault();
              this.props.onChangeMode("delete");
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    );
  }
}

export default Control;
