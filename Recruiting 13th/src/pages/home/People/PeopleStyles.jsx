import styled from "styled-components";
import media from "../../../styles/Media";

export const PeopleContainer = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;

  ${media.tablet} {
    gap: 0px;
  }

  ${media.mobile} {
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
  font-weight: bolder;

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

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  ${media.mobile} {
    gap: 20px;
  }
`;

export const PartWrapper = styled.div`
  height: 275px;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;

  ${media.tablet} {
    gap: 60px;
    height: 230px;
  }

  ${media.mobile} {
    gap: 50px;
    height: 160px;
  }
`;

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: rgba(32, 190, 55, 0.1);
  height: 60px;
  width: 220px;
  color: #20be37;
  font-weight: bolder;
  font-size: 30px;

  ${media.tablet} {
    height: 50px;
    width: 150px;
    font-size: 25px;
  }

  ${media.mobile} {
    border-radius: 15px;
    height: 35px;
    width: 110px;
    font-size: 17px;
  }
`;

export const FrontNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  width: 60%;

  ${media.tablet} {
    gap: 15px;
  }

  ${media.mobile} {
    gap: 10px;
    width: 90%;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BackNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  width: 60%;

  ${media.tablet} {
    gap: 15px;
  }

  ${media.mobile} {
    gap: 10px;
    width: 90%;
  }
`;

export const Name = styled.div`
  font-weight: bolder;
  font-size: 30px;
  position: relative;

  ${media.tablet} {
    font-size: 20px;
  }

  ${media.mobile} {
    font-size: 15px;
  }
`;

export const ColumnBar = styled.div`
  border-left: 1.5px solid black;
  height: 300px;

  ${media.tablet} {
    height: 230px;
  }

  ${media.mobile} {
    height: 160px;
    border-left: 1px solid black;
  }
`;

export const LeaderWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeaderBadge = styled.img`
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%); /* 중앙 정렬 */
  width: 50px;

  ${media.tablet} {
    width: 40px;
    top: -35px;
  }

  ${media.mobile} {
    width: 30px;
    top: -30px;
  }
`;
