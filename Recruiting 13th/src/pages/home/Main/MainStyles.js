import styled from "styled-components";

export const MainContainer = styled.div `
  border: 1px solid black;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const MainImg = styled.img `
  width: 65%;
  opacity: 20%;
  background-image: url("../../../../public/images/멋사 로고.png");
`;

export const MainTextWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const TextG = styled.p `
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;

export const TextM1 = styled.h1 `
  font-size: 80px;
  font-weight: bold;
  margin: 0;
`;

export const TextM2 = styled.h1 `
  font-size: 80px;
  font-weight: bold;
  margin: 0;
`;

export const TextS = styled.p `
  font-size: 24px;
  font-weight: bold;
  color: #20be37;
  align-self: flex-end;
  margin-top: -20px;
`;

export const TextL = styled.p `
  font-size: 18px;
  font-weight: 400;
  color: #000;
  margin-top: 20px;
  line-height: 1.5;
`;