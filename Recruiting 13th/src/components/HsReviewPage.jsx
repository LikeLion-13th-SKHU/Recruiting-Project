import styled from "styled-components";
import media from "../styles/Media";
const ReviewContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 90%;

  height: 20%;
  ${media.mobile} {
    margin-bottom: 5rem;
  }
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
  ${media.mobile} {
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    margin-top: 20rem;
  }
`;

const ReviewDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  max-width: 65rem;

  width: 100%;
`;

const ReviewDiv = styled.div`
  background-color: ${({ bgColor }) => bgColor || "rgba(32, 190, 55, 0.3)"};
  display: flex;
  width: calc(33.33% - 2rem); /* 한 줄에 3개 */
  max-width: 20rem;

  height: 17vw; /* 화면 크기에 따라 유동적으로 변함 */
  max-height: 17rem;
  min-height: 10rem;
  border-radius: 1rem;
  ${media.mobile} {
    flex-direction: column;
    width: 60vw;
  }
`;

const HsReviewPage = () => {
  return (
    <ReviewContainer>
      <ReviewTitle>활동후기</ReviewTitle>
      <ReviewDivContainer>
        <ReviewDiv bgColor="rgba(32, 190, 55, 0.3)" />
        <ReviewDiv bgColor="rgba(255, 119, 16, 0.3)" />
        <ReviewDiv bgColor="rgba(32, 190, 55, 0.3)" />
      </ReviewDivContainer>
      <ReviewDivContainer>
        <ReviewDiv bgColor="rgba(255, 119, 16, 0.3)" />
        <ReviewDiv bgColor="rgba(32, 190, 55, 0.3)" />
      </ReviewDivContainer>
    </ReviewContainer>
  );
};

export default HsReviewPage;
