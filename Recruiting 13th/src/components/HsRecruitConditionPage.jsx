import styled from "styled-components";

const RecruitConditionContainer = styled.div`
  margin-top: 25rem;
  width: 100%;
  margin-left: 25rem;
`;
const RecruitConditionTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  width: 11rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  margin-left: 22rem;
`;
const RecruitConditionDiv1 = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 17rem;
  margin-left: -7.5rem;
  margin-top: 5rem;
  border-radius: 1rem;
`;
const RecruitConditionDiv2 = styled.div`
  background-color: rgba(255, 119, 16, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 17rem;
  margin-left: 5rem;
  margin-right: 5rem;
  margin-top: 5rem;
  border-radius: 1rem;
`;
const RecruitConditionDiv3 = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: inline-flex;
  width: 20rem;
  height: 17rem;

  margin-top: 5rem;
  border-radius: 1rem;
`;
const HsRecruitConditionPage = () => {
  return (
    <>
      <RecruitConditionContainer>
        <RecruitConditionTitle>모집대상</RecruitConditionTitle>
        <RecruitConditionDiv1></RecruitConditionDiv1>
        <RecruitConditionDiv2></RecruitConditionDiv2>
        <RecruitConditionDiv3></RecruitConditionDiv3>
      </RecruitConditionContainer>
    </>
  );
};

export default HsRecruitConditionPage;
