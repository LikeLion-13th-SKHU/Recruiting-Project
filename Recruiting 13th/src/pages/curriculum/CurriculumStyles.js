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
  gap: 30px;

  ${media.tablet} {
  }

  ${media.mobile} {
    margin-bottom: 0;
  }
`;

export const Title = styled.div`
  font-size: 35px;

  ${media.tablet} {
    font-size: 30px;
  }
  ${media.mobile} {
    font-size: 20px;
  }
`;

export const RowBar = styled.div`
  width: 250px;
  border-top: 1px solid black;

  ${media.tablet} {
    font-size: 30px;
  }
  ${media.mobile} {
    width: 150px;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 10px;
  font-size: 17px;
  border-radius: 10px;
  width: 100px;
  height: 35px;
  cursor: pointer;

  background-color: ${({ isActive }) =>
    isActive ? "#20be37" : "rgba(255, 119, 16, 0.1)"};
  color: ${({ isActive }) => (isActive ? "white" : "black")};

  ${media.mobile} {
    margin: 6px;
    font-size: 13px;
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
    max-width: 80%;
  }

  ${media.mobile} {
    img {
      max-width: 90%;
    }
  }
`;
