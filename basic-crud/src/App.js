/** @format */

import React, { Component } from "react";
import TOC from "./Components/TOC";
import ReadContent from "./Components/ReadContent";
import Subject from "./Components/Subject";
import Control from "./Components/Control";
import CreateContent from "./Components/CreateContent";
import UpdateContent from "./Components/UpdateContent";

class App extends Component {
  constructor(props) {
    //컴포넌트가 실행될때 , constructor 가 존재하면 랜더 전에 실행, 초기화를 담당,
    //state를 위해서 꼭 constructor를 적어야 하는게 아님.
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "welcome",
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

  getReadContent()
  { var i = 0;
    while (i < this.state.content.length) {
      var data = this.state.content[i];
      if (data.id === this.state.selected_content_id) {
        return data;
        }
      i = i + 1;
    }
    }
  getContent() {
    var _title = null;
    var _desc = null;
    var _article = null;

    if (this.state.mode === "welcome") 
    { _title   = this.state.welcome.title;
      _desc    = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc} />;} 

      else if (this.state.mode === "read")
       { var _content = this.getReadContent();
        console.log(_content);
         _article = <ReadContent title={_content.title} desc={_content.desc} />; }

         else if (this.state.mode === "create") 
         { _article = ( <CreateContent onSubmit={(_title, _desc) => {
            this.max_content_id += 1;
            // this.state.content.push({ id: this.max_content_id, title: _title, desc: _desc });
            // this.setState({ content: this.state.content }); //이 방법은 성능이 나쁘다.
            
            var newContent = Array.from(this.state.content);
            newContent.push({ id: this.max_content_id, title: _title, desc: _desc });
            this.setState({ content: newContent, mode:"read", selected_content_id:this.max_content_id });

            // var _contents = this.state.content.concat({
            //   id: this.max_content_id, //concat은 원본을 바꾸지 않음. 그래서 변수안에 넣어야함.
            //   title: _title, desc: _desc, });
            //   this.setState({ content: _contents });
            // console.log(_contents);
            
          }}/>);
        } else if (this.state.mode === "update") 
          { _content = this.getReadContent();
            _article = ( 
           <UpdateContent data={_content} onSubmit={(_id, _title, _desc) => {
            var _content = Array.from(this.state.content); //배열을 복제한거임. 원본 바꾼건 아니고.
            var i = 0;
            while( i < _content.length){
             if(_content[i].id === _id){
               _content[i] = {id:_id, title:_title, desc:_desc};
               break;
             }
              i = i + 1;
            }
            this.setState({ content: _content, mode:"read" }); }} 
            />);
    }
    return _article;
  }
  render() {
    console.log("App render");
    return (
      <div className="App">
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}
          onChangePage={() => { this.setState({ mode: "welcome" }); }}/>
        {/* 원본을 교체한거라 보면됨 */}
        <TOC onChangePage={(id) => {this.setState({ mode: "read", selected_content_id: Number(id) });}} 
            data={this.state.content}/> 
            {/* 이걸로 TOC에 데이터 전달 */}
        {/* //위에 number로 인해 id가 원래 문자 였는데 숫자로 됨. */}
        <Control onChangeMode={(_mode) => {
          if(_mode === "delete"){
            if(window.confirm("Really?")){
             var _content = Array.from(this.state.content);
             var i = 0 ;
             while( i < _content.length){
              if(_content[i].id === this.state.selected_content_id){
                _content.splice(i,1); //splice란게 삭제하는거임. 뒤 숫자 1은 1개 지우겟다고.
                break;
              }
              i= i + 1;
            }
            this.setState({ mode:"welcome", content:_content})
            alert("Completed Delete")
          }} else {
          this.setState({ mode: _mode });
        }}}/>
        {/* //onChangeMode가 호출될때 인자를 받아야지
        //_mode여기에 각종 create, update등등 들어옴 */} 
        {this.getContent()}
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
