import React, { Component } from "react";
import TOC from "./Components/TOC";
import ReadContent from "./Components/ReadContent";
import Subject from "./Components/Subject";
import Control from "./Components/Control";
import CreateContent from "./Components/CreateContent";

class App extends Component {
  constructor(props) {
    //컴포넌트가 실행될때 , constructor 가 존재하면 초기화를 담당,
    super(props);
    this.max_content_id = 3;
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
    //console.log("App render");
    var _title = null;
    var _desc = null;
    var _article = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;
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
      _article = <ReadContent title={_title} desc={_desc} />;
    } else if (this.state.mode === "create") {
      _article = (
        <CreateContent
          onSubmit={(_title, _desc) => {
            //add content to this.state.contents
            this.max_content_id += 1;
            // this.state.content.push({ id: this.max_content_id, title: _title, desc: _desc });
            // this.setState({ content: this.state.content }); //이 방법은 성능이 나쁘다.
            var _contents = this.state.content.concat({
              id: this.max_content_id, //concat은 원본을 바꾸지 않음. 그래서 변수안에 넣어야함.
              title: _title,
              desc: _desc,
            });
            console.log(_contents);
            this.setState({ content: _contents });
          }}
        />
      );
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
        <Control //onChangeMode가 호출될때 인자를 받아야지
          //_mode여기에 각종 create, update등등 들어옴
          onChangeMode={(_mode) => {
            this.setState({ mode: _mode });
          }}
        />
        {_article}
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
