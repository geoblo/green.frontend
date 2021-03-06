import React from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

// Ref와 차이?
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function SelectColors(props) {
  return (
    <div>
      <h2>색상을 선택</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {colors.map(color => (
              <div
                key={color}
                style={{ background: color, width: '24px', height: '24px', cursor: 'pointer' }}
                onClick={() => actions.setColor(color)}
                onContextMenu={e => {
                  e.preventDefault();
                  actions.setSubcolor(color);
                }}
              >
              </div>
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
}

export default SelectColors;