import styled from "styled-components";
import useCountdown from "../Hooks/useCountdown";
import { useMemo, useCallback } from "react";
import { object } from "prop-types";

const MainPageContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin-top: -50px;
`;
const MainPageTitle = styled.div`
  font-size: 150px;
  font-weight: bolder;
  display: inline;
  line-height: 160px;
  margin-left: 300px;
`;
const MainPageSubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  position: relative;
  top: 50px;
`;
const MainPageUnivName = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  display: inline;
  position: relative;
  top: 10px;
`;

const ApplyDiv = styled.div`
  display: inline-flex;
  border-radius: 10px;
  width: 280px;
  height: 6rem;
  background-color: #20be37;
  justify-content: center;
  align-items: center;
  margin-top: -400px;
  margin-left: 330px;
`;
const ApplyDivLetter = styled.span`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
const Timer = styled.div`
  background-color: #ff7710;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 8rem;
  height: 3vh;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;

  font-variant-numeric: tabular-nums; /* 숫자 간격 고정 */
  position: relative;
  left: 660px;
  top: -63px;
`;

const HsMainPage = () => {
  const targetDate = useMemo(() => new Date("2025-02-28T23:59:59"), []);
  const timeLeft = useCountdown(targetDate);

  return (
    <>
      <MainPageContainer>
        <MainPageTitle>
          <MainPageSubTitle>&nbsp; Growl To Growth</MainPageSubTitle>
          멋쟁이
          <br /> 사자처럼<MainPageUnivName>SKHU</MainPageUnivName>
        </MainPageTitle>

        <img
          style={{
            width: "400px",
            height: "400px",
            marginLeft: "950px",
            objectFit: "contain",
            position: "relative",
            top: "-440px",
          }}
          src="./public/images/3D사자 1.png"
          alt="사진없음"
        />

        <ApplyDiv>
          <ApplyDivLetter>13기 지원하기!</ApplyDivLetter>
        </ApplyDiv>
        <Timer>
          {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </Timer>
      </MainPageContainer>
    </>
  );
};

export default HsMainPage;
