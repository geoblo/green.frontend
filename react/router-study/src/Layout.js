import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Layout(props) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const goArticles = () => {
    navigate('/articles');
  };

  return (
    <div>
      <header style={{ background: 'gray', padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;