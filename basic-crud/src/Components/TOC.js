/** @format */

import React, { Component } from "react";

class TOC extends Component {
  shouldComponentUpdate(newProps, newState) {
    //shouldComponentUpdate는 성능을 올리기 위한게 주된 이유고 밑에 자꾸 render 불러오는게 짜증나서
    //다만 F5해서 완전히 새로고침 하지 않는한. create로 추가한 내용이 사라지지는 않는다
    //이게 움직이고 나서 밑에 render가 움직임. 이건 2개의 매개변수를 갖게끔 약속되어있음.
    //newProps 이걸로 바뀐값을 알 수 있고, this.prop.data는 현재의 값을 알 수 있음.
    //새롭게 바뀐것과, 이전값에 접근할 수 있다. 이걸 통해 TOC로 들어오는데이터가 바뀌었을때
    //렌더가 호출되고, 바뀌지 않았으면 reder가 호출되지 않게끔. 할수 있게 하자.
    console.log("TOC 슈드", newProps.data, this.props.data);
    if (this.props.data === newProps.data) {
      return false; //이전데이터와 새로운데이터 바뀐게 없으니 false리턴
    }
    return true; //이게 true면 밑에 render가 호출, false이면 render 호출 안됨.
    //맨처음 초기 창 띠우거나 F5 새로고침에는 false라고 하더라도 render가 호출.
    //원본과 새로운 데이터를 비교하기 때문에 concat을 써야함. push는 원래걸 바꾸기 때문에 안됨.
    //그렇기에 push를 사용하면 첫번째, 두번째 둘다 4개가 된다는 말이다. 같다는말 갯수가.
  }
  render() {
    console.log("TOC 랜더");
    var lists = [];
    var data = this.props.data;
    var i = 0;
    while (i < data.length) {
      lists.push(
        //밑에 key 안 넣어주면 콘솔에서 넣어달라고 에러뜸.
        <li key={data[i].id}>
          　
          <a
            href={"/content/" + data[i].id}
            data-id={data[i].id}
            onClick={(e) => {
              e.preventDefault();
              console.log(e);
              this.props.onChangePage(e.target.dataset.id);
            }}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC;
