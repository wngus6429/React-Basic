/** @format */

import React, { Component } from "react";

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
  }
  InputFormHandler = (e) => {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log("UpdateContent Render");
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={(e) => {
            e.preventDefault(); //원래 위에 action누르면 페이지 바뀌는데 못 바뀌게 막음.
            //debugger;
            this.props.onSubmit(this.state.id, this.state.title, this.state.desc);
          }}
        >
          <input type="hidden" name="id" value={this.state.id} />
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.InputFormHandler}
              //위에 state 안 만들고 그냥 하면, readonly되어서 바뀌지 않음.
            />
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.InputFormHandler}
              //위에 state 안 만들고 그냥 하면, readonly되어서 바뀌지 않음.
            />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;

//위에 onSubmit은 submit이 되면 이벤트 실행, HTML의 폼 기능이 가진 고유한 기능
