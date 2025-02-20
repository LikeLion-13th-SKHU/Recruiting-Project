import styled from "styled-components";
import media from "../../styles/Media";

export const HeaderSt = styled.header `
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
  padding: 22px 30px;
  background-color: white;

  ${media.mobile} {
    padding: 5px 10px;
  }
`;

export const Logo = styled.img `
  height: 20px;
  cursor: pointer;

  ${media.mobile} {
    height: 15px;
  }
`;

export const MenuBtn = styled.button `
  display: none;
  background: none;
  border: none;
  /* font-size: 24px; */
  cursor: pointer;

  ${media.mobile} {
    /* margin-top: 5px; */
    display: block;
  }
`;

export const Item = styled.nav `
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ${media.mobile} {
    position: absolute;
    top: 50px;
    right: 0;
    margin-right: 7px;
    background-color: white;
    width: 220px;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    padding: 15px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;

export const Link = styled.div `
  font-size: 1rem;
  cursor: pointer;
  color: black;
  font-weight: 500;
  transition: 0.2s ease-in-out;

  ${media.mobile} {
    font-size: 10px;
  }
`;