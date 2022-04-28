import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보이는 페이지</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles/kjh">김재현의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">길동의 프로필</Link>
        </li>
        <li>
          <Link to="/profiles/void">없는 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;