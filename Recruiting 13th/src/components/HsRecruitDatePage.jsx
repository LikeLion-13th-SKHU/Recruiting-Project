import styled from "styled-components";

const RecruitDateContainer = styled.div`
  margin-top: 25rem;
  margin-left: 25rem;
`;
const RecruitDateTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  width: 11rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  margin-left: 22rem;
`;
const RecruitDateDiv = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: flex;
  width: 130%;
  height: 17rem;
  margin-left: -15%;
  margin-top: 5rem;
  border-radius: 10rem;
`;
const HsRecruitDatePage = () => {
  return (
    <>
      <RecruitDateContainer>
        <RecruitDateTitle>모집일정</RecruitDateTitle>
        <RecruitDateDiv></RecruitDateDiv>
      </RecruitDateContainer>
    </>
  );
};

export default HsRecruitDatePage;
