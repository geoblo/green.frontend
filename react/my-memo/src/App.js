import { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import MemoTemplate from './components/MemoTemplate';
import MemoFooter from "./components/MemoFooter";
import MemoHeader from "./components/MemoHeader";
import MemoList from './components/MemoList';

const GlobalStyle = createGlobalStyle`
  ${reset};

  body {
    color: white;
    background: #e9ecef;
  }
`;

function App() {
  // dummy
  const [memos, setMemos] = useState([
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
  ]);

  return (
    <>
      <GlobalStyle />
      <MemoTemplate>
        <MemoHeader />
        <MemoList memos={memos} setMemos={setMemos} />
        <MemoFooter />
      </MemoTemplate>
    </>
  );
}

export default App;
