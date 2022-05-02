import React, { useState } from 'react';
import styled from 'styled-components';
import MemoFooter from './MemoFooter';

import MemoHeader from './MemoHeader';
import MemoList from './MemoList';
import MemoWrite from './MemoWrite';
import { Outlet } from 'react-router-dom';

const MemoTemplateWrapper = styled.div`
  width: 512px;
  height: 768px;
  margin: 0 auto;
  margin-top: 3rem;
  background: #222222;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
`;

function MemoTemplate({ memos }) {
  

  return (
    <MemoTemplateWrapper>
      <MemoHeader />
      {<Outlet />}
      <MemoFooter count={memos.length} />
    </MemoTemplateWrapper>
  );
}

export default React.memo(MemoTemplate);