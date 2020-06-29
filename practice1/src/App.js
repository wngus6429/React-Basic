/** @format */

import React, { Component } from "react";
import Play from "./Components/Play";
import ToDo from "./Components/ToDo";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      status : "welcome",
      selected_Todo_id : 1,
      ToDo : [{ id:1, title:"공부목록1", what:"자바스크립트", why:"취업" },
              { id:2, title:"전직", what:"전직사이트이용", why:"씨발마츠오"},
    ]
    }
  };
  render(){
    // var _title = null;
    // var _what = null;
    // var _why = null;
    // if (this.state.status === "study")
    // var i = 0;
    // while (i < this.state.ToDo.length){
    //   var data = this.state.ToDo[i];
    //   if(data.id === this.state.selected_Todo_id)
    //   _title = data.title;
    //   _what = data.what;
    //   _why = data.why;
    // }
  return (
    <div className="App">
      <h1>나는 프로그래밍 공부를 해야한다.</h1>
      <Play />
      <h1>그 전에 해야할 일 ToDo</h1>
      <ToDo title={this.state.ToDo.title} what={this.state.ToDo.what} why={this.state.ToDo.why}/>
    </div>
  );
}}

export default App;
