import styled from "styled-components";

const QnAContainer = styled.div`
  margin-top: 25rem;
  width: 100%;
  margin-left: 25rem;
`;
const QnATitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  width: 11rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  margin-left: 22rem;
`;
const HsQnAPage = () => {
  return (
    <>
      <QnAContainer>
        <QnATitle>Q&A</QnATitle>
      </QnAContainer>
    </>
  );
};

export default HsQnAPage;
