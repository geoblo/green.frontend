import React, { useEffect, useState } from 'react';

function InfoEffect(props) {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('렌더링이 완료되었습니다.');
    console.log({
      name,
      nickname
    });

    // 클린업 실행
    return () => {
      console.log('네임 값이 바뀌기전... 이전값: ', name, nickname);
      console.log('clean-up');
    };
  }, [name]);

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

export default InfoEffect;