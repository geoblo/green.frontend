import React, { Component } from 'react';

class CreateRef extends Component {
  inputRef = React.createRef();

  handleFocus = () => {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input 
          ref={this.inputRef}
        />
      </div>
    );
  }
}

export default CreateRef;