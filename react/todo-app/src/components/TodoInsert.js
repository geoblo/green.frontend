// 일정 추가

import React from 'react';
import { MdAdd as AddIcon } from 'react-icons/md';
import './TodoInsert.scss';

function TodoInsert(props) {
  return (
    <form className='TodoInsert'>
      <input 
        placeholder='할 일을 입력하세요'
      />
      <button type='submit'>
        <AddIcon />
      </button>
    </form>
  );
}

export default TodoInsert;