import React, { useState } from 'react';

function Says(props) {
  // 배열의 비구조화 할당
  const [message, setMessage] = useState('환영');
  const [color, setColor] = useState('pink');
  console.log(useState('pink'));

  const handleClickEnter = () => {
    setMessage('hi');
  };
  const handleClickLeave = () => setMessage('bye');


  return (
    <div>
      <button onClick={handleClickEnter}>입장</button>
      <button onClick={handleClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={() => { setColor('blue') }}>파란색</button>
      <button onClick={() => { setColor('green') }}>초록색</button>
      <button onClick={() => { setColor('red') }}>빨간색</button>
    </div>
  );
}

export default Says;