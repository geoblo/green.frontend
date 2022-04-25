import React, { useState, useMemo, useCallback, useRef } from 'react';

function getAverage(numbers) {
  console.log('평균 계산 중');
  
  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
}

function Average(props) {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const inputEl = useRef(null);

  const handleChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const handleInsert = useCallback(e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');

    inputEl.current.focus();
  }, [list, number]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input
        ref={inputEl}
        value={number}
        onChange={handleChange}
      />
      <button onClick={handleInsert}>등록</button>
      <ul>
        {list.map((value, index) => (<li key={index}>{value}</li>))}
      </ul>
      <div>
        {/* <b>평균값: </b>{getAverage(list)} */}
        <b>평균값: </b>{avg}
      </div>
    </div>
  );
}

export default Average;