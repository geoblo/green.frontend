import React, { useState } from 'react';

function Info(props) {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <>
      <div>
        <input value={name} onChange={handleChangeName} />
        <input value={nickname} onChange={handleChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름: </b>{name}
        </div>
        <div>
          <b>닉네임: </b>{nickname}
        </div>
      </div>
    </>
  );
}

export default Info;