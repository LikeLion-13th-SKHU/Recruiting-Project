import styled from "styled-components";
import media from "../styles/Media";

const RecruitConditionContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90%;
  max-width: 1300px;
  height: 20%;
  margin-bottom: 22rem;
  ${media.mobile} {
    margin-bottom: 5rem;
  }
`;

const RecruitConditionTitle = styled.div`
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: bolder;
  width: 12rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  margin-bottom: 10rem;
  ${media.mobile} {
    margin-bottom: 100px;
    margin-top: 25rem;
    font-size: clamp(1.4rem, 2.5vw, 2rem);
  }
`;

const RecruitConditionDivContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

const RecruitConditionDiv = styled.div`
  background-color: ${({ bgColor }) => bgColor || "rgba(32, 190, 55, 0.3)"};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 30vw; /* 화면 크기에 맞춰 조정 */
  height: 17vh;
  max-width: 20rem;
  min-width: 14rem;
  max-height: 12rem;
  min-height: 8rem;
  padding: 2vw;
  font-size: clamp(1rem, 2vw, 1.6rem); /* 화면에 따라 반응 */
  font-weight: bold;
  border-radius: 1rem;
  line-height: 150%;

  @media (max-width: 768px) {
    width: 30vw; /* 모바일에서는 너비 확대 */
    height: 18vh;
    font-size: 15px;
  }
`;

const HsRecruitConditionPage = () => {
  return (
    <RecruitConditionContainer>
      <RecruitConditionTitle>모집대상</RecruitConditionTitle>
      <RecruitConditionDivContainer>
        <RecruitConditionDiv bgColor="rgba(32, 190, 55, 0.3)">
          성공회대 재학생 누구나!
        </RecruitConditionDiv>
        <RecruitConditionDiv bgColor="rgba(255, 119, 16, 0.3)">
          매주 2회, 아이디어톤, 해커톤 활동을 할 수 있는 사람
        </RecruitConditionDiv>
        <RecruitConditionDiv bgColor="rgba(32, 190, 55, 0.3)">
          내 손으로 자신의 아이디어를 실현시키고 싶은 사람
        </RecruitConditionDiv>
      </RecruitConditionDivContainer>
    </RecruitConditionContainer>
  );
};

export default HsRecruitConditionPage;
