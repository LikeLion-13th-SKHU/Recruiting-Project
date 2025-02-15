import styled from "styled-components";

const ReviewContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 80%;
  height: 100vh;
  margin-top: 50px;
`;
const ReviewTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  width: 11rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  margin-bottom: 5rem;
`;
const ReviewDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 3rem;
  margin-top: 3rem;
`;
const ReviewDiv1 = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 16rem;

  border-radius: 1rem;
`;
const ReviewDiv2 = styled.div`
  background-color: rgba(255, 119, 16, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 16rem;

  border-radius: 1rem;
`;
const ReviewDiv3 = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 16rem;

  border-radius: 1rem;
`;
const ReviewDiv4 = styled.div`
  background-color: rgba(255, 119, 16, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 16rem;

  border-radius: 1rem;
`;
const ReviewDiv5 = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 16rem;

  border-radius: 1rem;
`;
const HsReviewPage = () => {
  return (
    <>
      <ReviewContainer>
        <ReviewTitle>활동후기</ReviewTitle>
        <ReviewDivContainer>
          <ReviewDiv1></ReviewDiv1>
          <ReviewDiv2></ReviewDiv2>
          <ReviewDiv3></ReviewDiv3>
        </ReviewDivContainer>
        <ReviewDivContainer>
          <ReviewDiv4></ReviewDiv4>
          <ReviewDiv5></ReviewDiv5>
        </ReviewDivContainer>
      </ReviewContainer>
    </>
  );
};

export default HsReviewPage;
