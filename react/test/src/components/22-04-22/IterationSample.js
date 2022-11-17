import React, { useState } from 'react';

function IterationSample(props) {
  // 1번째 방식
  // const names = ['눈사람', '불사람', '큰사람', '작은사람'];
  // const nameList = names.map(name => <li>{name}</li>);
  
  // 2번째 방식
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '불사람' },
    { id: 3, text: '큰사람' },
    { id: 4, text: '작은사람' },
  ]);

  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const handleChange = e => setInputText(e.target.value);

  const handleAdd = () => {
    // const nextNames = names.concat({
    //   id: nextId,
    //   text: inputText
    // });
    // setNames(nextNames);

    // 여기서는 2가지 방식 모두 동일
    // setNames(names => names.concat({ id: nextId, text: inputText }));
    setNames(names.concat({ id: nextId, text: inputText }));

    setNextId(nextId + 1);
    setInputText('');
  };

  const handleRemove = id => {
    setNames(names.filter(name => name.id !== id));
  };

  return (
    <>
      <input 
        value={inputText}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>추가</button>
      <ul>
        {/* 1번째 방식 */}
        {/* {nameList} */}
        {/* {names.map((name, index) => 
          <li key={index}>{name}</li>
        )} */}
        {names.map((name, index) => 
          <li
            key={name.id}
            id={name.id}
            onDoubleClick={() => handleRemove(name.id)}
          >
            {name.text}
          </li>
        )}
      </ul>
    </>
  );
}

export default IterationSample;