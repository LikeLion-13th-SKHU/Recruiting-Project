import styled from "styled-components";
import useCountdown from "../Hooks/useCountdown";
import { useMemo } from "react";

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  padding: 2rem;
  margin-top: 10rem;
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem; /* 제목과 이미지 간격 조정 */
  width: 100%;
  max-width: 800px; /* 최대 너비 설정 */

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const MainPageTitle = styled.div`
  font-size: 7rem;
  font-weight: bolder;
  line-height: 7rem;
  text-align: start;
  flex: 1; /* 남은 공간을 차지하도록 설정 */

  @media (max-width: 1024px) {
    font-size: 4rem;
    line-height: 5rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 4rem;
  }
`;

const MainPageSubTitle = styled.div`
  font-size: 1rem;
  height: 65px;
  margin-left: 5px;
  font-weight: bold;
`;

const MainPageUnivName = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ApplyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem; /* 버튼과 타이머 사이 간격 조정 */
  margin-top: 2rem;
  margin-left: -18rem;
  margin-top: 3px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    margin-left: 0; /* 모바일에서는 원래 위치로 */
    margin-top: 0;
  }
`;

const ApplyDiv = styled.div`
  display: flex;
  border-radius: 1rem;
  width: 18rem;
  height: 6rem;
  background-color: #20be37;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 80%;
    height: 5rem;
  }
`;

const ApplyDivLetter = styled.span`
  color: white;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Timer = styled.div`
  background-color: #ff7710;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 10rem;
  height: 3rem;
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  font-variant-numeric: tabular-nums;

  @media (max-width: 768px) {
    width: 8rem;
    font-size: 1rem;
  }
`;

const MainImage = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  flex-shrink: 0; /* 이미지가 줄어들지 않도록 설정 */

  @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const HsMainPage = () => {
  const targetDate = useMemo(() => new Date("2025-02-28T23:59:59"), []);
  const timeLeft = useCountdown(targetDate);

  return (
    <>
      <MainPageContainer>
        {/* 제목과 이미지를 가로로 정렬하는 컨테이너 */}
        <MainContent>
          <MainPageTitle>
            <MainPageSubTitle>Growl To Growth</MainPageSubTitle>
            멋쟁이
            <br /> 사자처럼
            <MainPageUnivName>SKHU</MainPageUnivName>
          </MainPageTitle>
          <MainImage src="./public/images/3D사자 1.png" alt="사진없음" />
        </MainContent>

        {/* ApplyDiv와 Timer를 가로로 배치하는 컨테이너 */}
        <ApplyContainer>
          <ApplyDiv>
            <ApplyDivLetter>13기 지원하기!</ApplyDivLetter>
          </ApplyDiv>
          <Timer>
            {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:
            {timeLeft.seconds}
          </Timer>
        </ApplyContainer>
      </MainPageContainer>
    </>
  );
};

export default HsMainPage;
