import styled from "styled-components";

export const AboutContainer = styled.div `
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
  margin-bottom: 300px;
`;

export const TitleContainer = styled.div `
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div `
  font-size: 50px;
  font-weight: bolder;
`;

export const RowBar = styled.div `
  width: 280px;
  border-top: 1.5px solid black;
  margin-top: 20px;
`;

export const AboutTxtContainer = styled.div `
  font-size: 25px;
  line-height: 150%;
`;

export const AboutBtnContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 35%;
  margin-top: 50px;
`;

export const AboutBtn = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border-radius: 15px;
  width: 125px;
  height: 40px;
  cursor: pointer;
  background-color: ${({ isActive }) =>
    isActive ? "#20be37" : "rgba(255, 119, 16, 0.1)"};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  transition: background-color 0.3s, color 0.3s;
`;

export const AboutContentContainer = styled.div `
  width: 55%;
  background-color: rgba(32, 190, 55, 0.05);
  border-radius: 20px;
  height: 300px;
  display: flex;
  gap: 5%;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

export const AboutContentImg = styled.img `
  width: 45%;
  height: 300px;
  object-position: center left;
  border-radius: 20px 0px 0px 20px;
  transition: opacity 0.1s ease-in-out;
`;
export const AboutContentTxtWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
  width: 40%;
  gap: 20px;
`;
export const AboutContentTxtTitle = styled.div `
  font-size: 25px;
  font-weight: 1000;
`;
export const AboutContentTxtsection = styled.div `
  font-size: 20px;
  text-align: left;
  line-height: 200%;
`;