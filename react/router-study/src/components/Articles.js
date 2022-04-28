import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

function Articles(props) {
  return (
    <div>
      {/* <ul>
        <li>
          <Link to='/articles/1'>게시글1</Link>
        </li>
        <li>
          <Link to='/articles/2'>게시글2</Link>
        </li>
        <li>
          <Link to='/articles/3'>게시글3</Link>
        </li>
      </ul> */}

      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>

      <Outlet />
    </div>
  );
}

function ArticleItem({ id }) {
  const activeStyle = {
    color: 'green',
    fontSize: 21,
  };

  return (
    <li>
      <NavLink 
        to={`/articles/${id}`}
        style={({ isActive }) => isActive ? activeStyle : undefined}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
}

export default Articles;