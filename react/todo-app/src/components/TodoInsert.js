// 일정 추가

import React from 'react';
import { MdAdd as AddIcon } from 'react-icons/md';
import './TodoInsert.scss';
import { useState } from 'react';
import { useCallback } from 'react';

function TodoInsert({ setTodos, handleInsert }) {
  const [value, setValue] = useState('');

  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const handleSubmit = useCallback(e => {
    // submit으로 인한 브라우저 새로고침 방지
    e.preventDefault();
    // console.log(e);
    // console.log(e.target[0].value);
    // console.log(value);

    // 내 방식
    // setTodos(todo => todo.concat({
    //   id: todo.length + 1,
    //   text: value,
    //   checked: false
    // }));

    // 수업 방식
    handleInsert(value);

    setValue('');
  }, [value, handleInsert]);


  return (
    <form className='TodoInsert' onSubmit={handleSubmit}>
      <input 
        placeholder='할 일을 입력하세요'
        value={value}
        onChange={handleChange}
      />
      <button type='submit'>
        <AddIcon />
      </button>
    </form>
  );
}

export default TodoInsert;