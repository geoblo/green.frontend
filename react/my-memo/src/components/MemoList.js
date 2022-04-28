import { memo, useCallback } from 'react';
import styled from "styled-components";
import { 
  BsPinFill as PinIcon
} from "react-icons/bs";

const MemoListWrapper = styled.div`
  height: 100vh;
  padding: 1.5rem;
`;

const FixedMemoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const MemoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const MemoBox = styled.div`
  width: 31%;
  height: 100px;
  
  background: #555555;
  border-radius: 6px;
  padding: .5rem;

  font-size: 12px;
  cursor: pointer;

  &:hover {
    border: 2px solid pink;
  }
`;

function MemoList({ memos, setMemos }) {
  const handleToggleFixed = useCallback(id => {
    console.log(id);

    setMemos(memos => memos.map(memo => memo.id === id ? {
      ...memo,
      fixed: !memo.fixed
    } : 
    memo));
  }, [setMemos]);

  return (
    <MemoListWrapper>
      <p style={{ marginBottom: '0.5rem' }}>고정된 메모</p>
      <FixedMemoContainer>
        {memos.filter(memo => memo.fixed === true).map(memo => 
          <MemoBox key={memo.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>{memo.title}</p>
              <PinIcon size="0.8rem" color="yellow" onClick={() => handleToggleFixed(memo.id)} />
            </div>
            <hr />
            <span>{memo.desc}</span>
          </MemoBox>)
        }
      </FixedMemoContainer>
      <p style={{ marginBottom: '0.5rem' }}>메모</p>
      <MemoContainer>
        {memos.filter(memo => memo.fixed === false).map(memo => 
          <MemoBox key={memo.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <p>{memo.title}</p>
              <PinIcon size="0.8rem" onClick={() => handleToggleFixed(memo.id)} />
            </div>
            <hr />
            <span>{memo.desc}</span>
          </MemoBox>)
        }
      </MemoContainer>
    </MemoListWrapper>
  );
}

export default memo(MemoList);