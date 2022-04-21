import React, { useState } from 'react';

function ComponentExam(props) {
  const [result, setResult] = useState('값 없음');
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleAdd = () => {
    setResult(() => num1 + num2);
  };
  const handleSub = () => {
    setResult(() => num1 - num2);

  };
  const handleMul = () => {
    setResult(() => num1 * num2);

  };
  const handleDiv = () => {
    setResult(() => num1 / num2);
  };

  console.log(num1, num2);

  return (
    <div>
      <p style={{ fontWeight: 'bold', color: 'green' }}>결과: {result}</p>
      숫자1: <input type="text" onChange={e => setNum1(Number(e.target.value))} />
      숫자2: <input type="text" onChange={e => setNum2(Number(e.target.value))} />
      <br /><br />
      <button onClick={handleAdd}>더하기</button>
      <button onClick={handleSub}>빼기</button>
      <button onClick={handleMul}>곱하기</button>
      <button onClick={handleDiv}>나누기</button>
    </div>
  );
}

export default ComponentExam;