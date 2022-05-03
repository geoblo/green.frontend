import { createContext, useReducer, useState, useContext, useRef } from 'react';

const initialMemos = [
  {
    id: 1,
    title: '오늘 할일 남은 것',
    desc: '온라인 수업 듣기, 민턴 레슨 등',
    fixed: true
  },
  {
    id: 2,
    title: '택배 올 것',
    desc: '커피 머신, 오메가3',
    fixed: false
  },
  {
    id: 3,
    title: '주말 약속',
    desc: '민수 결혼식',
    fixed: true
  },
  {
    id: 4,
    title: '넷플릭스 볼것',
    desc: '없음...',
    fixed: false
  },
  {
    id: 5,
    title: '???',
    desc: '?????????????',
    fixed: false
  },
  {
    id: 6,
    title: '교육 필기',
    desc: '리이애액트으~',
    fixed: false
  },
  {
    id: 7,
    title: '민턴 레슨 일지',
    desc: '스매쉬 더 빠르고 강하게!!',
    fixed: false
  },
  {
    id: 8,
    title: '스시 맛집',
    desc: '영등포구청역 스시?',
    fixed: false
  },
  {
    id: 9,
    title: '사고싶은 것',
    desc: '급등주, 민턴 라켓',
    fixed: false
  },
];

function memoReducer(state, action) {
  switch (action.type) {
    case 'WRITE':
      return state.concat(action.memo);
    case 'FIXED':
      return state.map(memo =>
        memo.id === action.id ? { ...memo, fixed: !memo.fixed } : memo
      );
    case 'REMOVE':
      return state.filter(memo => memo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const MemoStateContext = createContext();
const MemoDispatchContext = createContext();
const MemoNextIdContext = createContext();

export function MemoProvider({ children }) {
  const [state, dispatch] = useReducer(memoReducer, initialMemos);
  const [form, setForm] = useState({
    title: '',
    desc: ''
  });
  const [mode, setMode] = useState('LIST');
  const nextId = useRef(10);

  const handleChangeForm = e => {
    setForm(form => ({
      ...form,
      [e.target.name]: e.target.value
    }));
  };

  const handleClearForm = e => {
    setForm({
      title: '',
      desc: ''
    });
  };

  return (
    <MemoStateContext.Provider value={{ memos: state, mode, setMode, form, handleChangeForm, handleClearForm }}>
      <MemoDispatchContext.Provider value={dispatch}>
        <MemoNextIdContext.Provider value={nextId}>
          {children}
        </MemoNextIdContext.Provider>
      </MemoDispatchContext.Provider>
    </MemoStateContext.Provider>
  );
}

export function useMemoState() {
  const context = useContext(MemoStateContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useMemoDispatch() {
  const context = useContext(MemoDispatchContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}

export function useMemoNextId() {
  const context = useContext(MemoNextIdContext);
  if (!context) {
    throw new Error('Cannot find TodoProvider');
  }
  return context;
}