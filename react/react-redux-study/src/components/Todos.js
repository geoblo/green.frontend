import React from 'react';
import { useCallback } from 'react';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div>
      <input 
        type="checkbox"
        onClick ={() => onToggle(todo.id)}
        // onChange ={() => onToggle(todo.id)}
        checked={todo.done}
        readOnly
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
}

function Todos({ input, todos, onChangeInput, onInsert, onToggle, onRemove }) {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput(""); // 등록 후 인풋 초기화
  };

  const handleChange = useCallback(e => {
    onChangeInput(e.target.value)
  }, [onChangeInput]);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={handleChange} />
        <button type='submit'>등록</button>
      </form>
      <div>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />

        ))}
      </div>
    </div>
  );
}

export default Todos;