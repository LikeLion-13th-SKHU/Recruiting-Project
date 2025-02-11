import styled from "styled-components";

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
  text-align: center;
  gap: 30px;
`;

export const Title = styled.div`
  font-size: 35px;
  font-weight: bolder;
`;

export const RowBar = styled.div`
  width: 250px;
  border-top: 1px solid black;
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
`;

export const Image = styled.div``;
