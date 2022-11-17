import React, { Component } from 'react';

class Counter extends Component {
  // 1. 생성자를 이용한 초기화 방법
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;

    console.log(this.state);

    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            // 1번 방법
            // this.setState({ number: number + 1 });

            // 2번 방법
            // this.setState(prevState => {
            //   console.log(prevState);
            //   return {
            //     number: prevState.number + 1,
            //   };
            // });

            // 3번 방법
            // this.setState(prevState => ({
            //   number: prevState.number + 1,
            // }));

            // 4번 방법 (콜백함수 추가)
            this.setState({ 
              number: number + 1 
            }, () => {
              console.log('this.state: ', this.state);
            });
          }}
        >
          더하기1
        </button>
      </div>
    );
  }
}

export default Counter;
