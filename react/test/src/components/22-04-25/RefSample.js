import React, { useRef } from 'react';

function RefSample(props) {
  const id = useRef(1);
  
  const setId = n => {
    id.current = n;
  }

  const printId = () => {
    console.log(id.current);
  };

  // setId(2);
  printId();

  return (
    <>
      <div>
        {id.current}
      </div>
      <button onClick={() => setId(2)}>변경</button>
    </>
  );
}

export default RefSample;