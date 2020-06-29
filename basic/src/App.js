import React, { Component } from "react";
import TOC from "./Components/TOC";
import Content from "./Components/Content";
import Subject from "./Components/Subject";

class App extends Component {
  constructor(props) {
    //컴포넌트가 실행될때 , constructor 가 존재하면 초기화를 담당,
    super(props);
    this.state = {
      mode: "read",
      selected_content_id: 1,
      subject: { title: "web", sub: "world wide web" },
      welcome: { title: "welcome", desc: "Hello , React!!!" },
      content: [
        { id: 1, title: "HTML", desc: "HTML is hypertext" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JAVASCRIPT", desc: "javascript is for interactive" },
      ],
    }; //리액트에서는 state의 값이 바뀌면, 그 state를 가지고 있는 컴포넌트 렌더함수가 다시 호출됨
  } //그리고 그 렌더함수 하위에 있는 컴포넌트도 각자 싹 호출됨. 즉 화면이 다시 그려짐.

  render() {
    console.log("App render");
    var _title = null;
    var _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === "read") {
      var i = 0;
      while (i < this.state.content.length) {
        var data = this.state.content[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={() => {
            this.setState({ mode: "welcome" });
          }}
        />
        <TOC
          onChangePage={(id) => {
            this.setState({ mode: "read", selected_content_id: Number(id) });
          }} //위에 number로 인해 id가 원래 문자 였는데 숫자로 됨.
          data={this.state.content}
        />
        <Content title={_title} desc={_desc} />
      </div> //어떤 HTML을 그릴건지 결정하는 함수가 render
    );
  }
}

export default App;

//  <header>
//  <h1> <a href="/" onClick={(e) => { console.log(e);
//   e.preventDefault();
//   this.setState({ mode: "welcome" });}} >
//  {this.state.subject.title}</a></h1>
//  {this.state.subject.sub}
//  </header>
