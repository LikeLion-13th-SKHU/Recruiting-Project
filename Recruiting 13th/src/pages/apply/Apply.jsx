import HsMainPage from "../../components/HsMainPage";
import HsRecruitDatePage from "../../components/HsRecruitDatePage";
import HsRecruitConditionPage from "../../components/HsRecruitConditionPage";
import HsReviewPage from "../../components/HsReviewPage";
import styled from "styled-components";
import HsQnAPage from "../../components/HsQnAPage";
import media from "../../styles/Media";
const Apply = () => {
  const MainContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    ${media.tablet} {
      margin-bottom: 100px;
      height: 100vh;
      gap: 30px;
    }

    ${media.mobile} {
      margin-bottom: 100px;
      height: 100vh;
      gap: 0px;
    }
  `;
  return (
    <>
      <MainContainer>
        <HsMainPage />
        <HsRecruitDatePage />
        <HsRecruitConditionPage />
        <HsReviewPage />
        <HsQnAPage />
      </MainContainer>
    </>
  );
};

export default Apply;
