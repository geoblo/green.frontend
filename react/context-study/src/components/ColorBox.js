import React from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

function ColorBox(props) {
  return (
    <ColorConsumer>
      {value => (
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: value.state.color
            }}
          >
          </div>
          <div
            style={{
              width: "32px",
              height: "32px",
              background: value.state.subcolor
            }}
          >
          </div>
        </>
      )}
    </ColorConsumer>
  );
}

export default ColorBox;