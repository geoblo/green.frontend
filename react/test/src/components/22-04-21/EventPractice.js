import React, { Component } from 'react';

class EventPractice extends Component {

  state = {
    message: '',
    username: '',
  };

  // 2번째 방법
  // constructor(props) {
  //   super(props);
  //   // 이벤트 핸들링 함수 바인딩
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    });
  }
  handleClick = (e) => {
    this.setState({
      message: '',
      username: ''
    });
  }
  handleKeypress = (e) => {
    console.log(e.keyCode, e.key);

    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder='사용자명'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder='메시지'
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}
        />
        {/* <input
          type="text"
          name="message"
          placeholder='아무거나 입력'
          value={this.state.message}
          // 1번째 방법
          // onChange={e => {
          //   this.setState(() => ({
          //     message: e.target.value,
          //   }));
          // }}
          onChange={this.handleChange}
        /> */}
        <button onClick={this.handleClick}>초기화</button>
      </div>
    );
  }
}

export default EventPractice;