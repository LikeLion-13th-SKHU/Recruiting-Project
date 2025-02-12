import styled from "styled-components";
import media from "../../../styles/Media";

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

  ${media.tablet} {
    margin-bottom: 100px;
    height: 100vh;
    gap: 30px;
  }

  ${media.mobile} {
    margin-bottom: 100px;
    height: 100vh;
    gap: 0px;
  }
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
  font-family: "Pretendard-Bold";

  ${media.tablet} {
    font-size: 40px;
  }

  ${media.mobile} {
    font-size: 25px;
  }
`;

export const RowBar = styled.div`
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

export const TimelineImgContainer = styled.img`
  width: 50%;

  ${media.tablet} {
    width: 85%;
  }

  ${media.mobile} {
    width: 100%;
  }
`;
