/** @format */

import React, { Component } from "react";

class Play extends Component{
  render() {
    const name = "리액트";
    return (
      <header className="site">
        <h2> 노는 사이트</h2>
        <ul>
          <li>
            <a href="https://www.ilbe.com">{name} 일간베스트 </a>
          </li>
          <li>
            <a href="https://gall.dcinside.com/">디시인사이드 </a>
          </li>
          <li>
            <a href="https://www.naver.com">네이버 </a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Play;
