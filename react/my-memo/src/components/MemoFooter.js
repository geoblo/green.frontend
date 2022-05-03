import React from "react";
import styled from "styled-components";

import { BsPencilSquare as WriteIcon } from "react-icons/bs";
import { Link } from "react-router-dom";

const MemoFooterWrapper = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const StyledWriteIcon = styled(WriteIcon)`
  font-size: 1.25rem;
  position: absolute;
  top: 12px;
  right: 24px;
  color: ${props => props.theme.button};
  cursor: pointer;
`;

function MemoFooter({ count }) {
  return (
    <MemoFooterWrapper>
      <span>{count} 개의 메모</span>
      <Link to="/write">
        <StyledWriteIcon />
      </Link>
    </MemoFooterWrapper>
  );
}

export default React.memo(MemoFooter);