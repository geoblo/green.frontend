import useInputs from './useInputs';

function InfoCustomHook(props) {
  const [state, handleChange] = useInputs({
    name: '',
    nickname: ''
  });
  const { name, nickname } = state;

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

export default InfoCustomHook;