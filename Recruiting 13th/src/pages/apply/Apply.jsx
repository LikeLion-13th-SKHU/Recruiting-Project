import HsMainPage from "../../components/HsMainPage";
import HsRecruitDatePage from "../../components/HsRecruitDatePage";
import HsRecruitConditionPage from "../../components/HsRecruitConditionPage";
import HsReviewPage from "../../components/HsReviewPage";
import styled from "styled-components";
import HsQnAPage from "../../components/HsQnAPage";
const Apply = () => {
  const MainContainer = styled.div`
    width: 100%;
    justify-content: center;
    align-items: center;
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
