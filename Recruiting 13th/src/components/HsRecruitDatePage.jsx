import styled from "styled-components";
import media from "../styles/Media";

const RecruitDateContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 80%;
  height: 100vh;
  min-width: 400px;
  margin: 300px 0px;
  ${media.mobile} {
    margin-bottom: 5rem;
  }
`;
const RecruitDateTitle = styled.div`
  font-size: 50px;
  font-family: "Pretendard-Bold";
  /* width: 11rem; */

  display: flex;
  justify-content: center;
  margin: 0px auto;
  /* margin-bottom: 9vw; */

  ${media.tablet} {
    font-size: 40px;
  }

  ${media.mobile} {
    font-size: 25px;
    /* margin-bottom: 100px; */
  }
`;
const RecruitDateDiv = styled.div`
  background-color: rgba(32, 190, 55, 0.3);
  display: flex;
  width: 100%;
  height: 17rem;
  margin-top: 5rem;
  border-radius: 10rem;
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

const ImgContainer = styled.div`
  margin-top: 50px;
`;

const HsRecruitDatePage = () => {
  return (
    <>
      <RecruitDateContainer>
        <TitleContainer>
          <RecruitDateTitle>모집 일정</RecruitDateTitle>
          <RowBar />
        </TitleContainer>
        <ImgContainer>
          <img
            style={{ width: "90%" }}
            src='/images/re.png'
            alt='사진없음'
          />
        </ImgContainer>
      </RecruitDateContainer>
    </>
  );
};

export default HsRecruitDatePage;
