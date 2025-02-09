import styled from "styled-components";
import useCountdown from "../Hooks/useCountdown";
import { useMemo, useCallback } from "react";

const MainPageContainer = styled.div`
  justify-content: center;
  align-items: center;
  margin-left: 25rem;
`;
const MainPageTitle = styled.div`
  font-size: 7rem;
  font-weight: bolder;
  display: inline;
`;
const MainPageSubTitle = styled.div`
  font-size: 1.4rem;
  font-weight: bolder;
  position: relative;
  left: -0.4rem;
`;
const MainPageUnivName = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
  display: inline;
  position: relative;
  top: 0.5rem;
`;
const MainPic = styled.div`
  background-color: #161616;
  width: 20rem;
  height: 18rem;
  position: relative;
  top: -18rem;
  left: 35rem;
`;

const ApplyDiv = styled.div`
  display: flex;
  border-radius: 10px;
  width: 14rem;
  height: 5rem;
  background-color: #20be37;
  justify-content: center;
  align-items: center;
  margin-top: -25%;
`;
const ApplyDivLetter = styled.span`
  color: white;
  font-size: 1.5rem;
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
  margin: 1px;
  font-size: 1rem;
  font-weight: bold;
  position: relative;
  left: 20rem;
  top: -3rem;
`;
const HsMainPage = () => {
  const targetDate = useMemo(() => new Date("2025-02-28T23:59:59"), []);
  const timeLeft = useCountdown(targetDate);

  return (
    <>
      <MainPageContainer>
        <MainPageSubTitle>&nbsp; Growl To Growth</MainPageSubTitle>
        <MainPageTitle>
          멋쟁이
          <br /> 사자처럼
        </MainPageTitle>
        <MainPageUnivName>SKHU</MainPageUnivName>
        <MainPic />
        <ApplyDiv>
          <ApplyDivLetter>13기 지원하기</ApplyDivLetter>
        </ApplyDiv>
        <Timer>
          {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
        </Timer>
      </MainPageContainer>
    </>
  );
};

export default HsMainPage;
