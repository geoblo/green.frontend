import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

function TodoListItem({ todo, handleRemove, handleToggle, style }) {
  const { id, text, checked } = todo;

  return (
    <div className='TodoListItem-virtualized' style={style}>
      <div className='TodoListItem'>
        <div className={cn('checkbox', { checked })} onClick={() => handleToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className='text'>{text}</div>
        </div>
        <div className='remove' onClick={() => handleRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
}

export default React.memo(TodoListItem);