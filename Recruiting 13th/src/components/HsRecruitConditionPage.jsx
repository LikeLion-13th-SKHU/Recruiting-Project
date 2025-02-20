import styled from "styled-components";
import media from "../styles/Media";

const RecruitConditionContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90%;
  max-width: 1300px;
  margin-bottom: 300px;
  ${media.mobile} {
    margin-bottom: 5rem;
  }
`;

const RecruitConditionTitle = styled.div`
  font-size: 50px;
  font-family: "Pretendard-Bold";
  width: 12rem;

  display: flex;
  justify-content: center;
  margin: 0px auto;
  /* margin-bottom: 10rem; */

  ${media.mobile} {
    /* margin-bottom: 100px;
    margin-top: 25rem; */
    font-size: 25px;
  }

  ${media.tablet} {
    font-size: 40px;
  }
`;

const RecruitConditionDivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 50px;
`;

const RecruitConditionDiv = styled.div`
  background-color: ${({ bgColor }) => bgColor || "rgba(32, 190, 55, 0.2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  width: 260px;
  height: 17vh;
  /* max-width: 20rem;
  min-width: 14rem;
  max-height: 12rem;
  min-height: 8rem; */
  padding: 2vw;
  font-size: 20px;
  font-family: "Pretendard-Bold";
  border-radius: 1rem;
  line-height: 150%;

  @media (max-width: 768px) {
    width: 30vw; /* 모바일에서는 너비 확대 */
    height: 18vh;
    font-size: 15px;
  }
`;

const HighlightedText = styled.span`
  color: #20be37;
`;

const HighlightedTextO = styled.span`
  color: #ff7710;
`;

const RowBar = styled.div`
  width: 280px;
  border-top: 1.5px solid black;
  margin-top: 20px;

  ${media.tablet} {
    width: 200px;
    margin-top: 20px;
  }

  ${media.mobile} {
    width: 130px;
    margin-top: 15px;
    border-top: 1px solid black;
  }
`;

const TitleContainer = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HsRecruitConditionPage = () => {
  return (
    <RecruitConditionContainer>
      <TitleContainer>
        <RecruitConditionTitle>모집 대상</RecruitConditionTitle>
        <RowBar />
      </TitleContainer>

      <RecruitConditionDivContainer>
        <RecruitConditionDiv bgColor='rgba(32, 190, 55, 0.2)'>
          성공회대
          <br />
          <HighlightedText>재학생, 휴학생</HighlightedText>
        </RecruitConditionDiv>
        <RecruitConditionDiv bgColor='rgba(255, 119, 16, 0.2)'>
          매주 2회의 정기 세션을 포함한 <br />
          아이디어톤, 해커톤 활동에
          <HighlightedTextO>빠짐없이 참석 가능한 사람</HighlightedTextO>
        </RecruitConditionDiv>
        <RecruitConditionDiv bgColor='rgba(32, 190, 55, 0.2)'>
          내 손으로 직접 <br />
          아이디어를 <HighlightedText>실현시키고 싶은 사람</HighlightedText>
        </RecruitConditionDiv>
      </RecruitConditionDivContainer>
    </RecruitConditionContainer>
  );
};

export default HsRecruitConditionPage;
