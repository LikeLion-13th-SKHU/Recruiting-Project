import styled from "styled-components";

const ReviewContainer = styled.div`
  margin-top: 25rem;
  width: 100%;
  margin-left: 25rem;
`;
const ReviewTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  width: 11rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  margin-left: 22rem;
`;
const ReviewDiv1 = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 17rem;
  margin-left: -7.5rem;
  margin-top: 5rem;
  border-radius: 1rem;
`;
const ReviewDiv2 = styled.div`
  background-color: rgba(255, 119, 16, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 17rem;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 5rem;
  border-radius: 1rem;
`;
const ReviewDiv3 = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 17rem;

  margin-top: 5rem;
  border-radius: 1rem;
`;
const ReviewDiv4 = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 17rem;
  margin: 3rem;
  margin-left: 4rem;
  margin-top: 5rem;
  border-radius: 1rem;
`;
const ReviewDiv5 = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 17rem;
  margin: 3rem;
  margin-top: 5rem;
  border-radius: 1rem;
`;
const HsReviewPage = () => {
  return (
    <>
      <ReviewContainer>
        <ReviewTitle>활동후기</ReviewTitle>
        <ReviewDiv1></ReviewDiv1>
        <ReviewDiv2></ReviewDiv2>
        <ReviewDiv3></ReviewDiv3>
        <ReviewDiv4></ReviewDiv4>
        <ReviewDiv5></ReviewDiv5>
      </ReviewContainer>
    </>
  );
};

export default HsReviewPage;
