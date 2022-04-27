import styled from 'styled-components';

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

function MemoTemplate({ children }) {
  return (
    <MemoTemplateWrapper>
      {children}
    </MemoTemplateWrapper>
  );
}

export default MemoTemplate;