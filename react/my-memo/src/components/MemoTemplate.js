import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import MemoHeader from './MemoHeader';
import MemoFooter from './MemoFooter';

import { useMemoState } from '../contexts/MemoContext';

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

function MemoTemplate() {
  const { memos } = useMemoState();

  return (
    <MemoTemplateWrapper>
      <MemoHeader />
      {<Outlet />}
      <MemoFooter count={memos.length} />
    </MemoTemplateWrapper>
  );
}

export default React.memo(MemoTemplate);