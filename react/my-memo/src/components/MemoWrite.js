import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useMemoState } from '../contexts/MemoContext';

const MemoWriteWrapper = styled.div`
  height: 100vh;
  padding: 1.5rem;
`;

const TitleInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 1.25rem;
  background: ${props => props.theme.memoBg};
  color: white;
  padding: 0.5rem;

  ::placeholder {
    color: white;
    opacity: 1;
  }
`;

const DescTextarea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  background: ${props => props.theme.memoBg};
  color: white;
  font-weight: 300;
  font-size: 1.1rem;
  margin-top: 1rem;
  padding: 0.5rem;

  ::placeholder {
    color: white;
    opacity: 1;
  }
`;

function MemoWrite(props) {
  const { setMode, form, handleChangeForm } = useMemoState();
  
  useEffect(() => {
    setMode('WRITE');
  }, [setMode]);

  return (
    <MemoWriteWrapper>
      <TitleInput
        name="title"
        value={form.title || ''}
        placeholder="제목 입력"
        onChange={handleChangeForm}
      />
      <DescTextarea
        name="desc"
        rows={26}
        value={form.desc || ''}
        placeholder="내용 입력"
        onChange={handleChangeForm}
      />
    </MemoWriteWrapper>
  );
}

export default MemoWrite;