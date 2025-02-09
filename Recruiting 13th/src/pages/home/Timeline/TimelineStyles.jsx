import styled from "styled-components";

export const TimelineContainer = styled.div`
  height: 130vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 60px;
  margin-bottom: 300px;
`;

export const TitleContainer = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 50px;
  font-weight: bolder;
`;

export const RowBar = styled.div`
  width: 280px;
  border-top: 1.5px solid black;
  margin-top: 30px;
`;

export const TimelineImgContainer = styled.img`
  width: 50%;
`;
