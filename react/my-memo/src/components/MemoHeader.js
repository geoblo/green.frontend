import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useMemoState, useMemoDispatch, useMemoNextId } from "../contexts/MemoContext";

const MemoHeaderWrapper = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid gray;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const SaveButton = styled.span`
  cursor: pointer;
  font-size: 1.25rem;
  color: ${props => props.theme.button};
`;

function MemoHeader(props) {
  const { mode, form, handleClearForm } = useMemoState();
  const dispatch = useMemoDispatch();
  const nextId = useMemoNextId();
  const navigate = useNavigate()

  const handleSaveMemo = useCallback(() => {
    console.log(nextId.current, form.title, form.desc);

    dispatch({ 
      type: 'WRITE',
      memo: {
        id: nextId.current,
        title: form.title,
        desc: form.desc,
        fixed: false
      }
    });

    handleClearForm();
    nextId.current += 1;
    navigate('/', { replace: true });
  }, [dispatch, form, handleClearForm, nextId, navigate]);

  return (
    <MemoHeaderWrapper>
      <span>메모</span>
      {mode === 'WRITE' && 
        <SaveButton onClick={handleSaveMemo}>완료</SaveButton>
      }
    </MemoHeaderWrapper>
  );
}

export default React.memo(MemoHeader);