import React, { Component } from "react";

class CreateContent extends Component {
  render() {
    return (
      <article>
        <h2>Create</h2>
        <form
          action="/create_process"
          method="post"
          onSubmit={(e) => {
            e.preventDefault(); //원래 위에 action누르면 페이지 바뀌는데 못 바뀌게 막음.
            //debugger;
            this.props.onSubmit(e.target.title.value, e.target.desc.value);
            //첫번쨰 두번쨰가 APP.js 의 onSubmit={(_title, _desc) 로 차례대로 가는거.
          }}
        >
          <p>
            <input type="text" name="title" placeholder="title" />
          </p>
          <p>
            <textarea name="desc" placeholder="description" />
          </p>
          <p>
            <input type="submit" />
          </p>
        </form>
      </article>
    );
  }
}

export default CreateContent;

//위에 onSubmit은 submit이 되면 이벤트 실행, HTML의 폼 기능이 가진 고유한 기능
