import styled from "styled-components";
import media from "../../../styles/Media";

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

  ${media.tablet} {
    margin-bottom: 100px;
    gap: 20px;
  }

  ${media.mobile} {
    margin-bottom: 0px;
    gap: 10px;
  }
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
  font-family: "Pretendard-Bold";

  ${media.tablet} {
    font-size: 40px;
  }

  ${media.mobile} {
    font-size: 25px;
  }
`;

export const RowBar = styled.div `
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

export const AboutTxtContainer = styled.div `
  font-size: 25px;
  line-height: 150%;

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.mobile} {
    font-size: 15px;
    width: 280px;
  }
`;

export const AboutBtnContainer = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 650px;
  margin-top: 50px;

  ${media.tablet} {
    width: 450px;
  }

  ${media.mobile} {
    width: 270px;
    gap: 15px;
  }
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

  ${media.tablet} {
    font-size: 16px;
    width: 100px;
    height: 35px;
    border-radius: 10px;
  }

  ${media.mobile} {
    font-size: 10px;
    width: 65px;
    height: 23px;
    border-radius: 8px;
  }
`;

export const AboutContentContainer = styled.div `
  width: 930px;
  background-color: rgba(32, 190, 55, 0.05);
  border-radius: 20px;
  height: 300px;
  display: flex;
  gap: 5%;
  transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
  margin: 10px;

  ${media.tablet} {
    width: 650px;
    height: 250px;
  }

  ${media.mobile} {
    width: 330px;
    height: 145px;
  }
`;

export const AboutContentImg = styled.img `
  width: 45%;
  height: 300px;
  object-position: center left;
  border-radius: 20px 0px 0px 20px;
  transition: opacity 0.1s ease-in-out;

  ${media.tablet} {
    height: 250px;
  }

  ${media.mobile} {
    height: 145px;
  }
`;
export const AboutContentTxtWrapper = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
  width: 40%;
  gap: 20px;

  ${media.mobile} {
    gap: 10px;
  }
`;
export const AboutContentTxtTitle = styled.div `
  font-size: 25px;
  font-weight: 1000;
  font-family: "Pretendard-Bold";

  ${media.tablet} {
    font-size: 18px;
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;
export const AboutContentTxtsection = styled.div `
  font-size: 20px;
  text-align: left;
  line-height: 200%;

  ${media.tablet} {
    font-size: 16px;
  }

  ${media.mobile} {
    font-size: 10px;
  }
`;