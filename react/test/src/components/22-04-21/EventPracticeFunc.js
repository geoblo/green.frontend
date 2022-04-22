import React, { useState } from 'react';

function EventPracticeFunc(props) {
  const [form, setForm] = useState({ username: '', message: '' });

  // 값 할당
  const { username, message } = form;

  console.log('form2: ', form);

  const handleChange = e => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };

    console.log('nextForm: ', nextForm);
    setForm(nextForm);
    console.log('form: ', form);

    // 2번째 방법
    // setForm(form => ({
    //   ...form,
    //   [e.target.name]: e.target.value
    // }));

    // console.log('form: ', form);
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  const handleClick = () => {
    setForm({
      username: '',
      message: ''
    });

    // console.log('form1: ', form);
  };


  return (
    <div>
      <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder='사용자명'
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder='메시지'
          value={form.message}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleClick}>초기화</button>
    </div>
  );
}

export default EventPracticeFunc;