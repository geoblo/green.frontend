import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = e => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000'
    });

    this.inputRef.focus();
  };

  render() {
    return (
      <div>
        <form>
          <input
            ref={(ref) => this.inputRef = ref}
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
            autoComplete="false"
          />
        </form>
        <button onClick={this.handleButtonClick}>검사</button>
      </div>
    );
  }
}

export default ValidationSample;