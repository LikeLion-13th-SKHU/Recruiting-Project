import styled from "styled-components";
import media from "../../styles/Media";

export const CurriculumWrapper = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  margin-top: 66px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  ${media.tablet} {
  }

  ${media.mobile} {
    margin-bottom: 0;
    gap: 5px;
  }
`;

export const TitleContainer = styled.div`
  height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.mobile} {
    height: 8vh;
  }
`;

export const Title = styled.div`
  font-size: 40px;
  font-family: "Pretendard-Medium";
  padding-bottom: 20px;

  ${media.tablet} {
    font-size: 30px;
  }
  ${media.mobile} {
    font-size: 20px;
    padding-bottom: 8px;
  }
`;

export const RowBar = styled.div`
  width: 250px;
  border-top: 1px solid black;

  ${media.tablet} {
    font-size: 30px;
  }
  ${media.mobile} {
    width: 120px;
    border-top: 0.5px solid black;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 18px;
  font-size: 20px;
  border-radius: 10px;
  width: 120px;
  height: 40px;
  cursor: pointer;

  background-color: ${({ isActive }) =>
    isActive ? "#20be37" : "rgba(255, 119, 16, 0.1)"};
  color: ${({ isActive }) => (isActive ? "white" : "black")};

  ${media.mobile} {
    margin: 6px;
    font-size: 12px;
    border-radius: 10px;
    width: 75px;
    height: 25px;
  }
`;

export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 70%;
  }

  ${media.mobile} {
    img {
      max-width: 90%;
    }
  }
`;
