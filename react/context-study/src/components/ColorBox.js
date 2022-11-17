import React, { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

function ColorBox(props) {
  const { state } = useContext(ColorContext);

  return (
    // <ColorConsumer>
      // {value => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              // background: value.state.color
              background: state.color
            }}
          >
          </div>
          <div
            style={{
              width: "32px",
              height: "32px",
              // background: value.state.subcolor
              background: state.subcolor
            }}
          >
          </div>
        </>
      // )}
    // </ColorConsumer>
  );
}

export default ColorBox;