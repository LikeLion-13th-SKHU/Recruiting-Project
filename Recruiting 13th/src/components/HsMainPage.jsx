import styled from "styled-components";
import useCountdown from "../Hooks/useCountdown";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import media from "../styles/Media";

// MainPageContainer
const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding: 2rem;
  width: 80vw;
  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: -28rem;
  }
`;

// MainContent
const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  max-width: 800px;

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 0rem;
  }
`;

// MainPageTitle
const MainPageTitle = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 100px;
  font-weight: bolder;
  line-height: 6.5vw;
  text-align: start;
  flex: 1;
  line-height: 105px;
  width: 9rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 2.6rem;
  }
`;

// MainPageSubTitle
const MainPageSubTitle = styled.div`
  font-size: 23px;
  height: 63px;
  margin-left: 5px;
  font-weight: bold;
  font-family: "Pretendard-Regular";
  @media (max-width: 768px) {
    font-size: 10px;
    margin-bottom: -2.3rem;
    margin-left: 3px;
  }
`;

// MainPageUnivName
const MainPageUnivName = styled.span`
  font-size: 30px;
  font-weight: bold;
  font-family: "Pretendard-Regular";
  color: #20be37;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

// ApplyContainer
const ApplyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 50px;
  /* margin-left: -14rem; */

  justify-content: center;
  ${media.mobile} {
    font-size: 13px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
  }
`;

// ApplyDiv
const ApplyDiv = styled.div`
  display: flex;
  border-radius: 1rem;
  width: 18vw;
  height: 6vw;
  background-color: #20be37;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #1aa32e;
  }

  @media (max-width: 768px) {
    border-radius: 10px;
    width: 25vw;
    height: 6vw;
    padding: 8px;
  }
`;

// ApplyDivLetter
const ApplyDivLetter = styled.span`
  color: white;
  font-size: 30px;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

// Timer
const Timer = styled.div`
  background-color: #ff7710;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 9rem;
  height: 3rem;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  font-variant-numeric: tabular-nums;

  @media (max-width: 768px) {
    width: 5rem;
    height: 1rem;
    font-size: 8px;
  }
`;

// MainImage
const MainImage = styled.img`
  width: 35%;
  object-fit: contain;
  flex-shrink: 0;
`;

const HsMainPage = () => {
  const releaseDate = useMemo(() => new Date("2025-02-25T00:00:00"), []);
  const deadlineDate = useMemo(() => new Date("2025-03-12T23:59:59"), []);

  // 현재 시간이 2월 25일 이전인지 확인
  const now = new Date();
  const isBeforeRelease = now < releaseDate;

  // 현재 시간이 2월 25일 이전이면 2월 25일까지 남은 시간, 지나면 3월 12일까지 남은 시간
  const targetDate = isBeforeRelease ? releaseDate : deadlineDate;
  const timeLeft = useCountdown(targetDate);

  const handleClick = () => {
    if (now < releaseDate || now > deadlineDate) {
      alert("지원 기간이 아닙니다.");
      return;
    }
    window.open("https://www.google.com", "_blank"); // 구글폼 링크로 변경
  };

  return (
    <MainPageContainer>
      <MainContent>
        <MainPageTitle>
          <MainPageSubTitle>Growl To Growth</MainPageSubTitle>
          멋쟁이
          <br /> 사자처럼
          <MainPageUnivName>SKHU</MainPageUnivName>
        </MainPageTitle>
        <MainImage src="/images/3D사자 1.png" alt="사진없음" />
      </MainContent>

      <ApplyContainer>
        <ApplyDiv
          onClick={handleClick}
          style={{
            backgroundColor:
              now < releaseDate || now > deadlineDate
                ? "rgba(32, 190, 55, 0.5)"
                : "#20be37",
            cursor:
              now < releaseDate || now > deadlineDate
                ? "not-allowed"
                : "pointer",
          }}
        >
          <ApplyDivLetter>13기 지원하기!</ApplyDivLetter>
        </ApplyDiv>
        <Timer>
          {timeLeft.days.toString().replace(/^0+/, "")}d{" "}
          {timeLeft.hours.toString().replace(/^0+/, "")}h{" "}
          {timeLeft.minutes.toString().replace(/^0+/, "")}m{" "}
          {timeLeft.seconds.toString().replace(/^0+/, "")}s
        </Timer>
      </ApplyContainer>
    </MainPageContainer>
  );
};

export default HsMainPage;
