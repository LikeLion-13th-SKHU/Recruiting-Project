import styled from "styled-components";
import media from "../../styles/Media";

export const FooterContainer = styled.footer `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 30px;
  background-color: white;

  ${media.mobile} {
    padding: 5px 0 0 5px;
  }
`;

export const Section = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h3 `
  width: 100px;
  background-color: rgba(32, 190, 55, 0.2);
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: bolder;
  color: #20be37;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media.mobile} {
    margin: 0 auto;
    width: 35px;
    font-size: 12px;
  }
`;

export const NameSection = styled.div `
  margin-top: 10px;
  /* padding: 15px; */
  font-weight: 900;

  ${media.mobile} {
    padding: 0;
    font-size: 10px;
  }
`;

export const Name = styled.div `
  margin: 12px 15px;

  ${media.mobile} {
    margin: 5px 15px;
  }
`;

export const ContactItem = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 10px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 5px;

  ${media.mobile} {
    margin-left: 4px;
    margin-bottom: 2px;
    font-size: 10px;
  }
`;

export const Id = styled.div `
  ${media.mobile} {
    display: none;
  }
`;

export const ContactItemTitle = styled.div `
  width: 70px;
  margin-left: -7px;
  font-weight: 900;

  ${media.mobile} {
    display: none;
  }
`;

export const Wrapper = styled.div `
  ${media.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-left: -5px;
  }
`;