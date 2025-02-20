import styled from "styled-components";
import media from "../../styles/Media";

export const CurriculumWrapper = styled.div `
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin-top: 66px;
  /* margin-bottom: 80px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  ${media.tablet} {
  }

  ${media.mobile} {
    margin-bottom: 0;
    gap: 5px;
  }
`;

export const TitleContainer = styled.div `
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.mobile} {
    height: 8vh;
  }
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
  margin-top: 30px;

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

export const BtnContainer = styled.div `
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  ${media.mobile} {
    margin-top: 10px;
  }
`;

export const Btn = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 18px;
  font-size: 18px;
  border-radius: 10px;
  width: 115px;
  height: 38px;
  cursor: pointer;

  background-color: ${({ isActive }) =>
    isActive ? "#20be37" : "rgba(255, 119, 16, 0.1)"};
  color: ${({ isActive }) => (isActive ? "white" : "black")};

  ${media.mobile} {
    margin: 6px;
    font-size: 10px;
    border-radius: 10px;
    width: 60px;
    height: 23px;
  }
`;

export const Image = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-top: 20px; */

  img {
    max-width: 65%;
  }

  ${media.mobile} {
    img {
      max-width: 90%;
    }
  }
`;