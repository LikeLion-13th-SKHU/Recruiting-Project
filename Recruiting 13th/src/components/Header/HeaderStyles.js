import styled from "styled-components";

export const HeaderSt = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
  padding: 22px 30px;
  background-color: white;

  @media (max-width: 768px) {
    padding: 5px 5px;
  }
`;

export const Logo = styled.img`
  height: 20px;
  cursor: pointer;
`;

export const Item = styled.nav`
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  @media (max-width: 768px) {
    ul {
      gap: 8px;
    }
  }
`;

export const Link = styled.li`
  font-size: 1rem;
  cursor: pointer;
  color: black;
  font-weight: 500;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #20be37;
  }
`;
