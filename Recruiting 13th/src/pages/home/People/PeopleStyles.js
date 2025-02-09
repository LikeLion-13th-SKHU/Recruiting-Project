import styled from "styled-components";

export const PeopleContainer = styled.div `
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 40px;
`;

export const TitleContainer = styled.div `
  height: 20vh;
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
  margin-top: 30px;
`;

export const ContentContainer = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const PartWrapper = styled.div `
  height: 275px;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

export const ContentTitle = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: rgba(32, 190, 55, 0.2);
  height: 60px;
  width: 220px;
  color: #20be37;
  font-weight: bolder;
  font-size: 30px;
`;

export const FrontNameWrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  width: 60%;
`;

export const TopWrapper = styled.div `
  display: flex;
  justify-content: space-between;
`;

export const BottomWrapper = styled.div `
  display: flex;
  justify-content: space-between;
`;

export const BackNameWrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  width: 60%;
`;

export const Name = styled.div `
  font-weight: bolder;
  font-size: 30px;
  position: relative;
`;

export const ColumnBar = styled.div `
  border-left: 1.5px solid black;
  height: 300px;
`;

export const LeaderWrapper = styled.div `
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LeaderBadge = styled.img `
  position: absolute;
  top: -45px;
  left: 50%;
  transform: translateX(-50%); /* 중앙 정렬 */
  width: 50px;
`;