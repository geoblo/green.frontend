import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
  kjh: {
    name: '김재현',
    description: '리액트 공부 중'
  },
  gildong: {
    name: '홍길동',
    description: '아버지 아부지 할아부지'
  },
};

function Profile(props) {
  const params = useParams();
  // console.log(params);
  // debugger;
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
}

export default Profile;