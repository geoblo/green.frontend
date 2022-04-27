import { useState, useRef, useCallback, useReducer } from 'react';
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT':
      return todos.concat(action.todo);
    case 'REMOVE':
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      return todos.map(todo => todo.id === action.id ? { ...todo, checked: !todo.checked } : todo);
    default:
      return todos;
  }
}

function App() {
  // 방법1
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: '리액트의 기초 알아보기',
  //     checked: true
  //   },
  //   {
  //     id: 2,
  //     text: '컴포넌트 스타일링 하기',
  //     checked: false
  //   },
  //   {
  //     id: 3,
  //     text: '일정관리 앱 만들기',
  //     checked: false
  //   }
  // ]);

  // const nextId = useRef(4);

  // 방법2
  // const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501);

  // 방법3
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const handleInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false
    }

    // todos를 의존성에서 뺄 수 있는 코딩 방법
    // setTodos(todos => todos.concat(todo));

    // 방법3
    dispatch({ type: 'INSERT', todo });

    nextId.current++;
  }, []);

  const handleRemove = useCallback(id => {
    // setTodos(todos => todos.filter(todo => todo.id !== id));
    dispatch({ type: 'REMOVE', id });
  }, []);

  const handleToggle = useCallback(id => {
    // setTodos(todos => 
    //   todos.map(todo => 
    //     todo.id === id 
    //       ? { ...todo, checked: !todo.checked } 
    //       : todo
    //   )
    // );

    dispatch({ type: 'TOGGLE', id });
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert 
        // setTodos={setTodos} 
        handleInsert={handleInsert} 
      />
      <TodoList todos={todos} handleRemove={handleRemove} handleToggle={handleToggle} />
    </TodoTemplate>
  );
}

export default App;
