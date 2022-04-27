import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';

function TodoList({ todos, handleRemove, handleToggle }) {
  const rowRenderer = useCallback(({ index, key, style }) => {
    const todo = todos[index];

    return (
      <TodoListItem
        key={todo.id}
        todo={todo}
        handleRemove={handleRemove}
        handleToggle={handleToggle}
        style={style}
      />  
    );
  }, [todos, handleRemove, handleToggle]); 

  return (
    <div className='TodoList'>
      <List 
      className='TodoList'
        width={512}
        height={513}
        rowCount={todos.length}
        rowHeight={57}
        rowRenderer={rowRenderer}
        list={todos}
        style={{ outline: 'none' }}
      />
      {/* {todos.map(todo => 
        <TodoListItem key={todo.id} todo={todo} handleRemove={handleRemove} handleToggle={handleToggle} />  
      )} */}
    </div>
  );
}

export default React.memo(TodoList);