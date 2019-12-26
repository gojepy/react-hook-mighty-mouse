import React from 'react';

import StoryTabTemplate from 'story-tab-react';
import Demo from './Cursor.storytab';

const code = `import React from 'react';

import useMightyMouse from '../../src';
import './Cursor.storytab.scss';
import imgCheese from './img/cheese.png';

const Cursor = () => {
  const {
    position: { client },
  } = useMightyMouse();
  return (
    <div className="cursor">
      <img src={imgCheese} className="cheese" alt="pic" />
      <div id="cursor" style={{ left: client.x, top: client.y }}>
        🐭
      </div>
    </div>
  );
};

export default Cursor;
`;

const style = `.cursor {
  .cheese {
    cursor: none;
    width: 200px;

    &:hover + #cursor {
      display: block;
    }
  }

  #cursor {
    position: absolute;
    display: none;
    pointer-events: none;
  }
}
`;

const _Cursor = () => (
  <StoryTabTemplate code={code} style={style} codeExt="tsx" styleExt="scss">
    <Demo />
  </StoryTabTemplate>
);

export default _Cursor;
