import styled from "styled-components";

const RecruitDateContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 80%;
  height: 100vh;
  margin-top: 50px;
`;
const RecruitDateTitle = styled.div`
  font-size: 2rem;
  font-weight: bolder;
  width: 11rem;
  border-bottom: 3px solid black;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  margin-bottom: 9rem;
`;
const RecruitDateDiv = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: flex;
  width: 100%;
  height: 17rem;

  margin-top: 5rem;
  border-radius: 10rem;
`;
const HsRecruitDatePage = () => {
  return (
    <>
      <RecruitDateContainer>
        <RecruitDateTitle>모집일정</RecruitDateTitle>
        <img
          style={{ width: "80%" }}
          src="./public/images/모집 일정.png"
          alt="사진없음"
        />
      </RecruitDateContainer>
    </>
  );
};

export default HsRecruitDatePage;
