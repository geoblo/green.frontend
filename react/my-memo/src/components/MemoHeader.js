import React from "react";
import styled from "styled-components";

const MemoHeaderWrapper = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid gray;
`;

function MemoHeader(props) {
  return (
    <MemoHeaderWrapper>
      메모
    </MemoHeaderWrapper>
  );
}

export default React.memo(MemoHeader);