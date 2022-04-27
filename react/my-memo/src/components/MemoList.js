import styled from "styled-components";

const MemoListWrapper = styled.div`
  /* height: 100vh; */

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  padding: 1.5rem;
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

function MemoList({ memos }) {
  return (
    <MemoListWrapper>
      {memos.map(memo => 
        <MemoBox>
          <p>{memo.title}</p>
          <hr />
          <span>{memo.desc}</span>
        </MemoBox>)
      }
    </MemoListWrapper>
  );
}

export default MemoList;