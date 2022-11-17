import React, { useReducer } from 'react';

function reducer(state, action) {
  console.log(state);
  console.log(action);

  return {
    ...state,
    [action.name]: action.value,
  };
}

function InfoReducer(props) {
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  const { name, nickname } = state;

  const handleChange = e => {
    dispatch(e.target);
  };

  return (
    <>
      <div>
        <input name='name' value={name} onChange={handleChange} />
        <input name='nickname' value={nickname} onChange={handleChange} />
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

export default InfoReducer;