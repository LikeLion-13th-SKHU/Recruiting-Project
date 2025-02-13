import styled from "styled-components";

const RecruitConditionContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  height: 100vh;
  margin-top: -50px;
`;
const RecruitConditionDivContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const RecruitConditionTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  width: 11rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  margin-bottom: 3rem;
`;
const RecruitConditionDiv1 = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: inline-flex;
  width: 300px;
  height: 200px;
  align-items: center;
  justify-content: center;
  padding: 30px;
  font-size: 1.6rem;
  font-weight: bold;
  margin-top: 5rem;
  border-radius: 1rem;
  line-height: 150%;
  flex-wrap: wrap;
`;
const RecruitConditionDiv2 = styled.div`
  background-color: rgba(255, 119, 16, 0.3);
  display: inline-flex;
  width: 300px;
  height: 200px;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: bold;
  padding: 30px;
  margin-top: 5rem;
  border-radius: 1rem;
  line-height: 150%;
`;
const RecruitConditionDiv3 = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: inline-flex;
  width: 300px;
  height: 200px;
  padding: 30px;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  font-weight: bold;
  border-radius: 1rem;
  line-height: 150%;
`;
const HsRecruitConditionPage = () => {
  return (
    <>
      <RecruitConditionContainer>
        <RecruitConditionTitle>모집대상</RecruitConditionTitle>
        <RecruitConditionDivContainer>
          <RecruitConditionDiv1>성공회대 재학생 누구나!</RecruitConditionDiv1>
          <RecruitConditionDiv2>
            매주 2회, 아이디어톤, 해커톤 활동을 할 수 있는 사람
          </RecruitConditionDiv2>
          <RecruitConditionDiv3>
            내 손으로 자신의 아이디어를 실현시키고 싶은 사람
          </RecruitConditionDiv3>
        </RecruitConditionDivContainer>
      </RecruitConditionContainer>
    </>
  );
};

export default HsRecruitConditionPage;
